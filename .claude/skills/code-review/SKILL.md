---
name: code-review
description: Relit du code du portfolio d'Awad Ahmed (diff, branche, fichiers ou pull request) pour juger sa qualité, sa lisibilité, son architecture, son typage, ses performances, les régressions possibles et sa conformité aux documents validés. À utiliser quand on demande une revue ou un avis sur du code, avant un commit ou une fusion. Ne modifie pas le code ; classe les remarques en bloquantes, importantes et facultatives.
---

# Revue de code — portfolio

Ce Skill **lit et juge** ; il ne modifie aucun fichier, sauf demande explicite d'Awad après la revue. La sécurité a son propre Skill (`security-review`) : ici, ne la signaler qu'en passant et renvoyer vers lui.

## Préparer

1. Délimiter le périmètre : `git diff`, `git diff main...HEAD` ou les fichiers désignés. Lire chaque fichier modifié **en entier**, pas seulement le diff, ainsi que ses appelants (`grep` du nom exporté).
2. Identifier le lot de `docs/roadmap.md` et les exigences visées (`requirements.md`, `design.md`, `contenus.md`).
3. Lancer, sans rien modifier : `npm run lint`, `npm run typecheck`, `npm test`. Noter les résultats tels quels.

## Grille de lecture

**Conformité aux documents**
- Textes identiques à `contenus.md` (même ponctuation) ; texte modifié des deux côtés dans le même commit (R8).
- Aucun texte ni chiffre en dur dans `app/` ou `components/` : ils viennent de `content/` ou `lib/stats.ts`.
- Rien qui ne soit demandé par un document ou une décision : une fonctionnalité en plus est une remarque bloquante.

**Architecture et responsabilités** (`architecture.md` §3)
- `app/` assemble, `components/` affiche, `content/` porte les données, `lib/` calcule.
- Variante d'affichage pilotée par les données du projet, pas par un `if (slug === …)`.
- Composant client seulement pour une vraie interaction ; un `"use client"` remonté trop haut fait grossir toutes les pages.

**Lisibilité et duplication**
- Classes répétées alors qu'un style existe dans `components/ui/styles.ts` ; logique copiée au lieu d'être partagée (ex. validation : `lib/validation.ts` côté navigateur et `ContactHandler::valider` côté PHP doivent garder **les mêmes règles**).
- Noms clairs, en français comme le reste du code ; commentaire seulement pour le « pourquoi ».
- Abstraction, option ou paramètre que rien n'utilise.

**Typage**
- Pas de `any`, de `as` qui masque une erreur, ni de `!` non justifié ; `noUncheckedIndexedAccess` respecté.
- Types de données (`Projet`, `Saisie`…) réutilisés plutôt que redéfinis.

**Performance et rendu statique**
- Nouveau code client : coût estimé et mesuré (budget de 153 600 octets gzip par page).
- Aucune API incompatible avec `output: 'export'`.
- Images avec dimensions fixées ; aucun `style=` (refusé par la CSP).

**Régressions**
- Comportements déjà vérifiés : thème sans flash, menu mobile (clic, Échap, clic en dehors, focus rendu), focus sur le premier champ en erreur, `?demande=freelance`, 404 avec code 404, liens « site » et « code » absents quand ils n'existent pas.
- Tests supprimés, affaiblis, `.skip` ou `.only` : bloquant.
- Changement d'un script de `scripts/` : vérifier ses tests dans `tests/unit/scripts.test.ts`.

**Accessibilité** : un `h1`, titres dans l'ordre, étiquettes, `aria-*` cohérents, zones de 44 px, focus visible.

## Classer chaque remarque

| Niveau | Sens | Exemples |
|---|---|---|
| **Bloquant** | À corriger avant commit ou fusion | Test en échec, texte différent de `contenus.md`, budget dépassé, `style=` ou `unsafe-inline`, donnée inventée, adresse e-mail, régression |
| **Important** | À corriger bientôt, ne casse rien aujourd'hui | Duplication de règles, composant client évitable, type trop large, test manquant pour une branche nouvelle |
| **Facultatif** | Amélioration possible | Nom plus clair, petite simplification |

Chaque remarque donne : fichier et ligne, le problème, **le scénario concret** qui le révèle, et la correction proposée. Ne garder que les remarques vérifiées ; dire « non vérifié » quand c'est le cas.

## Rapport

En français simple : périmètre relu → résultats des commandes → remarques par niveau → verdict (« prêt », « prêt après corrections bloquantes », « à reprendre ») → ce qui n'a pas été vérifié.
