# Architecture technique — Portfolio de Awad Ahmed

> Statut : **architecture validée par Awad le 22/11/2026** (décisions R1 à R9 ci-dessous). Aucun code n'est écrit.
> Sources : `requirements.md`, `sitemap.md`, `contenus.md`, `design.md`. En cas d'écart : `contenus.md` pour les textes, les maquettes et `design.md` pour la présentation, ce document pour la technique.

---

## 1. Choix généraux

| Domaine | Choix | Raison |
|---|---|---|
| Framework | **Next.js 16**, App Router, `output: 'export'`, `trailingSlash: true` | Décision D1 ; site entièrement statique, adresses en `/` final (`/projets/repatek/`) |
| Rendu | Composants serveur par défaut ; composants client **uniquement** pour le menu mobile, le bouton thème et le formulaire | Budget de 150 Ko de JavaScript par page |
| Styles | **Tailwind CSS 4** + variables CSS aux noms de shadcn/ui ; point de rupture personnalisé **1 100 px** | `design.md` §3 |
| Composants | Button, Badge, Card de shadcn/ui **recopiés sans Radix** (pas de `Slot`, `Sheet`, `RadioGroup`, `Checkbox`) ; boutons radio et case à cocher **natifs**, stylés avec `appearance: none` | Le HTML natif suffit et ne coûte aucun JavaScript |
| Formulaire | **Script PHP sur Hostinger + Resend** (R5, A7) | §6 |
| Hébergement | **Nouveau site Hostinger** du portfolio, adresse temporaire (R6, D6) | Offre Business, PHP 8.3 (curl, SQLite vérifiés le 22/11/2026) |
| Déploiement | **GitHub Actions** : build, archive zip, envoi par l'API Hostinger, comme RepaTek | Méthode déjà en service sur le compte |

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
├── public/
│   ├── images/                   images déjà optimisées (AVIF + WebP, plusieurs largeurs)
│   ├── cv/                       les 3 PDF, quand ils sont fournis
│   ├── contact.php               point d'entrée du formulaire
│   └── .htaccess                 404, sécurité, cache, HTTPS
├── php/ContactHandler.php        logique PHP testable
├── scripts/
│   ├── csp-hashes.mjs            après le build : empreintes des scripts de chaque page
│   └── js-budget.mjs             contrôle du budget de 150 Ko par page
├── tests/
│   ├── unit/                     Vitest
│   ├── php/                      tests du script PHP (CI)
│   └── e2e/                      Playwright (CI uniquement)
└── .github/workflows/
    ├── ci.yml                    lint, types, tests, build, budget, liens, E2E
    ├── deploy.yml                envoi vers Hostinger si la CI est verte
    └── images.yml                manuel : prépare les images
