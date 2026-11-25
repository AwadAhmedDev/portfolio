import type { Metadata } from "next";
import { metaPage } from "@/lib/seo";
import { aPropos, contact } from "@/content/pages";
import { liens } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { LiensCV } from "@/components/ui/LiensCV";
import { IconeGitHub, IconeLinkedIn } from "@/components/ui/icones";
import { bouton } from "@/components/ui/styles";

export const metadata: Metadata = metaPage(contact.titrePage, contact.description, "/contact/");

// Contact (contenus.md §5) : informations utiles à gauche, formulaire dans une carte à droite.
// Le seul composant client de la page est le formulaire.
export default function Contact() {
  return (
    <section aria-labelledby="titre-contact" className="conteneur py-16">
      <div className="grid gap-12 wide:grid-cols-[5fr_7fr] wide:gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <h1 id="titre-contact" className="text-[clamp(40px,6vw,64px)] leading-none">
              {contact.titre}
            </h1>
            <p className="mt-5 text-[clamp(17px,2vw,20px)] leading-[1.55] text-muted-foreground">{contact.intro}</p>
          </div>

          <dl className="grid gap-3 sm:grid-cols-3 wide:grid-cols-1">
            {contact.reperes.map((r) => (
              <div key={r.titre} className="rounded-[10px] border border-border bg-muted px-4 py-3">
                <dt className="mono text-[12px] uppercase tracking-[0.08em] text-muted-foreground">{r.titre}</dt>
                <dd className="mt-1 font-medium">{r.texte}</dd>
              </div>
            ))}
          </dl>

          <div>
            <h2 className="text-[20px]">{contact.etapes.titre}</h2>
            <ol className="mt-4 flex flex-col gap-3">
              {contact.etapes.liste.map((e, i) => (
                <li key={e} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mono flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-[13px] font-semibold text-secondary-foreground"
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{e}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">{contact.moyens}</p>
            <div className="flex flex-wrap gap-3">
              <a href={liens.linkedin} className={bouton.secondaire}>
                <IconeLinkedIn />
                LinkedIn
              </a>
              <a href={liens.github} className={bouton.secondaire}>
                <IconeGitHub />
                GitHub
              </a>
            </div>
            <LiensCV texte={aPropos.cvTexte} />
          </div>
        </div>

        <div className="rounded-[16px] border border-border bg-background p-6 shadow-[0_24px_48px_-32px_rgb(15_23_42/0.45)] md:p-8">
          <h2 className="text-[22px]">{contact.formulaireTitre}</h2>
          <div className="mt-6">
            <noscript>
              <p className="rounded-[10px] bg-muted p-4">
                {contact.sansJs.replace("LinkedIn.", "")}
                <a href={liens.linkedin} className="underline underline-offset-4">
                  LinkedIn
                </a>
                .
              </p>
            </noscript>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
