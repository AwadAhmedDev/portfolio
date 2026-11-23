"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { contact } from "@/content/pages";
import { liens } from "@/content/site";
import { bouton } from "@/components/ui/styles";
import { DEMANDES, retirerErreurCorrigee, valider, type Champ, type Erreurs, type Saisie } from "@/lib/validation";

type Etat = "normal" | "envoi" | "succes" | "trop" | "echec";
const VIDE: Saisie = { nom: "", email: "", demande: "", message: "", accord: false };
const ORDRE: Champ[] = ["nom", "email", "demande", "message", "accord"];
const c = contact.champs;
const m = contact.messages;

const champ =
  "mt-2 w-full rounded-[10px] border border-input bg-background px-3 text-foreground aria-[invalid=true]:border-2 aria-[invalid=true]:border-destructive read-only:opacity-100";

// « Parlons de votre projet » mène ici avec ?demande=freelance (P4). Lu dans l'adresse, jamais au build.
const sansAbonnement = () => () => {};
const vientDuBlocFreelance = () => new URLSearchParams(location.search).get("demande") === "freelance";
const auBuild = () => false;
// Durée de remplissage, lue seulement au moment de l'envoi (dans le gestionnaire, jamais au rendu).
const depuis = (debut: number) => Date.now() - debut;

function Erreur({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-2 text-[14px] text-destructive">
      <span aria-hidden="true">!</span>
      {message}
    </p>
  );
}

