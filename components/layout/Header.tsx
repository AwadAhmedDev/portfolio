import Link from "next/link";
import { cvFrancais, SITE_NOM } from "@/content/site";
import { bouton } from "@/components/ui/styles";
import { MobileMenu } from "./MobileMenu";
import { NavLiens } from "./NavLiens";
import { ThemeToggle } from "./ThemeToggle";

// En-tête fixe de 64 px (design.md §4.1). Le bouton « CV » n'apparaît que si le PDF est fourni (EF-7).
export function Header() {
  const cv = cvFrancais();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="conteneur relative flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-[17px] font-bold tracking-tight no-underline">
          {SITE_NOM}
        </Link>
        <NavLiens />
        <div className="flex items-center gap-2">
          {cv && (
            <a href={cv.fichier} className={bouton.secondaire} aria-label="CV en français (PDF)">
              CV
            </a>
          )}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
