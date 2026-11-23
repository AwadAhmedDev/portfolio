<?php
declare(strict_types=1);

// Tests du script du formulaire (architecture.md §6.1), sans dépendance : php tests/php/contact-handler.test.php
define('PORTFOLIO_ENTREE', true);
require __DIR__ . '/../../public/_app/ContactHandler.php';

$echecs = 0;
$total = 0;
function verifier(string $nom, bool $condition): void
{
    global $echecs, $total;
    $total++;
    if (!$condition) {
        $echecs++;
        echo "ÉCHEC : $nom\n";
    }
}

const ORIGINE = 'https://portfolio.example';
$config = ['origine' => ORIGINE, 'cle_hmac' => str_repeat('k', 32)];

function serveur(array $plus = []): array
{
    return $plus + ['REQUEST_METHOD' => 'POST', 'HTTP_ORIGIN' => ORIGINE, 'CONTENT_TYPE' => 'application/json', 'CONTENT_LENGTH' => '200', 'REMOTE_ADDR' => '203.0.113.7'];
}
function corps(array $plus = []): string
{
    return json_encode($plus + ['nom' => 'Camille', 'email' => 'camille@example.org', 'demande' => '', 'message' => 'Bonjour, je souhaite échanger sur un poste.', 'accord' => true, 'site_web' => '', 'duree' => 8000]);
}
function nouveau(array $config, int $statutResend = 200, ?array &$envois = null, ?array &$journal = null, int $t = 1_000_000): ContactHandler
{
    $envois = [];
    $journal = [];
    $db = new PDO('sqlite::memory:', null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    return new ContactHandler($config, $db, function (array $e) use (&$envois, $statutResend) { $envois[] = $e; return $statutResend; }, function (string $c) use (&$journal) { $journal[] = $c; }, $t);
}

// Méthode, origine, format, taille
$h = nouveau($config, 200, $envois);
verifier('GET refusé (405 + Allow)', $h->traiter(serveur(['REQUEST_METHOD' => 'GET']), '')[0] === 405 && $h->traiter(serveur(['REQUEST_METHOD' => 'GET']), '')[2]['Allow'] === 'POST');
verifier('sans Origin : 403', $h->traiter(array_diff_key(serveur(), ['HTTP_ORIGIN' => 1]), corps())[0] === 403);
verifier('autre origine : 403', $h->traiter(serveur(['HTTP_ORIGIN' => 'https://portfolio.example.evil.com']), corps())[0] === 403);
verifier('origine avec port : 403', $h->traiter(serveur(['HTTP_ORIGIN' => ORIGINE . ':8443']), corps())[0] === 403);
verifier('Sec-Fetch-Site cross-site : 403', $h->traiter(serveur(['HTTP_SEC_FETCH_SITE' => 'cross-site']), corps())[0] === 403);
verifier('Content-Type formulaire : 415', $h->traiter(serveur(['CONTENT_TYPE' => 'application/x-www-form-urlencoded']), corps())[0] === 415);
verifier('Content-Type avec charset accepté', $h->traiter(serveur(['CONTENT_TYPE' => 'application/json; charset=utf-8']), corps())[0] === 200);
verifier('corps de plus de 16 Ko : 413', $h->traiter(serveur(), str_repeat('a', 16385))[0] === 413);
verifier('Content-Length trop grand : 413', $h->traiter(serveur(['CONTENT_LENGTH' => '20000']), corps())[0] === 413);
verifier('JSON invalide : 400', $h->traiter(serveur(), '{pas du json')[0] === 400);

// Anti-robots : réponse neutre sans envoi
$h = nouveau($config, 200, $envois);
verifier('champ piège : 200 neutre', $h->traiter(serveur(), corps(['site_web' => 'http://spam']))[0] === 200);
verifier('envoi trop rapide : 200 neutre', $h->traiter(serveur(), corps(['duree' => 1200]))[0] === 200);
verifier('aucun e-mail envoyé aux robots', count($envois) === 0);

// Validation
$h = nouveau($config);
$r = $h->traiter(serveur(), corps(['nom' => '', 'email' => 'x@', 'demande' => 'Inconnue', 'message' => 'trop court', 'accord' => false]));
verifier('422 avec la liste des champs', $r[0] === 422 && $r[1]['champs'] === ['nom', 'email', 'demande', 'message', 'accord']);
verifier('message de 20 caractères accentués accepté', ContactHandler::valider(['nom' => 'A', 'email' => 'a@b.fr', 'message' => str_repeat('é', 20), 'accord' => true])[0] === []);
verifier('message de 3001 caractères refusé', in_array('message', ContactHandler::valider(['nom' => 'A', 'email' => 'a@b.fr', 'message' => str_repeat('é', 3001), 'accord' => true])[0], true));
verifier('accord en texte refusé (doit être true)', in_array('accord', ContactHandler::valider(['nom' => 'A', 'email' => 'a@b.fr', 'message' => str_repeat('a', 30), 'accord' => 'true'])[0], true));
verifier('demande facultative acceptée', ContactHandler::valider(['nom' => 'A', 'email' => 'a@b.fr', 'demande' => 'Projet freelance', 'message' => str_repeat('a', 30), 'accord' => true])[0] === []);

// Anti-injection dans l'e-mail
$e = ContactHandler::email(['nom' => "Camille\r\nBcc: x@y.z", 'email' => "a@b.fr\nBcc: x@y.z", 'demande' => '', 'message' => 'texte']);
verifier('objet sans retour à la ligne', !preg_match('/[\r\n]/', $e['subject']));
verifier('Répondre à sans retour à la ligne', !preg_match('/[\r\n]/', $e['reply_to']));

// Envoi réussi et limites de demandes (3 par 10 min, R10)
$h = nouveau($config, 200, $envois);
for ($i = 0; $i < 3; $i++) {
    verifier("envoi " . ($i + 1) . " accepté", $h->traiter(serveur(), corps())[0] === 200);
}
$r = $h->traiter(serveur(), corps());
verifier('4e envoi en 10 min : 429 + Retry-After', $r[0] === 429 && (int) $r[2]['Retry-After'] > 0);
verifier('autre adresse IP non bloquée', $h->traiter(serveur(['REMOTE_ADDR' => '198.51.100.9']), corps())[0] === 200);
verifier('4 e-mails envoyés au total', count($envois) === 4);

// IP jamais stockée en clair
$db = new PDO('sqlite::memory:');
$h = new ContactHandler($config, $db, fn () => 200, fn () => null, 1_000_000);
$h->traiter(serveur(), corps());
$stocke = $db->query('SELECT empreinte FROM demandes')->fetchColumn();
verifier('empreinte HMAC et non IP en clair', $stocke === hash_hmac('sha256', '203.0.113.7', $config['cle_hmac']) && !str_contains((string) $stocke, '203.0.113.7'));

// Échec de Resend : 502, journal sans donnée personnelle
$h = nouveau($config, 500, $envois, $journal);
$r = $h->traiter(serveur(), corps());
verifier('Resend en erreur : 502', $r[0] === 502);
verifier('journal technique sans donnée personnelle', $journal === ['resend:500']);

echo "\n" . ($total - $echecs) . "/$total vérifications réussies\n";
exit($echecs === 0 ? 0 : 1);
