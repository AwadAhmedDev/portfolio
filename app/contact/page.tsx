import type { Metadata } from "next";
import { contact } from "@/content/pages";
import { liens } from "@/content/site";
import { aPropos } from "@/content/pages";
import { ContactForm } from "@/components/contact/ContactForm";
import { LiensCV } from "@/components/ui/LiensCV";
import { lienTexte } from "@/components/ui/styles";

export const metadata: Metadata = {
  title: contact.titrePage,
  description: contact.description,
  alternates: { canonical: "/contact/" },
};

// Contact (contenus.md §5) : le seul composant client de la page est le formulaire.
export default function Contact() {
  return (
    <section aria-labelledby="titre-contact" className="conteneur py-16">
      <h1 id="titre-contact" className="text-[clamp(44px,7vw,72px)] leading-none">{contact.titre}</h1>
      <p className="mt-5 max-w-[760px] text-[clamp(17px,2vw,20px)] leading-[1.55]">{contact.intro}</p>
      <p className="mt-3 font-medium">{contact.moyens}</p>
      <div className="mt-10 grid gap-12 wide:grid-cols-[2fr_1fr]">
        <div>
          <noscript>
            <p className="rounded-[10px] bg-muted p-4">
              {contact.sansJs.replace("LinkedIn.", "")}
              <a href={liens.linkedin} className="underline underline-offset-4">LinkedIn</a>.
            </p>
          </noscript>
          <ContactForm />
        </div>
        <aside aria-label="Autres moyens de contact" className="flex flex-col gap-4">
          <ul className="flex flex-col">
            <li><a href={liens.linkedin} className={lienTexte}>LinkedIn</a></li>
            <li><a href={liens.github} className={lienTexte}>GitHub</a></li>
          </ul>
          <LiensCV texte={aPropos.cvTexte} />
        </aside>
      </div>
    </section>
  );
}
