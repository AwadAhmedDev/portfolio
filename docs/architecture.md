# Architecture technique — Portfolio d'Awad (« Awad Dev »)

> Statut : **architecture validée par Awad le 22/11/2026** (décisions R1 à R9 ci-dessous).
> Mise à jour du 28/11/2026 : le code existe et le site est en ligne depuis le 23/11/2026. Les écarts entre ce document et le code sont signalés là où ils comptent (§1, §2, §8) et suivis dans `roadmap.md` §10.
> Sources : `requirements.md`, `sitemap.md`, `contenus.md`, `design.md`. En cas d'écart : `contenus.md` pour les textes, les maquettes et `design.md` pour la présentation, ce document pour la technique.

---

## 1. Choix généraux

| Domaine | Choix | Raison |
|---|---|---|
| Framework | **Next.js 16**, App Router, `output: 'export'`, `trailingSlash: true` | Décision D1 ; site entièrement statique, adresses en `/` final (`/projets/repatek/`) |
| Rendu | Composants serveur par défaut ; composants client **uniquement** pour le menu mobile, le bouton thème, le formulaire et le lien actif de la navigation (`NavLiens.tsx`) : 4 composants | Budget de 150 Ko de JavaScript par page |
| Styles | **Tailwind CSS 4** + variables CSS aux noms de shadcn/ui ; point de rupture personnalisé **1 100 px** | `design.md` §3 |
| Composants | Prévu : Button, Badge, Card de shadcn/ui recopiés sans Radix. **Réalisé** : aucun composant shadcn/ui recopié ni installé ; boutons, badges et puces sont de simples classes Tailwind (`components/ui/styles.ts`) ; boutons radio et case à cocher **natifs** | Le HTML natif suffit et ne coûte aucun JavaScript |
| Formulaire | **Script PHP sur Hostinger + Resend** (R5, A7) | §6 |
| Hébergement | **Site Hostinger** du portfolio, adresse temporaire (R6, D6), en ligne depuis le 23/11/2026 | Offre Business, PHP 8.3 (curl, SQLite vérifiés le 22/11/2026) |
| Déploiement | Prévu : archive envoyée par l'API Hostinger. **Réalisé** : job `deployer` de `ci.yml` → branche `site` → déploiement Git automatique de Hostinger (§8.2), sans jeton | Aucun secret de déploiement dans GitHub |

---

## 2. Arborescence cible

```
portfolio/
├── CLAUDE.md · README.md
├── docs/
├── app/
│   ├── layout.tsx                <html lang="fr">, polices, script du thème, en-tête, pied de page
│   ├── page.tsx                  /
│   ├── projets/page.tsx          /projets/
│   ├── projets/[slug]/page.tsx   les 6 fiches (un seul gabarit)
│   ├── a-propos/page.tsx
│   ├── contact/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── not-found.tsx             → 404.html
│   ├── sitemap.ts · robots.ts
│   └── globals.css               variables des thèmes, Tailwind, point de rupture 1 100 px
├── components/
│   ├── layout/   Header, MobileMenu*, ThemeToggle*, Footer, SkipLink, Breadcrumb
│   ├── ui/       Button, Badge, TechChip, Card, Alert          (* = composant client)
│   ├── projet/   ProjectCard, ProjectHero, Captures, Rubrique, ChoixTechniques,
│   │             TableauLighthouse, SchemaTemplate, ProjetSuivant
│   ├── accueil/  Hero, ProjetsClients, Chiffres, BlocFreelance, RappelContact
│   ├── contact/  ContactForm*
│   └── Picture.tsx               image responsive <picture> AVIF/WebP
├── content/
│   ├── projets.ts                les 6 projets : textes, liens, technologies, tests, scores
│   ├── site.ts                   métadonnées, liens LinkedIn/GitHub, CV, textes communs
│   └── pages.ts                  textes de l'accueil, d'À propos, de Contact, des mentions
├── lib/
│   ├── stats.ts                  total des tests distincts et son détail
│   ├── seo.ts                    métadonnées, Open Graph, JSON-LD Person
│   └── format.ts                 dates au format français
├── images-source/                originaux des captures et de la photo (jamais publiés, voir §5)
├── public/
│   ├── images/                   images déjà optimisées (AVIF + WebP, plusieurs largeurs)
│   ├── cv/                       les 3 PDF, quand ils sont fournis
│   ├── contact.php               point d'entrée du formulaire (seul fichier PHP appelable)
│   ├── _app/
│   │   ├── .htaccess             « Require all denied » : dossier jamais servi
│   │   └── ContactHandler.php    logique PHP testable, incluse par contact.php
│   └── .htaccess                 404, sécurité, cache, HTTPS
├── scripts/
│   ├── csp-hashes.mjs            après le build : empreintes des scripts de chaque page
│   └── js-budget.mjs             contrôle du budget de 150 Ko par page
├── tests/
│   ├── unit/                     Vitest
│   ├── php/                      tests du script PHP (CI)
│   └── e2e/                      Playwright (CI uniquement)
└── .github/workflows/
    ├── ci.yml                    lint, types, tests, build, budget, liens, E2E, puis déploiement (job deployer) et Lighthouse
    ├── captures.yml              captures et vidéos des sites présentés (Playwright)
    └── images.yml                prépare les images (AVIF, WebP)
```

