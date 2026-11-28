# Portfolio — Awad Dev

Portfolio d'Awad (« Awad Dev »), développeur Full Stack JavaScript / TypeScript : six projets réels (trois projets clients en ligne, un projet personnel, deux projets de formation), compétences, parcours et formulaire de contact. Site entièrement en français.

> En ligne (adresse provisoire) : https://rustic-yellowgreen-woodcock-94.hostingersite.com — développement par pull request sur `main` ; chaque fusion dans `main` est mise en ligne automatiquement après une CI verte. Avancement détaillé : [`docs/roadmap.md`](docs/roadmap.md).

## Technologies

- **Next.js 16** (App Router) en **export statique**, **React 19**, **TypeScript** strict
- **Tailwind CSS 4**, polices Inter et JetBrains Mono servies par le site
- **PHP 8.3** pour le seul point dynamique : l'envoi du formulaire de contact, par l'API de **Resend**
- Hébergement : **Hostinger** (adresse provisoire, en ligne depuis le 23/11/2026)
- Tests : **Vitest**, tests PHP en ligne de commande, **Playwright** et **axe-core** (sur GitHub Actions uniquement)

## Choix principaux

- **Site statique** : toutes les pages sont générées au build ; composants serveur par défaut, JavaScript seulement pour le menu mobile, le thème, le formulaire et le lien actif de la navigation.
- **Budget de 150 Ko de JavaScript compressé par page**, contrôlé après chaque build ; le build échoue au-delà.
- **CSP stricte sans `unsafe-inline` ni `unsafe-eval`** : empreinte SHA-256 de chaque script intégré, ajoutée dans chaque page après le build.
- **Formulaire protégé** : origine contrôlée, limites d'envoi, champ piège, adresse IP jamais gardée en clair (empreinte HMAC). Les clés restent sur le serveur, hors du dossier publié et hors du dépôt.
- **Textes et chiffres dans `content/`**, recopiés des documents validés ; les chiffres (dont le total des tests des projets) sont calculés, jamais écrits dans les pages.

## Organisation

```
app/          pages, métadonnées, plan du site
components/   affichage (en-tête, cartes, formulaire, images)
content/      textes, projets, images déclarées
lib/          calculs (total des tests), SEO, validation du formulaire
public/       fichiers servis tels quels, dont contact.php et .htaccess
scripts/      contrôles après le build (CSP, budget JS) et préparation des images
tests/        unit/ (Vitest), php/, e2e/ (Playwright)
docs/         documents du projet : exigences, plan du site, contenus, design, architecture, roadmap
```

## Commandes

Prérequis : Node.js 22 et un accès à internet pendant le build (téléchargement des polices).

| Commande                                    | Rôle                                                        |
| ------------------------------------------- | ----------------------------------------------------------- |
| `npm ci`                                    | Installer les dépendances                                   |
| `npm run dev`                               | Serveur de développement                                    |
| `SITE_URL=https://exemple.fr npm run build` | Export dans `out/`, puis CSP et budget JavaScript           |
| `node scripts/serve-out.mjs 3101`           | Servir `out/` comme sur l'hébergement (404 avec code 404)   |
| `npm run lint` · `npm run typecheck`        | ESLint · TypeScript                                         |
| `npm run format:check`                      | Prettier                                                    |
| `npm test`                                  | Tests Vitest                                                |
| `npm run test:php`                          | Tests du script PHP (PHP 8.3 avec curl, mbstring et SQLite) |

## Intégration continue

À chaque push et pull request, [`ci.yml`](.github/workflows/ci.yml) lance le formatage, le lint, les types, les tests Vitest et PHP, le contrôle des failles des dépendances, le build avec la CSP et le budget JavaScript, la vérification des liens, puis les tests de bout en bout et d'accessibilité dans Chromium, Firefox et WebKit. Dependabot propose les mises à jour chaque semaine.

Les captures des sites présentés sont prises par [`captures.yml`](.github/workflows/captures.yml) (Playwright). Les images sont préparées par [`images.yml`](.github/workflows/images.yml) : originaux dans `images-source/`, déclarés dans `content/images.ts` ; le workflow produit des AVIF et WebP sans métadonnées. Le déploiement est le dernier job de [`ci.yml`](.github/workflows/ci.yml) (`deployer`) : après un push sur `main` et une CI verte, il publie `out/` sur la branche `site`, que Hostinger récupère par son déploiement Git automatique ; le job vérifie ensuite le site en ligne, puis Lighthouse le mesure.

## Licence

Code et textes : © 2026 Awad Dev. Les captures d'écran montrent des sites réalisés par Awad.
