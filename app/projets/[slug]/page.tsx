import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projetParSlug, projets, projetSuivant, type Projet } from "@/content/projets";
import { SchemaTemplate } from "@/components/projet/SchemaTemplate";
import { TableauLighthouse } from "@/components/projet/TableauLighthouse";
import { Provisoire } from "@/components/ui/Provisoire";
import { IconeFleche } from "@/components/ui/icones";
import { badge, bouton, puce } from "@/components/ui/styles";
import { riche } from "@/lib/texte";

// Un seul gabarit pour les 6 fiches (architecture.md §4.1) : toute autre adresse donne la 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = projetParSlug((await params).slug);
  if (!p) return {};
  return { title: p.titrePage, description: p.description, alternates: { canonical: `/projets/${p.slug}/` } };
}

export default async function FicheProjet({ params }: Props) {
  const p = projetParSlug((await params).slug);
  if (!p) notFound();
  const suivant = projetSuivant(p.slug);

  return (
    <>
      <div className="conteneur pt-8">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap gap-2 text-[14px] text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>{" "}
              <span aria-hidden="true">›</span>
            </li>
            <li>
              <Link href="/projets/" className="hover:text-primary">
                Projets
              </Link>{" "}
              <span aria-hidden="true">›</span>
            </li>
            <li aria-current="page" className="text-foreground">
              {p.nom}
            </li>
          </ol>
        </nav>
      </div>

      <section aria-labelledby="titre-fiche" className="conteneur py-10">
        <Mentions p={p} />
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className={badge}>
            {p.badge}
            {p.equipe ? ` · ${p.equipe}` : ""}
          </span>
          <span className="mono text-[13px] text-muted-foreground">Début : {p.debut}</span>
        </div>
        <h1 id="titre-fiche" className="mt-4 text-[clamp(44px,7vw,76px)] leading-none">
          {p.nom}
        </h1>
        <p className="mt-5 max-w-[760px] text-[clamp(18px,2.2vw,22px)] leading-[1.55]">{p.phrase}</p>
        <Liens p={p} />
      </section>

      <div className="conteneur">
        {p.schema ? (
          <SchemaTemplate />
        ) : (
          <div className="grid items-end gap-6 md:grid-cols-[3fr_1fr]">
            <Provisoire
              libelle="Capture provisoire · ordinateur"
              ratio="16:10"
              alt={`Page d'accueil du site ${p.nom} sur ordinateur`}
            />
            <div className="mx-auto w-full max-w-[220px]">
              <Provisoire
                libelle="Capture provisoire · mobile"
                ratio="4:5"
                alt={`Page d'accueil du site ${p.nom} sur téléphone`}
              />
            </div>
          </div>
        )}
      </div>

      <div className="conteneur py-12 text-[17px]">
        <Rubrique id="projet" titre="Le projet">
          <p>{p.leProjet}</p>
        </Rubrique>
        <Rubrique id="role" titre="Mon rôle">
          <p>
            {p.monRole.texte.charAt(0).toUpperCase() + p.monRole.texte.slice(1)}
            {p.monRole.gras && <strong>{p.monRole.gras}</strong>}
            {p.monRole.suite}
          </p>
        </Rubrique>
        <Rubrique id="fonctionnalites" titre="Fonctionnalités">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {p.fonctionnalites.map((f) => (
              <li key={f}>{riche(f)}</li>
            ))}
          </ul>
        </Rubrique>
        <Rubrique id="technologies" titre="Technologies">
          {typeof p.technologies[0] === "string" ? (
            <Puces liste={p.technologies as string[]} />
          ) : (
            <div className="flex flex-col gap-5">
              {(p.technologies as { titre: string; liste: string[] }[]).map((g) => (
                <div key={g.titre}>
                  <h3 className="text-[17px]">{g.titre}</h3>
                  <div className="mt-2">
                    <Puces liste={g.liste} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Rubrique>
        <Rubrique id="choix" titre="Choix techniques">
          <ol className="flex flex-col gap-3">
            {p.choix.map((c, i) => (
              <li key={c.decision} className="flex gap-4 rounded-[10px] bg-muted p-4">
                <span className="mono font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <p>
                  <strong>{c.decision}</strong>
                  {c.raison}
                </p>
              </li>
            ))}
          </ol>
        </Rubrique>
        <Rubrique id="qualite" titre="Qualité">
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.qualite.map((q) => (
              <li key={q} className="rounded-[10px] border border-border p-4">
                {q}
              </li>
            ))}
          </ul>
          {p.lighthouse && (
            <div className="mt-6">
              <TableauLighthouse lighthouse={p.lighthouse} />
            </div>
          )}
          <Liens p={p} />
        </Rubrique>
        {(p.mentionCode || p.mentionSite) && (
          <div className="mt-8">
            <Mentions p={p} basDePage />
          </div>
        )}
      </div>

      <section aria-label="Suite" className="bg-muted py-12">
        <div className="conteneur flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href={`/projets/${suivant.slug}/`}
            className="flex min-h-11 items-center gap-3 rounded-[10px] border border-border bg-background px-5 py-4 no-underline hover:border-primary"
          >
            <span>
              <span className="block text-[14px] text-muted-foreground">Projet suivant</span>
              <span className="text-[20px] font-bold">{suivant.nom}</span>
            </span>
            <IconeFleche />
          </Link>
          <Link href="/contact/" className={bouton.principal}>
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}

function Rubrique({ id, titre, children }: { id: string; titre: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`r-${id}`} className="grid gap-4 border-t border-border py-8 md:grid-cols-[220px_1fr]">
      <h2 id={`r-${id}`} className="text-[22px]">
        {titre}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function Puces({ liste }: { liste: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {liste.map((t) => (
        <li key={t} className={puce}>
          {t}
        </li>
      ))}
    </ul>
  );
}

function Liens({ p }: { p: Projet }) {
  if (!p.site && !p.code) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {p.site && (
        <a href={p.site} className={bouton.principal}>
          Voir le site <span className="mono text-[13px] font-normal">{new URL(p.site).hostname}</span>
        </a>
      )}
      {p.code && (
        <a href={p.code} className={bouton.secondaire}>
          Voir le code
        </a>
      )}
    </div>
  );
}

function Mentions({ p, basDePage = false }: { p: Projet; basDePage?: boolean }) {
  const textes = [!basDePage && p.mentionHaut, p.mentionSite, p.mentionCode].filter(Boolean) as string[];
  if (textes.length === 0) return null;
  return (
    <div className="flex flex-col gap-2">
      {textes.map((t) => (
        <p key={t} className="rounded-[10px] border border-border bg-muted px-4 py-3 font-medium">
          {t}
        </p>
      ))}
    </div>
  );
}