## 3. Responsabilités

- **`app/`** : routes, métadonnées et assemblage ; aucun texte écrit en dur.
- **`components/`** : affichage, sans données propres. Le gabarit de fiche lit un projet et affiche ses variantes d'après les données (pas de site, pas de code, mention d'équipe, tableau Lighthouse partiel ou absent, schéma du template).
- **`content/`** : seule source des textes et des chiffres **dans le code**, recopiée mot pour mot de `contenus.md` (R8).
- **`lib/`** : calculs et outils.
- **`public/`** : fichiers servis tels quels.
- **`public/_app/`** : code serveur PHP, inclus par `contact.php`, jamais accessible directement (§8.1).
- **`scripts/`** : traitements après le build.

---

## 4. Données et statistiques

Chaque projet de `content/projets.ts` est typé. Les tests distinguent les **tests distincts** et leurs **exécutions** :

```ts
tests: { unitaires: 13, scenariosE2E: 7, profilsE2E: 2 }   // Template : 20 distincts, 27 exécutions
tests: { integration: 45 }                                   // I Make My World
lighthouse: { date: "2026-11-22", ordinateur: { … }, mobile: { performance: 98, accessibilite: null, … } }
// null = « Non relevé »
```

- `lib/stats.ts` calcule le total des tests distincts (**185**) et son détail dans l'ordre validé **17 + 45 + 16 + 63 + 24 + 20** (C14). Cet ordre diffère de l'ordre d'affichage des projets (A2) : il est enregistré dans une petite liste à part (R9).
- Un test unitaire bloque la CI si le total n'est plus 185.
- Tests de contenu : aucun « junior », « senior » ni « @ » dans les textes ; pas de lien « code » pour I Make My World ; pas de lien « site » pour le template ; mention d'équipe de Solidays présente ; aucun paiement en ligne annoncé pour RepaTek et I Make My World.
- **Règle (R8)** : toute modification de texte se fait dans `contenus.md` **et** dans `content/`, dans le même commit.

### 4.1 Routes des fiches : `generateStaticParams()`

Fichier `app/projets/[slug]/page.tsx` :

```ts
import { projets } from "@/content/projets";

export const dynamicParams = false; // toute autre adresse → 404 au build, jamais générée

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;   // params est une promesse depuis Next.js 15
  // titre et description de la fiche, lus dans content/projets.ts
}
```

- Les 6 adresses générées viennent **uniquement** de `content/projets.ts`, dans l'ordre A2 : `repatek`, `i-make-my-world`, `plateforme-editoriale`, `template-nextjs`, `emateriel`, `solidays`.
- Le build produit `out/projets/<slug>/index.html` pour chacune (`trailingSlash: true`).
- La page appelle `notFound()` si le slug est inconnu (sécurité en plus de `dynamicParams = false`).
- Un test unitaire vérifie que les slugs sont uniques, en minuscules sans accents, et que leur liste correspond exactement à ces 6 valeurs.

---

## 5. Images, polices et thème

