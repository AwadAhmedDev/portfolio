import type { Metadata } from "next";
import Link from "next/link";
import { page404 } from "@/content/pages";
import { bouton } from "@/components/ui/styles";

export const metadata: Metadata = { title: page404.titrePage, robots: { index: false } };

// Page 404 (contenus.md §7) : remplace la page par défaut de Next.js, qui contient des attributs style= bloqués par la CSP.
export default function PageIntrouvable() {
  return (
    <section aria-labelledby="titre-404" className="conteneur py-20">
      <p
        aria-hidden="true"
        className="mono text-[clamp(64px,12vw,120px)] font-semibold leading-none text-muted-foreground"
      >
        404
      </p>
      <h1 id="titre-404" className="mt-6 text-[clamp(40px,6vw,60px)] leading-none">
        {page404.titre}
      </h1>
      <p className="mt-5 text-[clamp(17px,2vw,20px)]">{page404.texte}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className={bouton.principal}>
          Retour à l&apos;accueil
        </Link>
        <Link href="/projets/" className={bouton.secondaire}>
          Voir les projets
        </Link>
      </div>
    </section>
  );
}
