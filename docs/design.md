# Règles visuelles — Portfolio de Awad Ahmed

> Statut : **maquettes de l'accueil et de la fiche RepaTek validées par Awad le 22/11/2026**.
> Source : compte rendu de Claude Design du 22/11/2026, canevas « Portfolio Awad Ahmed — maquettes de l'accueil et de la fiche RepaTek ». Ce fichier en garde une copie de référence pour le développement.
> Les **textes** ne sont pas recopiés ici : ils viennent uniquement de [`contenus.md`](./contenus.md). Les chiffres viennent du fichier de données des projets, jamais écrits dans les composants.

---

## 1. Piste retenue

**Piste A « Technique sobre »** (décision V1 du 22/11/2026) : ardoise et bleu, **Inter** pour les titres et le texte, **JetBrains Mono** pour les chiffres et les petits libellés. Les pistes B et C du canevas ne sont pas à coder.

---

## 2. Couleurs

Contrastes calculés selon WCAG 2.2 sur le fond de la page. **Recalculés par Claude Code le 22/11/2026 : tous exacts.**

| Rôle | Variable maquette | Variable shadcn/ui | Clair | Sombre | Contraste clair / sombre |
|---|---|---|---|---|---|
| Fond de page | `--bg` | `--background` | `#ffffff` | `#0b1120` | — |
| Surface (sections, cartes, survol) | `--sf` | `--muted`, `--accent` | `#f5f7fa` | `#121a2c` | — |
| Texte | `--tx` | `--foreground` | `#0f172a` | `#e6eaf2` | 17,9:1 / 15,6:1 |
| Texte secondaire | `--mu` | `--muted-foreground` | `#475569` | `#9aa7ba` | 7,6:1 / 7,7:1 |
| Bordure décorative | `--bd` | `--border` | `#cbd5e1` | `#334155` | décoratif |
| Contour des contrôles | `--bs` | `--input` | `#64748b` | `#64748b` | 4,8:1 / 4,0:1 |
| Accent (liens, bouton principal, focus) | `--ac` | `--primary`, `--ring` | `#1d4ed8` | `#8fb0ff` | 6,7:1 / 8,8:1 |
| Texte sur accent | `--af` | `--primary-foreground` | `#ffffff` | `#0b1120` | 6,7:1 / 8,8:1 |
| Fond des badges et pastilles | `--so` | `--secondary` | `#e8efff` | `#1a2850` | — |
| Texte des badges et pastilles | `--sof` | `--secondary-foreground` | `#1e40af` | `#b9cdff` | 7,6:1 / 9,0:1 (sur son fond) |

Contrôles complémentaires (Claude Code, 22/11/2026), sur la surface `--sf` : texte secondaire 7,1:1 / 7,1:1 ; accent 6,2:1 / 8,1:1 ; contour des contrôles 4,4:1 / 3,7:1. Tous au-dessus des seuils AA.

---

## 3. Typographie

| Usage | Police | Taille | Graisse et interlignage |
|---|---|---|---|
| `h1` de l'accueil | Inter | `clamp(48px, 8vw, 84px)` | 700, interligne 1 |
| `h1` d'une fiche projet | Inter | `clamp(44px, 7vw, 76px)` | 700, interligne 1 |
| `h2` de section (accueil) | Inter | `clamp(30px, 4vw, 40px)` | 700, interligne 1,1 |
| `h2` de rubrique (fiche) et `h3` de carte | Inter | 22 px | 700, interligne 1,1 |
| Phrase d'introduction | Inter | `clamp(17px, 2vw, 20px)` (accueil), `clamp(18px, 2.2vw, 22px)` (fiche) | 400, interligne 1,55 |
| Texte courant | Inter | 16 px (17 px dans les fiches) | 400, interligne 1,5 à 1,65 |
| Chiffres mis en avant | JetBrains Mono | 36 px (accueil), 30 px (fiche) | 700 |
| Technologies, dates, petit titre, tableau des scores | JetBrains Mono | 13 à 14 px | 400 à 600 |

- Titres : espacement des lettres `-0.025em`.
- Graisses à charger, **hébergées par le site** : Inter 400, 500, 600, 700 ; JetBrains Mono 400, 500, 600. *(À vérifier au développement : la maquette utilise aussi JetBrains Mono 700 pour les chiffres ; soit on charge 700, soit on passe ces chiffres en 600.)*
- Règles d'écriture : espace insécable fine avant « : », espace insécable avant « ? » et dans « 24 h ».

---

## 4. Formes et espacements