### Images (R2) : préparées une fois, puis commitées
- Les originaux (PNG ou JPEG) sont déposés dans `images-source/`, **hors de `public/`** : ils ne sont jamais publiés.
- Un workflow GitHub **manuel** (`images.yml`, `workflow_dispatch`) transforme les originaux en **AVIF + WebP**, en 3 largeurs, dans `public/images/`. `sharp` est installé **seulement sur la machine GitHub**.
- **Contrôles du workflow** (il échoue si l'un d'eux ne passe pas) :
  - formats d'entrée acceptés : PNG et JPEG ; noms de fichiers en minuscules, sans espace ni accent ;
  - **suppression de toutes les métadonnées** (EXIF, GPS, appareil), en particulier pour la photo d'Awad ;
  - largeurs produites : 640, 960 et 1 440 px pour les captures ; 200, 320 et 640 px pour la photo (format carré, affichée en rond) ; jamais d'agrandissement d'une image plus petite ;
  - qualité fixe (AVIF ≈ 50, WebP ≈ 75) et **poids maximal de 200 Ko par fichier produit** ;
  - chaque image produite correspond à une image déclarée dans `content/` (avec son texte alternatif), et inversement ;
  - résultat proposé dans une **pull request** (pas de push direct sur `main`), pour qu'Awad voie les images avant de les fusionner.
- Rien à installer sur l'ordinateur d'Awad ; builds rapides.
- Affichage : composant `<Picture>` (`<picture>` + `srcset`, dimensions fixées, chargement différé hors du premier écran) ; `next/image` n'optimise pas les images en export statique.
- Limite : relancer le workflow quand une capture change.

### Polices (R3) : `next/font/google`, polices variables
- Inter et JetBrains Mono en **police variable**, alphabet **latin** seulement, `font-display: swap`. Les fichiers sont copiés dans `out/_next/static/media/` et **servis par le site** : aucun visiteur ne contacte Google.
- **Prérequis réseau** : au moment du build, la machine doit pouvoir joindre `https://fonts.googleapis.com` et `https://fonts.gstatic.com`. C'est le cas sur GitHub Actions ; en local, il faut une connexion internet. Sans réseau, **le build échoue** (pas de police de secours silencieuse), ce qui évite de publier un site sans ses polices.
- Les polices téléchargées sont gardées dans `.next/cache` ; la CI garde ce dossier en cache entre deux builds.
- Aucune dépendance ; une police variable couvre toutes les graisses utilisées.

### Thème sans flash
- Petit script intégré dans `<head>` : il lit le choix enregistré (stockage local) ou la préférence du système, et pose la classe `dark` **avant le premier affichage**.
- Le bouton thème change la classe et enregistre le choix. Pas de cookie.
- Son empreinte est autorisée par la CSP (§6).

---

## 6. Formulaire et sécurité

### Envoi (R5) : PHP sur Hostinger + Resend

