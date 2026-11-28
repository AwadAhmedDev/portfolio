import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { images } from "@/content/images";
import generees from "@/content/images-generees.json";
// @ts-expect-error script Node sans types
import { erreursDeclarations, largeursProduites, nomValide } from "../../scripts/images.mjs";

describe("préparation des images (scripts/images.mjs, architecture.md §5)", () => {
  it("noms acceptés : PNG ou JPEG, minuscules, tirets, sans espace ni accent", () => {
    expect(nomValide("repatek-ordinateur.png")).toBe(true);
    expect(nomValide("awad.jpg")).toBe(true);
    for (const f of ["RepaTek.png", "photo awad.jpg", "été.png", "capture.webp", "a--b.png"])
      expect(nomValide(f)).toBe(false);
  });
  it("jamais d'agrandissement d'une image plus petite", () => {
    expect(largeursProduites("repatek-ordinateur", 2000)).toEqual([640, 960, 1440]);
    expect(largeursProduites("repatek-ordinateur", 1000)).toEqual([640, 960]);
    expect(largeursProduites("repatek-mobile", 500)).toEqual([500]);
    expect(largeursProduites("awad", 800)).toEqual([200, 320, 640]);
  });
  it("chaque original est déclaré avec son texte alternatif, et inversement", () => {
    const decl = [{ nom: "repatek-ordinateur", alt: "Page d'accueil du site RepaTek sur ordinateur" }];
    expect(erreursDeclarations(["repatek-ordinateur.png"], decl)).toEqual([]);
    expect(erreursDeclarations(["solidays-mobile.png"], decl)).toHaveLength(2);
    expect(erreursDeclarations(["repatek-ordinateur.png"], [{ nom: "repatek-ordinateur", alt: " " }])).toHaveLength(1);
  });
});

describe("images publiées (content/images.ts ↔ images générées)", () => {
  const g = generees as Record<string, { largeurs: number[] }>;
  it("chaque image déclarée a été générée, et inversement", () => {
    expect(Object.keys(g).sort()).toEqual(images.map((i) => i.nom).sort());
  });
  it("chaque fichier AVIF et WebP annoncé existe dans public/images/", () => {
    for (const [nom, { largeurs }] of Object.entries(g))
      for (const l of largeurs)
        for (const f of ["avif", "webp"])
          expect(existsSync(`public/images/${nom}-${l}.${f}`), `${nom}-${l}.${f}`).toBe(true);
  });
});
