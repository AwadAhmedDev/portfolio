# Exigences — Portfolio de Awad Ahmed

> Statut : **validé par Awad le 22/11/2026**. Aucun développement n'est commencé.
> Source : [`product-discovery.md`](./product-discovery.md). Les points tranchés par Awad sont marqués **[A1]**, **[A2]**… et détaillés à la fin (« Décisions d'Awad »).
> Identifiants : `EF` = exigence fonctionnelle, `ENF` = non fonctionnelle. Chaque exigence est vérifiable par au moins un critère d'acceptation (section 9).

---

## 1. Exigences fonctionnelles

### EF-1 — Navigation et structure

Les pages, leurs adresses et la navigation sont détaillées dans [`sitemap.md`](./sitemap.md) **[A1]** : pages séparées (Accueil, Projets, détail par projet, À propos, Contact, Mentions légales). Site **100 % en français**, adresses sans préfixe de langue (`/`, `/projets/`, `/projets/repatek/`…).

Comportement attendu :
- Un en-tête fixe en haut contient : le nom « Awad Ahmed », les liens de navigation, le bouton « CV » et le bouton clair/sombre.
- Sur mobile, les liens passent dans un menu qui s'ouvre par un bouton ; le menu se ferme après un clic sur un lien, avec la touche Échap, ou en touchant en dehors.
- Un lien « Aller au contenu » est le premier élément accessible au clavier.
- Un pied de page contient : liens LinkedIn et GitHub, lien vers les mentions légales, lien vers le code du portfolio.

### EF-2 — Accueil (en-tête de page)

- Affiche : photo d'Awad, nom, titre « Développeur Full Stack JavaScript / TypeScript — React, Next.js, Node.js », une phrase de présentation, localisation « Île-de-France ».
- Deux boutons : « Voir mes projets » (page Projets) et « Me contacter » (page Contact).
- Le message principal vise l'emploi ; l'offre freelance est mentionnée juste après, de façon visible (décision D3).
- Aucun mot « junior » ni « senior », aucun nombre d'années d'expérience.
- Projets mis en avant : **les 3 projets clients** (RepaTek, I Make My World, plateforme éditoriale), puis un lien « Voir les 6 projets » (décision S3 du sitemap).

### EF-3 — Projets

Liste des 6 projets de la Product Discovery, chacun sous forme de carte. **[A2]** pour l'ordre.

Chaque carte affiche :
- une capture d'écran (ordinateur), avec un texte alternatif qui décrit ce qu'on voit ;
- le nom et une phrase de description ;
- un badge d'état : « Projet client », « Projet de formation » ou « Projet personnel » ;
- les principales technologies (5 au maximum sur la carte) ;
- les liens « Voir le site » et « Voir le code », **seulement s'ils existent** (pas de lien « code » pour I Make My World, dépôt privé ; pas de lien « site » pour le template).

Chaque fiche projet affiche en plus :
- captures ordinateur et mobile ;
- ce que fait le projet, le rôle d'Awad (« seul développeur », « équipe de 3 : Awad, Prativa, Manon »…), le client cité quand l'accord est donné ;
- toutes les technologies ;
- les preuves de qualité : nombre de tests, CI, scores Lighthouse **avec leur date de mesure** **[A3]**.

Règles :
- Les liens externes s'ouvrent dans le même onglet **[A4]**. Si un lien ouvre un nouvel onglet, il l'annonce (texte ou icône étiquetée) et porte `rel="noopener noreferrer"`.
- Les chiffres (tests, Lighthouse) viennent d'un seul fichier de données ; aucune valeur n'est écrite en dur dans les pages.
- Solidays est toujours présenté comme « projet de formation en équipe de 3 ».

### EF-4 — Compétences

- Trois groupes, avec les intitulés de la Product Discovery : « Utilisé dans plusieurs projets », « Utilisé dans un projet », « Outils de travail ».
- Chaque technologie est un simple texte (pas de barre de niveau ni de pourcentage).
- Une phrase honnête sur l'usage des outils d'IA (Claude Code, Claude Design, ChatGPT) dans la façon de travailler (décision D5).

### EF-5 — Parcours

- Formation « Développeur web et web mobile » chez Simplon.co.
- Les projets réalisés, datés **[A5]**.
- Aucune expérience reprise du CV tant qu'Awad ne l'a pas fournie et validée.
- Pas de section « langues parlées » sur le site (décision S4 du sitemap) : elles figurent dans les CV.

### EF-6 — Contact

- Formulaire avec les champs : nom (obligatoire), adresse e-mail (obligatoire, pour pouvoir répondre), type de demande (« Offre d'emploi », « Projet freelance », « Autre »), message (obligatoire, 20 à 3 000 caractères).
- Une case à cocher obligatoire d'accord pour le traitement des données, avec un lien vers les mentions légales.
- Validation dans le navigateur **et** côté serveur : messages d'erreur sous chaque champ, en clair, en français.
- Anti-spam : champ piège invisible et limite de demandes ; **[A6]** pour un captcha.
- Après l'envoi : message de confirmation sur la page, le formulaire est vidé, le bouton est désactivé pendant l'envoi.
- L'adresse e-mail d'Awad n'apparaît **nulle part** : ni dans la page, ni dans le code envoyé au navigateur.
- Liens LinkedIn et GitHub affichés à côté du formulaire.
- Délai affiché : « Je réponds sous 24 h. » (décision S5 du sitemap).
- Fonctionnement technique (le site est statique) : **[A7]**.

### EF-7 — CV

- Trois versions du CV en PDF : **français, anglais, allemand** **[A8]**, fournies par Awad.
- Bouton « CV » dans l'en-tête (version française), et les trois versions dans À propos et Contact.
- Chaque lien annonce la langue, le format et la taille (ex. « CV en anglais (PDF, 150 Ko) »).
- Chaque PDF est vérifié avant publication : pas d'adresse e-mail ni de téléphone personnels.
- Une version pas encore fournie n'a pas de lien.

### EF-8 — Langue du site

- **Le site est 100 % en français** (décision d'Awad du 22/11/2026, qui remplace les décisions A9 et A10) : pas de version anglaise ni allemande, pas de sélecteur de langue.
- Seul le CV existe aussi en anglais et en allemand (EF-7).
- Dates et nombres au format français (ex. « 22 novembre 2026 »).

### EF-9 — Thème clair / sombre

- Au premier passage : thème du système de l'utilisateur.
- Un bouton permet de changer ; le choix est gardé pour les visites suivantes (stockage local du navigateur, pas de cookie).
- Pas de flash de la mauvaise couleur au chargement.

### EF-10 — Mentions légales

- Éditeur du site, hébergeur (Hostinger), données collectées par le formulaire et leur durée de conservation, droits de l'utilisateur.
- Contenu exact selon la situation d'Awad : **[A11]**.

---

## 2. Exigences non fonctionnelles

| ID | Exigence |
|---|---|
| ENF-1 | **Site statique** : Next.js en export statique, hébergé sur Hostinger, adresse temporaire actuelle (décision D6). |
| ENF-2 | **Maintenable** : tout le contenu (textes, projets, chiffres, compétences) est dans des fichiers de données ; ajouter un projet ne demande que ces fichiers et ses captures. |
| ENF-3 | **Peu de dépendances** : Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, et le strict nécessaire pour les tests. Chaque nouvelle dépendance est justifiée et validée par Awad (disque limité). |
| ENF-4 | **Qualité du code** : TypeScript strict, lint et formatage vérifiés dans la CI. |
| ENF-5 | **CI GitHub Actions** à chaque push : lint, types, tests, build, vérification des liens ; la mise en ligne n'a lieu que si tout passe. |
| ENF-6 | **Déploiement automatique** sur Hostinger à chaque push sur `main`. |
| ENF-7 | **Exactitude** : chaque chiffre, lien et fonctionnalité affiché est vérifié et validé par Awad avant publication. |
| ENF-8 | **Confidentialité** : pour Awad, seul le nom « Awad Ahmed » ; les autres noms seulement avec accord ; aucun secret dans le dépôt. |
| ENF-9 | **Navigateurs** : deux dernières versions de Chrome, Edge, Firefox et Safari (ordinateur et mobile). |

---

## 3. Responsive design

- Conçu d'abord pour le mobile, puis élargi.
- Largeurs testées : **360 px**, 390 px, 768 px, 1024 px, 1440 px.
- Aucun défilement horizontal, à aucune largeur.
- Projets : 1 colonne sur mobile, 2 sur tablette, 3 sur grand écran.
- Zones cliquables d'au moins **44 × 44 px** sur mobile.
- Texte lisible sans zoom : 16 px minimum pour le texte courant.
- Les images s'adaptent à la largeur (plusieurs tailles servies selon l'écran).
- Le site reste utilisable avec un zoom du navigateur à 200 %.

---

## 4. Accessibilité

Objectif : **WCAG 2.2 niveau AA** et Lighthouse Accessibilité 100.

- Structure : un seul `h1` par page, titres dans l'ordre, zones `header`, `nav`, `main`, `footer`.
- Langue déclarée : `lang="fr"` ; les liens vers les CV anglais et allemand portent `hreflang`.
- Contraste : 4,5:1 pour le texte, 3:1 pour les grands textes et les éléments d'interface, **dans les deux thèmes**.
- Tout est utilisable au clavier, dans un ordre logique ; le focus est toujours visible.
- Images : texte alternatif utile ; images décoratives ignorées par les lecteurs d'écran.
- Formulaire : chaque champ a une étiquette visible ; erreurs annoncées aux lecteurs d'écran et reliées à leur champ ; confirmation d'envoi annoncée.
- Liens explicites (pas de « cliquez ici ») ; un lien qui ouvre un PDF le dit.
- Animations désactivées si `prefers-reduced-motion` est activé.
- Menu mobile utilisable au clavier et au lecteur d'écran.

---

## 5. SEO

- Titre et description uniques pour chaque page, en français.
- Adresse canonique sur chaque page.
- `sitemap.xml` avec toutes les pages ; `robots.txt` qui pointe vers le sitemap.
- Aperçus pour les réseaux sociaux (Open Graph et Twitter) : titre, description, image par page.
- Données structurées : `Person` sur l'accueil (nom, titre, liens LinkedIn et GitHub — pas d'e-mail).
- Adresses lisibles et stables (ex. `/projets/repatek/`).
- Page 404 avec le code HTTP 404.
- Quand de vrais noms de domaine seront achetés : redirection 301 de l'ancienne adresse et mise à jour des adresses canoniques (décision D6).

---

## 6. Performance

Mesurée **sur le site en ligne**, avec Lighthouse.

| Mesure | Ordinateur | Mobile |
|---|---|---|
| Performance | 100 | ≥ 95 |
| Accessibilité, bonnes pratiques, SEO | 100 | 100 |
| Largest Contentful Paint (LCP) | ≤ 1,5 s | ≤ 2,5 s |
| Cumulative Layout Shift (CLS) | ≤ 0,05 | ≤ 0,05 |
| Total Blocking Time (TBT) | ≤ 100 ms | ≤ 200 ms |

- Images en WebP ou AVIF, plusieurs tailles, chargement différé hors du premier écran, dimensions fixées pour éviter les sauts.
- Polices hébergées par le site, limitées au nécessaire, affichées sans bloquer le texte.
- JavaScript limité au strict nécessaire : composants serveur par défaut, composants client seulement pour le formulaire, le menu mobile et le thème ; **moins de 150 Ko de JavaScript compressé par page** (mesuré au build).
- Cache long pour les fichiers qui ne changent pas (images, CSS, JS versionnés), compression activée.

---

## 7. Sécurité

- HTTPS obligatoire, redirection de HTTP vers HTTPS.
- `Content-Security-Policy` compatible avec l'export statique de Next.js : scripts intégrés autorisés par leur empreinte (hash), **sans `unsafe-eval`** ; détail fixé pendant l'architecture.
- Autres en-têtes HTTP : `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, protection contre l'affichage dans un cadre.
- Formulaire : validation serveur de chaque champ (longueur, format), limite de demandes par adresse IP, champ piège, aucune donnée réutilisée sans être nettoyée (pas d'injection dans l'e-mail envoyé).
- Les clés d'API (envoi d'e-mails…) restent côté serveur, jamais dans le code envoyé au navigateur ni dans le dépôt.
- Dépendances surveillées : contrôle des failles dans la CI et Dependabot.
- Aucun outil de suivi ni cookie publicitaire.

---

## 8. Gestion des erreurs

| Situation | Comportement attendu |
|---|---|
| Page introuvable | Page 404, avec liens vers l'accueil et les projets |
| Champ du formulaire invalide | Message sous le champ, focus déplacé sur le premier champ en erreur, saisie conservée |
| Envoi du formulaire impossible (réseau, serveur) | Message clair « Le message n'a pas pu être envoyé, réessayez ou écrivez-moi sur LinkedIn », saisie conservée |
| Trop de demandes | Message demandant de réessayer plus tard, sans perdre la saisie |
| Spam détecté | Réponse neutre, aucun e-mail envoyé |
| Image qui ne charge pas | Texte alternatif visible, mise en page intacte |
| JavaScript désactivé | Tout le contenu reste lisible ; seuls le formulaire, le menu mobile et le thème ont besoin de JavaScript, avec un lien LinkedIn de secours pour le contact |
| Site d'un projet hors ligne | Détecté par la vérification des liens dans la CI ; la capture reste visible |

---

## 9. Critères d'acceptation

Le portfolio est accepté quand **tous** ces points sont vérifiés :

**Contenu**
- [ ] L'accueil met en avant les 3 projets clients ; la page Contact affiche « Je réponds sous 24 h ».
- [ ] Les 6 projets sont présents, en français, avec les bons liens, badges, technologies et chiffres datés.
- [ ] Chaque fait affiché a été validé par Awad.
- [ ] Aucun « junior », « senior » ni nombre d'années d'expérience.
- [ ] L'adresse e-mail d'Awad n'apparaît dans aucune page ni aucun fichier envoyé au navigateur.

**Fonctionnement**
- [ ] Le menu mobile s'ouvre et se ferme (clic, Échap, clic en dehors).
- [ ] Les liens vers les CV (français, anglais, allemand) ouvrent le bon PDF.
- [ ] Le thème suit le système au premier passage, puis le choix est conservé, sans flash.
- [ ] Le formulaire : refuse un envoi invalide avec des messages clairs ; un envoi valide arrive dans la boîte de réception d'Awad ; un robot remplissant le champ piège ne déclenche aucun e-mail ; les cas d'erreur de la section 8 se comportent comme prévu.
- [ ] La page 404 répond avec le code HTTP 404.
- [ ] Chaque page envoie moins de 150 Ko de JavaScript compressé.

**Qualité mesurée sur le site en ligne**
- [ ] Lighthouse ordinateur 100 / 100 / 100 / 100 sur l'accueil et une fiche projet.
- [ ] Lighthouse mobile : performance ≥ 95, le reste à 100.
- [ ] Aucune erreur dans la console du navigateur.
- [ ] Aucun lien cassé (vérification automatique dans la CI).
- [ ] Affichage correct à 360, 768 et 1440 px, sans défilement horizontal.
- [ ] Navigation complète au clavier, sans piège.
- [ ] `sitemap.xml`, `robots.txt`, adresses canoniques et aperçus Open Graph présents et valides.
- [ ] En-têtes de sécurité présents (vérifiés sur le site en ligne).

**Projet**
- [ ] CI verte : lint, types, tests, build, liens.
- [ ] Déploiement automatique sur Hostinger à chaque push sur `main`.
- [ ] Dépôt `portfolio` public, épinglé sur le profil GitHub (déjà fait), avec un README.

---

## Décisions d'Awad (22/11/2026)

Les marqueurs **[A1]**… dans le document renvoient à ces décisions.

| # | Question | Décision |
|---|---|---|
| A1 | Structure | **Remplacée par la décision S1 du sitemap** : pages séparées (Accueil, Projets, détail par projet, À propos, Contact, Mentions légales) |
| A2 | Ordre des projets | **Projets clients d'abord** : RepaTek, I Make My World, plateforme éditoriale ; puis template Next.js, eMatériel, Solidays |
| A3 | Scores Lighthouse | **Affichés sur les fiches projet, avec leur date**, mesurés de nouveau juste avant la mise en ligne |
| A4 | Liens externes | **Même onglet** |
| A5 | Dates des projets | **D'après les dépôts GitHub** : seul le **mois de début** (premier commit) est affiché, car le dernier commit de chaque dépôt correspond à des mises à jour récentes, pas à la fin du projet. Liste ci-dessous, à valider |
| A6 | Anti-spam | **Champ piège + limite de demandes**, sans captcha ; Cloudflare Turnstile ajouté seulement si du spam arrive |
| A7 | Envoi du formulaire | **Petit script PHP sur l'hébergement Hostinger**, qui envoie le message par Resend. La clé Resend et l'adresse de réception restent sur le serveur (jamais dans le dépôt ni dans le navigateur). Adresse de réception : à fournir par Awad au moment du développement |
| A8 | CV | **Trois PDF : français, anglais, allemand**, fournis par Awad |
| A9 | Adresse racine `/` | **Remplacée** : le site est 100 % en français, `/` est directement l'accueil (pas de `/fr/`) |
| A10 | Traductions | **Remplacée** : pas de traduction du site ; seul le CV existe en anglais et en allemand |
| A11 | Mentions légales | **Pas de SIRET pour l'instant** : mentions légales de particulier (nom « Awad Ahmed » et hébergeur Hostinger), à mettre à jour quand Awad aura un SIRET. Aucune adresse postale publiée |

### Dates de début des projets (premier commit, vérifié le 22/11/2026)

| Projet | Début |
|---|---|
| Solidays | décembre 2025 |
| eMatériel | décembre 2025 |
| I Make My World | mars 2026 |
| RepaTek | juin 2026 |
| Plateforme éditoriale | juin 2026 |
| Template Next.js | octobre 2026 |