// Formulaire de contact : 6 états (design.md §5.3), envoi en JSON vers /contact.php (architecture.md §6.1).
export function ContactForm() {
  const [champs, setChamps] = useState<Saisie>(VIDE);
  const [demandeChoisie, setDemandeChoisie] = useState<string | null>(null);
  const [erreurs, setErreurs] = useState<Erreurs>({});
  const [etat, setEtat] = useState<Etat>("normal");
  const ouverture = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const freelance = useSyncExternalStore(sansAbonnement, vientDuBlocFreelance, auBuild);
  const saisie: Saisie = { ...champs, demande: demandeChoisie ?? (freelance ? "Projet freelance" : "") };

  useEffect(() => {
    ouverture.current = Date.now(); // temps minimum de remplissage contrôlé par le serveur
  }, []);

  const envoiEnCours = etat === "envoi";
  const corriger = (k: Champ, suite: Saisie) => setErreurs((e) => retirerErreurCorrigee(e, k, suite));
  const maj = (k: Exclude<Champ, "demande">, v: string | boolean) => {
    setChamps((s) => ({ ...s, [k]: v }));
    corriger(k, { ...saisie, [k]: v });
  };
  const choisirDemande = (d: string) => {
    setDemandeChoisie(d);
    corriger("demande", { ...saisie, demande: d });
  };

  async function envoyer(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = valider(saisie);
    setErreurs(e);
    const premier = ORDRE.find((k) => e[k]);
    if (premier) {
      formRef.current?.querySelector<HTMLElement>(`[name="${premier}"]`)?.focus();
      return;
    }
    setEtat("envoi");
    const piege = (formRef.current?.elements.namedItem("site_web") as HTMLInputElement | null)?.value ?? "";
    try {
      const rep = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...saisie, site_web: piege, duree: depuis(ouverture.current) }),
      });
      if (rep.ok) {
        setChamps(VIDE);
        setDemandeChoisie(null);
        setEtat("succes");
      } else if (rep.status === 429) setEtat("trop");
      else if (rep.status === 422) {
        const corps = (await rep.json().catch(() => ({}))) as { champs?: Champ[] };
        const serveur: Erreurs = {};
        for (const k of corps.champs ?? [])
          serveur[k] = k === "email" ? m.emailInvalide : k === "accord" ? m.accord : m.vide;
        setErreurs(serveur);
        setEtat("normal");
      } else setEtat("echec");
    } catch {
      setEtat("echec");
    }
  }

  const aide = (k: Champ, texteAide?: string) => {
    const ids = [texteAide && `${k}-aide`, erreurs[k] && `${k}-erreur`].filter(Boolean).join(" ");
    return ids || undefined;
  };

  return (
    <form ref={formRef} onSubmit={envoyer} noValidate aria-busy={envoiEnCours} className="flex flex-col gap-6">
      {etat === "succes" && (
        <p role="status" className="rounded-[10px] bg-ok-bg p-4 font-medium text-ok-fg">
          {m.succes}
        </p>
      )}
      {etat === "trop" && (
        <p role="alert" className="rounded-[10px] bg-error-bg p-4 font-medium text-error-fg">
          {m.tropDeDemandes}
        </p>
      )}
      {etat === "echec" && (
        <p role="alert" className="rounded-[10px] bg-error-bg p-4 font-medium text-error-fg">
          {m.echec.replace("LinkedIn.", "")}
          <a href={liens.linkedin} className="underline underline-offset-4">
            LinkedIn
          </a>
          .
        </p>
      )}

      <div>
        <label htmlFor="nom" className="font-semibold">
          {c.nom} {c.obligatoire}
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          autoComplete="name"
          maxLength={100}
          value={saisie.nom}
          onChange={(e) => maj("nom", e.target.value)}
          readOnly={envoiEnCours}
          aria-invalid={!!erreurs.nom}
          aria-describedby={aide("nom")}
          className={`${champ} h-12`}
        />
        <Erreur id="nom-erreur" message={erreurs.nom} />
      </div>

      <div>
        <label htmlFor="email" className="font-semibold">
          {c.email} {c.obligatoire}
        </label>
        <p id="email-aide" className="text-[14px] text-muted-foreground">
          {c.emailAide}
        </p>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          value={saisie.email}
          onChange={(e) => maj("email", e.target.value)}
          readOnly={envoiEnCours}
          aria-invalid={!!erreurs.email}
          aria-describedby={aide("email", c.emailAide)}
          className={`${champ} h-12`}
        />
        <Erreur id="email-erreur" message={erreurs.email} />
      </div>

      <fieldset aria-describedby={erreurs.demande ? "demande-erreur" : undefined}>
        <legend className="font-semibold">{c.demande}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {DEMANDES.map((d) => (
            <label
              key={d}
              className="flex min-h-12 cursor-pointer items-center gap-3 rounded-[10px] border border-input px-3 has-[:checked]:border-2 has-[:checked]:border-primary has-[:checked]:bg-secondary"
            >
              <input
                type="radio"
                name="demande"
                value={d}
                checked={saisie.demande === d}
                onChange={() => choisirDemande(d)}
                disabled={envoiEnCours}
                className="controle rounded-full"
              />
              {d}
            </label>
          ))}
        </div>
        <Erreur id="demande-erreur" message={erreurs.demande} />
      </fieldset>

      <div>
        <label htmlFor="message" className="font-semibold">
          {c.message} {c.obligatoire}
        </label>
        <p id="message-aide" className="text-[14px] text-muted-foreground">
          {c.messageAide}
        </p>
        <textarea
          id="message"
          name="message"
          rows={7}
          value={saisie.message}
          onChange={(e) => maj("message", e.target.value)}
          readOnly={envoiEnCours}
          aria-invalid={!!erreurs.message}
          aria-describedby={aide("message", c.messageAide)}
          className={`${champ} py-3`}
        />
        <Erreur id="message-erreur" message={erreurs.message} />
      </div>

      {/* Champ piège anti-robots : invisible et hors de l'ordre de tabulation (architecture.md §6.1). */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="site_web">Ne pas remplir</label>
        <input id="site_web" name="site_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="accord"
            name="accord"
            type="checkbox"
            checked={saisie.accord}
            onChange={(e) => maj("accord", e.target.checked)}
            disabled={envoiEnCours}
            aria-invalid={!!erreurs.accord}
            aria-describedby={erreurs.accord ? "accord-erreur" : undefined}
            className="controle mt-1 shrink-0 rounded-[4px]"
          />
          <label htmlFor="accord">
            {c.accord} {c.obligatoire}
          </label>
        </div>
        <a
          href="/mentions-legales/"
          className="ml-8 inline-flex min-h-11 items-center text-primary underline underline-offset-4"
        >
          {c.accordLien}
        </a>
        <Erreur id="accord-erreur" message={erreurs.accord} />
      </div>

      <div>
        <button type="submit" className={bouton.principal} disabled={envoiEnCours}>
          {envoiEnCours ? c.envoi : c.envoyer}
        </button>
      </div>
    </form>
  );
}
