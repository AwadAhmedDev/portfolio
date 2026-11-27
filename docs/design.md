# Dossier de passation de la conception — Portfolio de Awad Ahmed

> Statut : **maquettes validées définitivement par Awad le 22/11/2026 ; phase Conception close.**
> Source : dossier de passation de Claude Design du 22/11/2026, recopié ici pour Claude Code (qui ne peut pas lire le canevas). Canevas : « Portfolio Awad Ahmed — maquettes ».
> Ce document remplace l'ancienne version de `design.md` (accueil et fiche RepaTek seulement).
> Les maquettes ne doivent plus être modifiées sans nouvelle décision d'Awad.

---

## 1. Synthèse

- **Sources à lire ensemble** : ce document, les maquettes du canevas et les documents de référence (`product-discovery.md`, `requirements.md`, `sitemap.md`, `user-flows.md`, `contenus.md`, `architecture.md`).
- **Ordre de priorité en cas d'écart** : `contenus.md` pour les textes, les maquettes pour la présentation, ce document pour les règles et les décisions.
- **Périmètre** : 11 pages et la page 404, chacune en version ordinateur (1 440 px), mobile clair et mobile sombre (360 px), plus une planche « Design system » et une planche des 6 états du formulaire.
- **Le site est 100 % en français.** Les trois versions de chaque planche sont trois affichages (ordinateur, mobile clair, mobile sombre), pas des langues.
- **Hors périmètre** : les fichiers `.dc.html` du canevas sont des maquettes ; ils ne servent pas de code de production.

---

## 2. Maquettes validées

| Page | Route | Particularités |
|---|---|---|
| Accueil | `/` | 3 projets clients, preuves en chiffres (185 tests), bloc freelance |
| Projets | `/projets/` | 6 cartes dans l'ordre A2, sans filtres ; planches de contrôle à 768 et 1 024 px |
| RepaTek | `/projets/repatek/` | Modèle des fiches ; client cité |
| I Make My World | `/projets/i-make-my-world/` | Pas de bouton code : mention « code privé » en haut et en bas ; technologies en 3 groupes avec intitulés |
| Plateforme éditoriale | `/projets/plateforme-editoriale/` | Éditeur cité |
| Template Next.js | `/projets/template-nextjs/` | Pas de site : schéma d'architecture cible à la place des captures ; mention « Pas de site en ligne » en haut et en bas ; pas de tableau Lighthouse |
| eMatériel | `/projets/emateriel/` | « en mode test » en gras ; 3 scores mobile « Non relevé » |
| Solidays | `/projets/solidays/` | Encadré « équipe de 3 » en tête ; pas de tableau Lighthouse |
| À propos | `/a-propos/` | Compétences en 3 groupes, parcours daté relié aux fiches, 3 CV |
| Contact | `/contact/` | Variante `?demande=freelance` avec « Projet freelance » déjà choisi |
| Formulaire — 6 états | — | Normal, erreurs, envoi, confirmation, trop de demandes, envoi impossible ; en clair et en sombre |
| Mentions légales | `/mentions-legales/` | Texte limité à 760 px dans le conteneur habituel |
| Page 404 | `404.html` | « 404 » décoratif, masqué aux lecteurs d'écran |
| Design system | — | Référence des variables, composants et états |

La planche « Pistes » garde la trace des 3 pistes étudiées : seule la piste A est à implémenter. Sur cette planche et sur le design system, « 192 tests » est un exemple de typographie, pas un contenu du site (C17).

---

## 3. Règles visuelles — piste A « Technique sobre »

### 3.1 Couleurs

Tous les textes passent le niveau AA de WCAG 2.2 dans les deux thèmes. Contrastes calculés sur `--bg`, sauf mention contraire. **Tous recalculés par Claude Code le 22/11/2026 : exacts.**

