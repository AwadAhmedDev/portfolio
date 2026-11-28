# Roadmap technique — Portfolio d'Awad (« Awad Dev »)

> Statut : **proposition du 23/11/2026, auditée et corrigée le 23/11/2026 (décisions RM1 à RM6 intégrées), à valider par Awad.** Mise à jour du 28/11/2026 d'après l'audit final du 27/11/2026 et les vérifications ciblées qui ont suivi.
> Rôle : suivre le développement **réel** du portfolio, lot par lot : ce qui est fait, ce qui reste, ce qui bloque, et quand un lot peut être déclaré terminé.
> Ce document ne remplace aucun document validé : en cas d'écart, `contenus.md` fait foi pour les textes, les maquettes et `design.md` pour la présentation, `architecture.md` pour la technique.

---

## 1. Contexte

- Portfolio professionnel d'Awad (nom public « Awad Dev », décision du 26/11/2026), développeur Full Stack JavaScript / TypeScript. Site **100 % en français**, statique, hébergé sur Hostinger.
- Phases 1 à 3 (Product Discovery, Conception, Architecture) **validées le 22/11/2026**. Phase 4 (Développement) **commencée avec l'accord d'Awad**.
- Code sur `main` (la branche `phase-4-developpement` y a été fusionnée) ; chaque changement passe par une pull request. Site en ligne depuis le 23/11/2026 ; commit en production le 27/11/2026 : `24233db` (`version.txt`).
- Stack réellement installée :

| Élément | Version | Remarque |
|---|---|---|
| Next.js | 16.4.6 | App Router, `output: 'export'`, `trailingSlash: true` |
| React / React DOM | 19.3.1 | Composants serveur par défaut ; 4 composants client |
| TypeScript | ~5.9.3 | `strict`, `noUncheckedIndexedAccess` |
| Tailwind CSS | 4.3.x | `@theme`, point de rupture `wide` = 1 100 px |
| shadcn/ui | non installé | Aucun composant recopié : boutons, badges et puces sont de simples classes Tailwind (`components/ui/styles.ts`) ; seuls les noms des variables CSS reprennent ceux de shadcn/ui (écart avec `architecture.md` §1, voir §10) |
| Tests | Vitest 5, PHP en ligne de commande (CI) | Playwright, axe, lychee et Lighthouse **en CI uniquement** (R7) ; PHP n'est pas installé sur l'ordinateur d'Awad |

## 2. Références

| Document | Contenu |
|---|---|
| `CLAUDE.md` | Règles de travail, confidentialité, contraintes de disque |
| `docs/product-discovery.md` | Faits sur Awad et ses 6 projets, décisions D1 à D8 |
| `docs/requirements.md` | Exigences EF-1 à EF-11, ENF-1 à ENF-9, critères d'acceptation (§9) |
| `docs/sitemap.md` | Pages, adresses, navigation, décisions S1 à S7 |
| `docs/user-flows.md` | Parcours des visiteurs, P1 à P8 |
| `docs/contenus.md` | Textes définitifs, décisions T1 à T12 |
| `docs/design.md` | Règles visuelles, composants, gabarits, décisions C1 à C19 |
| `docs/architecture.md` | Choix techniques, PHP, CSP, budget JS, déploiement, décisions R1 à R10 |

## 3. Règles de validation

1. **Un lot n'est « terminé » qu'après une vérification réelle** (commande, test, affichage dans le navigateur, mesure), jamais parce que ses fichiers existent.
2. **Chaque lot terminé est validé par Awad** avant de commencer le lot suivant. Les lots déjà avancés ne sont pas recommencés : on termine ce qui manque.
3. **Aucune fonctionnalité en plus** de ce que décrivent les documents validés ; aucune décision métier modifiée ; les **6 projets validés** sont conservés tels quels.
4. **Aucune information inventée** : chaque texte vient de `contenus.md`, chaque chiffre de `content/projets.ts`, lui-même recopié des documents (R8).
5. **Budget JavaScript : 150 Ko = 153 600 octets par page**, mesurés en gzip niveau 9, chunks partagés compris (`architecture.md` §7.1). Il ne change pas sans l'autorisation d'Awad. Chaque nouvelle page ou fonctionnalité est mesurée.
6. **Aucun commit, push, déploiement, installation ou modification de document sans l'accord d'Awad.**
7. **Aucune opération sur Hostinger** (création de site, envoi de fichiers, réglage) **sans l'accord explicite d'Awad** (RM6). Déploiement autorisé par Awad le 23/11/2026 : chaque mise en ligne passe par une fusion dans `main` qu'il valide.
8. **Ne pas confondre deux sortes de chiffres** : les **185 tests distincts** sont ceux des **6 projets présentés** (contenu du site, `design.md` §7.1) ; les **35 tests Vitest**, les **29 vérifications PHP** et les **17 tests de bout en bout** sont les tests **du portfolio lui-même** (qualité de ce dépôt). Les seconds n'apparaissent jamais sur le site.

### Décisions d'Awad du 23/11/2026 (audit de la roadmap)

| # | Sujet | Décision |
|---|---|---|
| RM1 | Prettier | Formatage **autorisé**, après identification des fichiers et vérification de la configuration ; **intervention séparée** (lot 1) |
| RM2 | Contact sans JavaScript | **Conserver** le message actuel « Le formulaire a besoin de JavaScript. Vous pouvez aussi m'écrire sur LinkedIn. » et **l'ajouter à `contenus.md`** (lot 8) |
| RM3 | Erreurs du formulaire | **Recommandé** : effacer le message d'erreur d'un champ dès que ce champ redevient valide (lot 8) |
| RM4 | Image Open Graph | **Composition graphique sobre**, conforme à l'identité visuelle (piste A) (lot 10) |
| RM5 | Lecteur d'écran | **NVDA avec Firefox sous Windows** (lot 12) |
| RM6 | Hostinger | **Aucune création de site ni opération de déploiement sans accord explicite** (lot 14) |

### Signification des états

| État | Sens |
|---|---|
| **Terminé** | Tout le périmètre du lot est en place **et** vérifié ; reste seulement la validation d'Awad |
| **En cours** | Une partie est faite et vérifiée ; il reste des tâches |
| **À faire** | Rien n'est commencé |
| **Bloqué** | La suite attend une ressource ou une décision qui ne dépend pas de Claude Code |

## 4. Avancement global (mis à jour le 28/11/2026)

> Le tableau ci-dessous fait foi ; les cases à cocher des lots détaillés (§5) reflètent l'état au 28/11/2026.
> Décisions ajoutées depuis : logo « A » évidé avec chevron, nom public « Awad Dev » (nom complet seulement dans les mentions légales, décision du 26/11/2026), image d'aperçu fixe, captures et vidéos par workflow, déploiement autorisé par Awad le 23/11/2026.

État vérifié le 27/11/2026 (audit final) : Prettier, lint, types et **35 tests Vitest** passent en local ; en CI (exécution 46076175395, commit `24233db`) : **29/29 vérifications PHP**, **17 tests de bout en bout** (88 exécutions réussies, 23 ignorées et justifiées, sur Chromium, Firefox et WebKit), build avec CSP et budget, liens, puis déploiement et Lighthouse (99 à 100). Site en ligne contrôlé : 11 pages en 200, 404, fichiers internes en 403 ou 404, 6 en-têtes de sécurité, HTTPS, compression. Budget le plus chargé : accueil, **152 611 octets (marge 989)**.

