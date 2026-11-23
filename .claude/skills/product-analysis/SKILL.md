---
name: product-analysis
description: Analyse une demande métier ou une évolution du portfolio d'Awad Ahmed avant toute conception ou tout code. À utiliser quand une demande ajoute, change ou remet en question une page, un texte, une fonctionnalité, un parcours ou une exigence, pour la confronter aux documents validés (requirements, sitemap, contenus, design, architecture, roadmap) et en sortir les exigences, ambiguïtés, contradictions et critères d'acceptation.
---

# Analyse produit — portfolio

Rôle : transformer une demande en exigences vérifiables, **sans rien décider à la place d'Awad**. Ce Skill ne modifie aucun fichier ; il produit une analyse.

## Avant d'analyser

Lire `CLAUDE.md`, puis les documents utiles à la demande. Chacun fait foi sur son domaine :

| Domaine | Document | Identifiants des décisions |
|---|---|---|
| Faits sur Awad et ses 6 projets | `docs/product-discovery.md` | D1–D8 |
| Exigences et critères d'acceptation | `docs/requirements.md` | EF-1–EF-11, ENF-1–ENF-9, A1–A11 |
| Pages, adresses, navigation | `docs/sitemap.md` | S1–S7 |
| Parcours des visiteurs | `docs/user-flows.md` | P1–P8 |
| **Textes exacts** | `docs/contenus.md` | T1–T12 |
| Présentation | `docs/design.md` | C1–C19 |
| Technique | `docs/architecture.md` | R1–R10 |
| Avancement, dépendances, décisions récentes | `docs/roadmap.md` | RM1–RM6 |

Ordre de priorité en cas d'écart : `contenus.md` pour les textes, maquettes et `design.md` pour la présentation, `architecture.md` pour la technique.

## Méthode

1. **Reformuler** la demande en une phrase : qui en a besoin (recruteur, développeur ou CTO, entrepreneur ou PME) et pour quoi faire.
2. **Rattacher** chaque point à une exigence existante (EF, ENF, décision). S'il n'y en a pas, c'est une **suggestion**, pas une exigence.
3. **Chercher les conflits** avec les décisions validées. Pièges connus :
   - site **100 % en français** ; seul le CV existe en anglais et en allemand (EF-8) ;
   - jamais « junior », « senior » ni nombre d'années d'expérience ;
   - aucune adresse e-mail d'Awad nulle part ; pour lui, seul le nom « Awad Ahmed » ;
   - noms des clients et coéquipiers cités seulement avec leur accord (déjà donné pour ceux de `contenus.md`) ;
   - aucun paiement en ligne annoncé pour RepaTek et I Make My World ;
   - les 6 projets, leur ordre (A2) et leurs badges sont figés ;
   - « 185 tests » = tests distincts des 6 projets ; à ne pas confondre avec les tests du portfolio lui-même ;
   - site statique (D1) : pas de serveur Node.js, pas de compte, pas de base de données côté site ;
   - budget de 150 Ko de JavaScript par page.
4. **Lister les ambiguïtés** : ce qui manque pour écrire un critère vérifiable (texte exact, donnée, ressource, comportement).
5. **Écrire les critères d'acceptation** : observables, mesurables, chacun avec sa méthode de vérification (test, navigateur, mesure).
6. **Situer dans la roadmap** : quel lot, quelles dépendances, quelles ressources manquantes.

## Règles

- **Aucun fait inventé** : chaque chiffre, lien, date ou fonctionnalité vient d'un document ou d'une source vérifiée (dépôt, CI, site en ligne). Sinon : le marquer « à vérifier » et poser la question.
- Une modification de texte passe par `contenus.md` **et** `content/` dans le même commit (R8).
- Ne jamais modifier une spécification validée sans l'autorisation explicite d'Awad : proposer, puis attendre.
- Signaler une contradiction entre documents au lieu de la trancher.

## Livrable

Répondre en français simple, avec cette structure :

1. **Demande** (reformulée)
2. **Exigences validées concernées** (avec leurs identifiants)
3. **Suggestions** (non validées, clairement séparées)
4. **Contradictions et risques**
5. **Questions pour Awad** (une décision par question, avec une recommandation)
6. **Critères d'acceptation** et méthode de vérification
7. **Lot de la roadmap** et dépendances
