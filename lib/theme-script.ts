// Script exécuté dans <head> avant le premier affichage (thème sans flash, EF-9).
// Sa valeur exacte est autorisée par empreinte dans la CSP (architecture.md §6.2) :
// toute modification change l'empreinte, recalculée automatiquement au build.
export const CLE_THEME = "theme";

export const themeScript = `(function(){try{var t=localStorage.getItem("${CLE_THEME}");var d=t?t==="sombre":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;
