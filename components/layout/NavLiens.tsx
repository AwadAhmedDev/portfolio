"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

// « Projets » reste la page en cours sur les fiches (/projets/repatek/…) ; « Accueil » seulement sur « / ».
export const estCourante = (chemin: string, href: string) => (href === "/" ? chemin === "/" : chemin.startsWith(href));

export function NavLiens() {
  const chemin = usePathname();
  return (
    <nav aria-label="Navigation principale" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {nav.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={estCourante(chemin, l.href) ? "page" : undefined}
              className="lien-nav inline-flex min-h-11 items-center text-[15px] font-medium no-underline hover:text-primary aria-[current=page]:text-primary"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
