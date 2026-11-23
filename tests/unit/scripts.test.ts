import { sep } from "node:path";
import { describe, expect, it } from "vitest";
// @ts-expect-error script Node sans types
import { cheminPlat } from "../../scripts/segments-plats.mjs";
// @ts-expect-error script Node sans types
import { ajouterMeta, erreursCsp, politique } from "../../scripts/csp-hashes.mjs";
// @ts-expect-error script Node sans types
import { mesurerPage } from "../../scripts/js-budget.mjs";

const j = (...p: string[]) => p.join(sep);

describe("noms plats du préchargement (segments-plats.mjs)", () => {
  it("dossiers → points", () => {
    expect(cheminPlat(j("projets", "__next.projets", "__PAGE__.txt"))).toBe(
      j("projets", "__next.projets.__PAGE__.txt"),
    );
    expect(cheminPlat(j("projets", "repatek", "__next.projets", "$d$slug", "__PAGE__.txt"))).toBe(
      j("projets", "repatek", "__next.projets.$d$slug.__PAGE__.txt"),
    );
  });
  it("ignore les fichiers déjà plats et les autres fichiers", () => {
    expect(cheminPlat("__next.__PAGE__.txt")).toBeNull();
    expect(cheminPlat(j("projets", "index.txt"))).toBeNull();
  });
});

describe("CSP par empreintes (csp-hashes.mjs)", () => {
  const html =
    '<html><head><title>x</title></head><body><script>alert(1)</script><script src="/a.js"></script></body></html>';
  it("empreinte SHA-256 de chaque script intégré, sans unsafe-inline ni unsafe-eval", () => {
    const p = politique(html);
    expect(p).toContain("'sha256-");
    expect(p).not.toMatch(/unsafe-inline|unsafe-eval/);
    expect(p).not.toContain("frame-ancestors"); // ignoré dans une meta : il est dans l'en-tête HTTP
  });
  it("balise meta placée en tout premier dans <head>", () => {
    expect(ajouterMeta(html)).toMatch(/^<html><head><meta http-equiv="Content-Security-Policy"/);
  });
  it("refuse style= et les attributs d'événement", () => {
    expect(erreursCsp('<div style="color:red"></div>')).toHaveLength(1);
    expect(erreursCsp('<button onclick="x()"></button>')).toHaveLength(1);
    expect(erreursCsp('<div class="a"></div>')).toEqual([]);
  });
});

describe("budget JavaScript (js-budget.mjs)", () => {
  it("ignore noModule quelle que soit la casse, compte chaque fichier une fois", () => {
    const html =
      '<script src="/a.js" async></script><script src="/a.js"></script><script src="/vieux.js" noModule=""></script>';
    const lus: string[] = [];
    const r = mesurerPage(html, (u: string) => {
      lus.push(u);
      return Buffer.from("x".repeat(100));
    });
    expect(lus).toEqual(["/a.js"]);
    expect(r.fichiers).toBe(1);
  });
});
