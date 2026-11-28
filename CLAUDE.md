# CLAUDE.md — Portfolio d'Awad (« Awad Dev »)

Instructions générales pour toute intervention de Claude sur ce dépôt.

## 1. Contexte et objectif

Portfolio professionnel d'Awad, développeur Full Stack JavaScript / TypeScript, publié sous le nom « Awad Dev ». Le site n'emploie ni « junior » ni « senior » et n'annonce aucun nombre d'années d'expérience.
Objectif : présenter ses projets réels (avec un lien vers le site en ligne et vers le code quand ils existent), ses compétences et son parcours, et permettre de le contacter.

Le portfolio est un projet séparé : il ne modifie pas les dépôts des projets qu'il présente, sauf demande explicite d'Awad.

Stack en place : Next.js 16 en export statique, React 19, TypeScript 5.9 strict, Tailwind CSS 4. shadcn/ui n'est **pas** installé et aucun de ses composants n'est recopié : boutons, badges et puces sont de simples classes Tailwind (`components/ui/styles.ts`) ; seuls les noms des variables CSS reprennent ceux de shadcn/ui. Formulaire : PHP 8.3 + Resend. Site en ligne sur Hostinger (adresse provisoire) depuis le 23/11/2026, mis à jour automatiquement après chaque fusion dans `main` (voir `docs/architecture.md` §8). Détails et décisions : `docs/product-discovery.md`, `docs/architecture.md`, `docs/roadmap.md`.

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
- **Confidentialité** : nom public **« Awad Dev »** (titres, pied de page) et **« Awad »** dans les phrases (décision d'Awad du 26/11/2026) ; le nom complet « Awad Ahmed » n'apparaît sur le site que dans les mentions légales (éditeur et destinataire des données du formulaire), où la loi l'exige, et dans les CV en PDF (`public/cv/`), où le nom complet « Awad Ahmed Roubah » est attendu par les recruteurs (décision d'Awad du 28/11/2026). Les autres noms (clients, coéquipiers) sont cités seulement avec leur accord. Aucune adresse e-mail personnelle, aucun secret, aucun token dans le code, le site ou les commits.
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
