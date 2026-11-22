# Plan du site (sitemap) — Portfolio de Awad Ahmed

> Statut : **validé par Awad le 22/11/2026**. Aucun développement n'est commencé.
> Sources : [`product-discovery.md`](./product-discovery.md) et [`requirements.md`](./requirements.md).
> **Le site est 100 % en français** (décision d'Awad du 22/11/2026). Seul le CV existe en trois versions : français, anglais, allemand.
> Les points tranchés par Awad sont marqués **[S1]**, **[S2]**… et détaillés à la fin.

---

## 1. Vue d'ensemble

```
/                          Accueil
├── /projets/              Projets (les 6)
│   └── /projets/[projet]/ Détail d'un projet (×6)
├── /a-propos/             À propos (compétences, parcours, façon de travailler)
├── /contact/              Contact (formulaire, LinkedIn, GitHub)
├── /mentions-legales/     Mentions légales
├── 404                    Page introuvable
└── /cv/                   CV en PDF : français, anglais, allemand (fichiers, pas des pages)
```

Total : **11 pages** (accueil, projets, 6 détails, à propos, contact, mentions légales) + la 404 + 3 PDF.

**Trois clics au maximum** pour atteindre n'importe quel contenu depuis l'accueil.

---

## 2. Navigation commune à toutes les pages

**En-tête** (fixe en haut) :

| Élément | Destination |
|---|---|
| « Awad Ahmed » (logo texte) | Accueil |
| Projets | `/projets/` |
| À propos | `/a-propos/` |
| Contact | `/contact/` |
| Bouton « CV » | CV en français **[S2]** |
| Bouton clair / sombre | — |

- La page en cours est signalée dans le menu (visuellement et avec `aria-current="page"`).
- Sur mobile : un bouton « Menu » ouvre la liste (Projets, À propos, Contact, CV, thème).

**Pied de page** :
- Liens : Projets, À propos, Contact, CV, Mentions légales.
- LinkedIn, GitHub, code du portfolio sur GitHub.
- « © 2026 Awad Ahmed ».

**Fil d'Ariane** sur le détail d'un projet seulement : Accueil › Projets › Nom du projet.

---

## 3. Les pages

### 3.1 Accueil — `/`

| | |
|---|---|
| **Objectif** | Faire comprendre en moins de 10 secondes qui est Awad, ce qu'il fait, et donner envie de voir ses projets ou de le contacter. |
| **Audience** | Tous : recruteurs (prioritaires), développeurs/CTO, entrepreneurs et PME. |
| **Contenu** | 1. En-tête de page : photo, nom, titre « Développeur Full Stack JavaScript / TypeScript — React, Next.js, Node.js », une phrase de présentation, « Île-de-France », et la disponibilité « Ouvert aux postes en CDI ou CDD et aux missions freelance ».<br>2. Projets mis en avant : **3 cartes** (RepaTek, I Make My World, plateforme éditoriale) **[S3]**.<br>3. Preuves en chiffres, toutes vérifiées : nombre de projets en ligne, tests automatisés, CI.<br>4. Bloc freelance (décision D3 : emploi d'abord, freelance visible ensuite) : ce qu'Awad réalise (site vitrine, réservation en ligne, boutique, application sur mesure, back-office) et 3 étapes « Comment je travaille » (échange → devis → réalisation et mise en ligne).<br>5. Rappel du contact. |
| **Appels à l'action** | Principal : « Voir mes projets ». Secondaire : « Me contacter ». Dans le bloc freelance : « Parlons de votre projet ». |
| **Liens vers** | Projets, détail de chacun des 3 projets mis en avant, Contact, CV. |

### 3.2 Projets — `/projets/`

| | |
|---|---|
| **Objectif** | Montrer tous les projets et permettre d'ouvrir le détail ou le site de chacun. |
| **Audience** | Recruteurs (vue rapide), développeurs/CTO (technologies, code), entrepreneurs (sites en ligne). |
| **Contenu** | Une phrase d'introduction, puis **6 cartes** dans l'ordre décidé (A2) : RepaTek, I Make My World, plateforme éditoriale, template Next.js, eMatériel, Solidays. Chaque carte : capture, nom, une phrase, badge (« Projet client », « Projet de formation », « Projet personnel »), 5 technologies au plus, mois de début. |
| **Appels à l'action** | Sur chaque carte : « Voir le détail » (principal), « Voir le site » et « Voir le code » quand ils existent. En bas de page : « Me contacter ». |
| **Liens vers** | Les 6 détails de projet, les sites en ligne, les dépôts GitHub publics, Contact. |

Pas de filtres ni de recherche : 6 projets se parcourent d'un coup d'œil.

### 3.3 Détail d'un projet — `/projets/[projet]/`

| Projet | Adresse |
|---|---|
| RepaTek | `/projets/repatek/` |
| I Make My World | `/projets/i-make-my-world/` |
| Plateforme éditoriale | `/projets/plateforme-editoriale/` |
| Template Next.js | `/projets/template-nextjs/` |
| eMatériel | `/projets/emateriel/` |
| Solidays | `/projets/solidays/` |

| | |
|---|---|
| **Objectif** | Prouver la compétence sur un projet précis : ce qu'il fait, le rôle d'Awad, les choix techniques, les preuves de qualité. |
| **Audience** | Développeurs/CTO et recruteurs techniques en priorité ; entrepreneurs pour les projets clients. |
| **Contenu** | Fil d'Ariane ; nom, badge, mois de début ; captures ordinateur et mobile ; « Le projet » (ce qu'il fait) ; « Mon rôle » (seul développeur, équipe de 3 avec Prativa et Manon…, client cité avec accord) ; fonctionnalités principales ; technologies ; « Choix techniques » (2 ou 3 décisions et leur raison) ; « Qualité » : tests, CI, scores Lighthouse avec leur date. |
| **Appels à l'action** | « Voir le site » et « Voir le code » (quand ils existent), en haut et en bas. En bas : « Projet suivant » et « Me contacter ». |
| **Liens vers** | Site du projet, dépôt GitHub, projet précédent / suivant, Projets, Contact. |

Cas particuliers :
- **I Make My World** : pas de « Voir le code » (dépôt privé) ; une phrase l'explique.
- **Template Next.js** : pas de « Voir le site » (code seulement).
- **Solidays** : mention « projet de formation en équipe de 3 » visible en haut.

### 3.4 À propos — `/a-propos/`

| | |
|---|---|
| **Objectif** | Présenter le profil : compétences réellement démontrées, parcours, façon de travailler. |
| **Audience** | Recruteurs et RH en priorité ; entrepreneurs qui veulent savoir à qui ils ont affaire. |
| **Contenu** | 1. Présentation courte (photo, quelques phrases).<br>2. **Compétences** en trois groupes : « Utilisé dans plusieurs projets », « Utilisé dans un projet », « Outils de travail ».<br>3. **Façon de travailler** : méthode, tests et CI, et une phrase honnête sur les outils d'IA (D5).<br>4. **Parcours** : formation « Développeur web et web mobile » chez Simplon.co, projets datés. Expériences du CV ajoutées plus tard, après validation.<br>5. **CV** : les trois versions, avec la mention « CV disponible en français, en anglais et en allemand ». |
| **Appels à l'action** | Principal : « Télécharger mon CV ». Secondaires : « Voir mes projets », « Me contacter ». |
| **Liens vers** | CV (3 versions), Projets, Contact, LinkedIn, GitHub. |

### 3.5 Contact — `/contact/`

| | |
|---|---|
| **Objectif** | Recevoir des propositions d'emploi et des demandes de projets freelance. |
| **Audience** | Recruteurs, entrepreneurs et PME. |
| **Contenu** | Une phrase d'accueil ; le formulaire (nom, e-mail, type de demande, message, case d'accord) ; à côté : LinkedIn, GitHub, CV (avec « CV disponible en français, en anglais et en allemand ») ; « Pour me joindre : ce formulaire ou LinkedIn » ; « Je réponds sous 24 h » **[S5]**. Depuis le bloc freelance de l'accueil, « Projet freelance » est déjà choisi. |
| **Appels à l'action** | Principal : « Envoyer le message ». Secondaires : « Me contacter sur LinkedIn », « Télécharger mon CV ». |
| **Liens vers** | Mentions légales (traitement des données), LinkedIn, GitHub, CV. |

