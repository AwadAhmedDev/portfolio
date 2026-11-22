# Product Discovery — Portfolio de Awad Ahmed

> Statut : **validé par Awad le 22/11/2026** (Phase 1 terminée). Aucune implémentation n'est commencée.
> Règle de ce document : chaque fait vient d'une source vérifiée (dépôt GitHub, site en ligne, mesure datée). Ce qui n'est pas vérifié est marqué **[À CONFIRMER]**.

---

## 1. Product Discovery

### Le problème

Awad est développeur Full Stack JavaScript / TypeScript (formation « Développeur web et web mobile » chez Simplon.co, Île-de-France). Il a plusieurs projets réels en ligne, mais rien ne les montre au même endroit :

- un recruteur doit parcourir GitHub (7 dépôts publics) sans savoir par où commencer ;
- un entrepreneur ne lit pas de code : il veut voir un site qui marche et comprendre ce qu'il y gagne ;
- les preuves de qualité (tests, CI, scores Lighthouse) existent mais ne sont visibles nulle part.

### La solution

Un site portfolio **séparé des projets**, qui présente chaque projet avec : une capture, ce qu'il fait, le rôle d'Awad, les technologies, les preuves de qualité, un lien « Voir le site » et un lien « Voir le code ». Aucun bandeau « démo » ni « portfolio » n'est ajouté dans les projets eux-mêmes.

### Inventaire des projets (faits vérifiés)

Les scores Lighthouse (performance / accessibilité / bonnes pratiques / SEO) ont été mesurés en ligne les 21 et 22/11/2026.

| Projet | Nature | État | Site en ligne | Code | Stack principale | Preuves de qualité |
|---|---|---|---|---|---|---|
| **RepaTek** (`repartech-booking`) | Réservation de dépannage informatique à domicile : créneaux calculés (horaires, délai, marge de trajet), back-office, e-mails | Terminé, en ligne | https://repatek.fr | Public | React 19, TypeScript, Vite, Supabase (RLS, fonctions SQL, Edge Functions), Tailwind 4, Resend | Lighthouse ordinateur 97/100/100/100, mobile 87/100/100/100. 17 tests (`node --test`), lancés par la CI avant chaque déploiement |
| **Plateforme éditoriale** (`plateforme-editoriale`) | Média en ligne sur la Corne de l'Afrique + back-office de rédaction. Éditeur : Harbi Egueh Aouled ; Awad a conçu et développé le site | Terminé, en ligne | https://snowy-floralwhite-giraffe-20.hostingersite.com | Public | Next.js 16, Prisma 7, PostgreSQL (Supabase), Cloudflare R2, Resend, Turnstile | 16 tests Vitest, lint strict, CI. Lighthouse ordinateur 100/100/100/100, mobile 93/100/100/100 |
| **eMatériel** (`eMateriel`) | Boutique en ligne : panier, stock géré en transaction, paiement Stripe (mode test), back-office | Projet de formation Simplon, finalisé ensuite | https://darkseagreen-sandpiper-710943.hostingersite.com | Public | React 19, Express 5, MySQL, Stripe | 63 tests Vitest + Supertest, CI. Lighthouse ordinateur 100/100/100/100, mobile 98 en performance |
| **Template Next.js** (`nextjs-freelance-template`) | Base de projet SaaS réutilisable | Terminé, code seulement (pas de site) | — | Public | Next.js 16, Better Auth, Stripe + webhook, Prisma 7, Docker + Caddy | 13 tests Vitest + 14 tests E2E Playwright, CI |
| **Solidays** (`solidays_app`) | Clone du site du festival solidays.org + back-office artistes | Projet de formation en **équipe de 3** (Awad, Prativa, Manon) | https://tasteful-lightcoral-yak-94.hostingersite.com (volontairement en noindex) | Public | React, TypeScript, Vite, Express, MySQL, Zod | 24 tests, CI/CD, Dependabot |
| **I Make My World** (`solution_innovation`) | Projet client, plateforme d'innovation sociale : créateurs / experts / investisseurs, back-office de modération | **Terminé, en ligne** (hébergé sur le compte Hostinger d'Awad) | https://teal-starling-640860.hostingersite.com | **Privé** | React, TypeScript, Vite, Tailwind 4, shadcn/ui ; Express, MySQL, JWT, Cloudflare R2, Resend | 45 tests (Vitest + Supertest). Lighthouse ordinateur 99/99/100/100, mobile 90/99/100/100 |

