import type { Metadata } from "next";
import Link from "next/link";
import { aPropos } from "@/content/pages";
import { projetParSlug } from "@/content/projets";
import { LiensCV } from "@/components/ui/LiensCV";
import { Provisoire } from "@/components/ui/Provisoire";
import { bouton, puce } from "@/components/ui/styles";

export const metadata: Metadata = {
  title: aPropos.titrePage,
  description: aPropos.description,
  alternates: { canonical: "/a-propos/" },
};

// À propos (contenus.md §4) : bouton principal « Voir mes projets » (C15).
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
            <Provisoire libelle="Photo provisoire" ratio="4:5" alt="Portrait d'Awad Ahmed" />
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-competences" className="bg-muted py-16">
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

      <section aria-labelledby="titre-facon" className="conteneur py-16">
        <h2 id="titre-facon" className="text-[clamp(30px,4vw,40px)]">
          Ma façon de travailler
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {a.facon.map((f) => (
            <li key={f.titre} className="rounded-[10px] border border-border p-5">
              <h3 className="text-[22px]">{f.titre}</h3>
              <p className="mt-2">{f.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titre-parcours" className="conteneur pb-16">
        <h2 id="titre-parcours" className="text-[clamp(30px,4vw,40px)]">
          Parcours
        </h2>
        <p className="mt-6 font-semibold">
          {a.formation.titre} <span className="mono font-normal text-muted-foreground">· {a.formation.dates}</span>
        </p>
        <h3 className="mt-8 text-[22px]">Projets</h3>
        <ol className="mt-4 flex flex-col gap-3">
          {a.parcours.map((etape) => (
            <li key={etape.date} className="grid gap-1 sm:grid-cols-[160px_1fr]">
              <span className="mono text-[14px] text-muted-foreground">{etape.date}</span>
              <span>
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
              </span>
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
