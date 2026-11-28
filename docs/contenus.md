# Contenus du site — Portfolio Awad Dev

> Statut : **validé par Awad le 22/11/2026**. Aucune maquette ni aucun code ne sont commencés.
> Rôle : les **textes définitifs** du site, page par page, à valider avant les maquettes (décision d'Awad du 22/11/2026, `requirements.md` EF-10).
> Sources : les faits de [`product-discovery.md`](./product-discovery.md), la structure de [`sitemap.md`](./sitemap.md), les règles de [`requirements.md`](./requirements.md) et [`user-flows.md`](./user-flows.md). Les titres et descriptions des sites en ligne ont été relus le 22/11/2026.
> Règles : 100 % en français ; aucun « junior » ni « senior » ; aucun nombre d'années d'expérience ; aucune adresse e-mail ; chiffres repris des documents (à mesurer de nouveau avant la mise en ligne).
> Toutes les décisions d'Awad sont regroupées à la fin (T1 à T12).

---

## 0. Éléments communs

### En-tête
- Logo : modèle d'Awad (« A » évidé et chevron de code « > », 25/11/2026), aux couleurs du site, et **AWAD** en capitales ; les lecteurs d'écran lisent « Awad Dev » *(décision d'Awad du 26/11/2026 : site « Awad Dev », « Awad » dans les phrases ; le nom complet ne reste que dans les mentions légales, où la loi l'exige)* ; favicon : le même logo, murs épais et creux fin (lisible en petit)
- Liens : **Accueil** · **Projets** · **À propos** · **Contact**
- Bouton : **CV** (ouvre le CV en français)
- Bouton thème : étiquette pour les lecteurs d'écran « Passer en mode sombre » / « Passer en mode clair »
- Mobile : bouton **Menu** (« Ouvrir le menu » / « Fermer le menu »)
- Lien d'évitement : **Aller au contenu**

### Pied de page
- Liens : Accueil · Projets · À propos · Contact · CV · Mentions légales
- LinkedIn · GitHub · Code de ce portfolio
- © 2026 Awad Dev

### Badges des projets
- **Projet client** — RepaTek, I Make My World, Plateforme éditoriale
- **Projet personnel** — Template Next.js
- **Projet de formation** — eMatériel ; Solidays (avec « en équipe de 3 »)

---

## 1. Accueil — `/`

**Titre de la page (onglet et Google)** : Awad Dev — Développeur Full Stack JavaScript / TypeScript
**Description (Google)** : Développeur Full Stack en Île-de-France. Applications web complètes et en ligne, avec React, Next.js et Node.js. Ouvert aux postes en CDI ou CDD et aux missions freelance.

### 1.1 Premier écran
*Refait le 25/11/2026 (choix d'Awad) : le grand titre dit ce que je fais ; le nom passe au-dessus.*
- Petit titre : **Awad · Développeur Full Stack JavaScript / TypeScript · React, Next.js, Node.js** *(technologies ajoutées le 26/11/2026, demande d'Awad)*
- Grand titre (`h1`) : **Je conçois et développe des applications web complètes, testées et mises en ligne.**
- Sous-titre : **De l'interface au serveur et à la base de données.** *(technologies déplacées sur la ligne du nom le 26/11/2026)*
- Disponibilité (pastille) : **Ouvert aux postes en CDI ou CDD et aux missions freelance.** · **Île-de-France**
- Boutons : **Voir mes projets** (principal) · **Me contacter** (secondaire)
- Preuves, en langage client (25/11/2026, chiffres calculés) : **5 sites en ligne, dont 3 pour des clients** · **Chaque modification vérifiée avant la mise en ligne** · **Jusqu'à 100/100 en vitesse sur l'outil de mesure de Google**

### 1.1 bis Vous êtes… (ajouté le 26/11/2026, demande d'Awad)
Juste sous le premier écran, deux cartes pour que chaque visiteur trouve son chemin.
- Titre : **Vous êtes…**
- **Recruteur ou entreprise** : Vous cherchez un développeur Full Stack en CDI, en CDD ou pour une mission longue. — bouton **Voir mon profil** → `/a-propos/`
- **Porteur de projet** : Vous voulez créer ou refaire un site, une boutique ou une application sur mesure. — bouton **Voir l'offre freelance** → bloc freelance de l'accueil (`#freelance`)

### 1.2 Projets mis en avant
- Titre : **Projets clients**
- Sous-titre : **Des sites réels, conçus et développés pour des clients, en ligne aujourd'hui.**
- 3 cartes : RepaTek, I Make My World, Plateforme éditoriale (textes des cartes : section 2)
- Lien : **Voir tous les projets**

### 1.2 bis Ce que vous obtenez (ajouté le 25/11/2026, demande d'Awad)
- Titre : **Ce que vous obtenez**
- Sous-titre : **Un site professionnel, pensé pour vos visiteurs, pour Google et pour durer.**
- 6 cartes (bénéfice · preuve) :
  - **Un site rapide** — Il s'affiche en un instant, même sur téléphone : vos visiteurs restent. · *Jusqu'à 100/100 en vitesse sur l'outil de mesure de Google*
  - **Trouvé sur Google** — Chaque page est préparée pour le référencement : titres, descriptions et aperçus pour les réseaux sociaux. · *4 de mes sites ont 100/100 en référencement sur l'outil de Google*
  - **Sécurisé** — Connexion HTTPS, serveur protégé et formulaires à l'abri des robots. · *Protections contrôlées automatiquement à chaque mise en ligne de ce portfolio*
  - **Parfait sur tous les écrans** — Téléphone, tablette ou ordinateur : le site s'adapte et reste agréable à utiliser. · *Ce portfolio est testé automatiquement sur les moteurs Chromium, Firefox et WebKit via Playwright*
  - **Fiable** — Chaque modification est vérifiée automatiquement avant d'être mise en ligne : moins de pannes. · *185 tests automatiques sur mes 6 projets*
  - **Accessible à tous** — Lisible par tous, y compris par les personnes malvoyantes ou qui naviguent au clavier. · *100/100 en accessibilité pour ce portfolio*

### 1.3 Preuves en chiffres
- **6 projets** présentés, dont **5 en ligne**
- **185 tests automatisés** au total *(17 + 45 + 16 + 63 + 24 + 20)*
- **Intégration continue** sur 6 projets, dont 1 dépôt privé *(GitHub Actions)*
- **100 / 100** sur les 4 scores Lighthouse pour 2 sites, sur ordinateur

Petite note sous les chiffres : *Tests : dernière CI de chaque projet, le 22 novembre 2026. Lighthouse : mesuré le 28 novembre 2026 (RepaTek : le 22 novembre 2026).*

### 1.4 Bloc freelance *(repensé le 26/11/2026, demande d'Awad : deux parcours, premier site ou refonte)*
- Titre : **Vous avez un projet de site ou d'application ?**
- Texte : **Entrepreneur, artisan, association ou PME : que ce soit votre tout premier site ou la refonte de l'actuel, je m'occupe de tout, de l'idée à la mise en ligne.**
- Bouton : **Parlons de votre projet** (vers `/contact/?demande=freelance`)
- Ce que je réalise : Site vitrine · Réservation en ligne · Boutique en ligne · Application sur mesure · Back-office pour gérer votre activité · Refonte d'un site existant
- Comment je travaille :
  1. **Échange gratuit** — vous me présentez votre besoin ; si vous avez déjà un site, je l'analyse avant.
  2. **Devis** — une solution, un prix et un délai clairs, sans surprise.
  3. **Réalisation** — je développe et je teste ; vous suivez l'avancement et donnez votre avis.
  4. **Mise en ligne** — votre site est en ligne et je vous montre comment le gérer.
- **Votre premier site ou application** — Vous partez de zéro ? Je vous accompagne à chaque étape.
  - Je vous aide à définir l'essentiel : objectifs, pages, fonctionnalités et budget
  - Je m'occupe de toute la technique : nom de domaine, hébergement, connexion sécurisée (HTTPS)
  - Rapide, sécurisé et accessible à tous dès le premier jour, sur téléphone comme sur ordinateur
  - Prêt pour Google : titres, descriptions et aperçus pour les réseaux sociaux
- **Vous avez déjà un site ?** — Il est lent, daté ou mal référencé ? Je le remets à niveau.
  - Je fais le point : vitesse, référencement, sécurité, accessibilité et affichage sur téléphone
  - Je le refais avec un design moderne, en gardant vos textes, vos images et votre identité
  - Plus sûr : connexion HTTPS, serveur protégé, formulaires à l'abri des robots
  - Votre place sur Google est préservée : les anciennes adresses mènent aux nouvelles pages
  - Changement d'hébergeur ou de nom de domaine si besoin
- Inclus dans chaque projet *(décisions d'Awad du 25/11/2026 : 1 mois de corrections ; titre clarifié le 26/11/2026)* :
  - Mise en ligne, avec nom de domaine et hébergement configurés
  - Vitesse, sécurité et accessibilité contrôlées avant la livraison
  - Prise en main : je vous montre comment gérer votre site
  - 1 mois de corrections offertes après la mise en ligne
- Ligne à part, sous la liste : **En option : maintenance après la livraison, selon vos besoins.** *(la maintenance n'est pas incluse)*
- En bas du bloc *(ajouté le 26/11/2026)* : bouton **Parlons de votre projet** (vers `/contact/?demande=freelance`) et, à côté, **Premier échange gratuit et sans engagement. Réponse sous 24 h.**

### 1.5 Rappel du contact
- Texte : **Un poste, une mission ou une question ? Je réponds sous 24 h.**
- Bouton : **Me contacter**

---

## 2. Projets — `/projets/`

**Titre de la page** : Projets — Awad Dev
**Description** : Six projets web : trois projets clients en ligne, un template SaaS et deux projets de formation. Technologies, rôle et preuves de qualité.

- Grand titre : **Mes projets**
- Introduction : **Trois projets clients en ligne, un projet personnel et deux projets de formation. Pour chacun : ce qu'il fait, mon rôle et ce qui prouve sa qualité.**

### Cartes (dans l'ordre)

| Projet | Badge | Phrase de la carte | Technologies (5 max) | Début | Liens |
|---|---|---|---|---|---|
| **RepaTek** | Projet client | Réservation en ligne pour un service de dépannage informatique à domicile, aux Ulis (Essonne). | React · TypeScript · Supabase · Tailwind CSS · Resend | juin 2026 | Voir le détail · Voir le site · Voir le code |
| **I Make My World** | Projet client | Plateforme qui réunit des projets à impact, des experts et des investisseurs, avec un espace de modération. | React · TypeScript · Express · MySQL · Tailwind CSS | mars 2026 | Voir le détail · Voir le site |
| **Plateforme éditoriale** | Projet client | Média francophone sur l'actualité et l'analyse de la Corne de l'Afrique, avec son espace de rédaction. | Next.js · TypeScript · Prisma · PostgreSQL · Cloudflare R2 | juin 2026 | Voir le détail · Voir le site · Voir le code |
| **Template Next.js** | Projet personnel | Base de projet SaaS prête à l'emploi : comptes, paiement, e-mails, tests et déploiement. | Next.js · Better Auth · Stripe · Prisma · Playwright | octobre 2026 | Voir le détail · Voir le code |
| **eMatériel** | Projet de formation | Boutique en ligne de smartphones, tablettes et ordinateurs, avec paiement Stripe en mode test. | React · Express · MySQL · Stripe · Vitest | décembre 2025 | Voir le détail · Voir le site · Voir le code |
| **Solidays** | Projet de formation · en équipe de 3 | Reproduction du site du festival Solidays, avec un espace de gestion des artistes. | React · TypeScript · Vite · Express · MySQL | décembre 2025 | Voir le détail · Voir le site · Voir le code |

- En bas de page : **Un projet en tête ?** · bouton **Me contacter**

---

## 3. Détails des projets — `/projets/[projet]/`

Structure commune *(étude de cas, 26/11/2026)* : fil d'Ariane · badge · début · nom · phrase · **Mon rôle** et **Technologies** (en tête) · liens · captures légendées · **Le contexte** · **Mon rôle en détail** (Solidays) · **Architecture** (schéma + technologies) · **Défis et solutions** · **Fonctionnalités clés** · **Résultats** (qualité, Lighthouse, liens) · **Vous avez un projet similaire ?** (bouton **Parlons de votre projet** vers `/contact/?demande=freelance`) · **Projet suivant** · **Me contacter**.

Les « Choix techniques » décrivent ce qui est **dans le code** ; la raison donnée en une phrase est **à valider par Awad** (c'est lui qui a fait ces choix). Sur la fiche, chacun s'affiche en **Défi** (le problème, liste « Défis » ci-dessous, même ordre) puis **Solution** (le choix).

### 3.1 RepaTek — `/projets/repatek/`

**Titre de la page** : RepaTek — réservation de dépannage informatique · Awad Dev
**Description** : Site de réservation pour un technicien informatique à domicile : créneaux calculés, back-office, e-mails. React, TypeScript, Supabase.

- **Le projet** : RepaTek est le site d'un service de dépannage informatique à domicile aux Ulis, en Essonne : diagnostic, suppression de virus, passage au SSD, récupération de données. Le client choisit une prestation et un créneau, indique son adresse, et le technicien valide le rendez-vous depuis un back-office.
- **Mon rôle** : seul développeur, de la conception à la mise en ligne, pour le client **Aden Dahier Okieh**.
- **Le parcours en images** *(26/11/2026, captures et vidéo prises par le robot, sans jamais envoyer de demande)* :
  1. **1. Le client choisit sa prestation** — Chaque service affiche son prix et sa durée, qui servent ensuite à calculer les créneaux.
  2. **2. Il choisit un jour et un créneau** — Seuls les créneaux vraiment libres sont proposés : horaires, jours fermés, durée de la prestation et temps de trajet sont pris en compte.
  3. **3. Il indique ses coordonnées et son adresse** — Le technicien valide ensuite la demande depuis son back-office, et le client reçoit un e-mail à chaque étape.
  - Vidéo (environ 13 s, sans son, `/videos/repatek-reservation.mp4`) : **Vidéo sans son : choix d'une prestation, d'un jour et d'un créneau, puis formulaire de coordonnées. La démonstration s'arrête avant l'envoi.**
- **Fonctionnalités** :
  - Réservation en 4 étapes : prestation, date et créneau, coordonnées et adresse, confirmation.
  - Créneaux calculés selon les horaires, les jours fermés, la durée de la prestation, le délai de prévenance et une marge de trajet entre deux rendez-vous.
  - E-mail de réception de la demande, puis e-mail de confirmation quand le technicien valide.
  - Back-office : rendez-vous, prestations, horaires, jours fermés et réglages.
  - Une page par prestation, une FAQ et les pages légales.
- **Technologies** : React 19, TypeScript, Vite, React Router, Tailwind CSS 4, Supabase (PostgreSQL, authentification, Row Level Security, fonctions SQL, Edge Functions), Resend, GitHub Actions, Hostinger.
- **Schéma d'architecture** : Interface (React 19, TypeScript, Vite, Tailwind CSS 4) → Serveur (Supabase : authentification, fonctions SQL, Edge Functions) → Base de données (PostgreSQL avec Row Level Security) → Services (Resend pour les e-mails)
- **Défis** :
  1. Un visiteur ne doit pas pouvoir contourner les règles de réservation depuis son navigateur.
  2. Deux clients ne doivent jamais obtenir le même créneau, même s'ils réservent au même moment.
  3. Le calendrier public ne doit révéler aucune information sur les autres clients.
- **Choix techniques** :
  - **Une réservation passe uniquement par une fonction SQL qui revalide tout** (horaires, délai, marge de trajet, champs) : le navigateur ne peut pas créer un rendez-vous qui ne respecte pas les règles.
  - **La base refuse elle-même deux rendez-vous qui se chevauchent** (contrainte d'exclusion PostgreSQL) : c'est la dernière barrière, quel que soit le code.
  - **Aucune donnée client n'est lisible publiquement** (Row Level Security) : le calendrier public ne reçoit que des heures occupées.
- **Qualité** : 17 tests automatisés, lancés avant chaque déploiement · déploiement automatique sur Hostinger · Lighthouse ordinateur 97 / 100 / 100 / 100, mobile 87 / 100 / 100 / 100 *(mesuré le 22 novembre 2026)*.
- Liens : **Voir le site** (repatek.fr) · **Voir le code**

### 3.2 I Make My World — `/projets/i-make-my-world/`

**Titre de la page** : I Make My World — plateforme de projets à impact · Awad Dev
**Description** : Plateforme qui réunit créateurs, experts et investisseurs, avec back-office de modération. React, Express, MySQL, 45 tests.

- **Le projet** : I Make My World réunit sur une même plateforme des créateurs, qui publient des projets à impact, des experts, qui proposent leur accompagnement, et des investisseurs, qui découvrent des projets à soutenir. Tout contenu publié est d'abord validé par un administrateur.
- **Mon rôle** : seul développeur, de la conception à la mise en ligne.
- **Le parcours en images** *(27/11/2026, captures et vidéo prises par le robot sur les données de démonstration du site)* :
  1. **1. Le catalogue des projets, filtré** — Recherche et filtre par thématique : le nombre de projets trouvés se met à jour aussitôt.
  2. **2. La fiche d'un projet** — Description, marché, problème, solution et porteur du projet. Tout contenu publié a d'abord été validé par un administrateur.
  3. **3. L'annuaire des experts, filtré par domaine** — Chaque expert présente son domaine et son expérience, et un porteur de projet peut lui demander un accompagnement.
  - Vidéo (environ 18 s, sans son, `/videos/i-make-my-world-parcours.mp4`) : **Vidéo sans son : filtre des projets par catégorie, ouverture d'une fiche, puis annuaire des experts filtré par domaine. Données de démonstration du site.**
- **Fonctionnalités** :
  - Catalogue des projets filtrable par thématique, annuaire des experts filtrable par domaine, demande d'accompagnement.
  - Espace membre : profil, changement de mot de passe, suppression du compte.
  - Créateurs : dépôt et modification de projets avec image, suivi du statut (en attente, publié, refusé avec motif).
  - Experts : candidature, gestion de ses expertises, réponse aux demandes reçues.
  - Back-office : tableau de bord, modération des projets et des expertises, gestion des utilisateurs et de leurs rôles, abonnements, messages de contact.
- Règle à respecter dans les textes : **aucun paiement n'est encaissé en ligne** (les abonnements sont confirmés par l'équipe) ; ne pas annoncer de paiement en ligne.
- **Technologies** (en 3 groupes, décision C8) :
  - **Interface** : React 19, TypeScript, Vite, React Router, Tailwind CSS 4, shadcn/ui, React Hook Form, Zod
  - **Serveur** : Node.js, Express 5, MySQL, JWT, bcrypt, Helmet, Cloudflare R2, Resend
  - **Tests et mise en ligne** : Vitest, Supertest, GitHub Actions, Hostinger
- **Schéma d'architecture** : Interface (React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui) → API (Node.js, Express 5, authentification JWT) → Données (MySQL, images privées sur Cloudflare R2) → Services (Resend pour les e-mails)
- **Défis** :
  1. Chaque profil (créateur, expert, administrateur) doit n'accéder qu'à ce qui le concerne.
  2. Les images déposées par les membres ne doivent pas être accessibles à tout le monde.
  3. Une API ouverte sur Internet est exposée aux abus et aux attaques courantes.
- **Choix techniques** :
  - **Une API Express séparée de l'interface**, avec authentification par jeton (JWT).
  - **Images stockées dans un espace privé Cloudflare R2**, servies uniquement par l'API.
  - **Protection de l'API** : limite de demandes et en-têtes de sécurité.
- **Qualité** : 45 tests d'intégration (Vitest et Supertest) · TypeScript strict · intégration continue · Lighthouse ordinateur 99 / 96 / 100 / 100, mobile 94 / 96 / 100 / 100 *(mesuré le 28 novembre 2026)*.
- Liens : **Voir le site**
- Mention à la place du code : **Le code de ce projet client est privé. Je peux le présenter en entretien.**

### 3.3 Plateforme éditoriale — `/projets/plateforme-editoriale/`

**Titre de la page** : Plateforme éditoriale — média sur la Corne de l'Afrique · Awad Dev
**Description** : Média francophone et son espace de rédaction. Next.js 16, Prisma, PostgreSQL, Cloudflare R2. 16 tests, Lighthouse 100.

- **Le projet** : un média francophone consacré à la Corne de l'Afrique (asile, migrations, droits humains, analyses par pays), avec son espace de rédaction. Une seule personne administre le site, rédige et publie.
- **Mon rôle** : conception et développement du site, pour l'éditeur **Harbi Egueh Aouled**.
- **Le parcours en images** *(27/11/2026, captures et vidéo prises par le robot sur le site public ; seule action : une recherche)* :
  1. **1. Les articles d'un pays** — Chaque pays et chaque rubrique a sa page, avec des filtres par rubrique, type de contenu et date.
  2. **2. La recherche plein texte** — Un mot-clé suffit, et les résultats peuvent être affinés par pays, rubrique, type et période.
  3. **3. La lecture d'un article** — Fil d'Ariane, chapeau, rubrique et date, puis le temps de lecture, le partage et les articles liés.
  - Vidéo (environ 14 s, sans son, `/videos/plateforme-editoriale-parcours.mp4`) : **Vidéo sans son : page d'un pays, recherche du mot « déplacés », puis ouverture du premier article trouvé.**
- **Fonctionnalités** :
  - Accueil éditorial : article à la une, actualités, analyses et enquêtes, fil « En continu ».
  - Pages par rubrique et par pays, liste des articles avec filtres.
  - Recherche plein texte.
  - Page article : temps de lecture, partage, « citer cet article », articles liés.
  - Newsletter et formulaire de contact protégé contre les robots.
  - Back-office : tableau de bord, articles (brouillon, publié, archivé), rubriques et pays, inscrits à la newsletter, messages.
- **Technologies** : Next.js 16 (App Router, Server Components, Server Actions), React 19, TypeScript, Tailwind CSS 4, Prisma 7, PostgreSQL (Supabase), Zod, Cloudflare R2, Resend, Cloudflare Turnstile, Vitest, GitHub Actions, Hostinger.
- **Schéma d'architecture** : Application (Next.js 16 : Server Components et Server Actions, TypeScript) → Base de données (PostgreSQL (Supabase) avec Prisma 7) → Stockage (Cloudflare R2 pour les images) → Services (Resend pour les e-mails, Cloudflare Turnstile contre les robots)
- **Défis** :
  1. Un média accumule beaucoup d'images, qui ne doivent pas alourdir le serveur du site.
  2. Envoyer des e-mails sans ajouter de dépendance à maintenir.
  3. Les formulaires de contact et de newsletter attirent les robots.
- **Choix techniques** :
  - **Images stockées sur Cloudflare R2**, hors du serveur du site.
  - **E-mails envoyés par l'API de Resend avec un simple appel HTTP**, sans bibliothèque en plus.
  - **Protection anti-robots avec Cloudflare Turnstile.**
- **Qualité** : 16 tests unitaires sur les règles de sécurité · lint sans aucun avertissement · TypeScript strict · intégration continue · Lighthouse ordinateur 100 / 100 / 100 / 100, mobile 95 / 100 / 100 / 100 *(mesuré le 28 novembre 2026)*.
- Liens : **Voir le site** · **Voir le code**

### 3.4 Template Next.js — `/projets/template-nextjs/`

**Titre de la page** : Template Next.js SaaS · Awad Dev
**Description** : Base de projet SaaS : Next.js 16, Better Auth, Stripe, Prisma, tests Playwright, Docker et Caddy.

- **Le projet** : une base de départ pour lancer une application SaaS : comptes utilisateurs, paiement, e-mails, base de données, tests et déploiement déjà en place.
- **Mon rôle** : projet personnel, conçu et développé seul.
- **Fonctionnalités** :
  - Comptes utilisateurs avec Better Auth.
  - Paiement Stripe avec webhook.
  - E-mails avec Resend et React Email.
  - Base de données avec Prisma 7 et PostgreSQL.
  - Déploiement prêt avec Docker et Caddy.
- **Technologies** : Next.js 16, React 19, TypeScript, Tailwind CSS 4, Better Auth, Stripe, Prisma 7, PostgreSQL, Resend, Vitest, Playwright, Docker, Caddy, GitHub Actions.
- **Défis** :
  1. Vérifier automatiquement les parcours complets avant chaque mise en ligne.
  2. Pouvoir déployer simplement sur un serveur, avec HTTPS.
  3. Les dépendances d'un projet vieillissent et peuvent contenir des failles.
- **Choix techniques** :
  - **Tests de bout en bout Playwright dans l'intégration continue**, sur une vraie base de données préparée à chaque lancement.
  - **Docker et Caddy** pour déployer sur un serveur avec HTTPS automatique.
  - **Contrôle des failles des dépendances dans l'intégration continue**, et mises à jour proposées par Dependabot.
- **Qualité** : 13 tests unitaires (Vitest) · **7 scénarios E2E exécutés sur 2 profils : ordinateur et mobile** (Playwright) · intégration continue · aucune faille connue dans les dépendances *(vérifié le 22 novembre 2026)*.
- Mention en haut et en bas de la fiche (décision C10) : **Pas de site en ligne**
- Liens : **Voir le code**
- **Schéma à la place des captures** (décisions C9, C11, C12) :
  - Titre : **Architecture cible — configuration de production**
  - Cadre : **VPS · Docker Compose · réseau interne**, avec **Caddy 2**, **Next.js 16** (Prisma 7 comme bibliothèque intégrée) et **PostgreSQL 17**
  - Conteneur ponctuel : **migrate**
  - Services externes : **Stripe** et **Resend**
  - Bande CI/CD : **Workflow de déploiement configuré — désactivé par défaut.**
  - Légende : **Architecture cible de production, d'après docker-compose.prod.yml, Dockerfile et Caddyfile.**

### 3.5 eMatériel — `/projets/emateriel/`

**Titre de la page** : eMatériel — boutique en ligne · Awad Dev
**Description** : Boutique en ligne avec panier, stock et paiement Stripe en mode test. React, Express, MySQL, 63 tests.

- **Le projet** : une boutique en ligne de smartphones, tablettes, ordinateurs et accessoires. Projet de formation Simplon.co, que j'ai ensuite terminé et mis en ligne.
- **Mon rôle** : projet de formation réalisé seul, puis terminé et mis en ligne.
- **Le parcours en images** *(27/11/2026, captures et vidéo prises par le robot ; panier gardé dans son navigateur, aucune commande)* :
  1. **1. Le catalogue** — Chaque produit affiche sa catégorie, son prix et sa disponibilité en stock.
  2. **2. La fiche produit et l'ajout au panier** — Le stock restant est indiqué, et l'ajout au panier est confirmé tout de suite, compteur du panier compris.
  3. **3. Le panier** — Quantités modifiables et total TTC. La commande passe ensuite par une connexion, puis par le paiement Stripe en mode test.
  - Vidéo (environ 12 s, sans son, `/videos/emateriel-parcours.mp4`) : **Vidéo sans son : catalogue, fiche d'un produit, ajout au panier, puis le panier. La démonstration s'arrête avant la commande.**
- **Fonctionnalités** :
  - Catalogue et panier.
  - Paiement par Stripe, **en mode test** (aucun vrai paiement possible).
  - Stock mis à jour de façon sûre au moment de la commande.
  - Suivi de commande.
  - Back-office.
- **Technologies** : React 19, TypeScript, Vite, Express 5, MySQL, Zod, Stripe, Vitest, Supertest, GitHub Actions, Hostinger.
- **Schéma d'architecture** : Interface (React 19, TypeScript, Vite) → API (Express 5, validation avec Zod) → Base de données (MySQL) → Services (Stripe en mode test)
- **Défis** :
  1. Deux clients peuvent commander le dernier article en stock au même moment.
  2. Intégrer le paiement sans aucun risque de débiter une vraie carte.
  3. Chaque modification ne doit pas casser le serveur de la boutique.
- **Choix techniques** :
  - **Le stock est modifié dans une transaction** : deux commandes en même temps ne peuvent pas vendre le même dernier article.
  - **Stripe appelé directement par son API**, sans bibliothèque en plus, et **seule une clé de test est acceptée**.
  - **API testée avec Supertest** : 63 tests vérifient le serveur à chaque modification.
- **Qualité** : 63 tests automatisés · intégration continue · Lighthouse ordinateur 100 / 100 / 100 / 100, mobile 100 / 100 / 100 / 100 *(mesuré le 28 novembre 2026)*.
- Liens : **Voir le site** · **Voir le code**

### 3.6 Solidays — `/projets/solidays/`

**Titre de la page** : Solidays — projet de formation en équipe · Awad Dev
**Description** : Reproduction du site du festival Solidays avec gestion des artistes. Projet de formation en équipe de 3. React, Express, MySQL.

- Mention en haut : **Projet de formation Simplon.co, réalisé en équipe de 3 : Awad, Prativa et Manon.**
- **Le projet** : une reproduction du site du festival Solidays, avec un espace de gestion des artistes. Le site de démonstration n'est pas référencé sur Google, pour ne pas être confondu avec le vrai festival.
- **Mon rôle** : **Lead Dev de l'équipe de 3.** *J'ai créé et mis en place le dépôt du projet, puis réalisé l'en-tête et la navigation adaptés au mobile, la section d'accueil animée, le pied de page, la page Festival, la billetterie, les mentions légales et le back-office de gestion des artistes. Après la formation, j'ai rénové le site, ajouté les tests et l'intégration continue, et je l'ai mis en ligne.* Organisation de l'équipe : une branche par fonctionnalité, pull requests et revues de code, modélisation de la base réalisée ensemble.
- **Le parcours en images** *(27/11/2026, captures et vidéo prises par le robot sur le site de démonstration)* :
  1. **1. La programmation, filtrée par jour** — Les artistes sont chargés depuis l'API et se filtrent par jour en un clic.
  2. **2. La fiche d'un artiste** — Description, jour du concert et lien vidéo, gérés par l'équipe depuis le back-office.
  3. **3. La billetterie** — Chaque pass renvoie vers les vendeurs officiels du festival : le site ne vend rien lui-même.
  - Vidéo (environ 16 s, sans son, `/videos/solidays-parcours.mp4`) : **Vidéo sans son : programmation filtrée sur le samedi, fiche d'un artiste, puis les pass de la billetterie.**
- **Fonctionnalités** :
  - Accueil fidèle au site d'origine, avec une bannière d'artistes interactive : la photo change au survol de chaque nom.
  - Programmation chargée depuis l'API, filtrée par jour.
  - Fiches artistes : description, jour du concert, lien vidéo.
  - Billetterie (liens vers les vendeurs officiels) et page Festival.
  - Back-office sécurisé : connexion administrateur, ajout, modification et suppression d'artistes, envoi d'images avec aperçu.
- **Technologies** : React 19, TypeScript, Vite, React Router, Express 5, MySQL, Zod, Helmet, GitHub Actions, Dependabot, Hostinger.
- **Mon rôle (en tête de fiche)** : Lead Dev de l'équipe de 3
- **Schéma d'architecture** : Interface (React 19, TypeScript, Vite, React Router) → API (Express 5, Zod, Helmet) → Base de données (MySQL, modélisée avec la méthode Merise)
- **Défis** :
  1. Travailler à trois sur le même code sans se gêner.
  2. Gérer la programmation des artistes sans toucher au code du site.
  3. Protéger l'API et le back-office contre les données invalides et les attaques courantes.
- **Choix techniques** :
  - **Une branche par fonctionnalité et des revues de code** pour travailler à trois sur le même dépôt.
  - **Les données des artistes viennent d'une API Express et d'une base MySQL**, modélisée ensemble avec la méthode Merise.
  - **Entrées validées côté serveur avec Zod** et en-têtes de sécurité avec Helmet.
- **Qualité** : 24 tests automatisés · intégration et déploiement continus · Dependabot.
- Liens : **Voir le site** · **Voir le code**

---

## 4. À propos — `/a-propos/`

**Titre de la page** : À propos — Awad Dev, développeur Full Stack JavaScript / TypeScript
**Description** : Awad, développeur Full Stack JavaScript / TypeScript en Île-de-France : ce qu'il apporte aux entreprises et aux porteurs de projet, compétences et parcours.

Refonte du 26/11/2026 : texte proposé par Awad, adapté (chaque promesse a une preuve vérifiable ; « respect strict des délais » devient un engagement pris dans le devis ; « ROI » dit en mots simples). Les nombres entre accolades sont calculés depuis les données des projets.

### 4.1 Présentation
- Surtitre : **À propos** (en couleur, en capitales, au-dessus du grand titre)
- Grand titre : **Je transforme un besoin en application web qui fonctionne.**
- Texte (3 paragraphes) :
  1. **Je suis Awad, Développeur Full Stack JavaScript / TypeScript · React, Next.js, Node.js. Basé en Île-de-France, je conçois des applications web sur mesure, de la base de données jusqu'à l'écran de vos utilisateurs.**
  2. **Mon objectif : allier rigueur technique et vision business. Avant d'écrire du code, je cherche à comprendre ce que le produit doit apporter, puis je livre une solution solide qui répond précisément au besoin.**
  3. **Formé chez Simplon.co, j'ai déjà livré {clients} projets pour des clients, tous en ligne aujourd'hui.**
- Boutons : **Voir mes projets** (principal) · **Me contacter**

### 4.2 Ce que je garantis
Sous-titre : **À mes clients comme à mes employeurs.**
- **Une maîtrise de bout en bout** : Je prends en charge une fonctionnalité entière : base de données, API, serveur, puis une interface fluide et agréable sur tous les écrans. — Preuve : {clients} projets clients en ligne, que vous pouvez visiter
- **Vos objectifs avant la technique** : Je traduis vos objectifs en fonctionnalités concrètes et je choisis la solution la plus simple qui marche : moins de coûts, une mise en ligne plus rapide, des utilisateurs satisfaits. — Preuve : {seo} de mes sites ont 100/100 en référencement sur l'outil de Google
- **Fiabilité et transparence** : Code propre et versionné avec Git, tests automatisés, intégration continue. Je vous tiens informé à chaque étape et je m'engage sur un délai dès le devis. — Preuve : {tests} tests automatiques sur mes {projets} projets

### 4.3 Comment je peux vous aider
- **01 · CDI, CDD ou mission longue — Entreprises et recruteurs**
  - Je m'intègre dans votre équipe : je lis le code existant et je respecte vos conventions.
  - Je propose des choix d'architecture argumentés (React, Next.js, Node.js, TypeScript).
  - Je développe des fonctionnalités complètes en autonomie, testées avant la mise en ligne.
  - Bouton : **Me proposer un poste** → `/contact/`
- **02 · Freelance — Porteurs de projet et startups**
  - Un MVP (première version de votre produit) pour tester votre marché rapidement.
  - La refonte d'un site ou d'une application existante.
  - L'amélioration de la vitesse et du référencement de votre site.
  - Bouton : **Parlons de votre projet** → `/contact/?demande=freelance`

### 4.3 bis Compétences (par domaine)
- **Interface (front-end)** : React, TypeScript, Next.js, Vite, Tailwind CSS, shadcn/ui
- **Serveur et API (back-end)** : Node.js, Express, Zod, JWT, Better Auth, Resend, Stripe (mode test)
- **Données** : PostgreSQL, MySQL, Prisma, Supabase (Row Level Security, Edge Functions), Cloudflare R2
- **Qualité et sécurité** : Vitest, Supertest, Playwright, Dependabot, Cloudflare Turnstile
- **Mise en ligne** : Git et GitHub, GitHub Actions, Docker, Caddy, Hostinger
- **Outils d'IA** : Claude Code, Claude Design, ChatGPT

Phrase sous le titre : **Je n'affiche que des technologies utilisées dans des projets que vous pouvez consulter.**
Phrase sous les compétences : **J'utilise ces outils d'IA pour concevoir, relire le code et écrire des tests. Je relis, je teste et je reste responsable de tout ce que je livre.**

Bandeau final : **Un poste à pourvoir ou un projet à lancer ? Parlons-en.** · bouton **Me contacter**

### 4.4 Parcours
- **Formation « Développeur web et web mobile » — Simplon.co** · septembre 2025 – avril 2026
- **Projets** :
  - Décembre 2025 — Solidays (formation, en équipe de 3) et eMatériel (formation)
  - Mars 2026 — I Make My World (client)
  - Juin 2026 — RepaTek (client) et Plateforme éditoriale (client)
  - Octobre 2026 — Template Next.js (personnel)


### 4.5 CV
- Texte : **CV disponible en français et en anglais.** (décision d'Awad du 28/11/2026 : pas de CV en allemand)
- Liens : **CV en français (PDF, 85 Ko)** · **CV en anglais (PDF, 84 Ko)**.
- Boutons : **Voir mes projets** (principal, décision C15) · **Me contacter**

---

## 5. Contact — `/contact/`

**Titre de la page** : Contact — Awad Dev
**Description** : Proposer un poste, une mission freelance ou poser une question à Awad, développeur Full Stack JavaScript / TypeScript. Réponse sous 24 h.

- Grand titre : **Me contacter**
- Introduction : **Un poste en CDI ou CDD, une mission freelance ou une simple question : écrivez-moi. Je réponds sous 24 h.**
- **Pour me joindre : ce formulaire ou LinkedIn.**
- *Ajouts du 25/11/2026 (page refaite à la demande d'Awad) :*
  - Repères : **Réponse** — **Sous 24 h, par e-mail.** · **Disponibilité** — **Postes en CDI ou CDD et missions freelance.** · **Lieu** — **Île-de-France**
  - **Comment ça se passe** : 1. **Vous m'écrivez avec ce formulaire ou sur LinkedIn.** 2. **Je vous réponds sous 24 h, par e-mail.** 3. **Nous échangeons sur votre poste ou votre projet.**
  - Titre de la carte du formulaire : **Envoyer un message**

### 5.1 Formulaire

| Champ | Étiquette | Aide / exemple |
|---|---|---|
| Nom | **Votre nom** | — |
| E-mail | **Votre adresse e-mail** | « Pour que je puisse vous répondre. » |
| Type de demande | **Votre demande** (facultatif, 3 boutons radio, décision C16) | Choix : **Offre d'emploi** · **Projet freelance** · **Autre** |
| Message | **Votre message** | « Entre 20 et 3 000 caractères. » |
| Accord | **J'accepte que mes données servent uniquement à répondre à ma demande.** (lien « En savoir plus » vers les mentions légales) | — |
| Bouton | **Envoyer le message** (pendant l'envoi : **Envoi en cours…**) | — |

Les champs obligatoires sont signalés par la mention **(obligatoire)** dans leur étiquette.

### 5.2 Messages
- Envoi réussi : **Merci, votre message est bien envoyé. Je vous réponds sous 24 h.**
- Champ vide : **Ce champ est obligatoire.**
- E-mail invalide : **Cette adresse e-mail ne semble pas valide.**
- Message trop court : **Votre message doit contenir au moins 20 caractères.**
- Message trop long : **Votre message ne doit pas dépasser 3 000 caractères.**
- Accord non coché : **Merci de cocher la case pour que je puisse vous répondre.**
- Trop de demandes : **Vous avez envoyé plusieurs messages en peu de temps. Réessayez dans quelques minutes.**
- Envoi impossible : **Le message n'a pas pu être envoyé. Réessayez, ou écrivez-moi sur LinkedIn.**
- JavaScript désactivé (à la place du formulaire, « LinkedIn » en lien) : **Le formulaire a besoin de JavaScript. Vous pouvez aussi m'écrire sur LinkedIn.** *(décision RM2 de `roadmap.md`, 23/11/2026)*

### 5.3 À côté du formulaire
- **LinkedIn** · **GitHub**
- **CV disponible en français et en anglais** + les 2 liens

---

## 6. Mentions légales — `/mentions-legales/`

**Titre de la page** : Mentions légales — Awad Dev
**Description** : Éditeur, hébergeur et traitement des données personnelles du portfolio Awad Dev.

- **Éditeur du site** : Awad Ahmed, particulier. Contact : par le [formulaire de contact](/contact/).
- **Hébergeur** : Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre — https://www.hostinger.fr.
  *Note interne, à ne pas afficher : adresse relevée le 22/11/2026, à revérifier sur le site de Hostinger avant la mise en ligne.*
- **Données personnelles (formulaire de contact)** :
  - Données collectées : nom, adresse e-mail, type de demande, message.
  - But : uniquement répondre à votre demande.
  - Base : votre accord, donné en cochant la case du formulaire.
  - Destinataire : Awad Ahmed. Le message est transmis par le service d'envoi d'e-mails Resend.
  - Durée de conservation : **12 mois** après le dernier échange, puis suppression.
  - Transfert hors de l'Union européenne : Resend est une société américaine ; les messages peuvent donc transiter par des serveurs situés hors de l'Union européenne.
  - Vos droits : accès, rectification, effacement et opposition, en écrivant par le formulaire de contact. Vous pouvez aussi déposer une réclamation auprès de la CNIL (cnil.fr).
- **Cookies** : ce site n'utilise aucun cookie ni outil de mesure d'audience. Votre choix de thème clair ou sombre est gardé dans votre navigateur, uniquement sur votre appareil.
- **Propriété** : les textes et le code de ce site sont ceux d'Awad ; les captures d'écran montrent des sites qu'il a réalisés.

---

## 7. Page introuvable (404)

**Titre de la page** : Page introuvable — Awad Dev

- Grand titre : **Cette page n'existe pas.**
- Texte : **L'adresse est peut-être mal écrite, ou la page a été déplacée.**
- Boutons : **Retour à l'accueil** · **Voir les projets**

---

## 8. Textes alternatifs des images (modèles)

- Photo : **Portrait d'Awad**
- Capture ordinateur : **Page d'accueil du site [nom du projet] sur ordinateur**
- Capture mobile : **Page d'accueil du site [nom du projet] sur téléphone**

---

## Décisions d'Awad (22/11/2026)

| # | Point | Décision |
|---|---|---|
| T1 | Étapes freelance | **« Échange gratuit »** |
| T2 | RepaTek | **Seul développeur** |
| T3 | I Make My World : fonctionnalités | Relevées dans le README du dépôt (22/11/2026) |
| T4 | I Make My World : code privé | **Proposé en présentation lors d'un entretien** |
| T5 | Plateforme éditoriale : fonctionnalités | Relevées dans le README du dépôt (22/11/2026) |
| T6 | eMatériel | **Réalisé seul** |
| T7 | Solidays : rôle | **Lead Dev de l'équipe de 3**, avec les parties réalisées relevées dans l'historique GitHub |
| T8 | Raisons des choix techniques | **Validées** |
| T9 | Dates de la formation Simplon.co | **Septembre 2025 – avril 2026** |
| T10 | Conservation des messages | **12 mois** après le dernier échange |
| T11 | Resend hors de l'Union européenne | **Mentionné** dans les mentions légales |
| T12 | Ton | **Vouvoiement des visiteurs, « je » pour Awad** |

