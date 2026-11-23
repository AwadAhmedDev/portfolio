import { describe, expect, it } from "vitest";
import * as pages from "@/content/pages";
import { projets } from "@/content/projets";
import * as site from "@/content/site";
import { detailTests, executionsCI, nbProjetsEnLigne, nbSites100Ordinateur, totalTestsDistincts } from "@/lib/stats";

describe("chiffres officiels (design.md §7.1)", () => {
  it("185 tests distincts au total", () => {
    expect(totalTestsDistincts()).toBe(185);
  });
  it("détail dans l'ordre validé C14", () => {
    expect(detailTests()).toEqual([17, 45, 16, 63, 24, 20]);
  });
  it("le template compte 20 tests distincts et 27 exécutions", () => {
    const t = projets.find((p) => p.slug === "template-nextjs")!;
    expect(executionsCI(t)).toBe(27);
  });
  it("5 projets en ligne et 2 sites à 100 / 100 sur ordinateur", () => {
    expect(nbProjetsEnLigne()).toBe(5);
    expect(nbSites100Ordinateur()).toBe(2);
  });
});

describe("projets (sitemap.md, décisions A2, C9, C10)", () => {
  it("6 slugs, dans l'ordre A2, uniques et sans accent", () => {
    const slugs = projets.map((p) => p.slug);
    expect(slugs).toEqual([
      "repatek",
      "i-make-my-world",
      "plateforme-editoriale",
      "template-nextjs",
      "emateriel",
      "solidays",
    ]);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  it("I Make My World n'a pas de lien vers le code, mais une mention", () => {
    const p = projets.find((x) => x.slug === "i-make-my-world")!;
    expect(p.code).toBeUndefined();
    expect(p.mentionCode).toBeTruthy();
  });
  it("le template n'a pas de site, mais la mention et le schéma", () => {
    const p = projets.find((x) => x.slug === "template-nextjs")!;
    expect(p.site).toBeUndefined();
    expect(p.mentionSite).toBe("Pas de site en ligne");
    expect(p.schema).toBe(true);
  });
  it("Solidays affiche toujours l'équipe de 3", () => {
    const p = projets.find((x) => x.slug === "solidays")!;
    expect(p.mentionHaut).toContain("équipe de 3");
  });
  it("5 technologies au plus sur chaque carte", () => {
    for (const p of projets) expect(p.techCarte.length).toBeLessThanOrEqual(5);
  });
});

describe("règles de contenu (requirements.md)", () => {
  const texte = JSON.stringify(projets).toLowerCase();
  it("aucun « junior » ni « senior »", () => {
    expect(texte).not.toMatch(/junior|senior/);
  });
  it("aucune adresse e-mail", () => {
    expect(texte).not.toMatch(/[a-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,}/);
  });
  it("espaces insécables avant « : » et « ? » et dans « 24 h » (design.md §3.2)", () => {
    const tout = JSON.stringify([projets, pages, site]);
    expect(tout).not.toMatch(/ [:?]|24 h/); // espace ordinaire interdite à ces endroits
  });
  it("aucun paiement en ligne annoncé pour RepaTek et I Make My World", () => {
    for (const slug of ["repatek", "i-make-my-world"]) {
      const p = JSON.stringify(projets.find((x) => x.slug === slug)).toLowerCase();
      expect(p).not.toMatch(/paiement/);
    }
  });
});
