# Roadmap technique — Portfolio de Awad Ahmed

> Statut : **proposition du 23/11/2026, auditée et corrigée le 23/11/2026 (décisions RM1 à RM6 intégrées), à valider par Awad.**
> Rôle : suivre le développement **réel** du portfolio, lot par lot : ce qui est fait, ce qui reste, ce qui bloque, et quand un lot peut être déclaré terminé.
> Ce document ne remplace aucun document validé : en cas d'écart, `contenus.md` fait foi pour les textes, les maquettes et `design.md` pour la présentation, `architecture.md` pour la technique.

---

## 1. Contexte

- Portfolio professionnel de Awad Ahmed, développeur Full Stack JavaScript / TypeScript. Site **100 % en français**, statique, hébergé sur Hostinger.
- Phases 1 à 3 (Product Discovery, Conception, Architecture) **validées le 22/11/2026**. Phase 4 (Développement) **commencée avec l'accord d'Awad**.
- Code sur la branche `phase-4-developpement`, poussée sur GitHub (commit `b4f994f`). `main` ne contient que la documentation.
- Stack réellement installée :

| Élément | Version | Remarque |
|---|---|---|
| Next.js | 16.4.6 | App Router, `output: 'export'`, `trailingSlash: true` |
| React / React DOM | 19.3.1 | Composants serveur par défaut ; 4 composants client |
| TypeScript | ~5.9.3 | `strict`, `noUncheckedIndexedAccess` |
| Tailwind CSS | 4.3.x | `@theme`, point de rupture `wide` = 1 100 px |
| shadcn/ui | non installé | Conformément à `architecture.md` §1 : styles de Button, Badge et Card **recopiés sans Radix** (`components/ui/styles.ts`) |
| Tests | Vitest 5, PHP en ligne de commande | Playwright, lychee et axe prévus **en CI uniquement** (R7) |

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
7. **Aucune opération sur Hostinger** (création de site, envoi de fichiers, réglage) **sans l'accord explicite d'Awad** (RM6). À ce jour, **le déploiement n'est pas autorisé**.
8. **Ne pas confondre deux sortes de chiffres** : les **185 tests distincts** sont ceux des **6 projets présentés** (contenu du site, `design.md` §7.1) ; les **25 tests Vitest** et les **29 vérifications PHP** sont les tests **du portfolio lui-même** (qualité de ce dépôt). Les seconds n'apparaissent jamais sur le site.

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

## 4. Avancement global (mis à jour le 25/11/2026)

> Le tableau ci-dessous fait foi ; les cases à cocher des lots détaillés (§5) reflètent l'audit du 23/11/2026.
> Décisions ajoutées depuis : logo « AA » + « Awad » (nom complet partout ailleurs), image d'aperçu fixe, captures par workflow, déploiement autorisé par Awad le 23/11/2026.

État vérifié le 25/11/2026 : Prettier, lint, types, **34 tests Vitest**, **29 vérifications PHP**, build avec CSP et budget, liens et **tests E2E + axe** (Chromium, Firefox, WebKit) passent sur GitHub Actions ; site en ligne contrôlé (pages, 404, fichiers interdits, en-têtes, brotli). Budget JS le plus chargé : accueil, 148 487 octets (marge 5 113).

| Lot | Nom | État | Ce qui manque surtout |
|---|---|---|---|
| 1 | Fondations techniques | **Terminé** | Prettier configuré (120 caractères, documents exclus) et appliqué ; à valider par Awad |
| 2 | Structure globale | **Terminé** | Logo « AA » + « Awad », favicons, pied de page refait ; menu, 360 px et deux thèmes couverts par les tests E2E |
| 3 | Page d'accueil | **En cours · bloqué** | Photo d'Awad (silhouette provisoire en place) |
| 4 | Données et présentation des projets | **Terminé** | 10 captures réelles (workflow Captures), AVIF + WebP |
| 5 | Études de cas (6 fiches) | **En cours** | Nouvelle mesure Lighthouse ; accord du client d'I Make My World sur sa fiche |
| 6 | Page Projets | **Terminé** | Colonnes contrôlées (1 / 2 / 3) ; captures en place |
| 7 | Page À propos | **En cours · bloqué** | Photo et 3 CV |
| 8 | Page Contact | **Terminé** | Envoi réel reçu par Awad le 25/11/2026 (Resend, `private/config.php` en place) ; reste à confirmer que la limite par adresse IP voit bien l'IP du visiteur |
| 9 | Pages institutionnelles | **Terminé** | Adresse de Hostinger revérifiée ; 404 contrôlée en production |
| 10 | SEO | **Terminé** | Canonique, Open Graph, Twitter, JSON-LD `Person`, image d'aperçu ; aperçu réel sur LinkedIn à voir |
| 11 | Images et optimisation | **En cours** | Workflow et `Picture` faits ; reste la photo d'Awad |
| 12 | Responsive et accessibilité | **En cours** | Largeurs, axe, NVDA + Firefox faits ; zoom 200 % à noter ; menu sous NVDA non vérifié |
| 13 | Tests et audits | **En cours** | CI complète (Vitest, PHP, E2E, axe, liens) ; Lighthouse en ligne à mesurer |
| 14 | Déploiement | **Terminé** | CI/CD sans jeton : CI verte → branche « site » → Hostinger redéploie seul ; contrôles en ligne et Lighthouse à chaque push ; fusion dans `main` à faire |

### Budget JavaScript mesuré (dernier build, gzip niveau 9)

