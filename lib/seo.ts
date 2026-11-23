import type { Metadata } from "next";
import { accueil } from "@/content/pages";
import { LOGO_NOM, SITE_NOM } from "@/content/site";

// Adresse du site, fournie au build par la variable SITE_URL (architecture.md §8.3).
// shortcut: valeur locale par défaut tant que le site Hostinger du portfolio n'existe pas ; la CI doit fixer SITE_URL.
export const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

// Image d'aperçu des réseaux sociaux (roadmap RM4) : PNG fixe, version sombre de la piste A : logo « AA », « Awad » et le titre.
// shortcut: image figée (générée une fois avec next/og le 23/11/2026, sans métadonnées) ; à refaire si le nom ou le titre change.
// Une génération automatique au build ajoutait environ 1,1 Ko de JavaScript à chaque page.
export const IMAGE_APERCU = {
  url: "/apercu.png",
  width: 1200,
  height: 630,
  alt: `Logo AA, ${LOGO_NOM} — ${accueil.petitTitre}`,
};

// Métadonnées d'une page (requirements.md §5) : titre, description, adresse canonique, aperçus Open Graph et Twitter.
// Next.js ne fusionne pas les objets openGraph d'un niveau à l'autre : chaque page les reçoit donc en entier, image comprise.
export function metaPage(titre: string, description: string, chemin: string): Metadata {
  return {
    title: titre,
    description,
    alternates: { canonical: chemin },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE_NOM,
      title: titre,
      description,
      url: chemin,
      images: [IMAGE_APERCU],
    },
    twitter: { card: "summary_large_image", title: titre, description, images: [IMAGE_APERCU] },
  };
}
