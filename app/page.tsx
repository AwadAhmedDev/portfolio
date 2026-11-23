import Link from "next/link";
import { accueil } from "@/content/pages";
import { projets } from "@/content/projets";
import { ProjectCard } from "@/components/projet/ProjectCard";
import { Provisoire } from "@/components/ui/Provisoire";
import { IconeCoche } from "@/components/ui/icones";
import { bouton, lienTexte, puce } from "@/components/ui/styles";
import { detailTests, nbProjetsEnLigne, nbSites100Ordinateur, totalTestsDistincts } from "@/lib/stats";

// Accueil (contenus.md §1, design.md §5.1).
export default function Accueil() {
  const clients = projets.filter((p) => p.badge === "Projet client");
  const a = accueil;
  return (
    <>
      <section aria-labelledby="titre-accueil" className="conteneur py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[720px]">
            <p className="mono text-[14px] text-muted-foreground">{a.petitTitre}</p>
            <h1 id="titre-accueil" className="mt-3 text-[clamp(48px,8vw,84px)] leading-none">
              {a.titre}
            </h1>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies principales">
              {a.technologies.map((t) => (
                <li key={t} className={puce}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[clamp(17px,2vw,20px)] leading-[1.55]">{a.presentation}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 text-muted-foreground">
              <span>{a.lieu}</span>
              <span aria-hidden="true" className="inline-block size-2 rounded-full bg-primary" />
              <span>{a.disponibilite}</span>
            </p>
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

      <section aria-labelledby="titre-projets" className="bg-muted py-16">
        <div className="conteneur">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="titre-projets" className="text-[clamp(30px,4vw,40px)]">
                {a.projets.titre}
              </h2>
              <p className="mt-3 text-muted-foreground">{a.projets.sousTitre}</p>
            </div>
            <Link href="/projets/" className={lienTexte}>
              {a.projets.lien}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 wide:grid-cols-3">
            {clients.map((p) => (
              <ProjectCard key={p.slug} projet={p} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-chiffres" className="conteneur py-16">
        <h2 id="titre-chiffres" className="sr-only">
          {a.chiffres.titre}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 wide:grid-cols-4">
          <Chiffre valeur={`${projets.length} projets`} libelle={`présentés, dont ${nbProjetsEnLigne()} en ligne`} />
          <Chiffre
            valeur={`${totalTestsDistincts()} tests`}
            libelle="automatisés au total"
            detail={detailTests().join(" + ")}
          />
          <Chiffre valeur="Intégration continue" libelle={`sur les ${projets.length} projets`} detail="GitHub Actions" />
          <Chiffre
            valeur="100 / 100"
            libelle={`sur les 4 scores Lighthouse pour ${nbSites100Ordinateur()} sites, sur ordinateur`}
          />
        </ul>
        <p className="mt-4 text-[14px] italic text-muted-foreground">{a.chiffres.note}</p>
      </section>

      <section aria-labelledby="titre-freelance" className="conteneur pb-16">
        <div className="grid gap-8 rounded-[16px] bg-muted p-8 wide:grid-cols-3">
          <div>
            <h2 id="titre-freelance" className="text-[clamp(30px,4vw,40px)]">
              {a.freelance.titre}
            </h2>
            <p className="mt-4">{a.freelance.texte}</p>
            <Link href="/contact/?demande=freelance" className={`${bouton.principal} mt-6`}>
              {a.freelance.bouton}
            </Link>
          </div>
          <div>
            <h3 className="text-[22px]">{a.freelance.realisationsTitre}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {a.freelance.realisations.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary">
                    <IconeCoche />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[22px]">{a.freelance.etapesTitre}</h3>
            <ol className="mt-4 flex flex-col gap-4">
              {a.freelance.etapes.map((e, i) => (
                <li key={e.titre} className="flex gap-3">
                  <span className="mono font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{e.titre}</strong> — {e.texte}
                  </span>
                </li>
              ))}
            </ol>
          </div>
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

function Chiffre({ valeur, libelle, detail }: { valeur: string; libelle: string; detail?: string }) {
  return (
    <li className="rounded-[10px] border border-border p-5">
      <p className="mono text-[clamp(26px,3vw,36px)] font-semibold leading-tight">{valeur}</p>
      <p className="mt-2 text-muted-foreground">{libelle}</p>
      {detail && <p className="mono mt-1 text-[13px] text-muted-foreground">{detail}</p>}
    </li>
  );
}
