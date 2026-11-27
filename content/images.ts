// Images publiées (architecture.md §5) : une entrée par original déposé dans images-source/ (même nom, sans extension).
// Le workflow images.yml échoue si un original n'est pas déclaré ici, ou si une image déclarée n'a pas d'original.
// Noms attendus : « awad-ahmed » pour la photo (carrée, affichée en rond) ; « <slug>-ordinateur » et « <slug>-mobile » pour les captures.
// Textes alternatifs : modèles de contenus.md §8.
// Pas d'import dans ce fichier : scripts/images.mjs le lit directement avec Node.

export type ImageDeclaree = { nom: string; alt: string };

// Captures des 5 sites en ligne, prises le 23/11/2026 par le workflow Captures (relues : aucune donnée personnelle).
export const images: ImageDeclaree[] = [
  // Photo fournie par Awad le 26/11/2026 (provisoire, en attendant une photo plus grande).
  { nom: "awad-ahmed", alt: "Portrait d'Awad" },
  { nom: "repatek-ordinateur", alt: "Page d'accueil du site RepaTek sur ordinateur" },
  { nom: "repatek-mobile", alt: "Page d'accueil du site RepaTek sur téléphone" },
  // Parcours de réservation RepaTek (26/11/2026), capturé par le robot sans jamais envoyer de demande.
  {
    nom: "repatek-etape-prestation",
    alt: "Réservation RepaTek, étape 1, choix de la prestation parmi les services, avec prix et durée",
  },
  { nom: "repatek-etape-creneau", alt: "Réservation RepaTek, étape 2, choix du jour puis d'un créneau horaire libre" },
  {
    nom: "repatek-etape-coordonnees",
    alt: "Réservation RepaTek, étape 3, formulaire de coordonnées et d'adresse d'intervention",
  },
  { nom: "i-make-my-world-ordinateur", alt: "Page d'accueil du site I Make My World sur ordinateur" },
  { nom: "i-make-my-world-mobile", alt: "Page d'accueil du site I Make My World sur téléphone" },
  // Parcours I Make My World (27/11/2026), capturé par le robot sur les données de démonstration du site.
  {
    nom: "i-make-my-world-etape-catalogue",
    alt: "I Make My World, catalogue des projets filtré sur la catégorie Transport",
  },
  {
    nom: "i-make-my-world-etape-projet",
    alt: "I Make My World, fiche d'un projet avec ses catégories, sa maturité et son porteur",
  },
  {
    nom: "i-make-my-world-etape-experts",
    alt: "I Make My World, annuaire des experts filtré sur le domaine Intelligence Artificielle",
  },
  { nom: "plateforme-editoriale-ordinateur", alt: "Page d'accueil du site Plateforme éditoriale sur ordinateur" },
  { nom: "plateforme-editoriale-mobile", alt: "Page d'accueil du site Plateforme éditoriale sur téléphone" },
  // Parcours de la Plateforme éditoriale (27/11/2026), capturé par le robot sur le site public.
  {
    nom: "plateforme-editoriale-etape-pays",
    alt: "Plateforme éditoriale, page du pays Éthiopie avec les filtres par rubrique, type et date",
  },
  {
    nom: "plateforme-editoriale-etape-recherche",
    alt: "Plateforme éditoriale, recherche du mot déplacés avec 6 résultats et les filtres",
  },
  {
    nom: "plateforme-editoriale-etape-article",
    alt: "Plateforme éditoriale, page d'un article avec son titre, son chapeau et sa rubrique",
  },
  { nom: "emateriel-ordinateur", alt: "Page d'accueil du site eMatériel sur ordinateur" },
  { nom: "emateriel-mobile", alt: "Page d'accueil du site eMatériel sur téléphone" },
  // Parcours eMatériel (27/11/2026), capturé par le robot ; le panier reste dans son navigateur, sans commande.
  { nom: "emateriel-etape-catalogue", alt: "eMatériel, catalogue des produits avec catégorie, prix et disponibilité" },
  {
    nom: "emateriel-etape-produit",
    alt: "eMatériel, fiche d'un produit avec le stock restant et l'ajout au panier confirmé",
  },
  { nom: "emateriel-etape-panier", alt: "eMatériel, panier avec la quantité modifiable et le total TTC" },
  { nom: "solidays-ordinateur", alt: "Page d'accueil du site Solidays sur ordinateur" },
  { nom: "solidays-mobile", alt: "Page d'accueil du site Solidays sur téléphone" },
];
