# Contenus du site — Portfolio de Awad Ahmed

> Statut : **validé par Awad le 22/11/2026**. Aucune maquette ni aucun code ne sont commencés.
> Rôle : les **textes définitifs** du site, page par page, à valider avant les maquettes (décision d'Awad du 22/11/2026, `requirements.md` EF-10).
> Sources : les faits de [`product-discovery.md`](./product-discovery.md), la structure de [`sitemap.md`](./sitemap.md), les règles de [`requirements.md`](./requirements.md) et [`user-flows.md`](./user-flows.md). Les titres et descriptions des sites en ligne ont été relus le 22/11/2026.
> Règles : 100 % en français ; aucun « junior » ni « senior » ; aucun nombre d'années d'expérience ; aucune adresse e-mail ; chiffres repris des documents (à mesurer de nouveau avant la mise en ligne).
> Toutes les décisions d'Awad sont regroupées à la fin (T1 à T12).

---

## 0. Éléments communs

### En-tête
- Logo texte : **Awad Ahmed**
- Liens : **Projets** · **À propos** · **Contact**
- Bouton : **CV** (ouvre le CV en français)
- Bouton thème : étiquette pour les lecteurs d'écran « Passer en mode sombre » / « Passer en mode clair »
- Mobile : bouton **Menu** (« Ouvrir le menu » / « Fermer le menu »)
- Lien d'évitement : **Aller au contenu**

### Pied de page
- Liens : Projets · À propos · Contact · CV · Mentions légales
- LinkedIn · GitHub · Code de ce portfolio
- © 2026 Awad Ahmed

### Badges des projets
- **Projet client** — RepaTek, I Make My World, Plateforme éditoriale
- **Projet personnel** — Template Next.js
- **Projet de formation** — eMatériel ; Solidays (avec « en équipe de 3 »)

---

## 1. Accueil — `/`

**Titre de la page (onglet et Google)** : Awad Ahmed — Développeur Full Stack JavaScript / TypeScript
**Description (Google)** : Développeur Full Stack en Île-de-France. Applications web complètes et en ligne, avec React, Next.js et Node.js. Ouvert aux postes en CDI ou CDD et aux missions freelance.

### 1.1 Premier écran
- Petit titre : **Développeur Full Stack JavaScript / TypeScript**
- Grand titre (`h1`) : **Awad Ahmed**
- Technologies : **React · Next.js · Node.js**
- Phrase de présentation : **Je conçois, développe et mets en ligne des applications web complètes : de l'interface au serveur et à la base de données, avec des tests et un déploiement automatique.**
- Lieu : **Île-de-France**
- Disponibilité : **Ouvert aux postes en CDI ou CDD et aux missions freelance.**
- Boutons : **Voir mes projets** (principal) · **Me contacter** (secondaire)

### 1.2 Projets mis en avant
- Titre : **Projets clients**
- Sous-titre : **Des sites réels, conçus et développés pour des clients, en ligne aujourd'hui.**
- 3 cartes : RepaTek, I Make My World, Plateforme éditoriale (textes des cartes : section 2)
- Lien : **Voir les 6 projets**

### 1.3 Preuves en chiffres
- **6 projets** présentés, dont **5 en ligne**
- **192 tests automatisés** au total *(17 + 16 + 63 + 27 + 24 + 45)*
- **Intégration continue** sur les 6 projets *(GitHub Actions)*
- **100 / 100** sur les 4 scores Lighthouse pour 2 sites, sur ordinateur

Petite note sous les chiffres : *Chiffres relevés sur les dépôts et les sites en ligne le 22 novembre 2026.*

### 1.4 Bloc freelance
- Titre : **Vous avez un projet de site ou d'application ?**
- Texte : **Entrepreneur, artisan ou PME : je réalise votre projet de A à Z et je le mets en ligne.**
- Ce que je réalise :
  - Site vitrine
  - Réservation en ligne
  - Boutique en ligne
  - Application sur mesure
  - Back-office pour gérer votre activité
- Comment je travaille :
  1. **Échange gratuit** — vous me présentez votre besoin.
  2. **Devis** — je vous propose une solution, un prix et un délai.
  3. **Réalisation et mise en ligne** — je développe, je teste et je mets votre site en ligne.
- Bouton : **Parlons de votre projet** (vers `/contact/?demande=freelance`)

### 1.5 Rappel du contact
- Texte : **Un poste, une mission ou une question ? Je réponds sous 24 h.**
- Bouton : **Me contacter**

---

## 2. Projets — `/projets/`

**Titre de la page** : Projets — Awad Ahmed
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

Structure commune : fil d'Ariane · nom · badge · début · captures · **Le projet** · **Mon rôle** · **Fonctionnalités** · **Technologies** · **Choix techniques** · **Qualité** · liens · **Projet suivant** · **Me contacter**.

Les « Choix techniques » décrivent ce qui est **dans le code** ; la raison donnée en une phrase est **à valider par Awad** (c'est lui qui a fait ces choix).

### 3.1 RepaTek — `/projets/repatek/`

**Titre de la page** : RepaTek — réservation de dépannage informatique · Awad Ahmed
**Description** : Site de réservation pour un technicien informatique à domicile : créneaux calculés, back-office, e-mails. React, TypeScript, Supabase.

- **Le projet** : RepaTek est le site d'un service de dépannage informatique à domicile aux Ulis, en Essonne : diagnostic, suppression de virus, passage au SSD, récupération de données. Le client choisit une prestation et un créneau, indique son adresse, et le technicien valide le rendez-vous depuis un back-office.
- **Mon rôle** : seul développeur, de la conception à la mise en ligne, pour le client **Aden Dahier Okieh**.
- **Fonctionnalités** :
  - Réservation en 4 étapes : prestation, date et créneau, coordonnées et adresse, confirmation.
  - Créneaux calculés selon les horaires, les jours fermés, la durée de la prestation, le délai de prévenance et une marge de trajet entre deux rendez-vous.
  - E-mail de réception de la demande, puis e-mail de confirmation quand le technicien valide.
  - Back-office : rendez-vous, prestations, horaires, jours fermés et réglages.
  - Une page par prestation, une FAQ et les pages légales.
- **Technologies** : React 19, TypeScript, Vite, React Router, Tailwind CSS 4, Supabase (PostgreSQL, authentification, Row Level Security, fonctions SQL, Edge Functions), Resend, GitHub Actions, Hostinger.
- **Choix techniques** :
  - **Une réservation passe uniquement par une fonction SQL qui revalide tout** (horaires, délai, marge de trajet, champs) : le navigateur ne peut pas créer un rendez-vous qui ne respecte pas les règles.
  - **La base refuse elle-même deux rendez-vous qui se chevauchent** (contrainte d'exclusion PostgreSQL) : c'est la dernière barrière, quel que soit le code.
  - **Aucune donnée client n'est lisible publiquement** (Row Level Security) : le calendrier public ne reçoit que des heures occupées.
- **Qualité** : 17 tests automatisés, lancés avant chaque déploiement · déploiement automatique sur Hostinger · Lighthouse ordinateur 97 / 100 / 100 / 100, mobile 87 / 100 / 100 / 100 *(mesuré le 22 novembre 2026)*.
- Liens : **Voir le site** (repatek.fr) · **Voir le code**

### 3.2 I Make My World — `/projets/i-make-my-world/`

**Titre de la page** : I Make My World — plateforme de projets à impact · Awad Ahmed
**Description** : Plateforme qui réunit créateurs, experts et investisseurs, avec back-office de modération. React, Express, MySQL, 45 tests.

- **Le projet** : I Make My World réunit sur une même plateforme des créateurs, qui publient des projets à impact, des experts, qui proposent leur accompagnement, et des investisseurs, qui découvrent des projets à soutenir. Tout contenu publié est d'abord validé par un administrateur.
- **Mon rôle** : seul développeur, de la conception à la mise en ligne.
- **Fonctionnalités** :
  - Catalogue des projets filtrable par thématique, annuaire des experts filtrable par domaine, demande d'accompagnement.
  - Espace membre : profil, changement de mot de passe, suppression du compte.
  - Créateurs : dépôt et modification de projets avec image, suivi du statut (en attente, publié, refusé avec motif).
  - Experts : candidature, gestion de ses expertises, réponse aux demandes reçues.
  - Back-office : tableau de bord, modération des projets et des expertises, gestion des utilisateurs et de leurs rôles, abonnements, messages de contact.
- Règle à respecter dans les textes : **aucun paiement n'est encaissé en ligne** (les abonnements sont confirmés par l'équipe) ; ne pas annoncer de paiement en ligne.
- **Technologies** : React 19, TypeScript, Vite, React Router, Tailwind CSS 4, shadcn/ui, React Hook Form, Zod ; Node.js, Express 5, MySQL, JWT, bcrypt, Helmet, Cloudflare R2, Resend ; Vitest, Supertest, GitHub Actions, Hostinger.
- **Choix techniques** :
  - **Une API Express séparée de l'interface**, avec authentification par jeton (JWT).
  - **Images stockées dans un espace privé Cloudflare R2**, servies uniquement par l'API.
  - **Protection de l'API** : limite de demandes et en-têtes de sécurité.
- **Qualité** : 45 tests d'intégration (Vitest et Supertest) · TypeScript strict · intégration continue · Lighthouse ordinateur 99 / 99 / 100 / 100, mobile 90 / 99 / 100 / 100 *(mesuré le 21 ou le 22 novembre 2026)*.
- Liens : **Voir le site**
- Mention à la place du code : **Le code de ce projet client est privé. Je peux le présenter en entretien.**

### 3.3 Plateforme éditoriale — `/projets/plateforme-editoriale/`

**Titre de la page** : Plateforme éditoriale — média sur la Corne de l'Afrique · Awad Ahmed
**Description** : Média francophone et son espace de rédaction. Next.js 16, Prisma, PostgreSQL, Cloudflare R2. 16 tests, Lighthouse 100.

- **Le projet** : un média francophone consacré à la Corne de l'Afrique (asile, migrations, droits humains, analyses par pays), avec son espace de rédaction. Une seule personne administre le site, rédige et publie.
- **Mon rôle** : conception et développement du site, pour l'éditeur **Harbi Egueh Aouled**.
- **Fonctionnalités** :
  - Accueil éditorial : article à la une, actualités, analyses et enquêtes, fil « En continu ».
  - Pages par rubrique et par pays, liste des articles avec filtres.
  - Recherche plein texte.
  - Page article : temps de lecture, partage, « citer cet article », articles liés.
  - Newsletter et formulaire de contact protégé contre les robots.
  - Back-office : tableau de bord, articles (brouillon, publié, archivé), rubriques et pays, inscrits à la newsletter, messages.
- **Technologies** : Next.js 16 (App Router, Server Components, Server Actions), React 19, TypeScript, Tailwind CSS 4, Prisma 7, PostgreSQL (Supabase), Zod, Cloudflare R2, Resend, Cloudflare Turnstile, Vitest, GitHub Actions, Hostinger.
- **Choix techniques** :
  - **Images stockées sur Cloudflare R2**, hors du serveur du site.
  - **E-mails envoyés par l'API de Resend avec un simple appel HTTP**, sans bibliothèque en plus.
  - **Protection anti-robots avec Cloudflare Turnstile.**
- **Qualité** : 16 tests unitaires sur les règles de sécurité · lint sans aucun avertissement · TypeScript strict · intégration continue · Lighthouse ordinateur 100 / 100 / 100 / 100, mobile 93 / 100 / 100 / 100 *(mesuré le 21 ou le 22 novembre 2026)*.
- Liens : **Voir le site** · **Voir le code**

### 3.4 Template Next.js — `/projets/template-nextjs/`

**Titre de la page** : Template Next.js SaaS · Awad Ahmed
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
- **Choix techniques** :
  - **Tests de bout en bout Playwright dans l'intégration continue**, sur une vraie base de données préparée à chaque lancement.
  - **Docker et Caddy** pour déployer sur un serveur avec HTTPS automatique.
  - **Contrôle des failles des dépendances dans l'intégration continue**, et mises à jour proposées par Dependabot.
- **Qualité** : 13 tests unitaires (Vitest) et 14 tests de bout en bout (Playwright) · intégration continue · aucune faille connue dans les dépendances *(vérifié le 22 novembre 2026)*.
- Liens : **Voir le code** (pas de site en ligne : c'est une base de projet)

### 3.5 eMatériel — `/projets/emateriel/`

**Titre de la page** : eMatériel — boutique en ligne · Awad Ahmed
**Description** : Boutique en ligne avec panier, stock et paiement Stripe en mode test. React, Express, MySQL, 63 tests.

- **Le projet** : une boutique en ligne de smartphones, tablettes, ordinateurs et accessoires. Projet de formation Simplon.co, que j'ai ensuite terminé et mis en ligne.
- **Mon rôle** : projet de formation réalisé seul, puis terminé et mis en ligne.
- **Fonctionnalités** :
  - Catalogue et panier.
  - Paiement par Stripe, **en mode test** (aucun vrai paiement possible).
  - Stock mis à jour de façon sûre au moment de la commande.
  - Suivi de commande.
  - Back-office.
- **Technologies** : React 19, TypeScript, Vite, Express 5, MySQL, Zod, Stripe, Vitest, Supertest, GitHub Actions, Hostinger.
- **Choix techniques** :
  - **Le stock est modifié dans une transaction** : deux commandes en même temps ne peuvent pas vendre le même dernier article.
  - **Stripe appelé directement par son API**, sans bibliothèque en plus, et **seule une clé de test est acceptée**.
  - **API testée avec Supertest** : 63 tests vérifient le serveur à chaque modification.
- **Qualité** : 63 tests automatisés · intégration continue · Lighthouse ordinateur 100 / 100 / 100 / 100, performance mobile 98 *(mesuré le 21 ou le 22 novembre 2026)*.
- Liens : **Voir le site** · **Voir le code**

### 3.6 Solidays — `/projets/solidays/`

**Titre de la page** : Solidays — projet de formation en équipe · Awad Ahmed
**Description** : Reproduction du site du festival Solidays avec gestion des artistes. Projet de formation en équipe de 3. React, Express, MySQL.

- Mention en haut : **Projet de formation Simplon.co, réalisé en équipe de 3 : Awad, Prativa et Manon.**
- **Le projet** : une reproduction du site du festival Solidays, avec un espace de gestion des artistes. Le site de démonstration n'est pas référencé sur Google, pour ne pas être confondu avec le vrai festival.
- **Mon rôle** : **Lead Dev de l'équipe de 3** (confirmé par Awad le 22/11/2026). *J'ai créé et mis en place le dépôt du projet, puis réalisé l'en-tête et la navigation adaptés au mobile, la section d'accueil animée, le pied de page, la page Festival, la billetterie, les mentions légales et le back-office de gestion des artistes. Après la formation, j'ai rénové le site, ajouté les tests et l'intégration continue, et je l'ai mis en ligne.* Organisation de l'équipe : une branche par fonctionnalité, pull requests et revues de code, modélisation de la base réalisée ensemble.
- **Fonctionnalités** :
  - Accueil fidèle au site d'origine, avec une bannière d'artistes interactive : la photo change au survol de chaque nom.
  - Programmation chargée depuis l'API, filtrée par jour.
  - Fiches artistes : description, jour du concert, lien vidéo.
  - Billetterie (liens vers les vendeurs officiels) et page Festival.
  - Back-office sécurisé : connexion administrateur, ajout, modification et suppression d'artistes, envoi d'images avec aperçu.
- **Technologies** : React 19, TypeScript, Vite, React Router, Express 5, MySQL, Zod, Helmet, GitHub Actions, Dependabot, Hostinger.
- **Choix techniques** :
  - **Une branche par fonctionnalité et des revues de code** pour travailler à trois sur le même dépôt.
  - **Les données des artistes viennent d'une API Express et d'une base MySQL**, modélisée ensemble avec la méthode Merise.
  - **Entrées validées côté serveur avec Zod** et en-têtes de sécurité avec Helmet.
- **Qualité** : 24 tests automatisés · intégration et déploiement continus · Dependabot.
- Liens : **Voir le site** · **Voir le code**

---

## 4. À propos — `/a-propos/`

**Titre de la page** : À propos — Awad Ahmed, développeur Full Stack
**Description** : Compétences, parcours et façon de travailler d'Awad Ahmed, développeur Full Stack JavaScript / TypeScript en Île-de-France.

### 4.1 Présentation
- Grand titre : **À propos**
- Texte : **Je suis Awad Ahmed, développeur Full Stack JavaScript / TypeScript en Île-de-France. Formé chez Simplon.co, je réalise des applications web complètes, de l'interface à la base de données, et je les mets en ligne. J'ai livré des projets pour des clients, que vous pouvez visiter aujourd'hui.**

### 4.2 Compétences
- **Utilisé dans plusieurs projets** : React, TypeScript, Vite, Next.js, Node.js, Express, MySQL, Prisma, PostgreSQL, Supabase, Tailwind CSS, Zod, Vitest, Supertest, GitHub Actions, Resend, Stripe (mode test), Cloudflare R2, Dependabot
- **Utilisé dans un projet** : Row Level Security et Edge Functions (Supabase), Cloudflare Turnstile, Better Auth, Playwright, Docker, Caddy, shadcn/ui, JWT
- **Outils de travail** : Git et GitHub, Hostinger, Claude Code, Claude Design, ChatGPT

Phrase sous les compétences : **Je n'affiche que des technologies utilisées dans des projets que vous pouvez consulter.**

### 4.3 Ma façon de travailler
- **Tester** : mes projets ont des tests automatisés, lancés à chaque modification.
- **Automatiser** : intégration continue sur GitHub et mise en ligne automatique.
- **Mesurer** : je vérifie la vitesse, l'accessibilité et le référencement avec Lighthouse.
- **Outils d'IA** : **J'utilise Claude Code, Claude Design et ChatGPT pour concevoir, relire le code et écrire des tests. Je relis, je teste et je reste responsable de tout ce que je livre.**

### 4.4 Parcours
- **Formation « Développeur web et web mobile » — Simplon.co** · septembre 2025 – avril 2026
- **Projets** :
  - Décembre 2025 — Solidays (formation, en équipe de 3) et eMatériel (formation)
  - Mars 2026 — I Make My World (client)
  - Juin 2026 — RepaTek (client) et Plateforme éditoriale (client)
  - Octobre 2026 — Template Next.js (personnel)


### 4.5 CV
- Texte : **CV disponible en français, en anglais et en allemand.**
- Liens : **CV en français (PDF)** · **CV en anglais (PDF)** · **CV en allemand (PDF)** — la taille sera ajoutée quand les fichiers seront fournis.
- Boutons : **Voir mes projets** · **Me contacter**

---

## 5. Contact — `/contact/`

**Titre de la page** : Contact — Awad Ahmed
**Description** : Proposer un poste, une mission freelance ou poser une question à Awad Ahmed, développeur Full Stack. Réponse sous 24 h.

- Grand titre : **Me contacter**
- Introduction : **Un poste en CDI ou CDD, une mission freelance ou une simple question : écrivez-moi. Je réponds sous 24 h.**
- **Pour me joindre : ce formulaire ou LinkedIn.**

### 5.1 Formulaire

| Champ | Étiquette | Aide / exemple |
|---|---|---|
| Nom | **Votre nom** | — |
| E-mail | **Votre adresse e-mail** | « Pour que je puisse vous répondre. » |
| Type de demande | **Votre demande** | Choix : **Offre d'emploi** · **Projet freelance** · **Autre** |
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

### 5.3 À côté du formulaire
- **LinkedIn** · **GitHub**
- **CV disponible en français, en anglais et en allemand** + les 3 liens

---

## 6. Mentions légales — `/mentions-legales/`

**Titre de la page** : Mentions légales — Awad Ahmed
**Description** : Éditeur, hébergeur et traitement des données personnelles du portfolio d'Awad Ahmed.

- **Éditeur du site** : Awad Ahmed, particulier. Contact : par le [formulaire de contact](/contact/).
- **Hébergeur** : Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre — https://www.hostinger.fr *(adresse relevée le 22/11/2026, à revérifier sur le site de Hostinger avant la mise en ligne)*.
- **Données personnelles (formulaire de contact)** :
  - Données collectées : nom, adresse e-mail, type de demande, message.
  - But : uniquement répondre à votre demande.
  - Base : votre accord, donné en cochant la case du formulaire.
  - Destinataire : Awad Ahmed. Le message est transmis par le service d'envoi d'e-mails Resend.
  - Durée de conservation : **12 mois** après le dernier échange, puis suppression.
  - Transfert hors de l'Union européenne : Resend est une société américaine ; les messages peuvent donc transiter par des serveurs situés hors de l'Union européenne.
  - Vos droits : accès, rectification, effacement et opposition, en écrivant par le formulaire de contact. Vous pouvez aussi déposer une réclamation auprès de la CNIL (cnil.fr).
- **Cookies** : ce site n'utilise aucun cookie ni outil de mesure d'audience. Votre choix de thème clair ou sombre est gardé dans votre navigateur, uniquement sur votre appareil.
- **Propriété** : les textes et le code de ce site sont ceux d'Awad Ahmed ; les captures d'écran montrent des sites qu'il a réalisés.

---

## 7. Page introuvable (404)

**Titre de la page** : Page introuvable — Awad Ahmed

- Grand titre : **Cette page n'existe pas.**
- Texte : **L'adresse est peut-être mal écrite, ou la page a été déplacée.**
- Boutons : **Retour à l'accueil** · **Voir les projets**

---

## 8. Textes alternatifs des images (modèles)

- Photo : **Portrait d'Awad Ahmed**
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

