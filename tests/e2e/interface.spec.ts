// En-tête, menu mobile, thème et clavier (EF-1, EF-9, design.md §4.1).
import { expect, test } from "@playwright/test";

test("le premier arrêt au clavier est « Aller au contenu »", async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "Safari ne s'arrête pas sur les liens avec Tab par défaut");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toHaveText("Aller au contenu");
});

test("thème : suit le système au premier passage, sans flash", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.addInitScript(() => {
    document.addEventListener("DOMContentLoaded", () => {
      (window as unknown as { sombreAuChargement: boolean }).sombreAuChargement =
        document.documentElement.classList.contains("dark");
    });
  });
  await page.goto("/");
  expect(await page.evaluate(() => (window as unknown as { sombreAuChargement: boolean }).sombreAuChargement)).toBe(
    true,
  );
});

test("thème : le choix est gardé d'une page à l'autre", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await page.getByRole("button", { name: "Passer en mode sombre" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.goto("/a-propos/");
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(page.getByRole("button", { name: "Passer en mode clair" })).toBeVisible();
});

test("navigation : « Accueil » n'est la page en cours que sur l'accueil", async ({ page }) => {
  const menu = page.getByRole("navigation", { name: "Navigation principale" });
  const enCours = menu.locator('[aria-current="page"]');
  for (const [chemin, lien] of [
    ["/", "Accueil"],
    ["/projets/", "Projets"],
    ["/projets/repatek/", "Projets"],
    ["/a-propos/", "À propos"],
    ["/contact/", "Contact"],
  ]) {
    await page.goto(chemin);
    await expect(enCours).toHaveCount(1);
    await expect(enCours).toHaveText(lien);
  }
});

test.describe("menu mobile", () => {
  test.use({ viewport: { width: 360, height: 780 } });

  test("s'ouvre, se ferme avec Échap et rend le focus au bouton", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Ouvrir le menu" }).click();
    await expect(page.getByRole("button", { name: "Fermer le menu" })).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#menu-mobile")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#menu-mobile")).toBeHidden();
    await expect(page.getByRole("button", { name: "Ouvrir le menu" })).toBeFocused();
  });

  test("se ferme par un clic en dehors et après un clic sur un lien", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Ouvrir le menu" }).click();
    await page.locator("h1").dispatchEvent("pointerdown"); // clic en dehors du menu, même sous le panneau ouvert
    await expect(page.locator("#menu-mobile")).toBeHidden();
    await page.getByRole("button", { name: "Ouvrir le menu" }).click();
    await page.locator("#menu-mobile").getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact\/$/);
    await expect(page.locator("#menu-mobile")).toBeHidden();
  });

  test("aucun défilement horizontal à 360 px", async ({ page }) => {
    for (const chemin of ["/", "/projets/", "/projets/repatek/", "/a-propos/", "/contact/", "/mentions-legales/"]) {
      await page.goto(chemin);
      const deborde = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(deborde, chemin).toBe(false);
    }
  });
});
