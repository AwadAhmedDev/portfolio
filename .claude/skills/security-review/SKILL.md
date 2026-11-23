---
name: security-review
description: Examine la sécurité du portfolio d'Awad Ahmed - formulaire de contact et script PHP (validation, Origin, limites, anti-spam, HMAC de l'IP, journaux), CSP par empreintes, en-têtes .htaccess, secrets et configuration privée Hostinger, dépendances npm, exposition de données personnelles dans le code, le site, les images, les PDF et l'historique git. À utiliser avant un commit touchant public/, scripts/, ContactForm ou la configuration, avant une fusion ou un déploiement, ou sur demande d'audit de sécurité.
---

# Revue de sécurité — portfolio

Référence : `docs/architecture.md` §6 (formulaire, CSP) et §8 (Hostinger). Ces mécanismes sont **validés** : la revue vérifie qu'ils sont respectés et complets. **Ne jamais proposer de les affaiblir** (élargir la CSP, accepter une requête sans `Origin`, relever une limite, journaliser une donnée personnelle) pour faciliter une implémentation ; si une protection bloque un besoin, le signaler à Awad.

Ce Skill ne modifie rien pendant la revue et ne lit jamais de secret réel (`private/config.php` n'existe que sur le serveur ; ne pas demander son contenu).

## 1. Formulaire et script PHP

Fichiers : `public/contact.php`, `public/_app/ContactHandler.php`, `public/_app/.htaccess`, `components/contact/ContactForm.tsx`, `lib/validation.ts`, `tests/php/contact-handler.test.php`.

Vérifier, règle par règle (§6.1) :
- `POST` seul (405 + `Allow`), `application/json` (415), corps ≤ 16 384 octets contrôlé **avant** lecture (413), JSON invalide (400).
- `Origin` **exactement égale** à l'origine configurée ; absente → 403 ; `Sec-Fetch-Site` présent ≠ `same-origin` → 403 ; aucun en-tête CORS.
- Champs : nom 1–100 caractères (`mb_strlen`) sans caractère de contrôle ; e-mail ≤ 254 + `FILTER_VALIDATE_EMAIL` ; demande facultative parmi `DEMANDES` ; message 20–3 000 caractères ; accord strictement `true` ; champs inconnus ignorés ; 422 sans renvoyer le contenu.
- Champ piège ou envoi en moins de 3 s → 200 neutre, rien envoyé ni enregistré.
- Limites R10 : `LIMITES_IP` 3 / 10 min et 10 / 24 h, `LIMITE_GLOBALE` 50 / 24 h → 429 + `Retry-After` ; lignes de plus de 24 h effacées.
- IP : `REMOTE_ADDR` seul (jamais `X-Forwarded-For`), stockée uniquement en `hash_hmac('sha256', …)` avec la clé privée.
- E-mail : texte brut ; objet et `Reply-To` sans retour à la ligne (injection d'en-têtes) ; `Reply-To` seulement si l'e-mail est valide ; curl avec vérification TLS et délai de 10 s ; échec → 502 générique.
- Journal `private/contact-errors.log` : codes d'erreur et statut HTTP de Resend **seulement** ; jamais nom, e-mail, message ni IP ; 1 Mo maximum, 30 jours.
- `ContactHandler.php` s'arrête sans la constante `PORTFOLIO_ENTREE` ; `config.php` absent → 503 sans détail ; `display_errors` à 0 ; réponses JSON avec `no-store` et `nosniff`.
- Navigateur et serveur appliquent **les mêmes règles** (`lib/validation.ts` ↔ `ContactHandler::valider`) ; le serveur reste la seule barrière fiable.

## 2. CSP et en-têtes

- `public/.htaccess` : en-tête CSP **sans** `default-src` ni `script-src` (sinon il bloquerait les scripts de Next.js), avec `frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests`.
- Balise meta ajoutée par `scripts/csp-hashes.mjs`, **en premier** dans `<head>` de chaque page de `out/` : `script-src 'self'` + une empreinte par script intégré ; `style-src 'self'` ; **aucun `unsafe-inline` ni `unsafe-eval`**.
- Le build échoue sur `style=`, `<style>` et attributs d'événement : ne pas contourner ce contrôle.
- En-têtes : HSTS, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options: DENY`, `X-Powered-By` retiré, redirection HTTPS.
- Fichiers refusés : dotfiles, `*.sqlite`, `*.log`, `*.md`, `*.ini`, `*.bak` ; `Options -Indexes`.

## 3. Secrets et données personnelles

- Rechercher dans le diff, le dépôt et **l'historique** (`git log -p`) : clés (`re_…`, `sk_`, `token`, `password`), adresses e-mail réelles (seules les adresses de test `example.org` et `a@b.fr` sont attendues), nom complet d'Awad (seul « Awad Ahmed » est permis), téléphone, adresse postale.
- La clé Resend, l'adresse de réception et la clé HMAC n'existent que dans `private/config.php` sur Hostinger, **hors de `public_html/`** ; jamais dans le dépôt, GitHub, une variable de build ou la conversation.
- Seul secret GitHub prévu : `HOSTINGER_API_TOKEN` (déploiement).
- Images et PDF : métadonnées supprimées (EXIF, GPS ; auteur et e-mail dans les PDF) avant publication.
- Rien de personnel dans le JavaScript envoyé au navigateur (`out/_next/`).

## 4. Dépendances

- `npm audit --omit=dev` puis `npm audit` : signaler toute faille élevée ou critique et sa voie de correction ; ne jamais lancer `npm audit fix --force` sans accord.
- Toute nouvelle dépendance : justification, mainteneur, taille, effet sur le budget JS ; accord d'Awad obligatoire.

## 5. Hostinger (lecture seule, aucune action sans accord explicite — RM6)

À contrôler au premier déploiement, sans rien modifier soi-même : `/_app/ContactHandler.php`, `/private/config.php` et `/.htaccess` répondent 403 ou 404 ; `config.php` en droits 600 ; `expose_php` désactivé ; `REMOTE_ADDR` contient l'IP du visiteur ; le déploiement n'écrit que dans `public_html/`.

## Rapport

Pour chaque constat : gravité (**critique**, **élevée**, **moyenne**, **faible**), fichier et ligne, scénario d'attaque concret, correction proposée qui **renforce** la protection. Finir par ce qui n'a pas pu être vérifié (ex. comportement réel du serveur Hostinger).
