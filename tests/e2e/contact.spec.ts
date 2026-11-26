// Formulaire de contact : les états de design.md §5.3, avec un envoi simulé (aucun e-mail réel).
import { expect, test, type Page } from "@playwright/test";
import { contact } from "../../content/pages";

const m = contact.messages;
const MESSAGE = "Bonjour, je souhaite échanger sur un poste.";

// Attend que React ait pris la main sur le formulaire : avant, la saisie et l'envoi sont perdus
// (cause des échecs au hasard sous WebKit, plus lent à charger).
async function ouvrir(page: Page, adresse = "/contact/") {
  await page.goto(adresse);
  await page.waitForFunction(() => {
    const form = document.querySelector("form");
    return !!form && Object.keys(form).some((k) => k.startsWith("__reactProps"));
  });
}

async function remplir(page: Page) {
  await page.getByLabel(/Votre nom/).fill("Camille");
  await page.getByLabel(/Votre adresse e-mail/).fill("camille@example.org");
  await page.getByLabel(/Votre message/).fill(MESSAGE);
  await page.getByRole("checkbox").check();
}

async function simuler(page: Page, statut: number, corps: object) {
  await page.route("**/contact.php", (r) =>
    r.fulfill({ status: statut, contentType: "application/json", body: JSON.stringify(corps) }),
  );
}

const envoyer = (page: Page) => page.getByRole("button", { name: "Envoyer le message" }).click();

test("envoi vide : erreurs sous les champs et focus sur le premier", async ({ page }) => {
  await ouvrir(page);
  await envoyer(page);
  await expect(page.locator("#nom-erreur")).toContainText(m.vide);
  await expect(page.locator("#accord-erreur")).toContainText(m.accord);
  await expect(page.getByLabel(/Votre nom/)).toBeFocused();
  await expect(page.getByLabel(/Votre nom/)).toHaveAttribute("aria-invalid", "true");
});

test("l'erreur d'un champ disparaît dès qu'il redevient valide (RM3)", async ({ page }) => {
  await ouvrir(page);
  await envoyer(page);
  await page.getByLabel(/Votre nom/).fill("Camille");
  await expect(page.locator("#nom-erreur")).toHaveCount(0);
  await expect(page.locator("#email-erreur")).toBeVisible();
});

test("envoi réussi : confirmation et formulaire vidé", async ({ page }) => {
  await simuler(page, 200, { ok: true });
  await ouvrir(page);
  await remplir(page);
  await envoyer(page);
  await expect(page.locator("form").getByRole("status")).toHaveText(m.succes);
  await expect(page.getByLabel(/Votre nom/)).toHaveValue("");
});

test("trop de demandes : alerte et saisie conservée", async ({ page }) => {
  await simuler(page, 429, { erreur: "trop" });
  await ouvrir(page);
  await remplir(page);
  await envoyer(page);
  await expect(page.locator("form").getByRole("alert")).toHaveText(m.tropDeDemandes);
  await expect(page.getByLabel(/Votre nom/)).toHaveValue("Camille");
});

test("envoi impossible : alerte avec lien LinkedIn et saisie conservée", async ({ page }) => {
  await simuler(page, 502, { erreur: "envoi" });
  await ouvrir(page);
  await remplir(page);
  await envoyer(page);
  await expect(page.locator("form").getByRole("alert").getByRole("link", { name: "LinkedIn" })).toBeVisible();
  await expect(page.getByLabel(/Votre message/)).toHaveValue(MESSAGE);
});

test("?demande=freelance choisit « Projet freelance »", async ({ page }) => {
  await ouvrir(page, "/contact/?demande=freelance");
  await expect(page.getByRole("radio", { name: "Projet freelance" })).toBeChecked();
});