| Lot | Nom | État | Ce qui manque surtout |
|---|---|---|---|
| 1 | Fondations techniques | **Terminé** | Prettier configuré (120 caractères, `docs/` exclus) ; `format:check`, lint et types passent (vérifié le 27/11/2026) |
| 2 | Structure globale | **En cours** | Implémenté ; E2E du menu vert en CI ; à noter : thème sombre à 360 px et zones de 48 px du menu |
| 3 | Page d'accueil | **Terminé** | Photo d'Awad en place (412 px, provisoire) ; une version d'au moins 640 px est attendue |
| 4 | Données et présentation des projets | **Terminé** | 10 captures et 15 écrans du parcours en images, AVIF + WebP |
| 5 | Études de cas (6 fiches) | **En cours** | Fiches en étude de cas et parcours en images faits ; nouvelle mesure Lighthouse des projets (eMatériel mobile non relevé) |
| 6 | Page Projets | **En cours** | 2 colonnes à 768 px et 3 à 1 100 px vérifiées ; 360, 1 024 et 1 440 px à noter |
| 7 | Page À propos | **Bloqué** | Les 3 CV en PDF (photo en place) |
| 8 | Page Contact | **En cours** | Un seul critère ouvert : `REMOTE_ADDR` non mesuré directement dans PHP (adresse du visiteur vue dans les journaux d'accès le 28/11/2026) |
| 9 | Pages institutionnelles | **Terminé** | Adresse de Hostinger revérifiée ; 404 contrôlée en production (vérifié le 27/11/2026) |
| 10 | SEO | **Terminé** | Canonique, Open Graph, Twitter, JSON-LD, image d'aperçu en ligne ; **indexation bloquée par Hostinger** sur l'adresse provisoire (`robots.txt` remplacé par son CDN) jusqu'à l'achat d'un domaine |
| 11 | Images et optimisation | **En cours** | Workflow et `Picture` faits ; photo plus grande ; test « image qui ne charge pas » à faire |
| 12 | Responsive et accessibilité | **En cours** | axe sur les 11 pages en CI ; zoom 200 %, clavier page par page, NVDA (menu, formulaire) et largeurs dans les deux thèmes à noter |
| 13 | Tests et audits | **En cours** | CI complète et verte, audits faits le 27/11/2026 ; reste la comparaison budget mesuré / taille transférée |
| 14 | Déploiement | **En cours** | En ligne et contrôlé ; deux contrôles ouverts : `REMOTE_ADDR` mesuré directement (voir lot 8) et `expose_php` |

### Budget JavaScript mesuré (build local du commit `24233db`, 27/11/2026, gzip niveau 9)

| Page | Octets | Marge |
|---|---:|---:|
| Accueil | 152 611 | 989 |
| Projets | 148 067 | 5 533 |
| 6 fiches | 147 390 à 149 986 | ≥ 3 614 |
| À propos | 148 530 | 5 070 |
| Contact | 147 683 | 5 917 |
| Mentions légales | 144 899 | 8 701 |
| 404 | 143 710 | 9 890 |

Mesures du 23/11/2026 : le formulaire coûtait 2 842 octets et la base React + Next.js environ 131 652 octets. La marge la plus faible est désormais celle de l'**accueil (989 octets)** : tout ajout sur l'accueil doit d'abord libérer de la place.

---

## 5. Lots détaillés

### Lot 1 — Fondations techniques

- **Objectif** : un projet Next.js statique, typé strictement, avec les variables du design system, les polices et les styles globaux.
- **État** : **Terminé** : `format:check`, lint et types passent (vérifié le 27/11/2026) ; reste la validation d'Awad.
- **Fichiers** : `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `vitest.config.ts`, `.gitignore`, `app/globals.css`, `app/layout.tsx`, `lib/theme-script.ts`.
- **Dépendances** : aucune.
- **Tâches**
  - [x] Next.js 16 en export statique, `trailingSlash`, images non optimisées, `poweredByHeader: false`.
  - [x] TypeScript `strict` + `noUncheckedIndexedAccess`, alias `@/*`.
  - [x] Variables des deux thèmes (`design.md` §3.1) aux noms de shadcn/ui ; point de rupture 1 100 px (C5).
  - [x] Inter et JetBrains Mono par `next/font/google`, variables, latin (R3).
  - [x] Styles de base : focus de 3 px décalé de 3 px, `scroll-margin-top: 88px`, `prefers-reduced-motion`.
  - [x] Script du thème dans `<head>`, sans flash (EF-9).
  - [x] **Formatage Prettier (RM1)** : `.prettierrc.json` (120 caractères) et `.prettierignore` (dont `docs/`) en place ; `npm run format:check` passe (vérifié le 27/11/2026).
- **Critères d'acceptation** : lint, types et `format:check` sans erreur ; aucun document de `docs/` modifié par le formatage ; aucune couleur écrite en dur hors de `globals.css` ; polices servies par le site.
- **Tests** : `npm run lint`, `npm run typecheck`, `npm run format:check`.
- **Risques** : le build échoue sans accès à Google Fonts (voulu, `architecture.md` §5) ; une mise à jour de Next.js peut changer les scripts intégrés (CSP recalculée à chaque build).
- **Terminé quand** : les trois commandes passent, puis validation d'Awad.

### Lot 2 — Structure globale

- **Objectif** : en-tête, navigation ordinateur et mobile, pied de page, lien d'évitement et styles partagés, communs à toutes les pages.
- **État** : **En cours** : implémenté ; E2E du menu vert en CI ; contrôles manuels en partie notés.
- **Fichiers** : `components/layout/Header.tsx`, `NavLiens.tsx`*, `MobileMenu.tsx`*, `ThemeToggle.tsx`*, `Footer.tsx`, `components/ui/styles.ts`, `components/ui/icones.tsx`, `content/site.ts` (* = composant client).
- **Dépendances** : lot 1.
- **Tâches**
  - [x] En-tête fixe de 64 px : logo (« A » évidé et chevron) et « Awad », Accueil · Projets · À propos · Contact avec trait animé sous la page en cours, bouton CV (si le PDF existe), bouton thème (EF-1, `design.md` §4.1).
  - [x] Page en cours : `aria-current="page"`.
  - [x] Menu mobile : `aria-expanded` / `aria-controls`, « Ouvrir le menu » / « Fermer le menu », Échap, clic en dehors, clic sur un lien, focus rendu au bouton.
  - [x] Pied de page (`design.md` §4.2), liens de 44 px.
  - [x] Lien « Aller au contenu » en premier.
  - [x] Boutons, lien texte, badge neutre (C4), puce de technologie.
  - [x] Bouton CV de l'en-tête et lien CV du pied de page : affichés **seulement quand le PDF français existe** (EF-7).
  - [x] Liens externes dans le même onglet (A4) : aucun `target="_blank"` dans le code (vérifié le 23/11/2026).
  - [ ] Contrôles à refaire et noter : en-tête et menu à **360 px**, **fermeture par un clic en dehors**, deux thèmes, zones cliquables de 44 px (48 px dans le menu). Noté le 27/11/2026 : à 360 px en mode clair, aucun débordement, en-tête de 65 px (64 + bordure) ; fermeture par un clic en dehors couverte par l'E2E. Restent : thème sombre à 360 px, hauteur de 48 px des liens du menu.
- **Critères d'acceptation** : conformes à EF-1 et `design.md` §4 ; aucun débordement à 360 px ; menu fermé par clic, Échap, clic en dehors et clic sur un lien, focus rendu au bouton ; navigation au clavier sans piège.
- **Tests** : vérifié partiellement dans le navigateur sur l'export réel (Échap, focus rendu, 375 px). À couvrir en E2E au lot 13 (menu : les 4 façons de fermer, `aria-expanded`, focus).
- **Risques** : le bouton CV n'apparaît qu'à la réception du PDF (lot 7) ; recontrôler alors l'en-tête mobile à 360 px.
- **Terminé quand** : le test E2E du menu passe en CI et les contrôles ci-dessus sont notés, puis validation d'Awad.

### Lot 3 — Page d'accueil

- **Objectif** : l'accueil de `contenus.md` §1 et `design.md` §5.1.
- **État** : **Terminé** : photo réelle en place et mesurée (Lighthouse accueil 99 à 100) ; photo provisoire de 412 px, à remplacer par une version d'au moins 640 px.
- **Fichiers** : `app/page.tsx`, `content/pages.ts`, `lib/stats.ts`, `components/projet/ProjectCard.tsx`, `components/ui/Provisoire.tsx`.
- **Dépendances** : lots 1, 2, 4 ; photo (ressource) ; lot 11 pour l'image finale.
- **Correspondance avec la demande de roadmap** : les sections réellement validées sont **premier écran, projets clients, preuves en chiffres, bloc freelance, rappel du contact**. Les « compétences » sont sur la page **À propos** (EF-4) et la « méthodologie » correspond au bloc **« Comment je travaille »** du bloc freelance. Aucune section n'est ajoutée.
- **Tâches**
  - [x] Premier écran : petit titre, `h1`, 3 puces, phrase, lieu et disponibilité, 2 boutons.
  - [x] 3 projets clients (S3) et « Voir les 6 projets ».
  - [x] Preuves en chiffres calculées : 6 projets dont 5 en ligne, 185 tests (17 + 45 + 16 + 63 + 24 + 20), intégration continue, 2 sites à 100 / 100.
  - [x] Bloc freelance : 6 réalisations, 4 étapes en `ol`, deux parcours (premier site, refonte), « Inclus dans chaque projet » et maintenance en option, bouton vers `/contact/?demande=freelance` en haut et en bas du bloc.
  - [x] Bloc « Vous êtes… » (recruteur ou porteur de projet) sous le premier écran.
  - [x] Rappel du contact.
  - [x] Photo d'Awad à la place de l'emplacement provisoire (affichée en rond, 200 et 320 px) (vérifié le 27/11/2026).
- **Critères d'acceptation** : textes identiques à `contenus.md` §1 ; aucun chiffre écrit en dur dans la page ; photo sous les boutons sur mobile, 200 px au plus (C7).
- **Tests** : Vitest (total 185, ordre C14, 5 sites en ligne, 2 sites à 100) ; vérification visuelle ; E2E (lot 13).
- **Risques** : la photo est l'image principale du premier écran : son poids et ses dimensions pèsent sur le LCP mobile.
- **Terminé quand** : photo réelle en place et mesurée, puis validation d'Awad.

### Lot 4 — Données et présentation des projets

- **Objectif** : une seule source typée pour les 6 projets et des cartes conformes à EF-3.
- **État** : **Terminé** : données, captures et parcours en images en place (vérifié le 27/11/2026).
- **Fichiers** : `content/projets.ts`, `lib/stats.ts`, `components/projet/ProjectCard.tsx`, `components/projet/SchemaVignette.tsx`, `tests/unit/donnees.test.ts`.
- **Dépendances** : lot 1 ; lot 11 pour les captures.
- **Tâches**
  - [x] Type `Projet` et les 6 projets dans l'ordre A2, textes recopiés de `contenus.md`.
  - [x] Variantes pilotées par les données : pas de code (I Make My World), pas de site (template), mention d'équipe (Solidays), « Non relevé » (eMatériel).
  - [x] Carte : badge neutre, début, nom, phrase, 5 technologies au plus, liens existants seulement, lien complété du nom du projet pour les lecteurs d'écran.
  - [x] Vignette SVG du template (`design.md` §5.4).
  - [x] Captures ordinateur et mobile des 5 sites en ligne, faites par le workflow Captures, passées par le workflow Images.
  - [x] Chaque capture déclarée avec son texte alternatif dans `content/images.ts` (test `images.test.ts` vert).
- **Critères d'acceptation** : 12 tests de données verts ; aucune capture montrant une donnée personnelle (clients des sites, comptes) ; capture et texte alternatif déclarés ensemble.
- **Tests** : Vitest ; contrôle du workflow des images (lot 11) qui refuse une image non déclarée.
- **Risques** : une capture peut montrer des données réelles (rendez-vous, comptes) : prendre uniquement les pages publiques d'accueil.
- **Terminé quand** : les 10 captures sont en place et vérifiées, puis validation d'Awad.

### Lot 5 — Études de cas (6 fiches)

- **Objectif** : les 6 fiches de `contenus.md` §3, avec un seul gabarit (`architecture.md` §4.1).
- **État** : **En cours** : fiches en étude de cas, captures et parcours en images en ligne ; reste la nouvelle mesure Lighthouse des projets.
- **Fichiers** : `app/projets/[slug]/page.tsx`, `components/projet/SchemaTemplate.tsx`, `components/projet/TableauLighthouse.tsx`, `content/projets.ts`, `lib/texte.tsx`.
- **Dépendances** : lots 2 et 4 ; lot 11 pour les captures.
- **Correspondance avec la demande de roadmap** : les rubriques validées sont **Le projet, Mon rôle, Fonctionnalités, Technologies, Choix techniques, Qualité** (`contenus.md` §3). « Contexte métier » et « problèmes et objectifs » sont couverts par *Le projet*, « périmètre d'intervention » par *Mon rôle*, « architecture technique » par *Technologies* et *Choix techniques* (et le schéma du template), « résultats vérifiables » par *Qualité*. **Aucune rubrique nouvelle n'est créée** : ce serait du contenu non validé.
- **Tâches**
  - [x] 6 adresses générées par `generateStaticParams`, `dynamicParams = false`, `notFound()`.
  - [x] Fil d'Ariane, en-tête de fiche, mentions haut et bas (code privé, pas de site, équipe de 3).
  - [x] Fiches en étude de cas (27/11/2026) : rôle et technologies en tête, contexte, architecture avec schéma, « Défis et solutions » numérotés 01 à 03, fonctionnalités clés, résultats (qualité, tableau Lighthouse en `table`, `caption`, `scope`), appel « Vous avez un projet similaire ? », projet suivant (ordre A2).
  - [x] Parcours en images des 5 sites en ligne (3 écrans légendés et une vidéo sans son chacun), en ligne (vérifié le 27/11/2026).
  - [x] Schéma HTML/CSS du template (C9, C11, C12) ; pas de tableau Lighthouse pour le template et Solidays.
  - [x] Captures réelles à la place des emplacements provisoires (lot 4).
  - [ ] Nouvelle mesure Lighthouse juste avant la mise en ligne (A3), dont les 3 scores mobile d'eMatériel, puis mise à jour de `contenus.md` et `content/` dans le même commit (R8).
  - [x] Accord du client d'I Make My World sur le texte de sa fiche (accord total confirmé par Awad le 26/11/2026) (`design.md` §9).
- **Critères d'acceptation** : textes identiques à `contenus.md` §3 ; chaque score affiché avec sa date ; tableau lisible à 360 px sans défilement ; aucune couleur pour juger un score.
- **Tests** : Vitest (slugs, variantes) ; navigateur (6 fiches vérifiées sur l'export réel) ; E2E et axe (lot 13).
- **Risques** : des scores Lighthouse qui changent à la nouvelle mesure modifient aussi le chiffre « 2 sites à 100 / 100 » de l'accueil (test unitaire à mettre à jour en même temps).
- **Terminé quand** : captures en place, scores remesurés et datés, accord du client d'I Make My World, puis validation d'Awad.

### Lot 6 — Page Projets

- **Objectif** : les 6 cartes et l'accès aux fiches (`contenus.md` §2).
- **État** : **En cours** : implémenté ; contrôle des colonnes en partie noté.
- **Fichiers** : `app/projets/page.tsx`, `components/projet/ProjectCard.tsx`.
- **Dépendances** : lot 4.
- **Tâches**
  - [x] Titre, introduction, 6 cartes dans l'ordre A2, sans filtres.
  - [x] Classes de grille : 1 colonne, 2 à partir de 768 px, 3 à partir de 1 100 px.
  - [ ] Contrôler l'affichage réel à 360, 768, 1 024, 1 100 et 1 440 px (planches de contrôle à 768 et 1 024 px dans les maquettes). Noté le 27/11/2026 sur le site en ligne : 2 colonnes à 768 px, 3 à 1 100 px, aucun débordement. Restent 360, 1 024 et 1 440 px.
  - [x] « Un projet en tête ? » et « Me contacter ».
- **Critères d'acceptation** : EF-3 ; chaque carte mène à sa fiche ; liens « site » et « code » seulement s'ils existent ; nombre de colonnes conforme à chaque largeur.
- **Tests** : Vitest (données) ; navigateur ; E2E (6 cartes, 6 liens « Voir le détail » valides) ; lychee (lot 13) pour les liens externes.
- **Risques** : aucun propre au lot.
- **Terminé quand** : colonnes contrôlées et notées, E2E vert, puis validation d'Awad.

### Lot 7 — Page À propos

- **Objectif** : présentation, compétences, façon de travailler, parcours et CV (`contenus.md` §4).
- **État** : **Bloqué** par les 3 CV (la photo est en place).
- **Fichiers** : `app/a-propos/page.tsx`, `content/pages.ts`, `content/site.ts`, `components/ui/LiensCV.tsx`.
- **Dépendances** : lots 2 et 4 (liens vers les fiches) ; photo et CV (ressources) ; lot 11.
- **Tâches**
  - [x] Présentation (surtitre « À propos » et titre qui dit ce qu'Awad livre), compétences regroupées par domaine (6 groupes), phrase sous les compétences.
  - [x] « Ce que je garantis » (3 engagements, chacun avec une preuve calculée), « Comment je peux vous aider » (recruteurs, freelance), phrase sur les outils d'IA (D5).
  - [x] Parcours : formation (septembre 2025 – avril 2026) et projets datés, reliés aux fiches.
  - [x] Boutons « Voir mes projets » (C15) et « Me contacter ».
  - [x] Liens CV prêts : langue, format, taille, `hreflang` ; **rien n'est affiché tant qu'aucun PDF n'est fourni**.
  - [x] Photo réelle (vérifié le 27/11/2026).
  - [ ] 3 CV en PDF dans `public/cv/`, vérifiés sans e-mail ni téléphone personnels (EF-7), tailles renseignées.
- **Critères d'acceptation** : textes identiques à `contenus.md` §4 ; aucune section « langues » (S4) ; aucune expérience non validée ; **chaque lien CV ouvre le bon PDF** (`requirements.md` §9) et annonce sa vraie taille ; le lien français de l'en-tête et du pied de page apparaît.
- **Tests** : navigateur ; vérification de chaque PDF (contenu, métadonnées) avant publication ; lychee.
- **Risques** : les métadonnées d'un PDF peuvent contenir un nom complet ou une adresse e-mail : à contrôler avant publication.
- **Terminé quand** : photo et 3 CV en place et vérifiés, puis validation d'Awad.

### Lot 8 — Page Contact

- **Objectif** : le formulaire de `contenus.md` §5, son envoi par PHP + Resend et ses protections (`architecture.md` §6.1).
- **État** : **En cours** : fonctionnel ; un seul critère de fin ouvert (`REMOTE_ADDR` non mesuré directement).
- **Fichiers** : `app/contact/page.tsx`, `components/contact/ContactForm.tsx`*, `lib/validation.ts`, `public/contact.php`, `public/_app/ContactHandler.php`, `public/_app/.htaccess`, `tests/unit/validation.test.ts`, `tests/php/contact-handler.test.php`.
- **Dépendances** : lot 2 ; lot 14 (site Hostinger et `private/config.php`) pour l'envoi réel.
- **Tâches**
  - [x] Champs, étiquettes « (obligatoire) », 3 boutons radio natifs facultatifs (C16), case native, lien « En savoir plus » hors du libellé.
  - [x] Validation navigateur et serveur, mêmes règles ; messages de `contenus.md` §5.2, dont « trop long ».
  - [x] Les 6 états (`design.md` §5.3) : `aria-invalid`, focus sur le premier champ en erreur, `aria-busy`, `role="status"` / `role="alert"`, saisie conservée.
  - [x] `?demande=freelance` choisit « Projet freelance » (P4).
  - [x] PHP : `POST` seul (405), `Origin` stricte (403), `Sec-Fetch-Site`, 415, 413, 400, 422 ; champ piège et délai de 3 s (200 neutre) ; limites R10 (429 + `Retry-After`) ; empreinte HMAC de l'IP ; journal sans donnée personnelle ; réponse 503 si `config.php` manque.
  - [x] Aucune adresse e-mail d'Awad dans le code envoyé au navigateur.
  - [x] Message sans JavaScript affiché dans `<noscript>`, avec le lien LinkedIn (EF-6, `requirements.md` §8) ; **conservé tel quel (RM2)**.
  - [x] **Message sans JavaScript ajouté à `contenus.md` §5** (RM2), mot pour mot : « Le formulaire a besoin de JavaScript. Vous pouvez aussi m'écrire sur LinkedIn. » (vérifié le 27/11/2026).
  - [x] **Message d'erreur effacé dès que le champ redevient valide (RM3)**, testé par l'E2E « l'erreur d'un champ disparaît dès qu'il redevient valide (RM3) » (vert en CI) ; budget de la page Contact : 147 683 octets, marge 5 917 (vérifié le 27/11/2026).
  - [x] Envoi réel vérifié sur le site en ligne : message reçu dans la boîte d'Awad le 25/11/2026 (confirmé par Awad).
  - [ ] Vérifier que `REMOTE_ADDR` contient l'adresse du visiteur (`architecture.md` §6.1). Contrôle du 28/11/2026, fait par Awad : l'adresse IP publique du visiteur (relevée sur ifconfig.me) apparaît à l'identique dans les journaux d'accès Hostinger (ligne de `/a-propos/?test-ip=1`) ; la documentation de Hostinger indique que PHP reçoit normalement cette adresse dans `REMOTE_ADDR`. `$_SERVER['REMOTE_ADDR']` n'a **pas été mesuré directement** dans PHP : ce n'est pas une preuve expérimentale, la case reste donc ouverte. Le code garde `REMOTE_ADDR` (pas de `X-Forwarded-For`).
- **Critères d'acceptation** : critères « Fonctionnement » de `requirements.md` §9 pour le formulaire ; cas d'erreur de `requirements.md` §8.
- **Tests** : 7 tests Vitest de validation ; 29 vérifications PHP ; navigateur (erreurs, « envoi impossible », `?demande=freelance`) ; E2E avec envoi simulé (lot 13) ; envoi réel en production (lot 14).
- **Risques** : Resend sans domaine vérifié ne livre qu'à l'adresse du compte d'Awad (accepté) ; P8 (confirmation au visiteur) impossible avant l'achat d'un domaine.
- **Terminé quand** : message sans JavaScript reporté dans `contenus.md`, effacement des erreurs (RM3) fait et testé, budget respecté, E2E du formulaire vert, envoi réel reçu, `REMOTE_ADDR` vérifié, puis validation d'Awad.

### Lot 9 — Pages institutionnelles

- **Objectif** : mentions légales (`contenus.md` §6) et page 404 (`contenus.md` §7).
- **État** : **Terminé** : reste la validation d'Awad.
- **Fichiers** : `app/mentions-legales/page.tsx`, `app/not-found.tsx`, `public/.htaccess`, `scripts/serve-out.mjs`.
- **Dépendances** : lot 2 ; lot 14 pour le contrôle sur Apache.
- **Tâches**
  - [x] Mentions légales : éditeur particulier sans adresse (A11), hébergeur, données du formulaire, 12 mois (T10), Resend hors UE (T11), cookies, propriété ; texte limité à 760 px.
  - [x] 404 personnalisée : « 404 » décoratif masqué, 2 boutons, `noindex` ; sans attribut `style=` (compatible CSP).
  - [x] 404 servie avec le code HTTP 404 par le serveur local `serve-out.mjs`.
  - [x] Adresse de Hostinger revérifiée sur son site (`contenus.md` §6), le 28/11/2026.
  - [x] 404 contrôlée en production : une adresse inexistante répond 404 avec la page personnalisée (vérifié le 27/11/2026).
- **Critères d'acceptation** : textes identiques à `contenus.md` ; 404 avec le bon code en production.
- **Tests** : navigateur ; contrôle HTTP en production.
- **Risques** : mentions à mettre à jour quand Awad aura un SIRET (A11).
- **Terminé quand** : adresse de l'hébergeur revérifiée, 404 contrôlée en production, puis validation d'Awad.

### Lot 10 — SEO

- **Objectif** : `requirements.md` §5.
- **État** : **Terminé** pour le code ; l'indexation reste bloquée par Hostinger sur l'adresse provisoire.
- **Fichiers** : `app/layout.tsx`, métadonnées de chaque `page.tsx`, `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`.
- **Dépendances** : lots 3 à 9 ; conversion de l'image d'aperçu (lot 11) ; adresse du site (lot 14) pour `SITE_URL`. Canonique de l'accueil, balises Open Graph et JSON-LD peuvent être faits **avant** : seule l'image et la vraie `SITE_URL` attendent.
- **Tâches**
  - [x] Titre et description uniques de chaque page, repris de `contenus.md`.
  - [x] Adresse canonique sur les pages Projets, fiches, À propos, Contact et Mentions.
  - [x] **Adresse canonique de l'accueil** présente en ligne (vérifié le 27/11/2026).
  - [x] `sitemap.xml` (11 adresses) et `robots.txt` (qui exclut `/contact.php` et `/_app/`) publiés sur la branche `site`. **En ligne, le CDN de Hostinger remplace ce `robots.txt`** par le sien (`User-agent: Googlebot / Disallow: /`) sur l'adresse provisoire (vérifié le 27/11/2026) : le site n'est pas indexable par Google tant qu'il n'a pas son propre domaine.
  - [x] Open Graph et Twitter : titre, description et image d'aperçu sur chaque page (vérifié le 27/11/2026).
  - [x] **Image d'aperçu (RM4)** : `apercu.png` 1 200 × 630, image fixe (choix d'Awad) ; LinkedIn, Facebook et Twitter la reçoivent bien en PNG (vérifié le 27/11/2026).
  - [x] JSON-LD `Person` sur l'accueil (nom « Awad », titre, LinkedIn, GitHub, sans e-mail), bloc de données non exécuté ; aucune violation de CSP (E2E).
  - [x] Build avec la vraie `SITE_URL` (variable GitHub) : adresses canoniques et sitemap en ligne pointent vers l'adresse du site.
- **Critères d'acceptation** : critère « `sitemap.xml`, `robots.txt`, adresses canoniques et aperçus Open Graph présents et valides » ; Lighthouse SEO 100.
- **Tests** : un test sur l'export (une canonique et les balises Open Graph par page) ; lychee ; Lighthouse SEO.
- **Risques** : l'adresse temporaire changera à l'achat d'un domaine (redirection 301 et canoniques, D6).
- **Terminé quand** : toutes les pages ont canonique et Open Graph, JSON-LD présent et sans violation de CSP, budget toujours respecté, puis validation d'Awad.

### Lot 11 — Images et optimisation

- **Objectif** : `architecture.md` §5 « Images » et `requirements.md` §6.
- **État** : **En cours** : workflow et `Picture` en place ; restent la photo plus grande et le contrôle « image qui ne charge pas ».
- **Fichiers prévus** : `.github/workflows/images.yml`, `components/Picture.tsx`, `images-source/` (non publié), `public/images/`, déclarations dans `content/`.
- **Dépendances** : lot 13 (le workflow tourne sur GitHub) ; les originaux : captures (faites par Claude Code), photo (fournie par Awad), source de l'image d'aperçu (lot 10). Le workflow peut être écrit **avant** l'arrivée des originaux. Les lots 3, 4, 5, 7 et 10 dépendent ensuite de ses résultats.
- **Tâches**
  - [x] Workflow `images.yml` : PNG et JPEG, noms contrôlés, métadonnées supprimées, AVIF ≈ 50 et WebP ≈ 75, largeurs 640 / 960 / 1 440 (captures) et 200 / 320 / 640 (photo), jamais d'agrandissement (test `images.test.ts`).
  - [x] Composant `Picture` : `<picture>` + `srcset`, dimensions fixées, chargement différé hors du premier écran, sans attribut `style=`.
  - [x] Image d'aperçu (RM4) : PNG 1 200 × 630 fixe, `public/apercu.png` (choix « image fixe » d'Awad).
  - [x] Emplacements `Provisoire` remplacés par `Picture` (accueil, À propos, cartes, fiches).
  - [ ] Image qui ne charge pas : texte alternatif visible, mise en page intacte (`requirements.md` §8).
  - [x] LCP et CLS mesurés en ligne par Lighthouse à chaque déploiement (accueil et fiche RepaTek ; CLS 0 le 27/11/2026).
- **Critères d'acceptation** : contrôles du workflow verts ; aucune image publiée avec ses métadonnées ; textes alternatifs de `contenus.md` §8 ; CLS ≤ 0,05.
- **Tests** : le workflow lui-même ; Lighthouse.
- **Risques** : `sharp` n'est installé que sur GitHub (R7) ; la photo d'Awad contient souvent des données GPS.
- **Terminé quand** : toutes les images sont en place par le workflow, vérifiées, puis validation d'Awad.

### Lot 12 — Responsive et accessibilité

- **Objectif** : `requirements.md` §3 et §4, `design.md` §6 : WCAG 2.2 AA.
- **État** : **En cours** : contrôles automatiques faits ; contrôles manuels restants.
- **Fichiers** : tous les composants et pages.
- **Dépendances** : lots 2 à 9 ; lot 11 (images réelles) pour le contrôle final.
- **Tâches**
  - [x] Structure : un `h1` par page, zones `header` / `nav` / `main` / `footer`, `aria-labelledby` des sections.
  - [x] Contrastes des deux thèmes calculés et vérifiés (`design.md` §3.1), recalculés le 27/11/2026 pour le mode clair adouci.
  - [x] Pas de débordement à 375 px, menu mobile au clavier (vérifié dans le navigateur).
  - [ ] Affichage à 360, 390, 768, 1 024, 1 100 et 1 440 px, dans les deux thèmes, avec les vraies polices. Noté le 27/11/2026 en mode clair : 360, 768, 1 100 et 1 440 px sans débordement, contenu limité à 1 200 px ; aucun texte sous 12 px sur l'accueil à 360 px (seule mesure faite : autres pages et largeurs non mesurées). Restent 390 et 1 024 px et le thème sombre.
  - [ ] Zoom à 200 %.
  - [ ] Parcours complet au clavier sur chaque page.
  - [x] axe-core sans erreur sur chaque page (11 pages, Chromium, en CI).
  - [ ] **Lecteur d'écran : NVDA avec Firefox sous Windows (RM5)**, contrôle manuel du menu mobile, du formulaire (erreurs annoncées, confirmation annoncée) et d'une fiche. NVDA et Firefox sont installés ; contrôle fait en partie le 25/11/2026 (tableau §4) ; menu mobile et formulaire sous NVDA non notés.
  - [x] Firefox et Safari (ENF-9), via Playwright en CI (Firefox et WebKit), verts.
  - [x] **Règles d'écriture** (`design.md` §3.2) : espace insécable fine avant « : », insécable avant « ? » et dans « 24 h », dans `content/` ; contrôlées par le test « espaces insécables » (`donnees.test.ts`).
  - [ ] Sans JavaScript : tout le contenu reste lisible ; seuls le formulaire, le menu mobile et le thème en ont besoin (`requirements.md` §8). Sur mobile sans JavaScript, la navigation passe par le pied de page.
- **Critères d'acceptation** : critères « Qualité mesurée » de `requirements.md` §9 ; Lighthouse Accessibilité 100.
- **Tests** : Playwright + axe en CI ; contrôles visuels ; Lighthouse.
- **Risques** : Safari réel n'est pas disponible sur l'ordinateur d'Awad (WebKit de Playwright en CI comme approximation).
- **Terminé quand** : tous les contrôles ci-dessus sont faits et notés, puis validation d'Awad.

### Lot 13 — Tests et audits

- **Objectif** : la CI de `architecture.md` §7 et les audits avant la mise en ligne.
- **État** : **En cours** : CI complète et verte, audits faits le 27/11/2026 ; reste la comparaison budget mesuré / taille transférée.
- **Fichiers** : `tests/unit/*`, `tests/php/*`, `tests/e2e/*`, `.github/workflows/ci.yml`, `scripts/csp-hashes.mjs`, `scripts/js-budget.mjs`, `scripts/segments-plats.mjs`.
- **Dépendances** : lots 1 à 10 pour les E2E ; lot 14 pour Lighthouse et les contrôles en ligne.
- **Tâches**
  - [x] Tests unitaires : 35 tests Vitest (4 fichiers), verts en local et en CI (vérifié le 27/11/2026).
  - [x] Tests PHP : 29 vérifications.
  - [x] CSP : balise meta par page, empreintes, refus de `style=` et des attributs d'événement ; aucune violation constatée dans le navigateur.
  - [x] Budget JavaScript contrôlé après chaque build ; le build échoue au-delà de 153 600 octets.
  - [x] `ci.yml`, à chaque push et pull request : Node.js 22, `npm ci`, formatage, lint, types, Vitest, `npm audit`, tests PHP (**PHP 8.3**, la version de Hostinger), build avec `SITE_URL`, CSP, budget, lychee (LinkedIn exclu), E2E ; cache de `.next/cache`.
  - [x] E2E Playwright + axe (CI uniquement) : menu, thème sans flash, clavier, formulaire avec envoi simulé, aucune erreur de console ni violation de CSP sur chaque page (17 tests, Chromium, Firefox, WebKit).
  - [x] Contrôle des failles des dépendances dans la CI (`npm audit --audit-level=high`) et Dependabot (`requirements.md` §7) (`.github/dependabot.yml`) ; 0 vulnérabilité (vérifié le 27/11/2026).
  - [x] Audit de sécurité (vérifié le 27/11/2026) : 6 en-têtes de sécurité en production, `/_app/ContactHandler.php`, `/private/config.php`, `/.htaccess` et `/.git/config` en 403 ou 404, relecture du PHP.
  - [x] Audit SEO (lot 10) et Lighthouse en ligne sur l'accueil et la fiche RepaTek : ordinateur 100 partout, mobile 99 à 100 (vérifié le 27/11/2026). Les autres pages ne sont pas mesurées par Lighthouse.
  - [ ] Comparer une fois le budget mesuré au build avec la taille réellement transférée (`architecture.md` §7.1).
- **Critères d'acceptation** : CI verte sur chaque push ; aucun lien cassé ; aucune erreur de console ; scores de `requirements.md` §6.
- **Tests** : ce lot est lui-même la mise en place des tests.
- **Risques** : un site de projet hors ligne fait échouer lychee (comportement voulu, `requirements.md` §8) ; Playwright ne doit pas être installé sur l'ordinateur d'Awad (R7).
- **Terminé quand** : CI verte avec toutes ses étapes, audits faits et notés, puis validation d'Awad.

### Lot 14 — Déploiement

- **Objectif** : `architecture.md` §8.
- **État** : **En cours** : site en ligne et contrôlé ; deux contrôles ouverts (`REMOTE_ADDR` mesuré directement, `expose_php`).
- **Fichiers** : job `deployer` de `.github/workflows/ci.yml`, `README.md` ; sur le serveur : `private/config.php` (jamais dans le dépôt).
- **Dépendances** : lot 13 (CI verte) ; décision d'Awad sur la création du site.
- **Tâches**
  - [x] **Avec l'accord d'Awad** : site Hostinger du portfolio créé le 23/11/2026 (adresse temporaire, devenue `SITE_URL`).
  - [x] **Par Awad** : `private/config.php` déposé ; envoi réel reçu le 25/11/2026. Il contient les 5 réglages lus par `contact.php` : clé Resend (`resend_cle`), adresse de réception (`destinataire`), adresse d'expédition (`expediteur`), origine du site (`origine`) et clé HMAC (`cle_hmac`). **Consignes non vérifiées en production** : droits 600 sur le fichier et clé HMAC de 32 octets (ni les droits ni la longueur de la clé ne sont contrôlés par le code ou par un test).
  - [x] Déploiement sans jeton (remplace `HOSTINGER_API_TOKEN` et `deploy.yml`, jamais créés) : le job `deployer` de `ci.yml`, après un push sur `main` et une CI verte, publie `out/` sur la branche `site` ; Hostinger la récupère par son déploiement Git automatique (dépôt `AwadAhmedDev/portfolio`, branche `site`, activé : lu dans l'API Hostinger le 27/11/2026).
  - [x] Après déploiement (vérifié le 27/11/2026) : commit en ligne = `main` (`24233db`, CI verte), 242 fichiers identiques octet pour octet à la branche `site` (les 4 autres : `.php` et `.htaccess`, non téléchargeables par conception) ; HTTPS (redirection 301), 6 en-têtes de sécurité, 404, adresses interdites en 403 ou 404, compression (brotli, zstd), cache, aucun `X-Powered-By` (cet en-tête est retiré par `contact.php` lui-même).
  - [ ] `expose_php` désactivé (`architecture.md` §6.1) : **non vérifié** ; l'absence de `X-Powered-By` ne le prouve pas, puisque `contact.php` retire cet en-tête lui-même.
  - [ ] `REMOTE_ADDR` : Contrôle du 28/11/2026, fait par Awad : l'adresse IP publique du visiteur (relevée sur ifconfig.me) apparaît à l'identique dans les journaux d'accès Hostinger (ligne de `/a-propos/?test-ip=1`) ; la documentation de Hostinger indique que PHP reçoit normalement cette adresse dans `REMOTE_ADDR`. `$_SERVER['REMOTE_ADDR']` n'a **pas été mesuré directement** dans PHP : ce n'est pas une preuve expérimentale, la case reste donc ouverte. Le code garde `REMOTE_ADDR` (pas de `X-Forwarded-For`).
  - [x] Envoi réel d'un message : reçu le 25/11/2026 (confirmé par Awad).
  - [x] README du dépôt, sans donnée personnelle.
  - [x] `phase-4-developpement` fusionnée dans `main` par pull request, avec l'accord d'Awad.
- **Critères d'acceptation** : critères « Projet » et « Qualité mesurée sur le site en ligne » de `requirements.md` §9.
- **Tests** : contrôles automatiques après déploiement ; Lighthouse ; envoi réel.
- **Risques** : suppression des anciens fichiers par le déploiement Git non vérifiée ; récupération de la branche `site` parfois en retard (deux cas rencontrés, corrigés par un nouveau déploiement) ; `REMOTE_ADDR` non mesuré directement ; aucun secret ne doit passer par le dépôt, GitHub ou la conversation.
- **Terminé quand** : site en ligne, tous les contrôles en production passés, puis validation d'Awad.

---

## 6. Dépendances principales

```
Lot 1 ─▶ Lot 2 ─▶ Lot 4 ─▶ Lots 3, 5, 6
              └──────────▶ Lots 7, 8, 9
Lots 3 à 9 ─▶ Lot 10 (balises)          Lot 13 (CI) ─▶ Lot 11 (workflow des images)
Originaux (captures, photo, source de l'aperçu) ─▶ Lot 11 ─▶ fin des lots 3, 4, 5, 7, 10
Lots 1 à 13 terminés + accord d'Awad ─▶ Lot 14
Lot 14 (site + config.php) ─▶ fin du lot 8 (envoi réel), du lot 9 (404 sur Apache),
                               du lot 10 (vraie SITE_URL) et du lot 13 (Lighthouse, audits en ligne)
```

Le lot 12 suit tous les autres : ses contrôles finaux se font avec les vraies images et les vrais CV.

### Ordre d'exécution recommandé (mis à jour le 28/11/2026)

Les lots ont été réalisés et le site est en ligne depuis le 23/11/2026. Reste, dans cet ordre :

**A. Réalisable par Claude Code** (chaque intervention présentée avant et validée après) :
1. ~~Lot 2 : corriger `bouton.secondaire` (`components/ui/styles.ts`), resté sur `bg-background` après le mode clair adouci (boutons secondaires gris-bleu dans les cartes blanches).~~ **Terminé le 28/11/2026** : `bg-card` à la place de `bg-background` (fusion `8cebb95`, PR n° 32) ; rendu contrôlé en local dans les deux thèmes ; en ligne, CI de `main` verte, `version.txt` = `8cebb95` et classe `bg-card` servie.
2. Lots 2, 6 et 12 : noter les contrôles d'affichage manquants (360, 390, 1 024 et 1 440 px, thème sombre, liens du menu de 48 px).
3. Lot 13 : comparer une fois le budget mesuré au build avec la taille réellement transférée ; étendre Lighthouse à Projets, À propos et Contact si Awad le souhaite.
4. Lot 5 : nouvelle mesure Lighthouse des projets présentés, dont les 3 scores mobile d'eMatériel.
5. Accueil : libérer de la place dans le budget JavaScript (989 octets de marge) avant tout ajout, par exemple les témoignages.

**B. En attente de contenus ou de ressources d'Awad** : 3 CV en PDF (lots 2 et 7) ; photo d'au moins 640 px (lots 3, 7 et 11) ; témoignages des clients (facultatif).

**C. Compte ou intervention externe** : nom de domaine (débloque l'indexation par Google, le domaine d'envoi de Resend et la confirmation au visiteur, P8) ; mesure directe de `REMOTE_ADDR` dans PHP si Awad veut une preuve expérimentale (lots 8 et 14).

**D. Autorisation explicite d'Awad nécessaire** : chaque commit, push et fusion ; toute modification de document ; toute installation (dont `npm ci` sur son ordinateur) ; toute opération Hostinger (RM6).

## 7. Risques transversaux

| Risque | Mesure |
|---|---|
| Marge du budget JavaScript faible (989 octets sur l'accueil, 27/11/2026) | Mesure à chaque build (le build échoue au-delà) ; libérer de la place avant tout ajout sur l'accueil ; JSON-LD en bloc de données |
| CSP par empreintes sensible aux changements de Next.js | Empreintes recalculées à chaque build ; E2E sans violation de CSP |
| Défaut de l'export statique de Next.js 16 (noms des fichiers de préchargement) | `segments-plats.mjs` après chaque build ; à revoir à chaque mise à jour de Next.js |
| Textes à deux endroits (`contenus.md` et `content/`) | Règle R8 et tests de contenu |
| Espace disque limité (3,32 Go libres) | Playwright, `sharp` et Lighthouse en CI uniquement |
| Données personnelles dans les images ou les PDF | Métadonnées supprimées par le workflow ; PDF relus avant publication |
| Scores Lighthouse qui changent à la nouvelle mesure | Mise à jour des documents, des données et des tests dans le même commit |

## 8. Ressources (état au 28/11/2026)

| Ressource | Fournie par | Lots | État |
|---|---|---|---|
| Photo carrée (affichée en rond) | Awad | 3, 7, 11 | En place depuis le 26/11/2026 (412 px) ; version d'au moins 640 px attendue |
| 3 CV en PDF (français, anglais, allemand) | Awad | 2, 7 | **Manquants** |
| Clé Resend et adresse de réception (dans `private/config.php` uniquement) | Awad | 8, 14 | En place ; envoi réel reçu le 25/11/2026 |
| Accord pour créer le site Hostinger du portfolio | Awad | 14 | Obtenu le 23/11/2026 |
| Captures ordinateur et mobile des 5 sites, parcours en images | Claude Code | 4, 5, 11 | Faits (workflow Captures) |
| Image d'aperçu Open Graph (RM4) | Claude Code, validée par Awad | 10, 11 | Faite (image fixe, choix d'Awad) |
| Accord du client d'I Make My World sur sa fiche | Awad | 5 | Obtenu le 26/11/2026 |
| Nouvelle mesure Lighthouse des 5 sites | Claude Code | 5 | **À faire** |
| NVDA et Firefox | Installation avec l'accord d'Awad | 12 | NVDA et Firefox installés ; contrôle du menu mobile et du formulaire à noter |
| Nom de domaine | Awad (achat) | 10, 14 | **Non acheté** : indexation par Google bloquée sur l'adresse provisoire |

## 9. Conditions de mise en production

La mise en ligne a eu lieu le **23/11/2026**, avec l'accord d'Awad (RM6). Le tableau ci-dessous donne l'état de chaque condition au 28/11/2026.

| # | Condition | État |
|---|---|---|
| 1 | Lots 1 à 13 terminés et validés par Awad, contrôles notés | **Non** : lots 2, 5, 6, 7, 8, 11, 12 et 13 encore ouverts (§4) |
| 2 | CI verte sur le dernier commit (lint, format, types, Vitest, PHP, build, budget, CSP, liens, E2E, axe, failles des dépendances) | Oui (commit `24233db`) |
| 3 | Chaque page sous 153 600 octets de JavaScript, budget inchangé | Oui ; marge de l'accueil : 989 octets |
| 4 | Aucune violation de CSP ni erreur de console (E2E) | Oui |
| 5 | Aucun emplacement provisoire visible ; CV présents vérifiés, absents sans lien | Oui : aucun lien CV tant que les PDF manquent ; la photo est réelle mais provisoire (412 px) |
| 6 | Textes identiques à `contenus.md` ; faits validés par Awad ; Lighthouse remesuré et daté ; accord d'I Make My World | En partie : accord obtenu ; nouvelle mesure Lighthouse des projets à faire |
| 7 | Aucune adresse e-mail personnelle ni secret dans le dépôt, l'historique, le site, les images ou les PDF ; nom complet | Oui pour les e-mails et les secrets. Nom complet : **sur le site**, seulement dans les mentions légales, où la loi l'exige (décision du 26/11/2026) ; **dans le dépôt**, il reste dans l'auteur des commits de l'historique Git, l'identifiant GitHub `AwadAhmedDev` et six autres documents (§10) |
| 8 | Adresse de Hostinger revérifiée dans les mentions légales | Oui (28/11/2026) |
| 9 | Contrôle NVDA + Firefox fait et noté (RM5) | En partie : menu mobile et formulaire non notés |
| 10 | Accord explicite d'Awad pour créer le site et pour le premier déploiement | Oui (23/11/2026) |
| 11 | `private/config.php` déposé ; secret `HOSTINGER_API_TOKEN` | `config.php` déposé ; le secret n'est plus nécessaire (déploiement par Git, lot 14) |
| 12 | Fusion dans `main` par pull request, avec l'accord d'Awad | Oui |
| 13 | Contrôles de production du lot 14 (HTTPS, en-têtes, 404, adresses interdites, `expose_php`, `REMOTE_ADDR`, envoi réel) | **En partie** : tout est contrôlé sauf `REMOTE_ADDR`, non mesuré directement dans PHP (adresse du visiteur vue dans les journaux d'accès, lot 8), et `expose_php`, non vérifié |
| 14 | Lighthouse conforme à `requirements.md` §6 sur l'accueil et une fiche, ordinateur et mobile | Oui (27/11/2026) |
| 15 | Taille de JavaScript réellement transférée comparée une fois à la mesure du build | **Non** |

## 10. Écarts constatés entre `architecture.md` et le code (mis à jour le 28/11/2026)

Constats seulement : **aucune décision d'architecture n'est modifiée**. Chaque écart est à garder ou à corriger avec l'accord d'Awad.

| Prévu dans `architecture.md` | Réalité | Effet |
|---|---|---|
| §1 : Button, Badge, Card de shadcn/ui recopiés sans Radix | Aucun composant shadcn/ui recopié ni installé ; boutons, badges et puces en classes Tailwind (`components/ui/styles.ts`) ; seuls les noms des variables CSS reprennent ceux de shadcn/ui | Aucun sur le site ; zéro dépendance de plus |
| §1 : 3 composants client (menu mobile, thème, formulaire) | 4 : plus `NavLiens.tsx` (lien de la page en cours) | Coût compris dans le budget mesuré |
| §2 : `components/accueil/` (Hero, Chiffres…), `SkipLink`, `Breadcrumb`, `ProjectHero`, `Rubrique`, `ProjetSuivant`, `Button`, `Badge`, `Card`, `Alert` en fichiers séparés | Sections écrites directement dans les pages ; styles partagés dans `components/ui/styles.ts` | Aucun sur le site ; arborescence plus simple que prévu |
| §2 : `lib/format.ts` (dates au format français) et §7 : tests « dates » | Les dates sont écrites en toutes lettres dans `content/` (« juin 2026 ») ; pas de fichier ni de test de dates | EF-8 respecté par les textes ; pas de calcul de date |
| §2 et §8.2 : `deploy.yml`, archive envoyée par l'API Hostinger | Job `deployer` de `ci.yml`, branche `site`, déploiement Git de Hostinger, sans jeton | Aucun secret de déploiement dans GitHub ; `architecture.md` mis à jour le 28/11/2026 |
| — | `scripts/segments-plats.mjs`, `scripts/serve-out.mjs`, `scripts/captures.mjs`, `scripts/images.mjs` en plus ; workflow `captures.yml` | Défaut de Next.js 16 corrigé, serveur de contrôle local, captures et images préparées en CI |
| `CLAUDE.md` §4 : nom public « Awad Dev », nom complet seulement dans les mentions légales (26/11/2026) | « Awad Ahmed » reste écrit dans six autres documents : `requirements.md` (6 fois), `sitemap.md` (5), `design.md` (4), `contenus.md` (2), `product-discovery.md` (2), `user-flows.md` (1) ; non modifiés le 28/11/2026 | Aucun sur le site ; documents à mettre à jour plus tard, avec l'accord d'Awad |
