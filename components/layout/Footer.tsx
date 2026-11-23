import Link from "next/link";
import { cvFrancais, liens, nav, SITE_NOM } from "@/content/site";

const lien = "inline-flex min-h-11 items-center text-[15px] no-underline hover:text-primary hover:underline";

// Pied de page (design.md §4.2).
export function Footer() {
  const cv = cvFrancais();
  return (
    <footer className="mt-auto bg-muted">
      <div className="conteneur flex flex-col gap-6 py-10">
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap gap-x-6">
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
        <ul className="flex flex-wrap gap-x-6">
          <li>
            <a href={liens.linkedin} className={lien}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={liens.github} className={lien}>
              GitHub
            </a>
          </li>
          <li>
            <a href={liens.codePortfolio} className={lien}>
              Code de ce portfolio
            </a>
          </li>
        </ul>
        <p className="text-[14px] text-muted-foreground">© 2026 {SITE_NOM}</p>
      </div>
    </footer>
  );
}