| Rôle | Variable | shadcn/ui | Clair | Sombre | Contraste clair / sombre |
|---|---|---|---|---|---|
| Fond de page | `--bg` | `--background` | `#ffffff` | `#0b1120` | — |
| Surface, survol | `--sf` | `--muted`, `--accent` | `#f5f7fa` | `#121a2c` | — |
| Texte | `--tx` | `--foreground` | `#0f172a` | `#e6eaf2` | 17,9:1 / 15,6:1 |
| Texte secondaire | `--mu` | `--muted-foreground` | `#475569` | `#9aa7ba` | 7,6:1 / 7,7:1 |
| Bordure décorative | `--bd` | `--border` | `#cbd5e1` | `#334155` | décoratif |
| Contour des contrôles | `--bs` | `--input` | `#64748b` | `#64748b` | 4,8:1 / 4,0:1 |
| Accent, liens, focus | `--ac` | `--primary`, `--ring` | `#1d4ed8` | `#8fb0ff` | 6,7:1 / 8,8:1 |
| Accent au survol | `--ach` | — | `#1e40af` | `#b0c8ff` | 8,7:1 / 11,3:1 |
| Texte sur accent | `--af` | `--primary-foreground` | `#ffffff` | `#0b1120` | 6,7:1 / 8,8:1 (sur `--ac`) |
| Fond accent léger | `--so` | `--secondary` | `#e8efff` | `#1a2850` | — |
| Texte sur fond accent léger | `--sof` | `--secondary-foreground` | `#1e40af` | `#b9cdff` | 7,6:1 / 9,0:1 (sur `--so`) |
| Erreur (texte, contour) | `--er` | `--destructive` | `#b91c1c` | `#fca5a5` | 6,5:1 / 9,9:1 |
| Alerte d'erreur (fond / texte) | `--erb` / `--erf` | — | `#fef2f2` / `#991b1b` | `#2a1215` / `#fecaca` | 7,6:1 / 12,1:1 |
| Confirmation (fond / texte) | `--okb` / `--okf` | — | `#f0fdf4` / `#166534` | `#0f2418` / `#bbf7d0` | 6,8:1 / 13,5:1 |

Contrôles complémentaires (Claude Code, 22/11/2026) : sur la surface `--sf`, texte secondaire 7,1:1 / 7,1:1, accent 6,2:1 / 8,1:1, contour des contrôles 4,4:1 / 3,7:1 ; texte sur accent au survol 8,7:1 / 11,3:1 ; badge neutre (`--tx` sur `--sf`) 16,6:1 / 14,4:1 ; option choisie (`--tx` sur `--so`) 15,5:1 / 11,9:1.

### 3.2 Typographie

- **Polices** : Inter pour les titres et le texte ; JetBrains Mono pour les chiffres, les dates, les technologies et les petits libellés. Hébergées par le site (ENF-3, §6 Performance). Graisses utilisées : Inter 400 à 700, JetBrains Mono 400 à 600 (polices variables : voir `architecture.md`).
- **Titres** : graisse 700, espacement des lettres `-0.025em`, interligne 1 à 1,1.

| Usage | Taille |
|---|---|
| `h1` de l'accueil | `clamp(48px, 8vw, 84px)` |
| `h1` des pages | `clamp(44px, 7vw, 72px)` ; fiches `clamp(44px, 7vw, 76px)` ; mentions `clamp(40px, 6vw, 60px)` |
| `h2` de section | `clamp(30px, 4vw, 40px)` |
| `h2` de rubrique (fiche), `h3` de carte | 22 px |
| Phrase d'introduction | `clamp(17px, 2vw, 20px)` ; fiches `clamp(18px, 2.2vw, 22px)` |
| Texte courant | 16 px (17 px dans les fiches et les mentions) |
| Chiffres mis en avant | JetBrains Mono, 30 à 36 px |
| Petits textes et libellés | 12 à 14 px, jamais moins de 12 px |

Règles d'écriture : espace insécable fine avant « : », espace insécable avant « ? » et dans « 24 h ».

### 3.3 Formes et espacements

