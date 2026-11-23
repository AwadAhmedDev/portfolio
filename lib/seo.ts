// Adresse du site, fournie au build par la variable SITE_URL (architecture.md §8.3).
// shortcut: valeur locale par défaut tant que le site Hostinger du portfolio n'existe pas ; la CI doit fixer SITE_URL.
export const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
