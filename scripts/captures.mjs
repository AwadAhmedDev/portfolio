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
// Navigateur en français : les champs de date affichent jj/mm/aaaa, comme pour un visiteur en France.
const navigateur = await chromium.launch({ args: ["--lang=fr-FR"] });
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

// I Make My World (27/11/2026) : catalogue filtré par catégorie, fiche d'un projet, annuaire des experts filtré.
// Données de démonstration du site (projets et experts fictifs) ; le robot ne remplit ni n'envoie aucun formulaire.
const IMMW = "https://teal-starling-640860.hostingersite.com";
async function refuserCookies(page) {
  await page
    .getByRole("button", { name: /tout refuser/i })
    .first()
    .click({ timeout: 5000 })
    .catch(() => {});
}
async function parcoursImakemyworld(page, capture) {
  await page.goto(`${IMMW}/projets`, { waitUntil: "load", timeout: 90_000 });
  await refuserCookies(page);
  await page
    .getByRole("link", { name: /voir le projet/i })
    .first()
    .waitFor({ timeout: 60_000 });
  await page.waitForTimeout(1200);
  // 1. Catalogue filtré : catégorie « Transport ».
  await page.getByRole("combobox").first().selectOption({ label: "Transport" });
  await page.waitForTimeout(1500);
  await capture("i-make-my-world-etape-catalogue");
  // 2. Fiche du premier projet affiché.
  await page
    .getByRole("link", { name: /voir le projet/i })
    .first()
    .click();
  await page.getByRole("heading", { level: 1 }).waitFor({ timeout: 30_000 });
  await page.waitForTimeout(1500);
  await capture("i-make-my-world-etape-projet");
  // 3. Annuaire des experts, filtré par domaine.
  await page.goto(`${IMMW}/expertises`, { waitUntil: "load", timeout: 90_000 });
  await refuserCookies(page);
  await page
    .getByText(/experts? trouvés?/i)
    .first()
    .waitFor({ timeout: 60_000 });
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Intelligence Artificielle", exact: true }).click();
  await page.waitForTimeout(1500);
  await capture("i-make-my-world-etape-experts");
}

// Plateforme éditoriale (27/11/2026) : page d'un pays avec ses filtres, recherche plein texte, puis un article.
// Seule action : taper un mot dans la recherche ; aucun formulaire (contact, newsletter) n'est rempli ni envoyé.
const PLATEFORME = "https://snowy-floralwhite-giraffe-20.hostingersite.com";
async function parcoursPlateforme(page, capture) {
  // 1. Page d'un pays : articles de la zone et filtres par rubrique, type et date.
  await page.goto(`${PLATEFORME}/zone/ethiopie`, { waitUntil: "load", timeout: 90_000 });
  await refuserCookies(page);
  await page.getByRole("heading", { level: 1 }).waitFor({ timeout: 60_000 });
  await page.waitForTimeout(1200);
  await capture("plateforme-editoriale-etape-pays");
  // 2. Recherche plein texte.
  await page.goto(`${PLATEFORME}/recherche`, { waitUntil: "load", timeout: 90_000 });
  const champ = page.getByPlaceholder(/rechercher un sujet/i);
  await champ.waitFor({ timeout: 60_000 });
  await champ.pressSequentially("déplacés", { delay: 90 });
  await champ.press("Enter");
  await page.waitForLoadState("load");
  await page.waitForTimeout(2000);
  await capture("plateforme-editoriale-etape-recherche");
  // 3. Premier article trouvé.
  await page.locator('main a[href^="/articles/"]').first().click();
  await page.getByRole("heading", { level: 1 }).waitFor({ timeout: 60_000 });
  await page.waitForTimeout(1500);
  await capture("plateforme-editoriale-etape-article");
}

// eMatériel (27/11/2026) : catalogue, fiche produit après ajout au panier, puis le panier.
// Le panier est gardé dans le navigateur du robot (localStorage) : aucune commande, aucun paiement ;
// le robot ne clique jamais le bouton de paiement.
const EMATERIEL = "https://darkseagreen-sandpiper-710943.hostingersite.com";
async function parcoursEmateriel(page, capture) {
  // 1. Catalogue (le site Node.js peut mettre du temps à se réveiller).
  await page.goto(`${EMATERIEL}/products`, { waitUntil: "load", timeout: 120_000 });
  await refuserCookies(page);
  await page.locator('a[href^="/products/"]').first().waitFor({ timeout: 90_000 });
  await page.waitForTimeout(1500);
  await capture("emateriel-etape-catalogue");
  // 2. Fiche du premier produit, puis ajout au panier.
  await page.locator('a[href^="/products/"]').first().click();
  const ajouter = page.getByRole("button", { name: /ajouter au panier/i });
  await ajouter.waitFor({ timeout: 60_000 });
  await page.waitForTimeout(1000);
  await ajouter.click();
  await page.waitForTimeout(1500);
  await capture("emateriel-etape-produit");
  // 3. Le panier, sans aller plus loin.
  await page.goto(`${EMATERIEL}/panier`, { waitUntil: "load", timeout: 90_000 });
  await page.getByRole("heading", { level: 1 }).waitFor({ timeout: 60_000 });
  await page.waitForTimeout(1500);
  await capture("emateriel-etape-panier");
}

// Pour chaque parcours : captures fixes, puis la même suite filmée (pauses plus longues pour que la vidéo se suive bien).
// La vidéo est coupée au début (chargement) et à la fin (attente) par le workflow, grâce aux fichiers .debut et .duree.
const PARCOURS = {
  "repatek-reservation": reservationRepatek,
  "i-make-my-world-parcours": parcoursImakemyworld,
  "plateforme-editoriale-parcours": parcoursPlateforme,
  "emateriel-parcours": parcoursEmateriel,
};
const { renameSync, writeFileSync } = await import("node:fs");
for (const [video, parcours] of Object.entries(PARCOURS)) {
  {
    const contexte = await navigateur.newContext({ ...ecran, reducedMotion: "reduce" });
    const page = await contexte.newPage();
    await parcours(page, (nom) =>
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
    await parcours(page, async () => {
      if (!pret) pret = Date.now();
      await page.waitForTimeout(1500);
    });
    const fin = Date.now(); // dernier écran à l'écran depuis 1,5 s
    await page.waitForTimeout(1500);
    const enregistrement = page.video();
    await contexte.close();
    renameSync(await enregistrement.path(), `videos-source/${video}.webm`);
    const coupe = Math.max(0, (pret - debut) / 1000 - 3.5);
    writeFileSync(`videos-source/${video}.debut`, String(coupe));
    writeFileSync(`videos-source/${video}.duree`, String((fin - debut) / 1000 + 0.5 - coupe));
    console.log(`${video}.webm`);
  }
}
await navigateur.close();
