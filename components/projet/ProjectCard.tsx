import Link from "next/link";
import type { Projet } from "@/content/projets";
import { Provisoire } from "@/components/ui/Provisoire";
import { badge, bouton, lienTexte, puce } from "@/components/ui/styles";
import { SchemaVignette } from "./SchemaVignette";

// Carte projet (design.md §4) : capture 16:10, badge, début, nom, phrase, 5 technologies au plus, liens.
export function ProjectCard({ projet, niveau = "h3" }: { projet: Projet; niveau?: "h2" | "h3" }) {
  const Titre = niveau;
  return (
    <article className="flex flex-col gap-4 rounded-[10px] border border-border bg-background p-5">
      {projet.schema ? (
        <SchemaVignette />
      ) : (
        <Provisoire
          libelle="Capture provisoire"
          ratio="16:10"
          alt={`Page d'accueil du site ${projet.nom} sur ordinateur`}
        />
      )}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className={badge}>
          {projet.badge}
          {projet.equipe ? ` · ${projet.equipe}` : ""}
        </span>
        <span className="mono text-[13px] text-muted-foreground">Début : {projet.debut}</span>
      </div>
      <Titre className="text-[22px]">{projet.nom}</Titre>
      <p className="text-muted-foreground">{projet.phrase}</p>
      <ul className="flex flex-wrap gap-2" aria-label="Principales technologies">
        {projet.techCarte.map((t) => (
          <li key={t} className={puce}>
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
        <Link href={`/projets/${projet.slug}/`} className={bouton.principal}>
          Voir le détail<span className="sr-only"> du projet {projet.nom}</span>
        </Link>
        {projet.site && (
          <a href={projet.site} className={lienTexte}>
            Voir le site<span className="sr-only"> {projet.nom}</span>
          </a>
        )}
        {projet.code && (
          <a href={projet.code} className={lienTexte}>
            Voir le code<span className="sr-only"> de {projet.nom}</span>
          </a>
        )}
      </div>
    </article>
  );
}
