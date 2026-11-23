import type { Metadata } from "next";
import Link from "next/link";
import { pageProjets } from "@/content/pages";
import { projets } from "@/content/projets";
import { ProjectCard } from "@/components/projet/ProjectCard";
import { bouton } from "@/components/ui/styles";

export const metadata: Metadata = {
  title: pageProjets.titrePage,
  description: pageProjets.description,
  alternates: { canonical: "/projets/" },
};

// Les 6 projets dans l'ordre A2, sans filtres (sitemap.md §3.2).
export default function Projets() {
  return (
    <>
      <section aria-labelledby="titre-projets" className="conteneur py-16">
        <h1 id="titre-projets" className="text-[clamp(44px,7vw,72px)] leading-none">
          {pageProjets.titre}
        </h1>
        <p className="mt-5 max-w-[760px] text-[clamp(17px,2vw,20px)] leading-[1.55]">{pageProjets.intro}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 wide:grid-cols-3">
          {projets.map((p) => (
            <ProjectCard key={p.slug} projet={p} niveau="h2" />
          ))}
        </div>
      </section>
      <section aria-label="Contact" className="border-t border-border py-12">
        <div className="conteneur flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[clamp(22px,3vw,28px)] font-bold tracking-tight">{pageProjets.bas}</p>
          <Link href="/contact/" className={bouton.principal}>
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
