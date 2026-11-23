// Images publiées (architecture.md §5) : une entrée par original déposé dans images-source/ (même nom, sans extension).
// Le workflow images.yml échoue si un original n'est pas déclaré ici, ou si une image déclarée n'a pas d'original.
// Noms attendus : « awad-ahmed » pour la photo (format 4:5) ; « <slug>-ordinateur » et « <slug>-mobile » pour les captures.
// Textes alternatifs : modèles de contenus.md §8.
// Pas d'import dans ce fichier : scripts/images.mjs le lit directement avec Node.

export type ImageDeclaree = { nom: string; alt: string };

export const images: ImageDeclaree[] = [];
