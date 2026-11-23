// Chaque page : aucune erreur de console, aucune violation de CSP, accessibilité (axe, WCAG 2.2 AA).
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { projets } from "../../content/projets";

const PAGES = [
  "/",
  "/projets/",
  ...projets.map((p) => `/projets/${p.slug}/`),
  "/a-propos/",
  "/contact/",
  "/mentions-legales/",
];

type Fenetre = { violationsCsp: string[]; marqueur?: boolean };

test.beforeEach(async ({ page }) => {
  // Les violations de CSP sont relevées par la page elle-même, avant tout autre script.
  await page.addInitScript(() => {
    const w = window as unknown as Fenetre;
    w.violationsCsp = [];
    document.addEventListener("securitypolicyviolation", (e) =>
      w.violationsCsp.push(`${e.violatedDirective} ${e.blockedURI}`),
    );
  });
});

for (const chemin of PAGES) {
  test(`${chemin} : sans erreur ni violation de CSP`, async ({ page }) => {
    const erreurs: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error") erreurs.push(m.text());
    });
    page.on("pageerror", (e) => erreurs.push(e.message));
    const reponse = await page.goto(chemin);
    expect(reponse?.status()).toBe(200);
    await page.waitForLoadState("networkidle");
    expect(await page.evaluate(() => (window as unknown as Fenetre).violationsCsp)).toEqual([]);
    expect(erreurs).toEqual([]);
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test(`${chemin} : accessibilité (axe)`, async ({ page, browserName }) => {
    test.skip(browserName !== "chromium", "axe lancé une fois, dans Chromium");
    await page.goto(chemin);
    for (const theme of ["clair", "sombre"]) {
      await page.evaluate((t) => document.documentElement.classList.toggle("dark", t === "sombre"), theme);
      const r = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(r.violations.map((v) => `${theme} : ${v.id} (${v.nodes.length})`)).toEqual([]);
    }
  });
}

test("adresse inconnue : page 404 avec le code HTTP 404", async ({ page }) => {
  const reponse = await page.goto("/cette-page-nexiste-pas/");
  expect(reponse?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveText("Cette page n'existe pas.");
});

test("navigation entre les pages sans rechargement", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => ((window as unknown as Fenetre).marqueur = true));
  await page.getByRole("link", { name: "Voir les 6 projets" }).click();
  await expect(page).toHaveURL(/\/projets\/$/);
  expect(await page.evaluate(() => (window as unknown as Fenetre).marqueur)).toBe(true);
});
