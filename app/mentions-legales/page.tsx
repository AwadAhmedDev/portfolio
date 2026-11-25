import type { Metadata } from "next";
import Link from "next/link";
import { mentions as t } from "@/content/pages";
import { metaPage } from "@/lib/seo";
import { riche } from "@/lib/texte";

export const metadata: Metadata = metaPage(t.titrePage, t.description, "/mentions-legales/");

const lien = "text-primary underline underline-offset-4";
const titre = "mt-10 text-[22px]";

// Mentions légales (contenus.md §6, décision A11) : textes dans content/pages.ts.
export default function MentionsLegales() {
  return (
    <article aria-labelledby="titre-mentions" className="conteneur py-16">
      <div className="max-w-[760px] text-[17px]">
        <h1 id="titre-mentions" className="text-[clamp(40px,6vw,60px)] leading-none">
          {t.titre}
        </h1>

        <h2 className={titre}>{t.editeur.titre}</h2>
        <p className="mt-3">
          {t.editeur.avant}
          <Link href="/contact/" className={lien}>
            {t.editeur.lien}
          </Link>
          {t.editeur.apres}
        </p>

        <h2 className={titre}>{t.hebergeur.titre}</h2>
        <p className="mt-3">
          {t.hebergeur.avant}
          <a href={t.hebergeur.url} className={lien}>
            {t.hebergeur.lien}
          </a>
          {t.hebergeur.apres}
        </p>

        <h2 className={titre}>{t.donnees.titre}</h2>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
          {t.donnees.elements.map((e) => (
            <li key={e}>{riche(e)}</li>
          ))}
          <li>
            {t.donnees.droits.avant}
            <a href={t.donnees.droits.url} className={lien}>
              {t.donnees.droits.lien}
            </a>
            {t.donnees.droits.apres}
          </li>
        </ul>

        <h2 className={titre}>{t.cookies.titre}</h2>
        <p className="mt-3">{t.cookies.texte}</p>

        <h2 className={titre}>{t.propriete.titre}</h2>
        <p className="mt-3">{t.propriete.texte}</p>
      </div>
    </article>
  );
}
