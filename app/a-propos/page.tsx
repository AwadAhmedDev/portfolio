import type { Metadata } from "next";
import { metaPage } from "@/lib/seo";
import Link from "next/link";
import { aPropos } from "@/content/pages";
import { projetParSlug } from "@/content/projets";
import { LiensCV } from "@/components/ui/LiensCV";
import { Picture } from "@/components/Picture";
import { IconeCoche } from "@/components/ui/icones";
import { bouton, puce } from "@/components/ui/styles";
import { remplir } from "@/lib/stats";

export const metadata: Metadata = metaPage(aPropos.titrePage, aPropos.description, "/a-propos/");

// À propos (contenus.md §4, refonte du 26/11/2026) : qui je suis, ce que je garantis, pour qui, compétences, parcours.
// Point de la frise, centré sur la ligne verticale.
const point =
  "absolute -left-[35px] top-1 size-3 rounded-full border-2 border-background bg-primary ring-2 ring-primary/30";
const titreSection = "text-[clamp(30px,4vw,40px)]";

export default function APropos() {
  const a = aPropos;
  return (
    <>
      <section aria-labelledby="titre-apropos" className="conteneur py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[720px]">
            <p className="mono text-[14px] text-muted-foreground">{a.surtitre}</p>
            <h1
              id="titre-apropos"
              className="mt-4 text-[clamp(34px,5vw,54px)] leading-[1.1] tracking-[-0.03em] text-balance"
            >
              {a.titre}
            </h1>
            <div className="mt-6 flex flex-col gap-4 text-[clamp(17px,2vw,19px)] leading-[1.6]">
              {a.presentation.map((p, i) => (
                <p key={p} className={i === 0 ? undefined : "text-muted-foreground"}>
                  {remplir(p)}
                </p>
              ))}
            </div>
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

      <section aria-labelledby="titre-garanties" className="revele bg-muted py-16">
        <div className="conteneur">
          <h2 id="titre-garanties" className={titreSection}>
            {a.garantiesTitre}
          </h2>
          <p className="mt-3 text-[17px] text-muted-foreground">{a.garantiesSousTitre}</p>
          <ul className="mt-10 grid gap-4 wide:grid-cols-3">
            {a.garanties.map((g) => (
              <li
                key={g.titre}
                className="flex flex-col gap-3 rounded-[16px] border border-border border-t-[3px] border-t-primary bg-background p-6"
              >
                <h3 className="text-[20px]">{g.titre}</h3>
                <p className="text-muted-foreground">{g.texte}</p>
                <p className="mono mt-auto border-t border-border pt-3 text-[12px] text-muted-foreground">
                  {remplir(g.preuve)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titre-aide" className="revele conteneur py-16">
        <h2 id="titre-aide" className={titreSection}>
          {a.aideTitre}
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {a.aide.map((x, i) => (
            <li key={x.pour} className="flex flex-col rounded-[16px] border border-border bg-background p-6">
              <p className="mono text-[13px] font-semibold text-primary">
                {String(i + 1).padStart(2, "0")} · {x.contrat}
              </p>
              <h3 className="mt-2 text-[22px]">{x.pour}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {x.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-0.5 text-primary">
                      <IconeCoche />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href={x.lien} className={`${i === 0 ? bouton.secondaire : bouton.principal} mt-6 self-start`}>
                {x.bouton}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titre-competences" className="revele bg-muted py-16">
        <div className="conteneur">
          <h2 id="titre-competences" className={titreSection}>
            {a.competencesTitre}
          </h2>
          <p className="mt-3 text-muted-foreground">{a.competencesNote}</p>
          <dl className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2 wide:grid-cols-3">
            {a.competences.map((g) => (
              <div key={g.titre}>
                <dt className="text-[18px] font-semibold">{g.titre}</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {g.liste.map((t) => (
                      <li key={t} className={`${puce} bg-background`}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-[720px] text-[15px] text-muted-foreground">{a.ia}</p>
        </div>
      </section>

      <section aria-labelledby="titre-parcours" className="revele conteneur py-16">
        <h2 id="titre-parcours" className={titreSection}>
          {a.parcoursTitre}
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

      <section aria-label="Contact" className="border-t border-border py-12">
        <div className="conteneur flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[clamp(22px,3vw,28px)] font-bold tracking-tight">{a.rappel}</p>
          <Link href="/contact/" className={bouton.principal}>
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
