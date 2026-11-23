// Règles du formulaire de contact, identiques à celles du script PHP (architecture.md §6.1).
// Côté navigateur, elles servent seulement à afficher les erreurs plus vite : le serveur revérifie tout.
import { contact } from "@/content/pages";

export const DEMANDES = contact.champs.demandes;
export type Champ = "nom" | "email" | "demande" | "message" | "accord";
export type Saisie = { nom: string; email: string; demande: string; message: string; accord: boolean };
export type Erreurs = Partial<Record<Champ, string>>;

const longueur = (s: string) => [...s].length; // compte les caractères, pas les octets (comme mb_strlen)
const CONTROLE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function valider(s: Saisie): Erreurs {
  const m = contact.messages;
  const e: Erreurs = {};
  const nom = s.nom.trim();
  if (!nom) e.nom = m.vide;
  else if (longueur(nom) > 100 || CONTROLE.test(nom)) e.nom = m.vide;

  const email = s.email.trim();
  if (!email) e.email = m.vide;
  else if (longueur(email) > 254 || !EMAIL.test(email)) e.email = m.emailInvalide;

  if (s.demande && !DEMANDES.includes(s.demande)) e.demande = m.vide;

  const message = s.message.trim();
  if (!message) e.message = m.vide;
  else if (longueur(message) < 20) e.message = m.tropCourt;
  else if (longueur(message) > 3000) e.message = m.tropLong;

  if (!s.accord) e.accord = m.accord;
  return e;
}
