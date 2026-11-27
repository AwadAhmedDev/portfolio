"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { estCourante } from "./NavLiens";
import { nav } from "@/content/site";
import { IconeCroix, IconeMenu } from "@/components/ui/icones";
import { bouton } from "@/components/ui/styles";
import { ThemeToggle } from "./ThemeToggle";

// Menu mobile (EF-1, design.md §4.1) : simple bouton aria-expanded, sans Radix.
export function MobileMenu() {
  const chemin = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const boutonRef = useRef<HTMLButtonElement>(null);
  const panneauRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ouvert) return;
    const fermer = (rendreFocus: boolean) => {
      setOuvert(false);
      if (rendreFocus) boutonRef.current?.focus();
    };
    const surTouche = (e: KeyboardEvent) => e.key === "Escape" && fermer(true);
    const surClic = (e: PointerEvent) => {
      const cible = e.target as Node;
      if (!panneauRef.current?.contains(cible) && !boutonRef.current?.contains(cible)) fermer(false);
    };
    document.addEventListener("keydown", surTouche);
    document.addEventListener("pointerdown", surClic);
    return () => {
      document.removeEventListener("keydown", surTouche);
      document.removeEventListener("pointerdown", surClic);
    };
  }, [ouvert]);

  return (
    <>
      <button
        ref={boutonRef}
        type="button"
        className={bouton.secondaire}
        aria-expanded={ouvert}
        aria-controls="menu-mobile"
        aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOuvert((o) => !o)}
      >
        {ouvert ? <IconeCroix /> : <IconeMenu />}
        Menu
      </button>
      <div
        id="menu-mobile"
        ref={panneauRef}
        hidden={!ouvert}
        className="absolute inset-x-0 top-16 border-b border-border bg-card"
      >
        <nav aria-label="Navigation principale" className="conteneur flex flex-col gap-1 py-3">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={estCourante(chemin, l.href) ? "page" : undefined}
              onClick={() => setOuvert(false)}
              className="lien-nav flex min-h-12 items-center self-start text-[17px] font-medium no-underline aria-[current=page]:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <ThemeToggle avecLibelle />
          </div>
        </nav>
      </div>
    </>
  );
}