- Arrondis : 10 px par défaut (boutons, cartes, champs) ; 16 px pour les grands blocs ; 6 px pour les puces ; 999 px pour les badges.
- Conteneur : 1 200 px maximum ; marges de 20 px, puis 40 px à partir de 768 px. Toutes les pages, mentions comprises, alignent leur `h1` sur le logo.
- En-tête : 64 px, fixe. Sections : 64 px d'espace vertical (48 px pour le rappel du contact).
- Zones cliquables : 44 px minimum, 48 px dans le menu mobile.
- Focus : contour de 3 px couleur `--ac`, décalé de 3 px, sur tout élément interactif.
- Icônes : trait de 1,8 à 2,2 px, 18 à 24 px, `aria-hidden`, sauf un bouton sans texte, qui porte un `aria-label`.

### 3.4 Points de rupture

| Largeur | Changements |
|---|---|
| moins de 640 px | Une colonne partout ; tableau Lighthouse compact |
| 640 px | Chiffres et « Ma façon de travailler » sur 2 colonnes |
| 768 px | Navigation et bouton thème dans l'en-tête, menu masqué ; projets sur 2 colonnes ; photo à sa taille ordinateur |
| **1 100 px** | Projets sur 3 colonnes ; chiffres sur 4 colonnes ; schéma du template sur une ligne |

Le passage à 1 100 px est un point de rupture personnalisé à ajouter à Tailwind (C5).

---

## 4. Composants et états interactifs

La planche « Design system » montre chaque composant dans ses états (normal, survol, focus, envoi, erreur, lecture seule) et dans les deux thèmes.

| Composant | Équivalent shadcn/ui | Règles |
|---|---|---|
| Bouton principal | `Button` | Fond `--ac`, survol `--ach`, 44 px de haut |
| Bouton secondaire | `Button variant="outline"` | Contour `--bs`, survol fond `--sf` |
| Bouton icône (thème) | `Button size="icon"` | 44 × 44 px, `aria-label` « Passer en mode sombre » / « Passer en mode clair » |
| Lien texte | — | Souligné, zone cliquable de 44 px |
| Badge de projet | `Badge` | **Style neutre commun aux 3 catégories** : fond `--sf`, texte `--tx`, bordure `--bd` (C4, confirmé par Awad le 22/11/2026). Le texte porte l'information, jamais la couleur |
| Puce de technologie | — | JetBrains Mono 13 à 14 px, bordure `--bd`, sans barre de niveau (EF-4) |
| Carte projet | `Card` (facultatif) | Capture 16:10, badge, date de début, nom, phrase, 5 technologies au plus, liens |
| Champ de formulaire | `Input`, `Textarea` | 48 px de haut, contour `--bs` ; erreur : contour de 2 px `--er` |
| Choix « Votre demande » | `RadioGroup` | 3 options cliquables de 48 px ; option choisie : contour `--ac`, fond `--so`. **À coder en boutons radio natifs** (voir `architecture.md`) |
| Case d'accord | `Checkbox` | 20 px, dessinée par le site, aux couleurs du thème. **À coder en case native** |
| Alertes | `Alert` | Icône + texte, jamais la couleur seule |

**Menu mobile** : un simple bouton avec `aria-expanded` et `aria-controls`. Pas de `Sheet` de shadcn/ui (Radix Dialog et du JavaScript pour rien).

### 4.1 En-tête et thème

- Ordinateur : logo à gauche ; Projets, À propos, Contact au centre ; bouton « CV » et bouton thème à droite.
- Mobile : logo, bouton « CV » toujours visible, puis bouton « Menu » (C2).
- Bouton « CV » : libellé visible « CV » ; lu « CV en français (PDF) » par les lecteurs d'écran (C3).
- Menu ouvert : liens alignés sur le logo (48 px de haut) et bouton thème avec son libellé en clair ; une croix remplace l'icône, et le nom devient « Fermer le menu » ; fermeture par Échap, par un clic en dehors et après un clic sur un lien (EF-1, non simulé sur le canevas) ; focus rendu au bouton « Menu ».
- Page en cours : `aria-current="page"`, soulignée en `--ac`.
- Clavier : premier arrêt « Aller au contenu », invisible jusqu'au focus.
- Thème : celui du système au premier passage, puis le choix est gardé (stockage local), sans flash au chargement (EF-9).
- Pages courtes : fond `--bg` sur `html` et `body`, page d'au moins `100vh`, pied de page en bas.

