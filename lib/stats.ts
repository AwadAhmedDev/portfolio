import { projets, type Projet } from "@/content/projets";

// Ordre du détail affiché sur l'accueil (décision C14), différent de l'ordre des projets (A2) : décision R9.
export const ORDRE_DETAIL_TESTS = [
  "repatek",
  "i-make-my-world",
  "plateforme-editoriale",
  "emateriel",
  "solidays",
  "template-nextjs",
] as const;

// Un scénario E2E compte une fois, quel que soit le nombre de profils (design.md §7.1).
export function testsDistincts(p: Projet): number {
  const t = p.tests;
  return (t.unitaires ?? 0) + (t.integration ?? 0) + (t.scenariosE2E ?? 0);
}

export function executionsCI(p: Projet): number {
  const t = p.tests;
  return (t.unitaires ?? 0) + (t.integration ?? 0) + (t.scenariosE2E ?? 0) * (t.profilsE2E ?? 1);
}

export function totalTestsDistincts(liste: Projet[] = projets): number {
  return liste.reduce((somme, p) => somme + testsDistincts(p), 0);
}

export function detailTests(liste: Projet[] = projets): number[] {
  return ORDRE_DETAIL_TESTS.map((slug) => {
    const p = liste.find((x) => x.slug === slug);
    if (!p) throw new Error(`Projet absent du détail des tests : ${slug}`);
    return testsDistincts(p);
  });
}

export const nbProjetsEnLigne = (liste: Projet[] = projets) => liste.filter((p) => p.site).length;

// « 100 / 100 sur les 4 scores Lighthouse pour N sites, sur ordinateur ».
export const nbSites100Ordinateur = (liste: Projet[] = projets) =>
  liste.filter((p) => {
    const o = p.lighthouse?.ordinateur;
    return o && o.performance === 100 && o.accessibilite === 100 && o.bonnesPratiques === 100 && o.seo === 100;
  }).length;