Précisions sur cet inventaire :

- **I Make My World** (dépôt `solution_innovation`) : projet client **terminé et en ligne** sur le compte Hostinger d'Awad (confirmé par Awad le 22/11/2026). Le transfert sur l'hébergement du client viendra plus tard ; d'ici là, le portfolio utilise l'adresse actuelle. Le dépôt est privé : pas de lien « Voir le code ». **L'accord du client est donné** (confirmé par Awad le 22/11/2026). Rôle : **seul développeur**.
- **RepaTek** (ancien nom « RéparTech ») : **projet pour un client** (confirmé par Awad). Client cité : **Aden Dahier Okieh** (confirmé par Awad le 22/11/2026). Le site n'a pas de paiement en ligne : ne pas en annoncer.
- **Accords pour citer des noms** (confirmés par Awad le 22/11/2026) : l'éditeur de la plateforme éditoriale (Harbi Egueh Aouled) et les coéquipières de Solidays (Prativa et Manon) sont d'accord.
- **CV** : Awad le fournira quand il sera nécessaire ; le lui demander à ce moment-là.

---

## 2. Objectifs métier

| # | Objectif | Comment on le mesure |
|---|---|---|
| O1 | Obtenir des entretiens pour un poste de développeur Full Stack | Prises de contact de recruteurs ou d'entreprises venues du portfolio |
| O2 | Obtenir des missions freelance auprès d'entrepreneurs et de PME | Demandes de devis reçues par le formulaire de contact |
| O3 | Prouver la qualité du travail par des preuves vérifiables | Chaque projet montre un site en ligne et/ou du code public, des tests et des scores mesurés |
| O4 | Être le point d'entrée unique vers tous les projets | Le portfolio est cité sur le CV, LinkedIn et GitHub, et épinglé sur le profil GitHub |

---

## 3. Profils des visiteurs

| Profil | Ce qu'il cherche | Temps disponible | Ce qui le convainc |
|---|---|---|---|
| **Recruteur / RH** | Un profil qui correspond à une offre (stack, niveau, localisation) | 30 secondes à 2 minutes | Titre clair, technologies visibles, projets en ligne, CV téléchargeable |
| **Développeur ou CTO** (entretien technique) | La qualité du code et la façon de travailler | 5 à 15 minutes, souvent sur GitHub | Code lisible, tests, CI, explications des choix techniques |
| **Entrepreneur / PME** (client freelance) | Quelqu'un de fiable qui livre un site qui fonctionne | 1 à 3 minutes, souvent sur mobile | Exemples concrets et en ligne, bénéfices en langage simple, contact facile |

---

## 4. Proposition de valeur

**Pour les entreprises** : un développeur Full Stack qui livre des applications complètes et en ligne, avec des tests, de l'intégration continue et des scores Lighthouse mesurés.

**Pour les entrepreneurs et PME** : un développeur qui conçoit, développe et met en ligne votre site ou votre application web, de la prise de rendez-vous à la boutique en ligne, avec des exemples réels à consulter.

Ce qui distingue Awad (démontrable) :

- des projets **en ligne et utilisables**, pas seulement des captures ;
- des **preuves de qualité** : de 16 à 63 tests automatisés selon le projet, CI, Lighthouse à 100 sur plusieurs sites ;
- des projets **pour de vrais clients** : RepaTek, la plateforme éditoriale et I Make My World (Awad seul développeur).

---