### 4.2 Pied de page

Fond `--sf` ; navigation (Projets, À propos, Contact, CV, Mentions légales), puis LinkedIn, GitHub, Code de ce portfolio, puis « © 2026 Awad Ahmed » en texte secondaire. Chaque lien fait 44 px de haut.

---

## 5. Gabarits de pages

### 5.1 Accueil (`/`) — textes : `contenus.md` §1

1. **Premier écran** : texte à gauche, photo à droite (320 px au plus, format carré, affichée en rond). Ordre : petit titre (mono, texte secondaire), `h1`, 3 puces React · Next.js · Node.js, phrase de présentation, ligne lieu et disponibilité (point `--ac` décoratif), deux boutons. **Sur mobile, la photo (200 px de large au plus) passe sous les boutons** (C7).
2. **Projets clients** : fond `--sf` ; `h2` et sous-titre à gauche, « Voir les 6 projets » à droite (dessous sur mobile) ; 3 cartes issues des données.
3. **Preuves en chiffres** : 4 cartes ; `h2` réservé aux lecteurs d'écran ; le détail 17 + 45 + 16 + 63 + 24 + 20 en petit sous « 185 tests », « GitHub Actions » sous « Intégration continue » ; la note datée dessous, en italique.
4. **Bloc freelance** : un bloc sur `--sf`, 3 colonnes sur ordinateur (titre, texte et bouton ; « Ce que je réalise » ; « Comment je travaille »), empilées sur mobile ; sous-titres en `h3` ; 5 réalisations avec coche décorative ; 3 étapes en liste numérotée (`ol`).
5. **Rappel du contact** : bande séparée par une bordure ; phrase à gauche en style de titre, bouton « Me contacter » à droite.

### 5.2 Fiche projet (`/projets/[projet]/`) — textes : `contenus.md` §3

1. **Fil d'Ariane** : Accueil › Projets › nom, dans un `nav` (liste `ol`), `aria-current="page"`.
2. **En-tête de fiche** : badge et « Début : … », `h1`, phrase de la carte en introduction, boutons « Voir le site » (domaine en mono) et « Voir le code ».
3. **Captures** : ordinateur dans un cadre de navigateur, mobile dans un cadre de téléphone ; côte à côte sur ordinateur, empilées sur mobile. **Template Next.js : schéma d'architecture à la place** (§5.4).
4. **Rubriques** : Le projet, Mon rôle, Fonctionnalités, Technologies, Choix techniques, Qualité ; séparées par une bordure ; `h2` dans une colonne de 220 px à gauche, contenu à droite ; une colonne sur mobile ; nom du client en gras.
5. **Choix techniques** : 3 encadrés sur `--sf`, numérotés 01 à 03 en mono ; décision en gras, raison en texte normal.
6. **Qualité** : cartes (tests, déploiement), puis le tableau Lighthouse (§5.5) ; boutons « Voir le site » et « Voir le code » répétés dessous.
7. **Suite** : bande sur `--sf` avec une carte-lien « Projet suivant » (ordre A2) et le bouton « Me contacter ».

| Fiche | Variante pilotée par les données |
|---|---|
| I Make My World | Pas de « Voir le code » ; mention « Le code de ce projet client est privé. Je peux le présenter en entretien. » en haut et en bas ; technologies en 3 groupes : **Interface**, **Serveur**, **Tests et mise en ligne** (C8) |
| Template Next.js | Pas de « Voir le site » ; mention « Pas de site en ligne » en haut et en bas (C10) ; schéma à la place des captures (C9) ; pas de tableau Lighthouse |
| Solidays | Encadré d'équipe tout en haut ; pas de tableau Lighthouse |
| eMatériel | « en mode test » en gras ; tableau avec 3 scores mobile « Non relevé », à compléter après la nouvelle mesure (A3) |

