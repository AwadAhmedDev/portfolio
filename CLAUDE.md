# CLAUDE.md — Portfolio de Awad Ahmed

Instructions générales pour toute intervention de Claude sur ce dépôt.

## 1. Contexte et objectif

Portfolio professionnel de Awad Ahmed, développeur Full Stack JavaScript / TypeScript. Le site n'emploie ni « junior » ni « senior » et n'annonce aucun nombre d'années d'expérience.
Objectif : présenter ses projets réels (avec un lien vers le site en ligne et vers le code quand ils existent), ses compétences et son parcours, et permettre de le contacter.

Le portfolio est un projet séparé : il ne modifie pas les dépôts des projets qu'il présente, sauf demande explicite d'Awad.

Stack choisie (pas encore installée) : Next.js en export statique, React, TypeScript, Tailwind CSS, shadcn/ui. Détails et décisions : `docs/product-discovery.md`.

## 2. Rôles

- **Claude Code** : analyse, architecture, développement, tests, déploiement et maintenance, dans ce dépôt.
- **Claude Design** : maquettes et direction visuelle (mise en page, couleurs, typographie, mode clair et mode sombre). Les maquettes sont validées par Awad avant d'être développées.

## 3. Méthodologie

Le projet avance par phases, dans cet ordre :

1. Analyse (Product Discovery)
2. Conception
3. Architecture
4. Développement
5. Tests
6. Déploiement
7. Maintenance

**On ne commence jamais une phase sans la validation explicite de la phase précédente par Awad.**

## 4. Règles de travail

- **Lire la documentation existante avant toute intervention** : ce fichier, puis le dossier `docs/`.
- **Ne jamais inventer d'informations** sur le parcours, les compétences, les projets ou les résultats d'Awad. Chaque chiffre, lien et fonctionnalité doit être vérifié avant d'être écrit.
- **Signaler les incertitudes** et poser la question quand une information manque.
- **Code simple, sécurisé et maintenable** : pas de dépendance, d'abstraction ou de fonctionnalité dont on n'a pas besoin.
- **Expliquer avant d'agir** et attendre l'accord d'Awad pour toute action visible : création de dépôt, commit, push, publication, déploiement, achat.
- **Confidentialité** : pour Awad, seul le nom « Awad Ahmed » apparaît ; les autres noms (clients, coéquipiers) sont cités seulement avec leur accord. Aucune adresse e-mail personnelle, aucun secret, aucun token dans le code, le site ou les commits.
- Répondre en français, avec des mots simples.

## 5. Contraintes matérielles

L'ordinateur d'Awad a très peu d'espace disque libre.

- Ne rien installer (Node.js, paquets npm, Docker, base de données…) sans l'accord d'Awad, en précisant la place nécessaire.
- Garder le minimum de dépendances et supprimer les fichiers temporaires.

## 6. Organisation du dépôt

- `docs/` : documents produits au fil des phases (découverte produit, spécifications, conception, architecture, tests, déploiement).
- `.claude/skills/` : les cinq Skills du projet, découverts automatiquement par Claude Code (un dossier par Skill, `<nom>/SKILL.md`) :
  - `.claude/skills/product-analysis/SKILL.md`
  - `.claude/skills/frontend-engineering/SKILL.md`
  - `.claude/skills/code-review/SKILL.md`
  - `.claude/skills/security-review/SKILL.md`
  - `.claude/skills/testing-deployment/SKILL.md`
