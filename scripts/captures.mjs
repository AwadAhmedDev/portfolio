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
    await page.goto(url, { waitUntil: "load", timeout: 90_000 }); // « networkidle » échoue avec la mesure d'audience
    // Bannière de cookies : on refuse (choix le plus discret), pour qu'elle ne cache pas la page.
    // Elle peut apparaître un peu après le chargement : on l'attend 5 s au plus.
    await page
      .getByRole("button", { name: /tout refuser/i })
      .first()
      .click({ timeout: 5000 })
      .catch(() => {}); // pas de bannière sur ce site
    await page.waitForTimeout(3000); // polices et images du premier écran
    await page.screenshot({ path: `images-source/${slug}-${format}.png` });
    await contexte.close();
    console.log(`${slug}-${format}.png`);
  }
}
await navigateur.close();
