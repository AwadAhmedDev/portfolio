import type { Metadata } from "next";
import { metaPage } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projetParSlug, projets, projetSuivant, type Projet } from "@/content/projets";
import { ParcoursImages } from "@/components/projet/ParcoursImages";
import { SchemaArchitecture } from "@/components/projet/SchemaArchitecture";
import { SchemaTemplate } from "@/components/projet/SchemaTemplate";
import { TableauLighthouse } from "@/components/projet/TableauLighthouse";
import { Picture } from "@/components/Picture";
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
  return metaPage(p.titrePage, p.description, `/projets/${p.slug}/`);
}

export default async function FicheProjet({ params }: Props) {
  const p = projetParSlug((await params).slug);
  if (!p) notFound();
  const suivant = projetSuivant(p.slug);

  return (
    <>
      <div className="conteneur pt-8">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-x-2 text-[14px] text-muted-foreground">
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center hover:text-primary">
                Accueil
              </Link>{" "}
              <span aria-hidden="true">›</span>
            </li>
            <li>
              <Link href="/projets/" className="inline-flex min-h-11 items-center hover:text-primary">
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
        {/* En-tête « en 5 secondes » : rôle et technologies principales (26/11/2026). */}
        <dl className="mt-6 grid max-w-[760px] gap-4 sm:grid-cols-[auto_1fr] sm:gap-x-6">
          <dt className="mono text-[13px] text-muted-foreground sm:pt-1">Mon rôle</dt>
          <dd className="font-medium">{p.roleCourt ?? <Role p={p} />}</dd>
          <dt className="mono text-[13px] text-muted-foreground sm:pt-2">Technologies</dt>
          <dd>
            <Puces liste={p.techCarte} />
          </dd>
        </dl>
        <Liens p={p} />
      </section>

      <div className="conteneur">
        {p.schema ? (
          <SchemaTemplate />
        ) : (
          <div className="grid items-end gap-6 md:grid-cols-[3fr_1fr]">
            <figure>
              <Picture
                nom={`${p.slug}-ordinateur`}
                ratio="16:10"
                sizes="(min-width: 1200px) 860px, (min-width: 768px) 70vw, 100vw"
                prioritaire
                provisoire={{
                  libelle: "Capture provisoire · ordinateur",
                  alt: `Page d'accueil du site ${p.nom} sur ordinateur`,
                }}
              />
              <figcaption className="mt-2 text-[14px] text-muted-foreground">
                {"Page d'accueil, sur ordinateur"}
              </figcaption>
            </figure>
            <figure className="mx-auto w-full max-w-[220px]">
              <Picture
                nom={`${p.slug}-mobile`}
                ratio="4:5"
                sizes="220px"
                provisoire={{
                  libelle: "Capture provisoire · mobile",
                  alt: `Page d'accueil du site ${p.nom} sur téléphone`,
                }}
              />
              <figcaption className="mt-2 text-[14px] text-muted-foreground">Le même site, sur téléphone</figcaption>
            </figure>
          </div>
        )}
      </div>

      <div className="conteneur py-12 text-[17px]">
        {/* Ordre d'une étude de cas (26/11/2026) : contexte, architecture, défis, fonctionnalités, résultats. */}
        <Rubrique id="contexte" titre="Le contexte">
          <p>{p.leProjet}</p>
        </Rubrique>
        {p.roleCourt && (
          <Rubrique id="role" titre="Mon rôle en détail">
            <p>
              <Role p={p} />
            </p>
          </Rubrique>
        )}
        <Rubrique id="architecture" titre="Architecture">
          {p.architecture && (
            <div className="mb-6">
              <SchemaArchitecture couches={p.architecture} />
            </div>
          )}
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
        <Rubrique id="defis" titre="Défis et solutions">
          <ol className="flex flex-col gap-3">
            {p.choix.map((c, i) => (
              <li key={c.decision} className="flex gap-4 rounded-[10px] bg-muted p-4">
                <span className="mono font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-semibold">Défi.</span> {p.defis[i]}
                  </p>
                  <p>
                    <span className="font-semibold text-primary">Solution.</span> {c.decision}
                    {c.raison}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Rubrique>
        <Rubrique id="fonctionnalites" titre="Fonctionnalités clés">
          <ParcoursImages p={p} />
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {p.fonctionnalites.map((f) => (
              <li key={f}>{riche(f)}</li>
            ))}
          </ul>
        </Rubrique>
        <Rubrique id="resultats" titre="Résultats">
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

      {/* Appel à l'action en lien avec le projet (26/11/2026). */}
      <section aria-labelledby="titre-similaire" className="conteneur py-12">
        <div className="flex flex-col gap-4 rounded-[16px] border border-border border-t-[3px] border-t-primary p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="titre-similaire" className="text-[clamp(22px,3vw,28px)]">
              Vous avez un projet similaire&nbsp;?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Site ou application sur mesure&#8239;: parlons de votre besoin. Premier échange gratuit.
            </p>
          </div>
          <Link href="/contact/?demande=freelance" className={`${bouton.principal} shrink-0 self-start md:self-center`}>
            Parlons de votre projet
          </Link>
        </div>
      </section>

      <section aria-label="Suite" className="bg-muted py-12">
        <div className="conteneur flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href={`/projets/${suivant.slug}/`}
            className="flex min-h-11 items-center gap-3 rounded-[10px] border border-border bg-card px-5 py-4 no-underline hover:border-primary"
          >
            <span>
              <span className="block text-[14px] text-muted-foreground">Projet suivant</span>
              <span className="text-[20px] font-bold text-foreground">{suivant.nom}</span>
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
    <section
      aria-labelledby={`r-${id}`}
      className="revele grid gap-4 border-t border-border py-8 md:grid-cols-[220px_1fr]"
    >
      <h2 id={`r-${id}`} className="text-[22px]">
        {titre}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function Role({ p }: { p: Projet }) {
  return (
    <>
      {p.monRole.texte.charAt(0).toUpperCase() + p.monRole.texte.slice(1)}
      {p.monRole.gras && <strong>{p.monRole.gras}</strong>}
      {p.monRole.suite}
    </>
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
