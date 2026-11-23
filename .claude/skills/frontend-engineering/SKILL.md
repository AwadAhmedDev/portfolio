---
name: frontend-engineering
description: Développe ou modifie l'interface du portfolio d'Awad Ahmed (pages app/, composants components/, données content/, styles Tailwind) avec Next.js 16 App Router en export statique, React 19 et TypeScript strict. À utiliser pour toute création ou modification de page, composant, texte affiché, style, métadonnée SEO ou comportement côté navigateur, en respectant le design system, l'accessibilité, la CSP et le budget de 150 Ko de JavaScript par page.
---

# Développement frontend — portfolio

## Avant de coder

1. Lire `CLAUDE.md`, la section de `docs/roadmap.md` du lot concerné, puis selon le besoin `docs/design.md` (présentation), `docs/contenus.md` (textes) et `docs/architecture.md` (technique).
2. Lire les fichiers existants à modifier et leurs voisins : réutiliser avant de créer.
3. Annoncer à Awad ce qui va changer (fichiers, effet visible, coût en JavaScript), puis coder.

## Organisation du code (réelle)

| Dossier | Rôle | Règle |
|---|---|---|
| `app/` | Routes, métadonnées, assemblage | **Aucun texte écrit en dur** : tout vient de `content/` |
| `content/` | `projets.ts`, `site.ts`, `pages.ts` : seule source des textes et chiffres | Recopié **mot pour mot** de `contenus.md` (R8) |
| `lib/` | `stats.ts` (185 tests, ordre C14), `seo.ts` (`SITE_URL`), `validation.ts`, `texte.tsx` (`riche()` pour le gras), `theme-script.ts` | Calculs, pas d'affichage |
| `components/ui/` | `styles.ts` (bouton, lienTexte, badge, puce), `icones.tsx`, `Provisoire.tsx`, `LiensCV.tsx` | Styles partagés : réutiliser `styles.ts` avant d'écrire des classes |
| `components/layout/` | `Header`, `Footer`, `NavLiens`*, `MobileMenu`*, `ThemeToggle`* | * = composant client |
| `components/projet/` | `ProjectCard`, `SchemaVignette`, `SchemaTemplate`, `TableauLighthouse` | Variantes pilotées par les données du projet |
| `components/contact/` | `ContactForm`* | Seul composant client métier |

Un chiffre (tests, scores, nombre de projets) ne s'écrit jamais dans un composant : il vient de `content/projets.ts` ou de `lib/stats.ts`.

## Règles techniques

- **Composants serveur par défaut.** `"use client"` seulement pour le menu mobile, le thème, la navigation active et le formulaire (`architecture.md` §1). Un nouveau composant client doit être justifié par une interaction impossible en HTML/CSS.
- **Export statique** (`output: 'export'`, `trailingSlash: true`) : pas de route API, pas de `cookies()`/`headers()`, pas de rendu à la demande. Une nouvelle route dynamique utilise `generateStaticParams` + `dynamicParams = false`. `params` est une promesse (`await params`).
- **TypeScript strict** avec `noUncheckedIndexedAccess` : gérer `undefined` après un accès par index ; pas de `any`, pas de `!` pour faire taire le compilateur.
- **Aucune dépendance nouvelle** sans justification et accord d'Awad (disque limité). shadcn/ui n'est **pas** installé : ses styles sont recopiés sans Radix ; contrôles de formulaire **natifs** (`appearance: none`, classe `.controle`).
- Images : `next/image` n'optimise pas en export statique ; utiliser le composant `Picture` prévu au lot 11 (`<picture>`, `srcset`, dimensions fixées, `loading="lazy"` hors du premier écran).

## CSP : interdits (le build échoue sinon)

`scripts/csp-hashes.mjs` refuse toute page qui contient :
- un attribut `style="…"` (donc **pas de `style={{…}}`** en JSX) → utiliser des classes Tailwind, y compris arbitraires (`aspect-[16/10]`) ;
- un attribut d'événement en ligne (`onclick=…`) ;
- une balise `<style>`.

Les scripts intégrés sont autorisés par empreinte, calculée après le build : ne jamais ajouter `unsafe-inline` ni `unsafe-eval`.

## Design system (`design.md` §3–§4)

- Couleurs : **uniquement** les variables du thème via Tailwind (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary-foreground`, `bg-muted`, `bg-secondary`, `text-destructive`, `bg-error-bg`, `bg-ok-bg`…). Jamais de couleur en dur : les deux thèmes doivent fonctionner.
- Polices : `font-sans` (Inter) ; `mono` (JetBrains Mono) pour chiffres, dates, technologies, petits libellés.
- Points de rupture : `sm` 640, `md` 768, **`wide` 1 100 px** (3 colonnes de projets, 4 chiffres), conteneur `.conteneur`.
- Arrondis : 10 px (`rounded-[10px]`), 16 px pour les grands blocs, 6 px puces, `rounded-full` badges.
- Badges de projet **neutres** pour les 3 catégories (C4).
- Typographie française : espace insécable fine avant « : », insécable avant « ? » et dans « 24 h ».

## Accessibilité (WCAG 2.2 AA)

- Un seul `h1` par page, titres dans l'ordre ; chaque section reliée à son titre par `aria-labelledby`.
- Zones cliquables ≥ 44 px (48 px dans le menu mobile) ; focus visible (déjà global dans `globals.css`, ne pas le supprimer).
- Icônes décoratives `aria-hidden` ; bouton sans texte avec `aria-label`.
- Liens répétés complétés pour les lecteurs d'écran (`<span className="sr-only"> du projet {nom}</span>`).
- Liens externes **dans le même onglet** (A4) : pas de `target="_blank"`.
- Lien vers un PDF : il le dit ; CV étranger avec `hrefLang`.
- Animations seulement si `prefers-reduced-motion` ne les coupe pas.
- Formulaire : étiquette visible, `aria-invalid`, erreur reliée par `aria-describedby`, alertes `role="status"` / `role="alert"`.

## SEO

Chaque page exporte `metadata` (ou `generateMetadata`) avec le titre et la description de `contenus.md`, et `alternates.canonical` en adresse relative avec `/` final. `metadataBase` vient de `SITE_URL` (`app/layout.tsx`). Toute nouvelle page est ajoutée à `app/sitemap.ts`.

## Budget JavaScript

150 Ko = **153 600 octets gzip par page**, chunks partagés compris (`scripts/js-budget.mjs`, lancé après chaque build). Marge la plus faible : page Contact (environ 7,9 Ko). Toute modification côté client est mesurée avant et après ; si le budget est dépassé, on allège, on ne change jamais le seuil sans l'accord d'Awad.

## Avant de dire « terminé »

`npm run lint`, `npm run typecheck`, `npm test` ; puis, si l'interface change et avec l'accord d'Awad pour le build : `SITE_URL=https://example.invalid npm run build` (lance segments-plats, CSP et budget), vérification dans le navigateur sur l'export (`node scripts/serve-out.mjs 3101`), aux largeurs 360, 768, 1 100 et 1 440 px, dans les deux thèmes, sans erreur de console ni violation de CSP. Les vérifications détaillées relèvent du Skill `testing-deployment`.
