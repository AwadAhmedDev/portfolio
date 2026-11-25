import Link from "next/link";
import { accueil } from "@/content/pages";
import { cvFrancais, liens, nav, piedDePage, SITE_NOM } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { IconeGitHub, IconeHaut, IconeLinkedIn } from "@/components/ui/icones";
import { bouton } from "@/components/ui/styles";

const lien =
  "inline-flex min-h-11 items-center gap-2 text-[15px] text-muted-foreground no-underline transition-colors hover:text-foreground";
const titre = "mono text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground";

// Pied de page (design.md §4.2) : identité et disponibilité, puis navigation et réseaux, puis mentions.
export function Footer() {
  const cv = cvFrancais();
  return (
    <footer className="mt-auto border-t border-border bg-muted">
      <div className="conteneur grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2.5 text-[18px] font-bold no-underline">
            <Logo id="logo-pied" />
            {SITE_NOM}
          </Link>
          <p className="max-w-[340px] text-[15px] text-muted-foreground">{accueil.petitTitre}</p>
          <p className="flex items-center gap-2 text-[14px] text-foreground">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-primary" />
            {accueil.disponibilite}
          </p>
          <Link href="/contact/" className={bouton.principal}>
            Me contacter
          </Link>
        </div>

        <nav aria-label="Pied de page">
          <h2 className={titre}>{piedDePage.navigation}</h2>
          <ul className="mt-3 flex flex-col">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={lien}>
                  {l.label}
                </Link>
              </li>
            ))}
            {cv && (
              <li>
                <a href={cv.fichier} className={lien}>
                  CV
                </a>
              </li>
            )}
            <li>
              <Link href="/mentions-legales/" className={lien}>
                Mentions légales
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={titre}>{piedDePage.reseaux}</h2>
          <ul className="mt-3 flex flex-col">
            <li>
              <a href={liens.linkedin} className={lien}>
                <IconeLinkedIn />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={liens.github} className={lien}>
                <IconeGitHub />
                GitHub
              </a>
            </li>
            <li>
              <a href={liens.codePortfolio} className={lien}>
                <IconeGitHub />
                Code de ce portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="conteneur flex flex-wrap items-center justify-between gap-4 py-4">
          <p className="text-[14px] text-muted-foreground">© 2026 {SITE_NOM}</p>
          <a href="#contenu" className={lien}>
            {piedDePage.haut}
            <IconeHaut />
          </a>
        </div>
      </div>
    </footer>
  );
}