| Page | Octets | Marge |
|---|---:|---:|
| Accueil | 145 086 | 8 514 |
| Projets | 144 736 | 8 864 |
| 6 fiches | 144 738 à 145 220 | ≥ 8 380 |
| À propos | 144 464 | 9 136 |
| Contact | 145 724 | 7 876 |
| Mentions légales | 143 329 | 10 271 |
| 404 | 142 481 | 11 119 |

Le formulaire coûte 2 842 octets ; la base React + Next.js environ 131 652 octets. La marge la plus faible (Contact, 7 876 octets) sert de repère pour tout ajout de JavaScript.

---

## 5. Lots détaillés

### Lot 1 — Fondations techniques

- **Objectif** : un projet Next.js statique, typé strictement, avec les variables du design system, les polices et les styles globaux.
- **État** : **En cours** (une seule tâche restante).
- **Fichiers** : `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `vitest.config.ts`, `.gitignore`, `app/globals.css`, `app/layout.tsx`, `lib/theme-script.ts`.
- **Dépendances** : aucune.
- **Tâches**
  - [x] Next.js 16 en export statique, `trailingSlash`, images non optimisées, `poweredByHeader: false`.
  - [x] TypeScript `strict` + `noUncheckedIndexedAccess`, alias `@/*`.
  - [x] Variables des deux thèmes (`design.md` §3.1) aux noms de shadcn/ui ; point de rupture 1 100 px (C5).
  - [x] Inter et JetBrains Mono par `next/font/google`, variables, latin (R3).
  - [x] Styles de base : focus de 3 px décalé de 3 px, `scroll-margin-top: 88px`, `prefers-reduced-motion`.
  - [x] Script du thème dans `<head>`, sans flash (EF-9).
  - [ ] **Formatage Prettier (RM1, intervention séparée)**. Constat du 23/11/2026 (`prettier --list-different .`) :
    - **aucun fichier de configuration Prettier** ni `.prettierignore` : Prettier applique ses réglages par défaut (lignes de 80 caractères), alors que le code a été écrit avec des lignes plus longues ;
    - **37 fichiers de code** concernés : 9 dans `app/`, 13 dans `components/`, 3 dans `content/`, 4 dans `lib/`, 4 dans `scripts/`, 3 dans `tests/unit/`, et `tsconfig.json` ;
    - **8 documents de `docs/`** sont aussi concernés (dont cette roadmap) : les formater modifierait des documents validés.
    - Ordre prévu : 1) ajouter une configuration (largeur de ligne à choisir) et un `.prettierignore` qui exclut au moins `docs/`, `out/`, `.next/` et `package-lock.json` ; 2) relancer `prettier --list-different` pour voir la liste réelle ; 3) formater ; 4) relancer lint, types, tests et build pour vérifier que rien ne change à l'exécution (budget JS identique).
    - La largeur de ligne et l'exclusion de `docs/` sont **à confirmer par Awad** avant l'intervention.
- **Critères d'acceptation** : lint, types et `format:check` sans erreur ; aucun document de `docs/` modifié par le formatage ; aucune couleur écrite en dur hors de `globals.css` ; polices servies par le site.
- **Tests** : `npm run lint`, `npm run typecheck`, `npm run format:check`.
- **Risques** : le build échoue sans accès à Google Fonts (voulu, `architecture.md` §5) ; une mise à jour de Next.js peut changer les scripts intégrés (CSP recalculée à chaque build).
- **Terminé quand** : les trois commandes passent, puis validation d'Awad.

### Lot 2 — Structure globale

- **Objectif** : en-tête, navigation ordinateur et mobile, pied de page, lien d'évitement et styles partagés, communs à toutes les pages.
- **État** : **En cours** : tout est implémenté ; les contrôles restent à refaire et à noter.
- **Fichiers** : `components/layout/Header.tsx`, `NavLiens.tsx`*, `MobileMenu.tsx`*, `ThemeToggle.tsx`*, `Footer.tsx`, `components/ui/styles.ts`, `components/ui/icones.tsx`, `content/site.ts` (* = composant client).
- **Dépendances** : lot 1.
- **Tâches**
  - [x] En-tête fixe de 64 px : logo, Projets · À propos · Contact, bouton CV, bouton thème (EF-1, `design.md` §4.1).
  - [x] Page en cours : `aria-current="page"`.
  - [x] Menu mobile : `aria-expanded` / `aria-controls`, « Ouvrir le menu » / « Fermer le menu », Échap, clic en dehors, clic sur un lien, focus rendu au bouton.
  - [x] Pied de page (`design.md` §4.2), liens de 44 px.
  - [x] Lien « Aller au contenu » en premier.
  - [x] Boutons, lien texte, badge neutre (C4), puce de technologie.
  - [x] Bouton CV de l'en-tête et lien CV du pied de page : affichés **seulement quand le PDF français existe** (EF-7).
  - [x] Liens externes dans le même onglet (A4) : aucun `target="_blank"` dans le code (vérifié le 23/11/2026).
  - [ ] Contrôles à refaire et noter : en-tête et menu à **360 px** (et non 375), **fermeture par un clic en dehors**, deux thèmes, zones cliquables de 44 px (48 px dans le menu).
- **Critères d'acceptation** : conformes à EF-1 et `design.md` §4 ; aucun débordement à 360 px ; menu fermé par clic, Échap, clic en dehors et clic sur un lien, focus rendu au bouton ; navigation au clavier sans piège.
- **Tests** : vérifié partiellement dans le navigateur sur l'export réel (Échap, focus rendu, 375 px). À couvrir en E2E au lot 13 (menu : les 4 façons de fermer, `aria-expanded`, focus).
- **Risques** : le bouton CV n'apparaît qu'à la réception du PDF (lot 7) ; recontrôler alors l'en-tête mobile à 360 px.
- **Terminé quand** : le test E2E du menu passe en CI et les contrôles ci-dessus sont notés, puis validation d'Awad.

### Lot 3 — Page d'accueil

- **Objectif** : l'accueil de `contenus.md` §1 et `design.md` §5.1.
- **État** : **En cours · bloqué** par la photo.
- **Fichiers** : `app/page.tsx`, `content/pages.ts`, `lib/stats.ts`, `components/projet/ProjectCard.tsx`, `components/ui/Provisoire.tsx`.
- **Dépendances** : lots 1, 2, 4 ; photo (ressource) ; lot 11 pour l'image finale.
- **Correspondance avec la demande de roadmap** : les sections réellement validées sont **premier écran, projets clients, preuves en chiffres, bloc freelance, rappel du contact**. Les « compétences » sont sur la page **À propos** (EF-4) et la « méthodologie » correspond au bloc **« Comment je travaille »** du bloc freelance. Aucune section n'est ajoutée.
- **Tâches**
  - [x] Premier écran : petit titre, `h1`, 3 puces, phrase, lieu et disponibilité, 2 boutons.
  - [x] 3 projets clients (S3) et « Voir les 6 projets ».
  - [x] Preuves en chiffres calculées : 6 projets dont 5 en ligne, 185 tests (17 + 45 + 16 + 63 + 24 + 20), intégration continue, 2 sites à 100 / 100.
  - [x] Bloc freelance : 5 réalisations, 3 étapes en `ol`, bouton vers `/contact/?demande=freelance`.
  - [x] Rappel du contact.
  - [ ] Remplacer l'emplacement provisoire par la photo d'Awad (après le lot 11).
- **Critères d'acceptation** : textes identiques à `contenus.md` §1 ; aucun chiffre écrit en dur dans la page ; photo sous les boutons sur mobile, 200 px au plus (C7).
- **Tests** : Vitest (total 185, ordre C14, 5 sites en ligne, 2 sites à 100) ; vérification visuelle ; E2E (lot 13).
- **Risques** : la photo est l'image principale du premier écran : son poids et ses dimensions pèsent sur le LCP mobile.
- **Terminé quand** : photo réelle en place et mesurée, puis validation d'Awad.

### Lot 4 — Données et présentation des projets

- **Objectif** : une seule source typée pour les 6 projets et des cartes conformes à EF-3.
- **État** : **En cours** (données terminées, captures manquantes).
- **Fichiers** : `content/projets.ts`, `lib/stats.ts`, `components/projet/ProjectCard.tsx`, `components/projet/SchemaVignette.tsx`, `tests/unit/donnees.test.ts`.
- **Dépendances** : lot 1 ; lot 11 pour les captures.
- **Tâches**
  - [x] Type `Projet` et les 6 projets dans l'ordre A2, textes recopiés de `contenus.md`.
  - [x] Variantes pilotées par les données : pas de code (I Make My World), pas de site (template), mention d'équipe (Solidays), « Non relevé » (eMatériel).
  - [x] Carte : badge neutre, début, nom, phrase, 5 technologies au plus, liens existants seulement, lien complété du nom du projet pour les lecteurs d'écran.
  - [x] Vignette SVG du template (`design.md` §5.4).
  - [ ] Captures ordinateur et mobile des 5 sites en ligne, faites par Claude Code (`design.md` §9), puis passées par le workflow du lot 11.
  - [ ] Déclarer chaque capture et son texte alternatif dans `content/` (modèles de `contenus.md` §8).
- **Critères d'acceptation** : 12 tests de données verts ; aucune capture montrant une donnée personnelle (clients des sites, comptes) ; capture et texte alternatif déclarés ensemble.
- **Tests** : Vitest ; contrôle du workflow des images (lot 11) qui refuse une image non déclarée.
- **Risques** : une capture peut montrer des données réelles (rendez-vous, comptes) : prendre uniquement les pages publiques d'accueil.
- **Terminé quand** : les 10 captures sont en place et vérifiées, puis validation d'Awad.

### Lot 5 — Études de cas (6 fiches)

- **Objectif** : les 6 fiches de `contenus.md` §3, avec un seul gabarit (`architecture.md` §4.1).
- **État** : **En cours**.
- **Fichiers** : `app/projets/[slug]/page.tsx`, `components/projet/SchemaTemplate.tsx`, `components/projet/TableauLighthouse.tsx`, `content/projets.ts`, `lib/texte.tsx`.
- **Dépendances** : lots 2 et 4 ; lot 11 pour les captures.
- **Correspondance avec la demande de roadmap** : les rubriques validées sont **Le projet, Mon rôle, Fonctionnalités, Technologies, Choix techniques, Qualité** (`contenus.md` §3). « Contexte métier » et « problèmes et objectifs » sont couverts par *Le projet*, « périmètre d'intervention » par *Mon rôle*, « architecture technique » par *Technologies* et *Choix techniques* (et le schéma du template), « résultats vérifiables » par *Qualité*. **Aucune rubrique nouvelle n'est créée** : ce serait du contenu non validé.
- **Tâches**
  - [x] 6 adresses générées par `generateStaticParams`, `dynamicParams = false`, `notFound()`.
  - [x] Fil d'Ariane, en-tête de fiche, mentions haut et bas (code privé, pas de site, équipe de 3).
  - [x] Rubriques, choix numérotés 01 à 03, qualité, tableau Lighthouse (`table`, `caption`, `scope`), projet suivant (ordre A2).
  - [x] Schéma HTML/CSS du template (C9, C11, C12) ; pas de tableau Lighthouse pour le template et Solidays.
  - [ ] Captures réelles à la place des emplacements provisoires (lot 4).
  - [ ] Nouvelle mesure Lighthouse juste avant la mise en ligne (A3), dont les 3 scores mobile d'eMatériel, puis mise à jour de `contenus.md` et `content/` dans le même commit (R8).
  - [ ] Accord du client d'I Make My World sur le texte de sa fiche (`design.md` §9).
- **Critères d'acceptation** : textes identiques à `contenus.md` §3 ; chaque score affiché avec sa date ; tableau lisible à 360 px sans défilement ; aucune couleur pour juger un score.
- **Tests** : Vitest (slugs, variantes) ; navigateur (6 fiches vérifiées sur l'export réel) ; E2E et axe (lot 13).
- **Risques** : des scores Lighthouse qui changent à la nouvelle mesure modifient aussi le chiffre « 2 sites à 100 / 100 » de l'accueil (test unitaire à mettre à jour en même temps).
- **Terminé quand** : captures en place, scores remesurés et datés, accord du client d'I Make My World, puis validation d'Awad.

### Lot 6 — Page Projets

- **Objectif** : les 6 cartes et l'accès aux fiches (`contenus.md` §2).
- **État** : **En cours** : implémenté ; reste le contrôle des colonnes ; les captures sont suivies au lot 4.
- **Fichiers** : `app/projets/page.tsx`, `components/projet/ProjectCard.tsx`.
- **Dépendances** : lot 4.
- **Tâches**
  - [x] Titre, introduction, 6 cartes dans l'ordre A2, sans filtres.
  - [x] Classes de grille : 1 colonne, 2 à partir de 768 px, 3 à partir de 1 100 px.
  - [ ] Contrôler l'affichage réel à 360, 768, 1 024, 1 100 et 1 440 px (planches de contrôle à 768 et 1 024 px dans les maquettes).
  - [x] « Un projet en tête ? » et « Me contacter ».
- **Critères d'acceptation** : EF-3 ; chaque carte mène à sa fiche ; liens « site » et « code » seulement s'ils existent ; nombre de colonnes conforme à chaque largeur.
- **Tests** : Vitest (données) ; navigateur ; E2E (6 cartes, 6 liens « Voir le détail » valides) ; lychee (lot 13) pour les liens externes.
- **Risques** : aucun propre au lot.
- **Terminé quand** : colonnes contrôlées et notées, E2E vert, puis validation d'Awad.

### Lot 7 — Page À propos

- **Objectif** : présentation, compétences, façon de travailler, parcours et CV (`contenus.md` §4).
- **État** : **En cours · bloqué** par la photo et les 3 CV.
- **Fichiers** : `app/a-propos/page.tsx`, `content/pages.ts`, `content/site.ts`, `components/ui/LiensCV.tsx`.
- **Dépendances** : lots 2 et 4 (liens vers les fiches) ; photo et CV (ressources) ; lot 11.
- **Tâches**
  - [x] Présentation, 3 groupes de compétences en texte simple (EF-4), phrase sous les compétences.
  - [x] « Ma façon de travailler », dont la phrase sur les outils d'IA (D5).
  - [x] Parcours : formation (septembre 2025 – avril 2026) et projets datés, reliés aux fiches.
  - [x] Boutons « Voir mes projets » (C15) et « Me contacter ».
  - [x] Liens CV prêts : langue, format, taille, `hreflang` ; **rien n'est affiché tant qu'aucun PDF n'est fourni**.
  - [ ] Photo réelle.
  - [ ] 3 CV en PDF dans `public/cv/`, vérifiés sans e-mail ni téléphone personnels (EF-7), tailles renseignées.
- **Critères d'acceptation** : textes identiques à `contenus.md` §4 ; aucune section « langues » (S4) ; aucune expérience non validée ; **chaque lien CV ouvre le bon PDF** (`requirements.md` §9) et annonce sa vraie taille ; le lien français de l'en-tête et du pied de page apparaît.
- **Tests** : navigateur ; vérification de chaque PDF (contenu, métadonnées) avant publication ; lychee.
- **Risques** : les métadonnées d'un PDF peuvent contenir un nom complet ou une adresse e-mail : à contrôler avant publication.
- **Terminé quand** : photo et 3 CV en place et vérifiés, puis validation d'Awad.

### Lot 8 — Page Contact

- **Objectif** : le formulaire de `contenus.md` §5, son envoi par PHP + Resend et ses protections (`architecture.md` §6.1).
- **État** : **En cours · bloqué** pour l'envoi réel.
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
  - [ ] **Ajouter ce message à `contenus.md` §5** (RM2), mot pour mot : « Le formulaire a besoin de JavaScript. Vous pouvez aussi m'écrire sur LinkedIn. » Modification documentaire autorisée par RM2 ; commit à faire avec l'accord d'Awad.
  - [ ] **Effacer le message d'erreur d'un champ dès qu'il redevient valide (RM3)** : aujourd'hui, il reste jusqu'au prochain envoi. Mêmes règles (`lib/validation.ts`) ; le focus ne bouge pas pendant la saisie ; `aria-invalid` retiré en même temps ; nouveau test de ce comportement ; **budget JS de la page Contact remesuré** (marge actuelle 7 876 octets).
  - [ ] Envoi réel vérifié sur le site en ligne : un message arrive dans la boîte d'Awad (critère §9 de `requirements.md`).
  - [ ] Vérifier au premier déploiement que `REMOTE_ADDR` contient l'adresse du visiteur (`architecture.md` §6.1).
- **Critères d'acceptation** : critères « Fonctionnement » de `requirements.md` §9 pour le formulaire ; cas d'erreur de `requirements.md` §8.
- **Tests** : 7 tests Vitest de validation ; 29 vérifications PHP ; navigateur (erreurs, « envoi impossible », `?demande=freelance`) ; E2E avec envoi simulé (lot 13) ; envoi réel en production (lot 14).
- **Risques** : Resend sans domaine vérifié ne livre qu'à l'adresse du compte d'Awad (accepté) ; P8 (confirmation au visiteur) impossible avant l'achat d'un domaine.
- **Terminé quand** : message sans JavaScript reporté dans `contenus.md`, effacement des erreurs (RM3) fait et testé, budget respecté, E2E du formulaire vert, envoi réel reçu, `REMOTE_ADDR` vérifié, puis validation d'Awad.

### Lot 9 — Pages institutionnelles

- **Objectif** : mentions légales (`contenus.md` §6) et page 404 (`contenus.md` §7).
- **État** : **En cours**.
- **Fichiers** : `app/mentions-legales/page.tsx`, `app/not-found.tsx`, `public/.htaccess`, `scripts/serve-out.mjs`.
- **Dépendances** : lot 2 ; lot 14 pour le contrôle sur Apache.
- **Tâches**
  - [x] Mentions légales : éditeur particulier sans adresse (A11), hébergeur, données du formulaire, 12 mois (T10), Resend hors UE (T11), cookies, propriété ; texte limité à 760 px.
  - [x] 404 personnalisée : « 404 » décoratif masqué, 2 boutons, `noindex` ; sans attribut `style=` (compatible CSP).
  - [x] 404 servie avec le code HTTP 404 par le serveur local `serve-out.mjs`.
  - [ ] Revérifier l'adresse de Hostinger sur son site avant la mise en ligne (`contenus.md` §6, note interne).
  - [ ] Contrôler sur Hostinger que `ErrorDocument 404 /404.html` répond bien 404 (lot 14).
- **Critères d'acceptation** : textes identiques à `contenus.md` ; 404 avec le bon code en production.
- **Tests** : navigateur ; contrôle HTTP en production.
- **Risques** : mentions à mettre à jour quand Awad aura un SIRET (A11).
- **Terminé quand** : adresse de l'hébergeur revérifiée, 404 contrôlée en production, puis validation d'Awad.

### Lot 10 — SEO

- **Objectif** : `requirements.md` §5.
- **État** : **En cours**.
- **Fichiers** : `app/layout.tsx`, métadonnées de chaque `page.tsx`, `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`.
- **Dépendances** : lots 3 à 9 ; conversion de l'image d'aperçu (lot 11) ; adresse du site (lot 14) pour `SITE_URL`. Canonique de l'accueil, balises Open Graph et JSON-LD peuvent être faits **avant** : seule l'image et la vraie `SITE_URL` attendent.
- **Tâches**
  - [x] Titre et description uniques de chaque page, repris de `contenus.md`.
  - [x] Adresse canonique sur les pages Projets, fiches, À propos, Contact et Mentions.
  - [ ] **Adresse canonique de l'accueil** : absente de l'export actuel (vérifié dans `out/index.html`).
  - [x] `sitemap.xml` et `robots.txt` (qui exclut `/contact.php` et `/_app/`).
  - [ ] Open Graph et Twitter : titre et description de chaque page (repris de `contenus.md`), image d'aperçu (`requirements.md` §5).
  - [ ] **Image d'aperçu (RM4)** : composition graphique sobre, conforme à la piste A (fond et couleurs des variables de `design.md` §3.1, Inter, nom « Awad Ahmed » et titre de `contenus.md` §1.1 ; aucun autre texte, aucune photo tant qu'elle n'est pas fournie). Format **PNG 1 200 × 630** (les réseaux sociaux ne lisent pas l'AVIF), sans métadonnées. Proposition à **montrer à Awad avant intégration**. Mode de fabrication à confirmer avec lui : source SVG convertie par le workflow des images (lot 11), sans rien installer en local.
  - [ ] JSON-LD `Person` sur l'accueil : nom, titre, LinkedIn, GitHub, sans e-mail. Bloc de données `type="application/ld+json"` (non exécuté). À vérifier au build : `csp-hashes.mjs` et `js-budget.mjs` le traitent comme un script intégré (empreinte ajoutée, quelques centaines d'octets comptés dans le budget) ; aucune violation de CSP.
  - [ ] Build avec la vraie `SITE_URL` (aujourd'hui `https://example.invalid` pour les essais).
- **Critères d'acceptation** : critère « `sitemap.xml`, `robots.txt`, adresses canoniques et aperçus Open Graph présents et valides » ; Lighthouse SEO 100.
- **Tests** : un test sur l'export (une canonique et les balises Open Graph par page) ; lychee ; Lighthouse SEO.
- **Risques** : l'adresse temporaire changera à l'achat d'un domaine (redirection 301 et canoniques, D6).
- **Terminé quand** : toutes les pages ont canonique et Open Graph, JSON-LD présent et sans violation de CSP, budget toujours respecté, puis validation d'Awad.

### Lot 11 — Images et optimisation

- **Objectif** : `architecture.md` §5 « Images » et `requirements.md` §6.
- **État** : **À faire · bloqué** (originaux absents).
- **Fichiers prévus** : `.github/workflows/images.yml`, `components/Picture.tsx`, `images-source/` (non publié), `public/images/`, déclarations dans `content/`.
- **Dépendances** : lot 13 (le workflow tourne sur GitHub) ; les originaux : captures (faites par Claude Code), photo (fournie par Awad), source de l'image d'aperçu (lot 10). Le workflow peut être écrit **avant** l'arrivée des originaux. Les lots 3, 4, 5, 7 et 10 dépendent ensuite de ses résultats.
- **Tâches**
  - [ ] Workflow manuel : PNG et JPEG seulement, noms sans espace ni accent, **métadonnées supprimées** (EXIF, GPS), AVIF ≈ 50 et WebP ≈ 75, largeurs 640 / 960 / 1 440 (captures) et 200 / 320 / 640 (photo), jamais d'agrandissement, **200 Ko au plus par fichier**, chaque image déclarée dans `content/` et inversement, résultat en **pull request**.
  - [ ] Composant `Picture` : `<picture>` + `srcset`, dimensions fixées, chargement différé hors du premier écran ; sans attribut `style=` (CSP).
  - [ ] Image d'aperçu (RM4) : sortie **PNG 1 200 × 630** en plus des formats AVIF et WebP, si Awad valide ce mode de fabrication (lot 10).
  - [ ] Remplacer les emplacements `Provisoire` par `Picture` (accueil, À propos, cartes, fiches).
  - [ ] Image qui ne charge pas : texte alternatif visible, mise en page intacte (`requirements.md` §8).
  - [ ] Mesurer LCP et CLS après le déploiement (lot 13).
- **Critères d'acceptation** : contrôles du workflow verts ; aucune image publiée avec ses métadonnées ; textes alternatifs de `contenus.md` §8 ; CLS ≤ 0,05.
- **Tests** : le workflow lui-même ; Lighthouse.
- **Risques** : `sharp` n'est installé que sur GitHub (R7) ; la photo d'Awad contient souvent des données GPS.
- **Terminé quand** : toutes les images sont en place par le workflow, vérifiées, puis validation d'Awad.

### Lot 12 — Responsive et accessibilité

- **Objectif** : `requirements.md` §3 et §4, `design.md` §6 : WCAG 2.2 AA.
- **État** : **En cours**.
- **Fichiers** : tous les composants et pages.
- **Dépendances** : lots 2 à 9 ; lot 11 (images réelles) pour le contrôle final.
- **Tâches**
  - [x] Structure : un `h1` par page, zones `header` / `nav` / `main` / `footer`, `aria-labelledby` des sections.
  - [x] Contrastes des deux thèmes calculés et vérifiés (`design.md` §3.1).
  - [x] Pas de débordement à 375 px, menu mobile au clavier (vérifié dans le navigateur).
  - [ ] Affichage à 360, 390, 768, 1 024, 1 100 et 1 440 px, dans les deux thèmes, avec les vraies polices.
  - [ ] Zoom à 200 %.
  - [ ] Parcours complet au clavier sur chaque page.
  - [ ] axe-core sans erreur sur chaque page (E2E, lot 13).
  - [ ] **Lecteur d'écran : NVDA avec Firefox sous Windows (RM5)**, contrôle manuel du menu mobile, du formulaire (erreurs annoncées, confirmation annoncée) et d'une fiche. **Ni NVDA ni Firefox ne sont installés** sur l'ordinateur d'Awad (vérifié le 23/11/2026, 3,30 Go libres) : installation **avec l'accord d'Awad**, taille à vérifier avant.
  - [ ] Firefox et Safari (ENF-9), via Playwright en CI (WebKit pour Safari).
  - [ ] **Règles d'écriture** (`design.md` §3.2) : espace insécable fine avant « : », espace insécable avant « ? » et dans « 24 h ». **Aucune n'est appliquée aujourd'hui** dans `content/` (vérifié le 23/11/2026). À corriger dans `content/` seulement : c'est de la typographie, pas un changement de texte.
  - [ ] Sans JavaScript : tout le contenu reste lisible ; seuls le formulaire, le menu mobile et le thème en ont besoin (`requirements.md` §8). Sur mobile sans JavaScript, la navigation passe par le pied de page.
- **Critères d'acceptation** : critères « Qualité mesurée » de `requirements.md` §9 ; Lighthouse Accessibilité 100.
- **Tests** : Playwright + axe en CI ; contrôles visuels ; Lighthouse.
- **Risques** : Safari réel n'est pas disponible sur l'ordinateur d'Awad (WebKit de Playwright en CI comme approximation).
- **Terminé quand** : tous les contrôles ci-dessus sont faits et notés, puis validation d'Awad.

### Lot 13 — Tests et audits

- **Objectif** : la CI de `architecture.md` §7 et les audits avant la mise en ligne.
- **État** : **En cours** (tests locaux faits, CI absente).
- **Fichiers** : `tests/unit/*`, `tests/php/*`, `tests/e2e/*` (prévu), `.github/workflows/ci.yml` (prévu), `scripts/csp-hashes.mjs`, `scripts/js-budget.mjs`, `scripts/segments-plats.mjs`.
- **Dépendances** : lots 1 à 10 pour les E2E ; lot 14 pour Lighthouse et les contrôles en ligne.
- **Tâches**
  - [x] Tests unitaires : 25 (données 12, validation 7, scripts 6).
  - [x] Tests PHP : 29 vérifications.
  - [x] CSP : balise meta par page, empreintes, refus de `style=` et des attributs d'événement ; aucune violation constatée dans le navigateur.
  - [x] Budget JavaScript contrôlé après chaque build ; le build échoue au-delà de 153 600 octets.
  - [ ] `ci.yml`, à chaque push : Node.js 22, `npm ci`, lint, format, types, Vitest, tests PHP (**PHP 8.3**, la version de Hostinger ; en local 8.2), build avec `SITE_URL`, budget, CSP, lychee (LinkedIn exclu), E2E ; cache de `.next/cache` (polices, `architecture.md` §5).
  - [ ] E2E Playwright + axe (CI uniquement) : menu, thème sans flash, clavier, formulaire avec envoi simulé, **aucune violation de CSP sur chaque page**.
  - [ ] Contrôle des failles des dépendances dans la CI et Dependabot (`requirements.md` §7).
  - [ ] Audit de sécurité : en-têtes en production, 3 adresses interdites en 403 ou 404 (`architecture.md` §8.1), relecture du PHP.
  - [ ] Audit SEO (lot 10) et Lighthouse en ligne (ordinateur 100 partout, mobile ≥ 95 et 100 ailleurs).
  - [ ] Comparer une fois le budget mesuré au build avec la taille réellement transférée (`architecture.md` §7.1).
- **Critères d'acceptation** : CI verte sur chaque push ; aucun lien cassé ; aucune erreur de console ; scores de `requirements.md` §6.
- **Tests** : ce lot est lui-même la mise en place des tests.
- **Risques** : un site de projet hors ligne fait échouer lychee (comportement voulu, `requirements.md` §8) ; Playwright ne doit pas être installé sur l'ordinateur d'Awad (R7).
- **Terminé quand** : CI verte avec toutes ses étapes, audits faits et notés, puis validation d'Awad.

### Lot 14 — Déploiement

- **Objectif** : `architecture.md` §8.
- **État** : **À faire · bloqué** par la création du site Hostinger et la configuration privée. **Aucune opération Hostinger sans l'accord explicite d'Awad (RM6) ; le déploiement n'est pas autorisé à ce jour.**
- **Fichiers prévus** : `.github/workflows/deploy.yml`, `README.md` ; sur le serveur : `private/config.php` (jamais dans le dépôt).
- **Dépendances** : lot 13 (CI verte) ; décision d'Awad sur la création du site.
- **Tâches**
  - [ ] **Avec l'accord d'Awad** : créer le site Hostinger du portfolio (adresse temporaire) ; cette adresse devient `SITE_URL`.
  - [ ] **Par Awad** : déposer `private/config.php` (droits 600) avec la clé Resend, l'adresse de réception, l'origine du site et une clé HMAC de 32 octets.
  - [ ] Secret GitHub `HOSTINGER_API_TOKEN` (comme RepaTek).
  - [ ] `deploy.yml` : à chaque push sur `main`, si la CI est verte, archive de `out/` envoyée par l'API Hostinger.
  - [ ] Après le premier déploiement : site en ligne, en-têtes de sécurité, redirection HTTP vers HTTPS, 404, 3 adresses interdites en 403 ou 404, compression (gzip ou brotli), cache, `expose_php` désactivé (`architecture.md` §6.1), suppression ou non des anciens fichiers par l'API, `REMOTE_ADDR`, envoi réel d'un message.
  - [ ] README du dépôt (`requirements.md` §9) : peut être écrit **avant** le déploiement, sans aucune donnée personnelle.
  - [ ] Fusion de `phase-4-developpement` dans `main` par pull request, avec l'accord d'Awad.
- **Critères d'acceptation** : critères « Projet » et « Qualité mesurée sur le site en ligne » de `requirements.md` §9.
- **Tests** : contrôles automatiques après déploiement ; Lighthouse ; envoi réel.
- **Risques** : comportement de l'API sur les anciens fichiers ; `REMOTE_ADDR` derrière le serveur de Hostinger ; aucun secret ne doit passer par le dépôt, GitHub (hors token de déploiement) ou la conversation.
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

### Ordre d'exécution recommandé

**A. Réalisable tout de suite par Claude Code** (code ou documents, chaque intervention présentée avant et validée après) :
1. Lot 1 : configuration Prettier puis formatage (RM1), dans une intervention séparée.
2. Lot 8 : effacement des erreurs (RM3), avec test et mesure du budget ; report du message sans JavaScript dans `contenus.md` (RM2).
3. Lot 12 : espaces insécables dans `content/`.
4. Lot 10 : canonique de l'accueil, balises Open Graph et Twitter, JSON-LD `Person` ; proposition de composition de l'image d'aperçu (RM4).
5. Lot 13 : `ci.yml` et tests E2E Playwright + axe (sur GitHub uniquement).
6. Lot 11 : `images.yml` et composant `Picture`.
7. Lot 14 : README du dépôt.
8. Lots 4 et 5 : captures des 5 sites (pages publiques) et nouvelle mesure Lighthouse, juste avant la mise en ligne.

**B. En attente de contenus ou de ressources d'Awad** : photo (lots 3, 7) ; 3 CV (lots 2, 7) ; validation de l'image d'aperçu (lot 10) ; accord du client d'I Make My World (lot 5).

**C. Compte ou intervention externe** : secret `HOSTINGER_API_TOKEN` dans GitHub ; clé Resend et adresse de réception dans `private/config.php`, déposé par Awad dans hPanel ; création du site Hostinger ; réglages de dépôt GitHub (Dependabot).

**D. Autorisation explicite d'Awad nécessaire** : chaque commit et chaque push ; toute modification de document ; installation de NVDA et Firefox (RM5) ; création du site Hostinger et tout déploiement (RM6) ; fusion dans `main` ; tout changement du budget JavaScript.

## 7. Risques transversaux

| Risque | Mesure |
|---|---|
| Marge du budget JavaScript faible (7 876 octets sur Contact) | Mesure à chaque build ; aucun composant client de plus ; JSON-LD en bloc de données |
| CSP par empreintes sensible aux changements de Next.js | Empreintes recalculées à chaque build ; E2E sans violation de CSP |
| Défaut de l'export statique de Next.js 16 (noms des fichiers de préchargement) | `segments-plats.mjs` après chaque build ; à revoir à chaque mise à jour de Next.js |
| Textes à deux endroits (`contenus.md` et `content/`) | Règle R8 et tests de contenu |
| Espace disque limité (3,32 Go libres) | Playwright, `sharp` et Lighthouse en CI uniquement |
| Données personnelles dans les images ou les PDF | Métadonnées supprimées par le workflow ; PDF relus avant publication |
| Scores Lighthouse qui changent à la nouvelle mesure | Mise à jour des documents, des données et des tests dans le même commit |

## 8. Ressources encore manquantes

| Ressource | Fournie par | Lots |
|---|---|---|
| Photo carrée (affichée en rond) | Awad | 3, 7, 11 |
| 3 CV en PDF (français, anglais, allemand) | Awad | 2, 7 |
| Clé Resend et adresse de réception (dans `private/config.php` uniquement) | Awad | 8, 14 |
| Accord pour créer le site Hostinger du portfolio | Awad | 14 |
| Captures ordinateur et mobile des 5 sites | Claude Code | 4, 5, 11 |
| Image d'aperçu Open Graph : composition sobre (RM4) | Claude Code, validée par Awad | 10, 11 |
| Accord du client d'I Make My World sur sa fiche | Awad | 5 |
| Nouvelle mesure Lighthouse des 5 sites | Claude Code | 5 |
| NVDA et Firefox (non installés) | Installation avec l'accord d'Awad | 12 |
| Secret `HOSTINGER_API_TOKEN` dans GitHub | Awad | 14 |

## 9. Conditions de mise en production

La mise en ligne n'a lieu que si **toutes** ces conditions sont réunies. **Elle n'est pas autorisée à ce jour (RM6).**

**Avant le déploiement**
1. Lots 1 à 13 terminés **et validés par Awad**, chacun avec ses contrôles notés.
2. CI verte sur le dernier commit : lint, format, types, tests Vitest et PHP, build, budget, CSP, liens, E2E, axe, contrôle des failles des dépendances (aucune faille élevée ou critique).
3. Chaque page sous **153 600 octets** de JavaScript en gzip, chunks partagés compris ; budget inchangé.
4. Aucune violation de CSP et aucune erreur de console sur aucune page (E2E).
5. Aucun emplacement provisoire visible (photo, captures) ; les CV présents sont vérifiés, les absents n'ont pas de lien.
6. Textes du site identiques à `contenus.md` ; **chaque fait affiché validé par Awad** ; scores Lighthouse remesurés et datés (A3) ; accord du client d'I Make My World.
7. Aucune adresse e-mail personnelle, aucun nom complet, aucun secret dans le dépôt, l'historique des commits, le site, les images ou les PDF.
8. Adresse de Hostinger revérifiée dans les mentions légales.
9. Contrôle NVDA + Firefox fait et noté (RM5).

**Déploiement**
10. **Accord explicite d'Awad** pour créer le site Hostinger, puis pour le premier déploiement (RM6).
11. `private/config.php` déposé par Awad ; secret `HOSTINGER_API_TOKEN` en place.
12. Fusion dans `main` par pull request, avec l'accord d'Awad.

**Après le déploiement** (sinon, retour à l'état précédent et correction)
13. Contrôles de production du lot 14 passés : HTTPS, en-têtes, 404, adresses interdites, `expose_php`, `REMOTE_ADDR`, envoi réel d'un message.
14. Lighthouse conforme à `requirements.md` §6 sur l'accueil et une fiche, ordinateur et mobile.
15. Taille de JavaScript réellement transférée comparée une fois à la mesure du build.

---

## 10. Écarts constatés entre `architecture.md` et le code (23/11/2026)

Constats seulement : **aucune décision d'architecture n'est modifiée**. Chaque écart est à garder ou à corriger avec l'accord d'Awad.

| Prévu dans `architecture.md` | Réalité | Effet |
|---|---|---|
| §2 : `components/accueil/` (Hero, Chiffres…), `SkipLink`, `Breadcrumb`, `ProjectHero`, `Rubrique`, `ProjetSuivant`, `Button`, `Badge`, `Card`, `Alert` en fichiers séparés | Sections écrites directement dans les pages ; styles partagés dans `components/ui/styles.ts` | Aucun sur le site ; arborescence plus simple que prévu |
| §2 : `lib/format.ts` (dates au format français) et §7 : tests « dates » | Les dates sont écrites en toutes lettres dans `content/` (« juin 2026 ») ; pas de fichier ni de test de dates | EF-8 respecté par les textes ; pas de calcul de date |
| §2 : `components/Picture.tsx`, `images-source/`, `public/images/`, `public/cv/` | Absents | Prévus aux lots 7 et 11 |
| §2 : `README.md`, `.github/workflows/` | Absents | Prévus aux lots 13 et 14 |
| — | `scripts/segments-plats.mjs` et `scripts/serve-out.mjs` en plus | Correction d'un défaut de Next.js 16 et serveur de contrôle local |
