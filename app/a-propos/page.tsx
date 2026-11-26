import type { Metadata } from "next";
import { metaPage } from "@/lib/seo";
import Link from "next/link";
import { aPropos } from "@/content/pages";
import { projetParSlug } from "@/content/projets";
import { LiensCV } from "@/components/ui/LiensCV";
import { Picture } from "@/components/Picture";
import { bouton, puce } from "@/components/ui/styles";

export const metadata: Metadata = metaPage(aPropos.titrePage, aPropos.description, "/a-propos/");

// À propos (contenus.md §4) : bouton principal « Voir mes projets » (C15).
// Point de la frise, centré sur la ligne verticale.
const point =
  "absolute -left-[35px] top-1 size-3 rounded-full border-2 border-background bg-primary ring-2 ring-primary/30";

export default function APropos() {
  const a = aPropos;
  return (
    <>
      <section aria-labelledby="titre-apropos" className="conteneur py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[720px]">
            <h1 id="titre-apropos" className="text-[clamp(44px,7vw,72px)] leading-none">
              {a.titre}
            </h1>
            <p className="mt-5 text-[clamp(17px,2vw,20px)] leading-[1.55]">{a.presentation}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projets/" className={bouton.principal}>
                Voir mes projets
              </Link>
              <Link href="/contact/" className={bouton.secondaire}>
                Me contacter
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[200px] md:max-w-[320px]">
            <Picture
              nom="awad-ahmed"
              ratio="1:1"
              sizes="(min-width: 768px) 320px, 200px"
              prioritaire
              provisoire={{ libelle: "Photo provisoire", alt: "Portrait d'Awad Ahmed" }}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-competences" className="revele bg-muted py-16">
        <div className="conteneur">
          <h2 id="titre-competences" className="text-[clamp(30px,4vw,40px)]">
            Compétences
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            {a.competences.map((g) => (
              <div key={g.titre}>
                <h3 className="text-[22px]">{g.titre}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.liste.map((t) => (
                    <li key={t} className={`${puce} bg-background`}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">{a.competencesNote}</p>
        </div>
      </section>

      <section aria-labelledby="titre-facon" className="revele conteneur py-16">
        <h2 id="titre-facon" className="text-[clamp(30px,4vw,40px)]">
          Ma façon de travailler
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {a.facon.map((f) => (
            <li
              key={f.titre}
              className="rounded-[10px] border border-border border-t-[3px] border-t-primary bg-background p-5"
            >
              <h3 className="text-[22px]">{f.titre}</h3>
              <p className="mt-2 text-muted-foreground first-letter:uppercase">{f.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titre-parcours" className="revele conteneur pb-16">
        <h2 id="titre-parcours" className="text-[clamp(30px,4vw,40px)]">
          Parcours
        </h2>
        {/* Frise chronologique : la formation, puis les projets datés (premier commit, A5). */}
        <ol className="relative mt-8 flex flex-col gap-7 border-l-2 border-border pl-7">
          <li className="relative">
            <span aria-hidden="true" className={point} />
            <p className="mono text-[13px] text-muted-foreground">{a.formation.dates}</p>
            <p className="mt-1 font-semibold">{a.formation.titre}</p>
          </li>
          {a.parcours.map((etape) => (
            <li key={etape.date} className="relative">
              <span aria-hidden="true" className={point} />
              <p className="mono text-[13px] text-muted-foreground">{etape.date}</p>
              <p className="mt-1">
                {etape.projets.map((x, i) => {
                  const p = projetParSlug(x.slug);
                  if (!p) throw new Error(`Projet inconnu dans le parcours : ${x.slug}`);
                  return (
                    <span key={x.slug}>
                      {i > 0 && " et "}
                      <Link
                        href={`/projets/${p.slug}/`}
                        className="font-medium text-primary underline underline-offset-4"
                      >
                        {p.nom}
                      </Link>{" "}
                      ({x.note})
                    </span>
                  );
                })}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <LiensCV texte={a.cvTexte} />
        </div>
      </section>
    </>
  );
}