### 5.3 Formulaire de contact — les 6 états

Textes : `contenus.md` §5.2.

| État | Présentation |
|---|---|
| Normal | Champs vides, aucun choix présélectionné (sauf `?demande=freelance`) |
| Erreurs de saisie | Message sous chaque champ (icône + texte), `aria-invalid`, focus sur le premier champ en erreur, saisie conservée |
| Envoi en cours | Bouton « Envoi en cours… » avec indicateur, `aria-busy`, champs en lecture seule, choix et case désactivés mais aux couleurs normales |
| Confirmation | Alerte de succès (`role="status"`) au-dessus du formulaire, formulaire vidé |
| Trop de demandes | Alerte d'erreur (`role="alert"`), saisie conservée |
| Envoi impossible | Alerte d'erreur avec lien LinkedIn, saisie conservée |

- « Votre demande » est **facultatif**, en 3 boutons radio (C16). Les autres champs portent « (obligatoire) » dans leur libellé.
- Le lien « En savoir plus » est hors du libellé de la case d'accord, avec une zone cliquable de 44 px.
- `scroll-margin-top: 88px` empêche l'en-tête fixe de cacher un champ qui reçoit le focus.
- Le champ piège anti-spam est invisible et ne figure pas sur les maquettes.
- Le message « trop long » (plus de 3 000 caractères) n'est pas montré sur la planche des états, mais il est prévu dans `contenus.md` §5.2 et doit être codé.

### 5.4 Schéma d'architecture du Template Next.js

- Sur la fiche : **en HTML et CSS** (pas une image), empilé sous 1 100 px et sur une ligne au-delà. Il contient :
  - le cadre « VPS · Docker Compose · réseau interne » avec Caddy 2, Next.js 16 (Prisma 7 comme bibliothèque intégrée) et PostgreSQL 17 ;
  - le conteneur ponctuel `migrate` ;
  - Stripe et Resend comme services externes ;
  - la bande CI/CD avec la mention « Workflow de déploiement configuré — désactivé par défaut. » (C12).
- Le stockage S3 du template n'apparaît ni sur le schéma ni dans les textes (C11).
- Vignette de la carte Projets : un SVG simplifié de la même architecture (Docker avec Caddy, Next.js 16 + Prisma 7 et PostgreSQL 17 ; CI à part), textes de 10 px minimum, avec `aria-label`.
- Textes du schéma : `contenus.md` §3.4.

### 5.5 Tableau Lighthouse (fiches)

Un vrai `table` : `caption` avec la date de mesure, colonnes Mesure / Ordinateur / Mobile, en-têtes `scope`. Sous 640 px, ses marges sont réduites pour qu'il tienne à 360 px sans défilement horizontal. « Non relevé » reste sur une seule ligne. Aucune couleur pour juger un score (le 87 mobile de RepaTek n'est pas coloré).

### 5.6 Autres pages

- **À propos** : bouton principal « **Voir mes projets** » ; le CV reste proposé par les 3 liens de téléchargement (C15).
- **Mentions légales** : texte limité à 760 px dans le conteneur habituel.
- **404** : « 404 » décoratif, masqué aux lecteurs d'écran.

---

## 6. Accessibilité appliquée dans les maquettes

Complète les §3 et §4 de `requirements.md`.

