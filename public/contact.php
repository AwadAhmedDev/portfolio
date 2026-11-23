<?php
declare(strict_types=1);

// Seul point d'entrée PHP du site (architecture.md §6.1 et §8.1).
// Configuration privée : …/domains/<domaine>/private/config.php, hors de public_html, jamais dans le dépôt.
define('PORTFOLIO_ENTREE', true);

ini_set('display_errors', '0');
header_remove('X-Powered-By');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

$prive = dirname(__DIR__) . '/private';

function repondre(int $statut, array $corps, array $entetes = []): never
{
    http_response_code($statut);
    foreach ($entetes as $nom => $valeur) {
        header("$nom: $valeur");
    }
    echo json_encode($corps, JSON_UNESCAPED_UNICODE);
    exit;
}

// Journal : erreurs techniques seulement, 1 Mo et 30 jours au plus (décision R10).
function journaliser(string $prive, string $code): void
{
    $fichier = "$prive/contact-errors.log";
    $lignes = is_file($fichier) && filesize($fichier) < 1_048_576 ? file($fichier, FILE_IGNORE_NEW_LINES) : [];
    $limite = gmdate('Y-m-d', time() - 30 * 86400);
    $lignes = array_values(array_filter($lignes ?: [], static fn ($l) => substr($l, 0, 10) >= $limite));
    $lignes[] = gmdate('Y-m-d H:i:s') . " $code";
    file_put_contents($fichier, implode("\n", $lignes) . "\n", LOCK_EX);
    @chmod($fichier, 0600);
}

$fichierConfig = "$prive/config.php";
if (!is_file($fichierConfig)) {
    repondre(503, ['erreur' => 'indisponible']);
}
/** @var array{resend_cle: string, destinataire: string, expediteur: string, origine: string, cle_hmac: string} $config */
$config = require $fichierConfig;

require __DIR__ . '/_app/ContactHandler.php';

try {
    $base = "$prive/contact.sqlite";
    $db = new PDO("sqlite:$base", null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    @chmod($base, 0600);

    $envoyer = static function (array $email) use ($config): int {
        $ch = curl_init('https://api.resend.com/emails');
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $config['resend_cle'], 'Content-Type: application/json'],
            CURLOPT_POSTFIELDS => json_encode([
                'from' => $config['expediteur'],
                'to' => [$config['destinataire']],
                'reply_to' => $email['reply_to'],
                'subject' => $email['subject'],
                'text' => $email['text'],
            ], JSON_UNESCAPED_UNICODE),
        ]);
        curl_exec($ch);
        $statut = curl_errno($ch) ? 0 : (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        curl_close($ch);
        return $statut;
    };

    $corps = (string) file_get_contents('php://input', false, null, 0, ContactHandler::TAILLE_MAX + 1);
    $handler = new ContactHandler($config, $db, $envoyer, static fn (string $code) => journaliser($prive, $code), time());
    [$statut, $reponse, $entetes] = $handler->traiter($_SERVER, $corps);
    repondre($statut, $reponse, $entetes);
} catch (Throwable $e) {
    journaliser($prive, 'exception:' . get_class($e));
    repondre(500, ['erreur' => 'serveur']);
}
