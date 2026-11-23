// Captures des pages d'accueil des sites en ligne (roadmap lot 4), lancées par le workflow captures.yml.
// Playwright n'est installé que sur GitHub (R7). Résultat : images-source/<slug>-ordinateur.png (1440 × 900, 16:10)
// et images-source/<slug>-mobile.png (800 × 1000, 4:5), à relire avant publication (aucune donnée personnelle).
import { mkdirSync } from "node:fs";
import { chromium } from "@playwright/test";

const SITES = {
  repatek: "https://repatek.fr",
  "i-make-my-world": "https://teal-starling-640860.hostingersite.com",
  "plateforme-editoriale": "https://snowy-floralwhite-giraffe-20.hostingersite.com",
  emateriel: "https://darkseagreen-sandpiper-710943.hostingersite.com",
  solidays: "https://tasteful-lightcoral-yak-94.hostingersite.com",
};
const FORMATS = {
  ordinateur: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  mobile: { viewport: { width: 400, height: 500 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

mkdirSync("images-source", { recursive: true });
const navigateur = await chromium.launch();
for (const [slug, url] of Object.entries(SITES)) {
  for (const [format, options] of Object.entries(FORMATS)) {
    const contexte = await navigateur.newContext({
      ...options,
      locale: "fr-FR",
      colorScheme: "light",
      reducedMotion: "reduce",
    });
    const page = await contexte.newPage();
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForTimeout(1500); // polices et images du premier écran
    await page.screenshot({ path: `images-source/${slug}-${format}.png` });
    await contexte.close();
    console.log(`${slug}-${format}.png`);
  }
}
await navigateur.close();
