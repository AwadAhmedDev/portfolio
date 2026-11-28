// Éléments communs (docs/contenus.md §0) et liens externes connus (docs/design.md §9).

export const SITE_NOM = "Awad Dev";
// Nom du site « Awad Dev » et « Awad » à côté du logo (décision d'Awad du 26/11/2026). Le nom complet ne reste que dans
// les mentions légales (éditeur et destinataire des données), où la loi l'exige.
export const LOGO_NOM = "Awad";

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/projets/", label: "Projets" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/contact/", label: "Contact" },
] as const;

export const liens = {
  linkedin: "https://www.linkedin.com/in/awad-dev",
  github: "https://github.com/AwadAhmedDev",
  codePortfolio: "https://github.com/AwadAhmedDev/portfolio",
} as const;

// Un CV non fourni n'a pas de lien (EF-7). Mettre `taille` (ex. « 150 Ko ») quand le PDF est ajouté dans public/cv/.
export type CV = { langue: "fr" | "en" | "de"; nom: string; fichier: string; taille: string | null };
export const cvs: CV[] = [
  { langue: "fr", nom: "CV en français", fichier: "/cv/awad-cv-fr.pdf", taille: null },
  { langue: "en", nom: "CV en anglais", fichier: "/cv/awad-cv-en.pdf", taille: null },
  { langue: "de", nom: "CV en allemand", fichier: "/cv/awad-cv-de.pdf", taille: null },
];
export const cvsDisponibles = () => cvs.filter((c) => c.taille !== null);
export const cvFrancais = () => cvsDisponibles().find((c) => c.langue === "fr");

// Pied de page (design.md §4.2, refait à la demande d'Awad le 23/11/2026) : intitulés des colonnes et lien de retour.
export const piedDePage = {
  navigation: "Navigation",
  reseaux: "Me retrouver",
  haut: "Retour en haut",
};