Après l'envoi : message de confirmation sur la même page (pas de page « merci » séparée).

### 3.6 Mentions légales — `/mentions-legales/`

| | |
|---|---|
| **Objectif** | Respecter la loi : éditeur, hébergeur, données du formulaire. |
| **Audience** | Tout visiteur qui la cherche ; obligation légale. |
| **Contenu** | Éditeur (Awad Ahmed, particulier, sans adresse postale — décision A11), hébergeur (Hostinger), données du formulaire (lesquelles, pourquoi, combien de temps, droits). |
| **Appels à l'action** | Aucun, sauf « Me contacter » pour exercer ses droits. |
| **Liens vers** | Accueil, Contact. Accessible depuis le pied de page et le formulaire. |

### 3.7 Page introuvable (404)

| | |
|---|---|
| **Objectif** | Ne pas perdre le visiteur. |
| **Contenu** | « Cette page n'existe pas. » |
| **Appels à l'action** | « Retour à l'accueil », « Voir les projets ». |

### 3.8 CV en PDF — `/cv/`

| Fichier | Langue |
|---|---|
| `/cv/awad-ahmed-cv-fr.pdf` | Français |
| `/cv/awad-ahmed-cv-en.pdf` | Anglais |
| `/cv/awad-ahmed-cv-de.pdf` | Allemand |

