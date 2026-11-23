<?php
declare(strict_types=1);

// Logique du formulaire de contact (architecture.md §6.1). Incluse uniquement par /contact.php.
if (!defined('PORTFOLIO_ENTREE')) {
    http_response_code(404);
    exit;
}

final class ContactHandler
{
    public const TAILLE_MAX = 16384;
    public const DEMANDES = ["Offre d'emploi", 'Projet freelance', 'Autre'];
    public const DUREE_MIN_MS = 3000;
    // Limites validées (décision R10) : [fenêtre en secondes, maximum].
    public const LIMITES_IP = [[600, 3], [86400, 10]];
    public const LIMITE_GLOBALE = [86400, 50];

    /** @var callable(array): int */
    private $envoyer;
    /** @var callable(string): void */
    private $journal;

    /**
     * @param array{origine: string, cle_hmac: string} $config
     * @param callable(array): int $envoyer reçoit l'e-mail à envoyer, renvoie le statut HTTP de Resend
     * @param callable(string): void $journal écrit une erreur technique (jamais de donnée personnelle)
     */
    public function __construct(
        private array $config,
        private \PDO $db,
        callable $envoyer,
        callable $journal,
        private int $maintenant,
    ) {
        $this->envoyer = $envoyer;
        $this->journal = $journal;
        $this->db->exec('CREATE TABLE IF NOT EXISTS demandes (empreinte TEXT NOT NULL, t INTEGER NOT NULL)');
        $this->db->exec('CREATE INDEX IF NOT EXISTS demandes_t ON demandes (t)');
    }

    /**
     * @param array<string, string> $server  $_SERVER
     * @return array{0: int, 1: array<string, mixed>, 2: array<string, string>}  statut, corps JSON, en-têtes
     */
    public function traiter(array $server, string $corps): array
    {
        if (($server['REQUEST_METHOD'] ?? '') !== 'POST') {
            return [405, ['erreur' => 'methode'], ['Allow' => 'POST']];
        }
        // Origine stricte ; requête sans Origin refusée (décision R10).
        $origine = $server['HTTP_ORIGIN'] ?? '';
        if ($origine === '' || $origine !== $this->config['origine']) {
            return [403, ['erreur' => 'origine'], []];
        }
        $site = $server['HTTP_SEC_FETCH_SITE'] ?? null;
        if ($site !== null && $site !== 'same-origin') {
            return [403, ['erreur' => 'origine'], []];
        }
        $type = strtolower(trim(explode(';', $server['CONTENT_TYPE'] ?? '')[0]));
        if ($type !== 'application/json') {
            return [415, ['erreur' => 'format'], []];
        }
        if ((int) ($server['CONTENT_LENGTH'] ?? 0) > self::TAILLE_MAX || strlen($corps) > self::TAILLE_MAX) {
            return [413, ['erreur' => 'taille'], []];
        }
        $d = json_decode($corps, true);
        if (!is_array($d)) {
            return [400, ['erreur' => 'json'], []];
        }

        // Anti-robots : réponse neutre, rien envoyé ni enregistré.
        $piege = is_string($d['site_web'] ?? null) ? $d['site_web'] : '';
        $duree = is_int($d['duree'] ?? null) ? $d['duree'] : 0;
        if ($piege !== '' || $duree < self::DUREE_MIN_MS) {
            return [200, ['ok' => true], []];
        }

        [$champs, $valeurs] = self::valider($d);
        if ($champs !== []) {
            return [422, ['erreur' => 'validation', 'champs' => $champs], []];
        }

        $empreinte = hash_hmac('sha256', (string) ($server['REMOTE_ADDR'] ?? ''), $this->config['cle_hmac']);
        $this->db->prepare('DELETE FROM demandes WHERE t < ?')->execute([$this->maintenant - 86400]);
        $attente = $this->attenteAvantNouvelleDemande($empreinte);
        if ($attente > 0) {
            return [429, ['erreur' => 'trop'], ['Retry-After' => (string) $attente]];
        }

        $statut = ($this->envoyer)(self::email($valeurs));
        if ($statut < 200 || $statut >= 300) {
            ($this->journal)("resend:$statut");
            return [502, ['erreur' => 'envoi'], []];
        }
        $this->db->prepare('INSERT INTO demandes (empreinte, t) VALUES (?, ?)')->execute([$empreinte, $this->maintenant]);
        return [200, ['ok' => true], []];
    }

    /** @return array{0: list<string>, 1: array<string, string>} champs en erreur, valeurs nettoyées */
    public static function valider(array $d): array
    {
        $texte = static fn ($v): string => is_string($v) ? trim($v) : '';
        $nom = $texte($d['nom'] ?? null);
        $email = $texte($d['email'] ?? null);
        $demande = $texte($d['demande'] ?? null);
        $message = $texte($d['message'] ?? null);
        $controle = '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/';
        $e = [];
        if ($nom === '' || mb_strlen($nom) > 100 || preg_match($controle, $nom)) $e[] = 'nom';
        if ($email === '' || mb_strlen($email) > 254 || filter_var($email, FILTER_VALIDATE_EMAIL) === false) $e[] = 'email';
        if ($demande !== '' && !in_array($demande, self::DEMANDES, true)) $e[] = 'demande';
        $n = mb_strlen($message);
        if ($n < 20 || $n > 3000) $e[] = 'message';
        if (($d['accord'] ?? null) !== true) $e[] = 'accord';
        return [$e, ['nom' => $nom, 'email' => $email, 'demande' => $demande, 'message' => $message]];
    }

    /** Retire tout retour à la ligne et caractère de contrôle (aucune injection d'en-tête). */
    public static function surUneLigne(string $s): string
    {
        return trim((string) preg_replace('/[\x00-\x1F\x7F]+/', ' ', $s));
    }

    /** @param array<string, string> $v */
    public static function email(array $v): array
    {
        $sujet = 'Portfolio — ' . ($v['demande'] !== '' ? $v['demande'] : 'Message') . ' — ' . $v['nom'];
        return [
            'subject' => mb_substr(self::surUneLigne($sujet), 0, 150),
            'reply_to' => self::surUneLigne($v['email']),
            'text' => "Nom : {$v['nom']}\nE-mail : {$v['email']}\nDemande : " . ($v['demande'] !== '' ? $v['demande'] : '—') . "\n\n{$v['message']}\n",
        ];
    }

    private function attenteAvantNouvelleDemande(string $empreinte): int
    {
        $regles = array_map(static fn ($r) => [$r[0], $r[1], true], self::LIMITES_IP);
        $regles[] = [self::LIMITE_GLOBALE[0], self::LIMITE_GLOBALE[1], false];
        foreach ($regles as [$fenetre, $max, $parIp]) {
            $sql = 'SELECT COUNT(*), MIN(t) FROM demandes WHERE t >= ?' . ($parIp ? ' AND empreinte = ?' : '');
            $q = $this->db->prepare($sql);
            $q->execute($parIp ? [$this->maintenant - $fenetre, $empreinte] : [$this->maintenant - $fenetre]);
            [$nb, $premier] = $q->fetch(\PDO::FETCH_NUM);
            if ((int) $nb >= $max) {
                return max(1, (int) $premier + $fenetre - $this->maintenant);
            }
        }
        return 0;
    }
}
