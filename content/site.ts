// Éléments communs (docs/contenus.md §0) et liens externes connus (docs/design.md §9).

export const SITE_NOM = "Awad Ahmed";

export const nav = [
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
  { langue: "fr", nom: "CV en français", fichier: "/cv/awad-ahmed-cv-fr.pdf", taille: null },
  { langue: "en", nom: "CV en anglais", fichier: "/cv/awad-ahmed-cv-en.pdf", taille: null },
  { langue: "de", nom: "CV en allemand", fichier: "/cv/awad-ahmed-cv-de.pdf", taille: null },
];
export const cvsDisponibles = () => cvs.filter((c) => c.taille !== null);
export const cvFrancais = () => cvsDisponibles().find((c) => c.langue === "fr");