- Arrondis : 10 px par défaut (boutons, cartes, champs) ; 16 px pour le bloc freelance ; 999 px pour les badges ; 6 px pour les puces de technologie.
- Conteneur : largeur maximale 1 200 px ; marges latérales de 20 px sous 768 px, puis 40 px.
- En-tête : 64 px de haut, fixe, séparé du contenu par une bordure `--bd`.
- Sections : 64 px d'espace vertical (48 px pour le rappel du contact). Intérieur des cartes : 20 à 24 px. Écarts : 8, 12, 16, 20 ou 24 px.
- Focus clavier : contour de 3 px en `--ac`, décalé de 3 px, sur tout élément interactif.
- Icônes : trait de 1,8 à 2,2 px, 18 à 24 px, toujours `aria-hidden`, sauf un bouton sans texte, qui porte alors un `aria-label`.

---

## 5. Points de rupture

| Largeur | Changements |
|---|---|
| moins de 640 px | Une colonne partout |
| 640 px | Chiffres sur 2 colonnes |
| 768 px | Liens de navigation et bouton thème visibles dans l'en-tête, menu masqué ; projets sur 2 colonnes ; marges de 40 px |
| **1 100 px** | Projets sur 3 colonnes ; chiffres sur 4 colonnes |

**1 100 px** est un point de rupture Tailwind personnalisé (décision d'Awad du 22/11/2026) : à 1 024 px, une carte serait trop étroite pour ses trois liens.

---

## 6. Éléments communs

**En-tête**
- 768 px et plus : « Awad Ahmed » à gauche ; Projets, À propos, Contact au centre ; à droite le bouton « CV » puis le bouton thème (icône seule, 44 × 44 px).
- Mobile : « Awad Ahmed », le bouton « CV » toujours visible, puis le bouton « Menu » (décision V2).
- Menu ouvert : Projets, À propos, Contact (48 px de haut chacun) et le bouton thème avec son libellé en clair.
- Bouton « CV » : libellé visible « CV », nom lu « CV en français (PDF) » (décision V3).
- Page en cours : `aria-current="page"`, soulignée en `--ac`.
- « Aller au contenu » : invisible jusqu'à ce qu'il reçoive le focus.
- À coder sans maquette : fermeture du menu par Échap, par un clic en dehors et après un clic sur un lien (EF-1).

**Pied de page** : fond `--sf` ; navigation (Projets, À propos, Contact, CV, Mentions légales), puis LinkedIn, GitHub, Code de ce portfolio, puis « © 2026 Awad Ahmed » en texte secondaire. Chaque lien fait 44 px de haut.

---

## 7. Composants

| Composant | Utilisation | Équivalent shadcn/ui | Remarque |
|---|---|---|---|
| Bouton principal | « Voir mes projets », « Voir le détail », « Parlons de votre projet », « Me contacter » | `Button` (défaut) | 44 px de haut, fond `--ac` |
| Bouton secondaire | « Me contacter » du premier écran, « CV », « Voir le code » sur une fiche | `Button variant="outline"` | Contour `--bs` |
| Bouton icône | Thème | `Button size="icon"` | `aria-label` « Passer en mode sombre » / « Passer en mode clair » |
| Lien texte | « Voir le site », « Voir le code » sur une carte, « Voir les 6 projets » | — | Souligné, 44 px de zone cliquable |
| Badge | Type de projet | `Badge` | Pastille arrondie (voir ci-dessous) |
| Puce de technologie | Listes de technologies | — | JetBrains Mono, bordure `--bd`, aucune barre de niveau (EF-4) |
| Carte projet | Accueil (3) et page Projets (6) | `Card` (facultatif) | Capture 16:10, badge, début, nom en `h3`, phrase, 5 technologies au plus, liens |
| Carte chiffre | Preuves en chiffres | — | Valeur en mono, libellé en texte secondaire |
| Emplacement d'image | Photo et captures | `next/image` | Provisoire : silhouette avec « Photo provisoire » ou « Capture provisoire » |

**Badges** (décision d'Awad du 22/11/2026) : « **Projet client** » en accent (`--so` / `--sof`) ; « Projet personnel » et « Projet de formation » en neutre (fond `--sf`, texte `--mu`, contraste 7,1:1 dans les deux thèmes). Le texte du badge reste la vraie information : la couleur n'en porte aucune seule.

**Menu mobile** : pas de `Sheet` de shadcn/ui (qui ajoute Radix Dialog) ; un bouton avec `aria-expanded` et `aria-controls` suffit, dans le budget de 150 Ko de JavaScript par page.

---

## 8. Accueil — mise en page (`/`)

Textes : `contenus.md` §1.1 à §1.5.

1. **Premier écran** : texte à gauche, photo à droite (320 px au plus, format 4:5). Ordre : petit titre (mono, texte secondaire), `h1`, 3 puces React · Next.js · Node.js, phrase de présentation, ligne lieu et disponibilité (point `--ac` décoratif), deux boutons. Sur mobile, la photo passe sous les boutons.
2. **Projets clients** : fond `--sf` ; `h2` et sous-titre à gauche, « Voir les 6 projets » à droite (dessous sur mobile) ; 3 cartes issues du fichier de données.
3. **Preuves en chiffres** : 4 cartes ; `h2` « Preuves en chiffres » réservé aux lecteurs d'écran ; le détail 17 + 16 + 63 + 20 + 24 + 45 en petit sous « 185 tests », « GitHub Actions » sous « Intégration continue » ; la note datée dessous, en italique.
4. **Bloc freelance** : un bloc sur fond `--sf`, 3 colonnes sur ordinateur (titre, texte et bouton ; « Ce que je réalise » ; « Comment je travaille »), empilées sur mobile ; sous-titres en `h3` ; 5 réalisations avec coche décorative ; 3 étapes en liste numérotée (`ol`).
5. **Rappel du contact** : bande séparée par une bordure ; phrase à gauche en style de titre, bouton « Me contacter » à droite.

---

## 9. Fiche projet — gabarit (`/projets/[projet]/`, modèle RepaTek)

Textes : `contenus.md` §3.1 à §3.6.

1. **Fil d'Ariane** : Accueil › Projets › nom, dans un `nav` (liste `ol`), `aria-current="page"` sur la page en cours.
2. **En-tête de fiche** : badge et « Début : … », `h1`, phrase de la carte en introduction, boutons « Voir le site » (domaine en mono) et « Voir le code ».
3. **Captures** : ordinateur dans un cadre de navigateur, mobile dans un cadre de téléphone ; côte à côte sur ordinateur, empilées sur mobile ; textes alternatifs de `contenus.md` §8.
4. **Rubriques** : Le projet, Mon rôle, Fonctionnalités, Technologies, Choix techniques, Qualité ; séparées par une bordure ; `h2` dans une colonne de 220 px à gauche, contenu à droite ; une colonne sur mobile ; nom du client en gras.
5. **Choix techniques** : 3 encadrés sur `--sf`, numérotés 01 à 03 en mono ; décision en gras, raison en texte normal.
6. **Qualité** : 2 cartes (tests, déploiement), puis un vrai tableau des scores Lighthouse (une ligne par mesure, colonnes Ordinateur et Mobile, date dans la légende `caption`) ; boutons « Voir le site » et « Voir le code » répétés dessous.
7. **Suite** : bande sur `--sf` avec une carte-lien « Projet suivant » (ordre A2) et le bouton « Me contacter ».

**Cas particuliers**

| Fiche | Différence avec le modèle |
|---|---|
| I Make My World | Pas de « Voir le code » ; mention « Le code de ce projet client est privé. Je peux le présenter en entretien. » |
| Template Next.js | Pas de « Voir le site » ; pas de tableau Lighthouse (aucun score) |
| Solidays | Mention d'équipe tout en haut ; pas de tableau Lighthouse |
| eMatériel | Tableau incomplet (seule la performance mobile, 98, est connue) : le compléter après la nouvelle mesure prévue avant la mise en ligne (A3), plutôt que de laisser des cases vides |

---

## 10. Accessibilité appliquée dans les maquettes

Complète les §3 et §4 de `requirements.md`.

- Zones cliquables : 44 px minimum (48 px dans le menu mobile).
- Un seul `h1` par page, puis `h2` et `h3` dans l'ordre.
- Zones : `header`, `nav` avec `aria-label` (« Navigation principale », « Pied de page », « Fil d'Ariane »), `main id="contenu"`, `footer` ; chaque section reliée à son titre par `aria-labelledby`.
- Liens répétés sur les cartes complétés pour les lecteurs d'écran par le nom du projet (ex. « Voir le détail du projet RepaTek »).
- Menu mobile : `aria-expanded`, `aria-controls` ; nom « Ouvrir le menu » / « Fermer le menu », qui contient le mot visible « Menu ».
- Icônes, coches et points décoratifs en `aria-hidden`.
- Tableau des scores : vrai `table` avec `caption` et en-têtes (`scope`).
- Aucune information par la couleur seule (le score mobile de 87 n'est pas coloré).
- Animations coupées si `prefers-reduced-motion`.
- À tester après le développement : zoom à 200 %, parcours complet au clavier, affichage à 390, 768, 1 024 et 1 440 px.

---

## 11. Suite de la conception

- **Validé** : accueil et fiche projet (modèle RepaTek), le 22/11/2026.
- **À maquetter par Claude Design** : pages Projets, À propos, Contact (le formulaire a besoin d'une maquette avant d'être codé), Mentions légales et 404.
- **Éléments à fournir** : photo d'Awad et 3 CV en PDF (Awad) ; captures ordinateur et mobile des 6 projets (Claude Code, étape « captures » du plan). Les liens LinkedIn et GitHub sont déjà connus.