- Un seul `h1` par page, aligné sur le logo, puis `h2` et `h3` dans l'ordre.
- Zones : `header`, `nav` avec `aria-label` (« Navigation principale », « Pied de page », « Fil d'Ariane »), `main id="contenu"`, `footer` ; chaque section reliée à son titre par `aria-labelledby`.
- Liens répétés des cartes complétés pour les lecteurs d'écran par le nom du projet (ex. « Voir le détail du projet RepaTek »).
- Menu mobile : `aria-expanded`, `aria-controls` ; nom « Ouvrir le menu » / « Fermer le menu », qui contient le mot visible « Menu » (critère 2.5.3).
- Icônes, coches et points décoratifs en `aria-hidden`.
- Aucune information par la couleur seule. Animations coupées si `prefers-reduced-motion`.

---

## 7. Contenus et chiffres de référence

`contenus.md` reste la seule source des textes. Tous les chiffres viennent du fichier de données des projets, jamais écrits dans les composants (EF-3, ENF-2).

### 7.1 Total des tests

Valeur officielle : **185 tests automatisés distincts**. Chaque scénario de bout en bout n'est compté qu'une fois ; chaque cas généré par `it.each` ou par une boucle compte comme un test.

| Projet | Tests distincts | Exécutions en CI |
|---|---|---|
| RepaTek | 17 | 17 |
| I Make My World | 45 | 45 |
| Plateforme éditoriale | 16 | 16 |
| eMatériel | 63 | 63 |
| Solidays | 24 | 24 |
| Template Next.js | 20 (13 unitaires + 7 scénarios E2E) | 27 (13 + 7 × 2 profils) |
| **Total** | **185** | 192 |

Sur l'accueil, le détail affiché est **17 + 45 + 16 + 63 + 24 + 20** (C14).

Sources des chiffres (vérifiées par Claude Code le 22/11/2026, et non « lecture du code seule » comme l'indiquait le dossier de Claude Design) : journaux de CI pour eMatériel (« 63 passed »), plateforme éditoriale (« 16 passed »), Solidays (« tests 24 »), I Make My World (« 45 passed ») et template (13 Vitest, « 14 passed » Playwright = 7 scénarios × 2 profils) ; pour RepaTek, étape « Tests » de la CI réussie et 17 tests exécutés en local.

### 7.2 Textes ajoutés avec l'accord d'Awad (reportés dans `contenus.md`)

| Où | Texte |
|---|---|
| Fiche I Make My World, Technologies | Intitulés « Interface », « Serveur », « Tests et mise en ligne » |
| Fiche Template Next.js, Qualité et schéma | « 7 scénarios E2E exécutés sur 2 profils : ordinateur et mobile » |
| Fiche Template Next.js, schéma | Titre « Architecture cible — configuration de production », libellés des conteneurs et services, mention « Workflow de déploiement configuré — désactivé par défaut. », légende « Architecture cible de production, d'après docker-compose.prod.yml, Dockerfile et Caddyfile. » |
| Bouton « CV » de l'en-tête | Nom lu par les lecteurs d'écran : « CV en français (PDF) » |
| Liens répétés des cartes | Complément lu seulement par les lecteurs d'écran : nom du projet |

**Notes internes à ne pas afficher** : « (adresse relevée le 22/11/2026, à revérifier…) » dans les mentions légales et « (confirmé par Awad le 22/11/2026) » dans la fiche Solidays.

---

## 8. Décisions de la phase Conception (Awad, 22/11/2026)

Elles complètent D1 à D8, A1 à A11, S1 à S7 et T1 à T12.

| # | Sujet | Décision |
|---|---|---|
| C1 | Direction visuelle | Piste A « Technique sobre » : Inter, JetBrains Mono, ardoise et bleu |
| C2 | Bouton CV sur mobile | Toujours visible dans l'en-tête, retiré du menu (`sitemap.md` S6) |
| C3 | Libellé du bouton CV | « CV » visible, lu « CV en français (PDF) » ; exception à EF-7 pour l'en-tête seulement (`sitemap.md` S7) |
| C4 | Badges de projet | Style neutre commun aux 3 catégories (remplace le choix précédent « Projet client » en accent) |
| C5 | Trois colonnes de projets | À partir de 1 100 px (point de rupture personnalisé) |
| C6 | Ressources absentes | Emplacements provisoires clairement signalés jusqu'à réception des vrais fichiers |
| C7 | Photo sur mobile | 200 px de large au plus, sous les boutons |
| C8 | Technologies d'I Make My World | Trois intitulés : Interface, Serveur, Tests et mise en ligne ; aucune technologie modifiée |
| C9 | Visuel du Template Next.js | Schéma d'architecture cible, vérifié dans le dépôt, à la place des captures |
| C10 | Mention du Template Next.js | « Pas de site en ligne » en haut et en bas de la fiche |
| C11 | Stockage S3 du template | Absent du schéma et des textes |
| C12 | Déploiement du template | Bande CI/CD avec « Workflow de déploiement configuré — désactivé par défaut. » |
| C13 | Tests E2E du template | « 7 scénarios E2E exécutés sur 2 profils : ordinateur et mobile » |
| C14 | Total des tests | 185 tests distincts (17 + 45 + 16 + 63 + 24 + 20) |
| C15 | Bouton principal d'À propos | « Voir mes projets » ; le CV reste proposé par les 3 liens |
| C16 | « Votre demande » (contact) | Facultatif, en 3 boutons radio |
| C17 | Exemples « 192 tests » | Conservés sur les planches Pistes et Design system : exemples de typographie |
| C18 | Corrections de l'audit des maquettes | Toutes appliquées (tableau Lighthouse lisible sur mobile, fond pleine hauteur, mentions alignées, menu avec une croix, lien « En savoir plus » hors du libellé, marge de défilement pour le focus, étiquettes à 12 px, cadres ajustés, contrôles lisibles pendant l'envoi) |
| C19 | Validation | Maquettes validées définitivement le 22/11/2026 ; phase Conception close |

---

## 9. Ressources et données à fournir ou à vérifier

**À fournir par Awad**
- [ ] Photo : portrait au format carré, affiché en rond (texte alternatif « Portrait d'Awad Ahmed »).
- [ ] 3 CV en PDF (`awad-ahmed-cv-fr.pdf`, `-en`, `-de`), sans e-mail ni téléphone personnels ; leur taille apparaît dans leur lien.
- [ ] Adresse de réception du formulaire et clé API Resend, placées sur le serveur uniquement (A7).

**À faire par Claude Code**
- [ ] Captures ordinateur et mobile des 5 sites en ligne (RepaTek, I Make My World, plateforme éditoriale, eMatériel, Solidays).

**Liens déjà connus** : LinkedIn `https://www.linkedin.com/in/awad-dev`, GitHub `https://github.com/AwadAhmedDev`, code du portfolio `AwadAhmedDev/portfolio`, sites et dépôts des projets (`product-discovery.md`), hébergeur `https://www.hostinger.fr`, CNIL `https://www.cnil.fr`.

**À vérifier avant la mise en ligne**
- [ ] Scores Lighthouse mesurés de nouveau (A3), dont les 3 scores mobile d'eMatériel.
- [ ] Adresse de Hostinger dans les mentions légales, sur le site de Hostinger.
- [x] Accord du client d'I Make My World sur le texte de sa fiche (accord total confirmé par Awad le 26/11/2026) (`product-discovery.md`, risques).

---

## 10. Vérifications de Claude Design et limites

Les maquettes ont été affichées dans Chrome sans interface, à 360, 390, 768, 1 024 et 1 440 px, dans les deux thèmes : aucun débordement horizontal ni texte coupé ; zones cliquables de 44 px minimum (sauf liens dans une phrase) ; un seul `h1` par page ; menu, thème et ordre de tabulation corrects ; 6 états du formulaire lisibles ; tableau Lighthouse tenant à 360 px ; fond sombre jusqu'en bas des pages courtes ; schéma du template conforme au dépôt (commit `cfc0350`) ; contrastes AA.

Limites : polices réelles non chargées pendant les tests (hauteurs approximatives) ; rendu par un moteur reproduisant le canevas ; Firefox et Safari non testés.

**À tester après le développement** : affichage à 360, 390, 768, 1 024, 1 100 et 1 440 px dans les deux thèmes avec les vraies polices ; Firefox et Safari (ENF-9) ; zoom à 200 % ; parcours complet au clavier ; lecteur d'écran sur le menu et le formulaire ; Lighthouse en ligne ; vérification des liens dans la CI.