## 5. Positionnement professionnel

**Titre proposé** : « Développeur Full Stack JavaScript / TypeScript — React, Next.js, Node.js ».

Pas de mot « junior » ni « senior » dans le titre (décision d'Awad du 22/11/2026). On reste honnête sans étiquette : le parcours est exact (formation Simplon.co, projets datés) et on n'annonce **aucun nombre d'années d'expérience**. Les compétences sont présentées selon trois niveaux, pour ne pas transformer une compétence en expertise :

| Niveau | Définition | Technologies (d'après les dépôts) |
|---|---|---|
| **Utilisé dans plusieurs projets livrés** | Présent dans au moins deux projets en ligne ou publics | React 19, TypeScript, Vite, Next.js, Node.js, Express, MySQL, Prisma, PostgreSQL / Supabase, Tailwind CSS, Zod, Vitest, Supertest, GitHub Actions, Resend, Stripe (mode test), Cloudflare R2, Dependabot |
| **Utilisé dans un projet livré** | Présent dans un seul projet | Supabase RLS et Edge Functions, Turnstile, Better Auth, Playwright, Docker + Caddy, shadcn/ui, JWT |
| **Outils de travail** | Ce qu'Awad utilise au quotidien | Git / GitHub, hébergement Hostinger, Claude Code, Claude Design, ChatGPT |

Docker n'est démontré que dans le template Next.js (Docker + Caddy) : il est donc dans « Utilisé dans un projet livré ».

Les outils d'IA (Claude Code, Claude Design, ChatGPT) sont mentionnés sur le site en une phrase honnête sur la façon de travailler (décision D5).

---

## 6. Fonctionnalités indispensables (MVP)

1. **Accueil** : nom, titre, une phrase de présentation, deux appels à l'action (« Voir mes projets », « Me contacter »).
2. **Projets** : une fiche par projet avec capture (ordinateur et mobile), description, rôle d'Awad, technologies, preuves de qualité, état (terminé / en cours / formation), liens « Voir le site » et « Voir le code » (s'ils existent).
3. **Compétences** : présentées par niveau (voir section 5).
4. **Parcours** : formation et expériences, **uniquement des faits confirmés par Awad**.
5. **Contact** : moyen de contact sans afficher d'adresse e-mail, plus les liens LinkedIn et GitHub.
6. **Mentions légales** : obligatoires pour un site en France.
7. **Adapté au mobile, accessible** (navigation au clavier, contrastes, textes alternatifs), mode clair et mode sombre.
8. **SEO de base** : titres et descriptions, plan du site (sitemap), aperçus pour les réseaux sociaux (Open Graph).
9. **Site 100 % en français**.
10. **Photo et CV en PDF** téléchargeable, en **trois versions : français, anglais, allemand** (fournis par Awad, vérifiés : pas d'e-mail ni de téléphone personnels).

---

## 7. Fonctionnalités secondaires (après le lancement)

- Page « Services » pour les clients freelance (types de projets, façon de travailler).
- Fiche détaillée par projet (étude de cas : problème, solution, résultat).
- Statistiques de visite respectueuses de la vie privée (sans bandeau cookies).
- Blog ou articles techniques.

---

## 8. Contraintes techniques

- **Espace disque très limité** sur l'ordinateur d'Awad (environ 2,4 Go libres) : peu de dépendances, une seule installation, pas de Docker en local.
- **Hébergement** : Hostinger, comme les autres projets, avec déploiement automatique depuis GitHub.
- **Site rapide et simple** : le contenu change rarement, donc un site **statique** suffit (objectif Lighthouse 100).
- **Technologie** : Next.js en export statique, avec React, TypeScript, Tailwind CSS et shadcn/ui (décision D1).
- **Formulaire de contact** : un site statique ne peut pas envoyer d'e-mail seul. Choix retenu : un petit script PHP sur l'hébergement Hostinger, qui envoie le message par Resend (voir `requirements.md`, décision A7). Protection anti-spam obligatoire.
- **Confidentialité** : pour Awad, seul le nom « Awad Ahmed » apparaît ; les autres noms sont cités seulement avec leur accord. Aucune adresse e-mail personnelle, aucun secret dans le code.
- **Maintenance** : le contenu des projets doit pouvoir se mettre à jour facilement (un seul fichier de données).

---

## 9. Critères de réussite

| Critère | Seuil |
|---|---|
| Lighthouse en ligne (ordinateur) | 100 / 100 / 100 / 100 |
| Lighthouse en ligne (mobile) | Performance ≥ 95, le reste à 100 |
| Liens | 0 lien cassé (vérifié automatiquement) |
| Exactitude | Chaque chiffre, lien et fonctionnalité vérifié et validé par Awad |
| Compréhension | Un visiteur comprend qui est Awad et ce qu'il propose en moins de 10 secondes |
| Contact | Le formulaire fonctionne et l'adresse e-mail n'apparaît nulle part |
| Mise en ligne | Dépôt public `portfolio` épinglé sur GitHub, déploiement automatique à chaque push |
| Résultat | Le portfolio est utilisé dans les candidatures et les prises de contact freelance |

---

## 10. Risques du projet

| Risque | Conséquence | Comment l'éviter |
|---|---|---|
| Afficher une information fausse ou exagérée | Perte de confiance immédiate en entretien | Règle « aucun fait sans source », validation par Awad |
| Publier sur un projet client plus que ce qui a été accepté (I Make My World) | Problème avec le client | Accord donné ; montrer au client le texte de sa fiche avant la mise en ligne |
| CV anglais ou allemand inexact | Mauvaise impression auprès d'un recruteur étranger | CV fournis et relus par Awad |
| Une démo tombe en panne ou une adresse temporaire change | Lien cassé, mauvaise impression | Vérification automatique des liens, captures en secours |
| Présenter un projet d'équipe comme un projet solo (Solidays) | Malhonnêteté visible | Toujours afficher « projet de formation en équipe de 3 » |
| Disque plein pendant le développement | Installation qui échoue | Peu de dépendances, nettoyage régulier |
| Vouloir deux cibles à la fois (emploi et freelance) | Message flou | Un message principal clair, l'autre en second (décision D3) |
| Trop de fonctionnalités avant la mise en ligne | Le site ne sort jamais | Lancer le MVP (section 6), le reste après |

---

## Décisions d'Awad (22/11/2026)

| # | Décision | Choix |
|---|---|---|
| D1 | Technologie | **Next.js en export statique** (+ React, TypeScript, Tailwind CSS, shadcn/ui) |
| D2 | RepaTek et I Make My World | I Make My World : **accord du client donné**, Awad **seul développeur**, terminé et en ligne. RepaTek : **projet client**, client cité : Aden Dahier Okieh |
| D3 | Cible principale | **Les deux, emploi d'abord** ; l'offre freelance reste bien visible |
| D4 | Parcours | Basé **uniquement sur les faits déjà vérifiés** : formation « Développeur web et web mobile » chez Simplon.co (confirmé par Awad), Île-de-France, et les projets de ce document. Le CV sera transmis plus tard par Awad ; rien n'en est repris d'ici là |
| D5 | Outils d'IA | **Oui**, une phrase honnête sur la façon de travailler |
| D6 | Adresses | **Adresses Hostinger actuelles** pour le portfolio et pour tous les liens « Voir le site » (y compris I Make My World). Les vrais noms de domaine viendront plus tard : les liens devront alors être mis à jour |
| D7 | Contact | **Formulaire** (sans adresse affichée, anti-spam) **+ LinkedIn** |
| D8 | Photo, CV, langues | **Photo : oui. CV PDF : oui**, en français, anglais et allemand (fournis par Awad). **Site : 100 % en français** (décision du 22/11/2026, qui remplace le site trilingue prévu au départ), comme les portfolios de développeurs en France |
