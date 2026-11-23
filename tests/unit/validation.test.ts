import { describe, expect, it } from "vitest";
import { contact } from "@/content/pages";
import { retirerErreurCorrigee, valider, type Saisie } from "@/lib/validation";

const ok: Saisie = {
  nom: "Camille",
  email: "camille@example.org",
  demande: "",
  message: "Bonjour, je souhaite échanger sur un poste.",
  accord: true,
};
const m = contact.messages;

describe("validation du formulaire (contenus.md §5.2, architecture.md §6.1)", () => {
  it("accepte une saisie valide, avec ou sans type de demande (facultatif, C16)", () => {
    expect(valider(ok)).toEqual({});
    expect(valider({ ...ok, demande: "Projet freelance" })).toEqual({});
  });
  it("champs obligatoires vides", () => {
    expect(valider({ ...ok, nom: "  ", email: "", message: "" })).toEqual({
      nom: m.vide,
      email: m.vide,
      message: m.vide,
    });
  });
  it("e-mail invalide ou trop long", () => {
    expect(valider({ ...ok, email: "camille@" }).email).toBe(m.emailInvalide);
    expect(valider({ ...ok, email: `${"a".repeat(250)}@b.fr` }).email).toBe(m.emailInvalide);
  });
  it("message de 20 à 3 000 caractères, comptés en caractères et non en octets", () => {
    expect(valider({ ...ok, message: "é".repeat(19) }).message).toBe(m.tropCourt);
    expect(valider({ ...ok, message: "é".repeat(20) }).message).toBeUndefined();
    expect(valider({ ...ok, message: "é".repeat(3000) }).message).toBeUndefined();
    expect(valider({ ...ok, message: "é".repeat(3001) }).message).toBe(m.tropLong);
  });
  it("nom de plus de 100 caractères ou avec un caractère de contrôle refusé", () => {
    expect(valider({ ...ok, nom: "a".repeat(101) }).nom).toBeDefined();
    expect(valider({ ...ok, nom: "Ca\u0007mille" }).nom).toBeDefined();
  });
  it("type de demande inconnu refusé", () => {
    expect(valider({ ...ok, demande: "Autre chose" }).demande).toBeDefined();
  });
  it("case d'accord obligatoire", () => {
    expect(valider({ ...ok, accord: false }).accord).toBe(m.accord);
  });
});

describe("erreur retirée dès que le champ redevient valide (roadmap RM3)", () => {
  const erreurs = { message: m.tropCourt, email: m.emailInvalide };
  it("retire seulement l'erreur du champ corrigé", () => {
    expect(retirerErreurCorrigee(erreurs, "message", ok)).toEqual({ email: m.emailInvalide });
  });
  it("garde l'erreur tant que le champ reste invalide", () => {
    expect(retirerErreurCorrigee(erreurs, "message", { ...ok, message: "trop court" })).toBe(erreurs);
  });
  it("n'ajoute aucune erreur pendant la saisie", () => {
    expect(retirerErreurCorrigee({}, "nom", { ...ok, nom: "" })).toEqual({});
  });
});