```

## 3. Responsabilités

- **`app/`** : routes, métadonnées et assemblage ; aucun texte écrit en dur.
- **`components/`** : affichage, sans données propres. Le gabarit de fiche lit un projet et affiche ses variantes d'après les données (pas de site, pas de code, mention d'équipe, tableau Lighthouse partiel ou absent, schéma du template).
- **`content/`** : seule source des textes et des chiffres **dans le code**, recopiée mot pour mot de `contenus.md` (R8).
- **`lib/`** : calculs et outils.
- **`public/`** : fichiers servis tels quels.
- **`php/`** : code serveur, inclus par `contact.php`.
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

---

## 5. Images, polices et thème

### Images (R2) : préparées une fois, puis commitées
- Un workflow GitHub **manuel** (`images.yml`) transforme les captures et la photo en **AVIF + WebP**, en 3 largeurs, et les ajoute au dépôt.
- Rien à installer sur l'ordinateur d'Awad ; builds rapides.
- Affichage : composant `<Picture>` (`<picture>` + `srcset`, dimensions fixées, chargement différé hors du premier écran) ; `next/image` n'optimise pas les images en export statique.
- Limite : relancer le workflow quand une capture change.

### Polices (R3) : `next/font/google`, polices variables
- Inter et JetBrains Mono en **police variable**, alphabet **latin** seulement, téléchargées au build et **servies par le site** (aucune requête vers Google), `font-display: swap`.
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

Protections du script :
- `POST` seulement, depuis l'origine du portfolio (contrôle de l'en-tête `Origin`).
- Validation serveur de chaque champ (longueurs, e-mail, valeurs autorisées).
- Champ piège et temps minimum de remplissage.
- Limite de demandes par adresse IP, dans un fichier SQLite **hors du dossier public** ; IP enregistrée sous forme d'empreinte, effacée après 24 h.
- En-têtes de l'e-mail nettoyés (aucun retour à la ligne), message en texte brut.
- Clé Resend et adresse de réception dans un fichier de configuration **hors du dossier public** (`…/domains/<site>/config/contact.php`), placé une seule fois par Awad, jamais dans le dépôt, non écrasé par le déploiement.
- Aucun message conservé sur le serveur.
- Réglage PHP du site : `expose_php` désactivé.

### CSP (R4) : empreintes par page
- Next.js insère dans chaque page plusieurs petits scripts différents d'une page à l'autre.
- Après le build, `scripts/csp-hashes.mjs` calcule les empreintes des scripts de chaque page et ajoute `<meta http-equiv="Content-Security-Policy">` avec `script-src 'self' 'sha256-…'`, **sans `unsafe-inline` ni `unsafe-eval`**.
- Le `.htaccess` envoie en plus une CSP générale : `default-src 'self'`, `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`. Les deux s'appliquent ensemble.
- Autres en-têtes (`.htaccess`) : `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `X-Frame-Options: DENY`, HTTP vers HTTPS, `ErrorDocument 404 /404.html`, cache long pour `/_next/static/`, court pour les pages HTML.

---

## 7. Tests et CI (`ci.yml`)

| Étape | Outil | En local ? |
|---|---|---|
| Lint, format, types | ESLint, Prettier, `tsc` | Oui |
| Tests unitaires (données, total de 185, règles de contenu, dates) | Vitest | Oui |
| Tests du script PHP | PHP en ligne de commande | Non (CI) |
| Build et export | `next build` | Oui |
| Empreintes CSP, budget JavaScript | `scripts/*.mjs` | Oui |
| Liens internes et externes | lychee (LinkedIn répond 999 : exclu) | Non (CI) |
| Bout en bout : menu, thème sans flash, clavier, formulaire (envoi simulé), accessibilité (axe) | Playwright + axe-core | **Non (CI uniquement)** |
| Lighthouse | Lighthouse CI sur le site en ligne, après déploiement | Non |

---

## 8. Build et déploiement

1. **Une fois, avec l'accord d'Awad** : créer le site Hostinger du portfolio (adresse temporaire, qui devient `SITE_URL` au build) ; Awad place le fichier de configuration du formulaire hors du dossier public.
2. **À chaque push sur `main`** : CI ; si tout est vert, `deploy.yml` archive `out/` (avec `contact.php` et `.htaccess`) et l'envoie par l'API Hostinger (secret `HOSTINGER_API_TOKEN`), comme RepaTek.
3. Pas d'envoi automatique Hostinger depuis Git : pour un site statique, Hostinger ne construit rien.
4. Après le déploiement : contrôle de réponse du site, puis Lighthouse.

---

## 9. Risques et compromis

| Risque | Mesure |
|---|---|
| Espace disque limité sur l'ordinateur d'Awad | Voir R7 ; Playwright, traitement des images et Docker restent en CI |
| Budget JavaScript serré (React + Next.js) | Composants serveur, pas de Radix, budget contrôlé en CI |
| CSP par empreintes sensible aux scripts de Next.js | Empreintes recalculées à chaque build ; test E2E sans erreur de console |
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
