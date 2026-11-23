"use client";

import { useSyncExternalStore } from "react";
import { CLE_THEME } from "@/lib/theme-script";
import { IconeLune, IconeSoleil } from "@/components/ui/icones";
import { bouton } from "@/components/ui/styles";

// Le thème initial est posé avant l'affichage par le script de <head> (EF-9).
// Le bouton lit la classe .dark de <html> et se met à jour quand elle change.
function abonner(rappel: () => void) {
  const obs = new MutationObserver(rappel);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
}
const estSombre = () => document.documentElement.classList.contains("dark");
const coteServeur = () => null; // inconnu au build : libellé neutre jusqu'au chargement

export function ThemeToggle({ avecLibelle = false }: { avecLibelle?: boolean }) {
  const sombre = useSyncExternalStore(abonner, estSombre, coteServeur);

  function basculer() {
    const suivant = !estSombre();
    document.documentElement.classList.toggle("dark", suivant);
    try {
      localStorage.setItem(CLE_THEME, suivant ? "sombre" : "clair");
    } catch {
      // stockage refusé (navigation privée) : le thème change quand même pour la page en cours
    }
  }

  const libelle = sombre ? "Passer en mode clair" : "Passer en mode sombre";

  if (avecLibelle) {
    return (
      <button type="button" onClick={basculer} className={`${bouton.secondaire} w-full justify-start`}>
        {sombre ? <IconeSoleil /> : <IconeLune />}
        {libelle}
      </button>
    );
  }
  return (
    <button type="button" onClick={basculer} className={bouton.icone} aria-label={libelle}>
      {sombre ? <IconeSoleil /> : <IconeLune />}
    </button>
  );
}
