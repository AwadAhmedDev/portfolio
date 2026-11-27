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
    // Sites React : le contenu arrive après le chargement ; on attend qu'il y ait du texte à l'écran.
    await page.waitForFunction(() => document.body.innerText.trim().length > 80, null, { timeout: 60_000 });
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

// Parcours en images (26/11/2026) : écrans clés et courte vidéo de la réservation RepaTek, en 1440 × 900 (16:10).
// Le robot s'arrête sur le formulaire de coordonnées, VIDE : il ne clique jamais « Envoyer la Demande »,
// donc aucun rendez-vous n'est créé chez le client. Vidéo enregistrée par Playwright (WebM), convertie ensuite.
mkdirSync("videos-source", { recursive: true });
const ecran = { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, locale: "fr-FR", colorScheme: "light" };
async function reservationRepatek(page, capture) {
  await page.goto("https://repatek.fr/", { waitUntil: "load", timeout: 90_000 });
  await page
    .getByRole("button", { name: /tout refuser/i })
    .first()
    .click({ timeout: 5000 })
    .catch(() => {});
  const reservation = page.locator("#booking");
  await reservation.getByRole("button", { name: /continuer/i }).waitFor({ timeout: 60_000 });
  await reservation.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -80)); // garder le titre de la section sous l'en-tête
  await page.waitForTimeout(1500);
  // 1. Choix de la prestation : la première carte.
  await reservation.locator(".grid button").first().click();
  await page.waitForTimeout(1200);
  await capture("repatek-etape-prestation");
  await reservation.getByRole("button", { name: /continuer/i }).click();
  // 2. Date et créneau : premier jour qui a des créneaux libres (un jour peut être complet), puis le premier créneau.
  const jours = reservation.locator(".overflow-x-auto button:not([disabled])");
  const creneaux = reservation.locator(".grid button");
  const complet = reservation.getByText(/aucun horaire disponible/i);
  let trouve = false;
  for (let i = 0; i < Math.min(await jours.count(), 14) && !trouve; i++) {
    await jours.nth(i).click();
    await creneaux.first().or(complet).waitFor({ timeout: 30_000 });
    trouve = await creneaux.first().isVisible();
  }
  if (!trouve) throw new Error("Aucun créneau libre sur les 14 prochains jours");
  await page.waitForTimeout(800);
  await creneaux.first().click();
  await page.waitForTimeout(1200);
  await capture("repatek-etape-creneau");
  await reservation.getByRole("button", { name: /continuer/i }).click();
  // 3. Coordonnées et adresse : formulaire laissé vide, on s'arrête là.
  await page.waitForTimeout(1500);
  await capture("repatek-etape-coordonnees");
}

// Captures fixes, puis la même suite filmée (pauses plus longues pour que la vidéo se suive bien).
{
  const contexte = await navigateur.newContext({ ...ecran, reducedMotion: "reduce" });
  const page = await contexte.newPage();
  await reservationRepatek(page, (nom) =>
    page.screenshot({ path: `images-source/${nom}.png` }).then(() => console.log(`${nom}.png`)),
  );
  await contexte.close();
}
{
  const contexte = await navigateur.newContext({
    ...ecran,
    recordVideo: { dir: "videos-source", size: { width: 1440, height: 900 } },
  });
  const page = await contexte.newPage();
  const debut = Date.now();
  let pret = 0;
  await reservationRepatek(page, async () => {
    if (!pret) pret = Date.now();
    await page.waitForTimeout(1500);
  });
  const fin = Date.now(); // le formulaire de coordonnées est à l'écran depuis 1,5 s
  await page.waitForTimeout(1500);
  const video = page.video();
  await contexte.close();
  const { renameSync, writeFileSync } = await import("node:fs");
  renameSync(await video.path(), "videos-source/repatek-reservation.webm");
  // On coupe le chargement au début et l'attente à la fin : la vidéo ne montre que le parcours.
  const coupe = Math.max(0, (pret - debut) / 1000 - 3.5);
  writeFileSync("videos-source/repatek-reservation.debut", String(coupe));
  writeFileSync("videos-source/repatek-reservation.duree", String((fin - debut) / 1000 + 0.5 - coupe));
  console.log("repatek-reservation.webm");
}
await navigateur.close();