- Pas des pages : des fichiers, ouverts dans le navigateur.
- Accessibles depuis : l'en-tête (bouton « CV »), À propos, Contact, pied de page.
- Chaque lien annonce la langue, le format et la taille : « CV en anglais (PDF, 150 Ko) ». Le lien vers un CV en langue étrangère porte `hreflang` pour les lecteurs d'écran et les moteurs de recherche.
- Un CV qui n'est pas encore fourni par Awad n'a pas de lien.

---

## 4. Routes Next.js

Next.js 16, **App Router**, **export statique** (`output: 'export'`, `trailingSlash: true`). Toutes les pages sont générées au build.

| Fichier | Page générée |
|---|---|
| `app/layout.tsx` | Mise en page commune (en-tête, pied de page, `<html lang="fr">`) |
| `app/page.tsx` | `/` |
| `app/projets/page.tsx` | `/projets/` |
| `app/projets/[slug]/page.tsx` | `/projets/repatek/` … (×6) |
| `app/a-propos/page.tsx` | `/a-propos/` |
| `app/contact/page.tsx` | `/contact/` |
| `app/mentions-legales/page.tsx` | `/mentions-legales/` |
| `app/not-found.tsx` | `404.html` |
| `app/sitemap.ts`, `app/robots.ts` | `sitemap.xml`, `robots.txt` |
| `public/cv/*.pdf` | Les 3 CV |
| `public/contact.php` | Script d'envoi du formulaire (décision A7), exécuté par Hostinger, pas par Next.js |

- `generateStaticParams` fournit les 6 projets à partir du fichier de données ; `dynamicParams = false` : toute autre adresse de projet donne la 404.
- Le serveur Hostinger (fichier `.htaccess`) sert `404.html` avec le code HTTP 404, ajoute les en-têtes de sécurité et règle le cache.

---

## 5. Parcours types

| Visiteur | Parcours | Clics |
|---|---|---|
| Recruteur pressé | Accueil → bouton « CV » | 1 |
| Recruteur | Accueil → Projets → détail RepaTek → Contact | 3 |
| CTO | Accueil → détail d'un projet mis en avant → « Voir le code » | 2 |
| Entrepreneur | Accueil → bloc freelance « Parlons de votre projet » → Contact | 1 |
| Recruteur étranger | Accueil → À propos → « CV en anglais » ou « CV en allemand » | 2 |

---

## Décisions d'Awad (22/11/2026)

| # | Question | Décision |
|---|---|---|
| S1 | Structure | **Pages séparées** : Accueil, Projets, détail par projet, À propos, Contact, Mentions légales. Remplace la décision A1 de `requirements.md` |
| S2 | Bouton « CV » de l'en-tête | **Ouvre directement le CV en français** ; les 3 versions sont proposées dans À propos et Contact |
| S3 | Projets mis en avant sur l'accueil | **Les 3 projets clients** (RepaTek, I Make My World, plateforme éditoriale), puis « Voir les 6 projets » |
| S4 | Langues parlées dans À propos | **Pas affichées sur le site** : la plupart des portfolios de développeurs français ne les montrent pas (2 sur 8 vérifiés le 22/11/2026). Les langues d'Awad (français courant, anglais B1, allemand B2) restent dans ses CV |
| S5 | Délai de réponse sur la page Contact | **« Je réponds sous 24 h. »** |
