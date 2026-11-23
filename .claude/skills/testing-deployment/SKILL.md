---
name: testing-deployment
description: Définit, écrit et lance les tests du portfolio d'Awad Ahmed (Vitest, PHP, E2E Playwright avec axe en CI), contrôle lint, TypeScript, Prettier, le build statique, la CSP et le budget de 150 Ko de JavaScript gzip par page, prépare les workflows GitHub Actions (ci.yml, deploy.yml, images.yml) et vérifie les conditions de mise en production de la roadmap. À utiliser pour ajouter ou corriger des tests, vérifier qu'une tâche est vraiment terminée, préparer une CI, un audit ou un déploiement. Ne déploie jamais sans autorisation explicite.
---

# Tests et déploiement — portfolio

Références : `docs/architecture.md` §7 (tests, budget) et §8 (déploiement), `docs/roadmap.md` lot 13, lot 14 et §9 (conditions de mise en production).

## Interdits absolus

- **Aucun déploiement, aucune opération Hostinger, aucun commit, push ou fusion sans l'accord explicite d'Awad** (RM6). Un test vert n'est pas une autorisation.
- **Budget JavaScript : 153 600 octets gzip par page**, chunks partagés compris. Le seuil (`BUDGET` dans `scripts/js-budget.mjs`) ne change jamais sans l'accord d'Awad.
- Ne jamais affaiblir, ignorer (`.skip`, `.only`) ou supprimer un test pour faire passer la CI.
- Ne rien installer en local sans accord (disque limité) : **Playwright, `sharp`, lychee et Lighthouse tournent uniquement sur GitHub Actions** (R7).

## Ce qui existe (vérifié le 23/11/2026)

| Commande | Contenu | Local ? |
|---|---|---|
| `npm run lint` | ESLint 9, `eslint-config-next` | Oui |
| `npm run typecheck` | `tsc --noEmit` | Oui |
| `npm run format:check` | Prettier — **en échec** tant que le lot 1 (RM1) n'est pas fait | Oui |
| `npm test` | Vitest : `tests/unit/` — 25 tests (données 12, validation 7, scripts 6) | Oui |
| `npm run test:php` | `tests/php/contact-handler.test.php` — 29 vérifications, SQLite en mémoire. En local : `C:/xampp/php/php.exe` (PHP 8.2) | Oui |
| `npm run build` | `next build` puis `postbuild` : `segments-plats.mjs` → `csp-hashes.mjs` → `js-budget.mjs` (échoue au-delà du budget) | Oui, avec accord ; réseau nécessaire (polices) |
| `node scripts/serve-out.mjs 3101` | Sert `out/` comme Hostinger : 404 avec code 404, `_app/` et `.php` refusés | Oui |

Build d'essai : `SITE_URL=https://example.invalid npm run build`. Workflows GitHub : **aucun pour l'instant** (`.github/` absent).

Ces 25 + 29 tests concernent **le portfolio lui-même**. Le chiffre **185** est celui des tests des 6 projets présentés : il est vérifié par un test de `donnees.test.ts`, il ne se compte pas avec les tests du dépôt.

## Choisir le bon test

| Changement | Test attendu |
|---|---|
| Données, textes, chiffres (`content/`, `lib/stats.ts`) | Vitest dans `donnees.test.ts` (total 185, ordre C14, slugs, variantes, aucun « junior » / « senior » / « @ ») |
| Règle de validation | Vitest **et** PHP, avec les mêmes cas des deux côtés |
| Script de `scripts/` | Vitest dans `scripts.test.ts` (fonctions exportées) |
| Comportement dans le navigateur (menu, thème, formulaire, focus) | E2E Playwright en CI, avec axe |
| Logique PHP | `tests/php/` (fonction `verifier`) |

Un test vérifie un comportement réel et observable ; un nouveau cas de bord découvert en revue devient un test.

## CI à créer (lot 13) — `ci.yml`

À chaque push et pull request : Node.js 22, `npm ci`, lint, format, types, Vitest, PHP **8.3** (version de Hostinger), build avec `SITE_URL`, budget et CSP (via `postbuild`), lychee (LinkedIn exclu : il répond 999), E2E Playwright + axe sur l'export servi par `serve-out.mjs` (menu, thème sans flash, clavier, formulaire avec envoi simulé, **aucune violation de CSP ni erreur de console sur chaque page**), contrôle des failles des dépendances. Cache de `.next/cache` pour les polices.

`images.yml` (lot 11) : manuel (`workflow_dispatch`), contrôles de `architecture.md` §5, résultat en pull request.
`deploy.yml` (lot 14) : seulement après accord d'Awad ; sur push dans `main`, si la CI est verte, archive de `out/` envoyée par l'API Hostinger (secret `HOSTINGER_API_TOKEN`), comme RepaTek. N'écrit que dans `public_html/`.

## Vérifier qu'une tâche est terminée

1. Lint, types, format, Vitest, PHP : tous verts, résultats cités tels quels.
2. Si l'interface change : build (avec accord), tableau du budget par page comparé au précédent, pages ouvertes sur l'export à 360, 768, 1 100 et 1 440 px, deux thèmes, console et CSP propres.
3. Les critères d'acceptation du lot dans `docs/roadmap.md` sont tous vérifiés ; ce qui ne l'est pas est dit.
4. Contrôle avant fin : aucun `TODO`, `.skip`, `.only`, test vide ni emplacement provisoire oublié dans les fichiers modifiés.

## Avant une mise en production

Reprendre **une par une** les 15 conditions de `docs/roadmap.md` §9 et noter pour chacune : vérifiée (avec la preuve), non vérifiée ou bloquée. Contrôles après déploiement : HTTPS et redirection, en-têtes, 404, adresses interdites en 403 ou 404, `expose_php`, `REMOTE_ADDR`, envoi réel d'un message, Lighthouse (`requirements.md` §6), taille de JavaScript réellement transférée comparée au build. Si un contrôle échoue : le signaler à Awad avant toute nouvelle action.