Solutions comparées : PHP + Resend (retenue), PHP + `mail()` (risque de spam), service de formulaire tiers (données chez un tiers, limites gratuites), Next.js en serveur Node (n'est plus statique, contraire à D1), fonction chez un autre fournisseur (une plateforme de plus).

- L'adresse temporaire Hostinger ne peut pas être vérifiée chez Resend (DNS non gérés). Les e-mails partent donc de l'adresse de test de Resend, qui **livre seulement à l'adresse du compte Resend d'Awad** : suffisant pour recevoir les demandes ; « Répondre à » = e-mail du visiteur.
- Conséquence : **P8 (confirmation au visiteur) est impossible sans domaine vérifié** ; à reprendre à l'achat d'un nom de domaine.

### 6.1 Règles du script `contact.php`

Le formulaire envoie les données avec `fetch` (JSON) vers `/contact.php`, sur la même origine.

**Méthode et format**
- Seule la méthode **`POST`** est acceptée. Toute autre méthode : réponse **405**, avec l'en-tête `Allow: POST`.
- `Content-Type` exigé : `application/json`. Sinon : **415**.
- **Taille du corps limitée à 16 Ko** : `CONTENT_LENGTH` contrôlé avant lecture, puis lecture de `php://input` limitée à 16 384 octets. Au-delà : **413**. JSON invalide : **400**.

**Origine (contrôle strict)**
- L'en-tête `Origin` doit être **exactement égal** à l'origine du site, lue dans la configuration privée (ex. `https://<adresse-du-portfolio>`) : même protocole, même hôte, aucun port, comparaison de chaînes exacte (pas de « contient », pas de sous-domaine).
- **Requête sans `Origin` : refusée (403).** Les navigateurs actuels envoient toujours `Origin` sur un `POST` fait par `fetch` ; une requête sans `Origin` vient d'un script ou d'un robot. Le formulaire a de toute façon besoin de JavaScript ; sans JavaScript, la page propose LinkedIn (EF-6).
- Si l'en-tête `Sec-Fetch-Site` est présent, il doit valoir `same-origin`. Sinon : **403**.
- Pas d'en-têtes CORS dans la réponse : aucun autre site ne peut lire les réponses.

**Champs**
- Nom : 1 à 100 caractères (`mb_strlen`), sans caractère de contrôle.
- E-mail : obligatoire, 254 caractères au plus, `filter_var(…, FILTER_VALIDATE_EMAIL)`.
- « Votre demande » : facultatif (C16) ; si présent, une des 3 valeurs autorisées exactement.
- Message : 20 à 3 000 caractères.
- Case d'accord : doit valoir `true`.
- Champs inattendus : ignorés. Erreur de validation : **422**, avec la liste des champs en erreur, sans renvoyer leur contenu.

**Anti-robots**
- Champ piège rempli, ou formulaire envoyé moins de 3 secondes après l'affichage de la page : **réponse 200 neutre**, aucun e-mail envoyé, rien d'enregistré.
- Limites de demandes : **3 par 10 minutes et 10 par 24 heures pour une même adresse IP**, **50 par 24 heures au total**. Au-delà : **429**, avec `Retry-After`.

**Empreinte de l'adresse IP (HMAC)**
- L'adresse IP n'est **jamais enregistrée en clair**. On garde seulement `hash_hmac('sha256', $ip, $cle)`, où `$cle` est une clé aléatoire de 32 octets, stockée dans la configuration privée. Sans cette clé, l'empreinte ne permet pas de retrouver l'adresse IP (un simple `sha256` pourrait être inversé en essayant toutes les adresses).
- Adresse utilisée : `REMOTE_ADDR` uniquement. Les en-têtes `X-Forwarded-For` ne sont pas pris en compte, car n'importe qui peut les écrire. Contrôle du 28/11/2026, fait par Awad : l'adresse IP publique du visiteur (relevée sur ifconfig.me) apparaît à l'identique dans les journaux d'accès Hostinger, sur la ligne de la requête `/a-propos/?test-ip=1`. La documentation de Hostinger (« Hostinger CDN: Visitor IP addresses in logs and analytics ») indique que PHP reçoit normalement cette adresse dans `REMOTE_ADDR`, le serveur faisant confiance au CDN placé devant le site (`Server: hcdn`). `$_SERVER['REMOTE_ADDR']` n'a toutefois **pas été mesuré directement** dans PHP : ce n'est pas une preuve expérimentale. Le code garde `REMOTE_ADDR` ; `X-Forwarded-For` n'est pas utilisé.
- Les lignes de plus de 24 heures sont effacées de la base SQLite à chaque requête.

**Envoi**
- Appel de l'API Resend en HTTPS avec curl : vérification du certificat activée, délai de 10 secondes au plus.
- E-mail en texte brut ; l'objet et « Répondre à » sont nettoyés (aucun retour à la ligne) ; « Répondre à » = e-mail du visiteur, seulement s'il est valide.
- Échec de Resend : **502**, réponse générique au visiteur (« envoi impossible »), saisie conservée côté navigateur.
- Le serveur ne conserve **aucun message**.

**Journaux**
- `display_errors` désactivé ; `expose_php` désactivé sur Hostinger depuis le 28/11/2026 (PHP 8.3.37) : passé de `On` (valeur par défaut) à `Off` par l'API Hostinger, seule option modifiée. **Preuve de configuration** : relecture de la configuration par l'API après le changement (`Off`). **Réponses HTTP** testées ensuite : aucun en-tête `X-Powered-By` ; ce test seul ne prouve pas le réglage, car `contact.php` retire cet en-tête lui-même (`roadmap.md` lot 14).
- Seules les **erreurs techniques** sont écrites, dans `private/contact-errors.log` : date, code de l'erreur, statut HTTP de Resend. **Jamais** le nom, l'e-mail, le message ni l'adresse IP.
- Le fichier est limité à 1 Mo : au-delà, il est vidé et recommence. Les lignes de plus de 30 jours sont supprimées.

**Réponses** : toujours du JSON court (`{"ok":true}` ou `{"erreur":"<code>"}`), avec `Cache-Control: no-store` et `X-Content-Type-Options: nosniff`.

### 6.2 CSP (R4) : empreintes par page, en-tête et balise meta séparés

Next.js insère dans chaque page plusieurs petits scripts, différents d'une page à l'autre, en plus du script du thème. On répartit la politique en **deux parties qui ne se contredisent pas** :

**1. En-tête HTTP (`.htaccess`)** : seulement les règles qu'une balise meta **ne peut pas** porter, ou qui ne concernent pas les scripts :

```
Content-Security-Policy: frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests
```

- `frame-ancestors` est **ignoré dans une balise meta** : il doit être dans l'en-tête. C'est le cas ici.
- **Pas de `default-src` ni de `script-src` dans l'en-tête.** Sinon, comme le navigateur applique les deux politiques ensemble, l'en-tête bloquerait les scripts intégrés de Next.js, quelles que soient les empreintes de la balise meta. Sans ces directives, l'en-tête ne restreint pas les scripts, et seule la balise meta décide.

**2. Balise meta, ajoutée après le build par `scripts/csp-hashes.mjs`** dans chaque fichier HTML de `out/` :

```
default-src 'self'; script-src 'self' 'sha256-…' 'sha256-…'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; manifest-src 'self'
```

- Le script place la balise **en tout premier dans `<head>`**, avant tout autre script : une CSP en meta ne protège que ce qui vient après elle.
- Il calcule l'empreinte SHA-256 de **chaque** script intégré de la page (scripts de Next.js et script du thème), et **échoue** si une page contient un attribut d'événement en ligne (`onclick=…`), qu'aucune empreinte ne peut autoriser.
- **Aucun `unsafe-inline` ni `unsafe-eval`**, dans aucune des deux parties. Le build de production de Next.js n'utilise pas `eval`.
- Les fichiers JavaScript de `/_next/static/` sont autorisés par `'self'`. Les navigations entre pages chargent des données (fichiers `.txt`), autorisées par `connect-src 'self'`, et non de nouveaux scripts intégrés.
- `style-src 'self'` : si le premier build montre un style intégré nécessaire, on ajoute **son empreinte**, jamais `unsafe-inline`.
- **Contrôle** : un test de bout en bout ouvre chaque page et échoue sur toute violation de CSP signalée dans la console.

**Autres en-têtes (`.htaccess`)** : `Strict-Transport-Security: max-age=31536000`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY` (pour les anciens navigateurs), redirection HTTP vers HTTPS, `ErrorDocument 404 /404.html`, cache long (`immutable`) pour `/_next/static/`, cache court pour les pages HTML.

---

## 7. Tests et CI (`ci.yml`)

| Étape | Outil | En local ? |
|---|---|---|
| Lint, format, types | ESLint, Prettier, `tsc` | Oui |
| Tests unitaires (données, total de 185, règles de contenu, validation, scripts, images) | Vitest | Oui |
| Tests du script PHP | PHP en ligne de commande | Non (CI) |
| Build et export | `next build` | Oui |
| Empreintes CSP, budget JavaScript (§7.1) | `scripts/*.mjs` | Oui |
| Liens internes et externes | lychee (LinkedIn répond 999 : exclu) | Non (CI) |
| Bout en bout : menu, thème sans flash, clavier, formulaire (envoi simulé), accessibilité (axe) | Playwright + axe-core | **Non (CI uniquement)** |
| Lighthouse | Lighthouse sur le site en ligne après chaque déploiement (accueil et fiche RepaTek, ordinateur et mobile) | Non |

### 7.1 Mesure du budget JavaScript (150 Ko par page)

- **Ce qui est mesuré** : pour chaque fichier HTML de `out/`, le total du JavaScript **chargé à l'ouverture de la page** :
  - tous les fichiers référencés par une balise `<script src>` de la page, **chunks partagés compris** (React, Next.js, code commun) : un chunk utilisé par toutes les pages compte dans le budget de chaque page ;
  - plus le contenu des scripts intégrés à la page ;
  - les scripts `nomodule` ne sont pas comptés (ils ne sont chargés que par d'anciens navigateurs) ;
  - les morceaux chargés plus tard, seulement après une action, ne sont pas comptés, mais ils sont listés dans le rapport.
- **Unité** : la **taille transférée compressée en gzip** (niveau 9, celui du serveur au pire), et non la taille du fichier sur le disque. Seuil : **150 Ko = 153 600 octets** par page.
- `scripts/js-budget.mjs` affiche un tableau par page (fichiers, taille brute, taille gzip, total) et **échoue** si une page dépasse le seuil.
- Après le déploiement, on compare une fois avec la taille réellement transférée (onglet Réseau, ou rapport Lighthouse) pour vérifier que la mesure du build est réaliste.

---

## 8. Build et déploiement

### 8.1 Emplacement des fichiers sur Hostinger

Sur ton compte, chaque site a un dossier `/home/u707298094/domains/<domaine>/`, dont seul `public_html/` est servi sur internet (vérifié sur les 5 sites existants le 22/11/2026). `<domaine>` sera l'adresse temporaire du portfolio.

```
/home/u707298094/domains/<domaine>/
├── public_html/                         ← SERVI sur internet, copie Git de la branche `site` (`/.git/config` répond 403)
│   ├── index.html, projets/, …          pages exportées (out/)
│   ├── .htaccess                         en-têtes, 404, cache, HTTPS
│   ├── contact.php                       seul point d'entrée PHP
│   └── _app/
│       ├── .htaccess                     Require all denied
│       └── ContactHandler.php            logique, jamais appelable directement
└── private/                             ← JAMAIS servi, JAMAIS touché par le déploiement
    ├── config.php                        clé Resend, adresses de réception et d'expédition, origine du site, clé HMAC
    ├── contact.sqlite                    limites de demandes (empreintes d'IP, 24 h)
    └── contact-errors.log                erreurs techniques seulement (§6.1)
```

**Garanties**
- Les secrets, la base SQLite et le journal sont dans `private/`, **à côté** de `public_html/`, pas dedans : aucune adresse web ne peut y mener, même si une règle du `.htaccess` disparaissait.
- `contact.php` trouve la configuration par un chemin calculé (`dirname(__DIR__) . '/private/config.php'`), jamais écrit dans le dépôt. Si le fichier est absent, il répond **503** sans détail.
- `ContactHandler.php` est dans `public_html/_app/`, protégé deux fois : le dossier refuse toute requête (`Require all denied`), et le fichier s'arrête aussitôt s'il est appelé sans passer par `contact.php` (constante définie par `contact.php`).
- Le `.htaccess` principal refuse aussi l'accès aux fichiers `*.sqlite`, `*.log`, `*.md` et à ceux qui commencent par un point, au cas où l'un d'eux serait copié par erreur dans `public_html/`.
- **Le déploiement n'écrit que dans `public_html/`.** Hostinger y récupère la branche `site`, qui ne contient que le dossier `out/` (plus `version.txt`) ; il ne peut pas atteindre `private/`. La suppression des fichiers retirés de la branche a été vérifiée une fois, le 28/11/2026, après le déploiement de la PR n° 34 (`a242ba9`) : les 4 fichiers renommés de la photo (`/images/awad-ahmed-200|320.avif|webp`) répondent 404, les 4 nouveaux (`awad-200|320`) répondent 200. C'est un constat ponctuel, sur ce seul déploiement ; aucun secret n'est concerné, puisqu'ils sont dans `private/`.
- `private/` est créé **une seule fois** : Awad dépose `config.php` (droits 600) avec le gestionnaire de fichiers de hPanel. La clé Resend n'est jamais écrite dans le dépôt, dans GitHub ni dans cette conversation. `contact.sqlite` et le journal sont créés automatiquement par le script au premier envoi (droits 600).
- Un test de déploiement vérifie que `/_app/ContactHandler.php`, `/private/config.php` et `/.htaccess` répondent **403 ou 404**.

### 8.2 Étapes

1. **Une fois, avec l'accord d'Awad** : créer le site Hostinger du portfolio (adresse temporaire, qui devient `SITE_URL` au build) ; Awad crée `private/config.php` comme ci-dessus.
2. **À chaque push sur `main`** (fusion d'une pull request) : CI ; si tout est vert, le job `deployer` de `ci.yml` refait le build, écrit `version.txt` (commit publié) et pousse `out/` sur la branche `site`. Aucun secret Hostinger dans GitHub.
3. Hostinger récupère la branche `site` par son déploiement Git automatique (dépôt `AwadAhmedDev/portfolio`, branche `site`, activé : lu dans l'API Hostinger le 27/11/2026). Pour un site statique, Hostinger ne construit rien.
4. Le job attend que `version.txt` en ligne corresponde au commit (10 minutes au plus), puis contrôle les pages, la 404, les adresses interdites (403 ou 404) et l'en-tête CSP ; Lighthouse mesure ensuite le site.

### 8.3 Prérequis du build

- Node.js 22 (comme la CI de RepaTek).
- Accès réseau à `fonts.googleapis.com` et `fonts.gstatic.com` pendant le build (§5) ; en local, connexion internet nécessaire.
- Variable `SITE_URL` (adresse du portfolio) pour les adresses canoniques, le sitemap et l'origine attendue par `contact.php`.
- Aucun secret n'est nécessaire au build : la clé Resend n'existe que dans `private/config.php`.

---

## 9. Risques et compromis

| Risque | Mesure |
|---|---|
| Espace disque limité sur l'ordinateur d'Awad | Voir R7 ; Playwright, traitement des images et Docker restent en CI |
| Budget JavaScript serré (React + Next.js) | Composants serveur, pas de Radix, budget contrôlé en CI |
| CSP par empreintes sensible aux scripts de Next.js | Empreintes recalculées à chaque build ; meta en premier dans `<head>` ; test E2E sans violation de CSP |
| Déploiement Git de Hostinger : récupération parfois en retard (suppression des anciens fichiers constatée une fois, PR n° 34, `a242ba9`) | Sans risque pour les secrets (ils sont dans `private/`) ; le job `deployer` attend la bonne `version.txt` et échoue sinon (deux cas rencontrés, corrigés par un nouveau déploiement) |
| `REMOTE_ADDR` derrière le CDN de Hostinger | Adresse du visiteur visible dans les journaux d'accès (contrôle d'Awad du 28/11/2026) ; selon Hostinger, PHP la reçoit dans `REMOTE_ADDR` ; non mesuré directement dans PHP (§6.1) |
| Resend sans domaine vérifié | Accepté pour le lancement ; P8 après achat d'un domaine |
| Textes à deux endroits | Règle R8 et tests de contenu |
| Ressources absentes (photo, CV) | Emplacements provisoires (C6) ; captures faites par Claude Code |

---

## 10. Décisions d'Awad (22/11/2026)

| # | Décision |
|---|---|
| R1 | Corrections de documents appliquées ; badges **neutres** pour les 3 catégories (C4) ; bouton principal d'À propos « **Voir mes projets** » (C15) |
| R2 | Images préparées une fois par un workflow GitHub, puis commitées |
| R3 | Polices `next/font/google`, variables, servies par le site |
| R4 | CSP par empreintes, sans `unsafe-inline` ni `unsafe-eval` |
| R5 | Formulaire : PHP + Resend, vers l'adresse du compte Resend d'Awad ; adresse de réception et clé API placées par Awad |
| R6 | Nouveau site Hostinger pour le portfolio, créé au moment du déploiement, avec accord |
| R7 | Développement sur l'ordinateur d'Awad, dépendances installées au début du développement (estimation 400 à 500 Mo, à mesurer) ; cache npm vidé le 22/11/2026 (3,78 Go libres) ; Playwright, traitement des images et Lighthouse en CI uniquement |
| R8 | Textes dans `content/`, modifiés dans le même commit que `contenus.md` |
| R9 | Ordre du détail des tests (C14) enregistré à part |
| R10 | Revue technique du 22/11/2026 validée : requêtes sans `Origin` refusées (403) ; limites de 3 demandes par 10 minutes et 10 par 24 heures par adresse IP, 50 par 24 heures au total ; journal des erreurs techniques gardé 30 jours au plus (1 Mo maximum) |
