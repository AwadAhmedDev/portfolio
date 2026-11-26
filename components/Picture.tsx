import { images } from "@/content/images";
import generees from "@/content/images-generees.json";
import { PhotoProvisoire } from "@/components/ui/PhotoProvisoire";
import { Provisoire } from "@/components/ui/Provisoire";

const forme = {
  "16:10": "aspect-[16/10] rounded-[10px] border border-border",
  "4:5": "aspect-[4/5] rounded-[10px] border border-border",
  "1:1": "aspect-square rounded-full",
} as const;

type Generee = { largeurs: number[]; largeur: number; hauteur: number };

type Props = {
  nom: string; // nom déclaré dans content/images.ts
  ratio: "16:10" | "4:5" | "1:1"; // 1:1 : photo affichée en rond
  sizes: string; // largeur affichée, pour que le navigateur choisisse le bon fichier
  provisoire: { libelle: string; alt: string }; // emplacement signalé tant que l'image manque (C6)
  prioritaire?: boolean; // image du premier écran : chargée tout de suite
};

// Image responsive en AVIF et WebP (architecture.md §5) : next/image n'optimise pas en export statique.
// Dimensions fixées (pas de saut de mise en page) ; aucun attribut style= (CSP).
export function Picture({ nom, ratio, sizes, provisoire, prioritaire = false }: Props) {
  const declaree = images.find((i) => i.nom === nom);
  const generee = (generees as Record<string, Generee>)[nom];
  if (!declaree || !generee)
    return nom === "awad-ahmed" ? (
      <PhotoProvisoire libelle={provisoire.libelle} alt={provisoire.alt} />
    ) : (
      <Provisoire libelle={provisoire.libelle} ratio={ratio} alt={provisoire.alt} />
    );

  const srcSet = (format: string) => generee.largeurs.map((l) => `/images/${nom}-${l}.${format} ${l}w`).join(", ");
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`/images/${nom}-${generee.largeur}.webp`}
        alt={declaree.alt}
        width={generee.largeur}
        height={generee.hauteur}
        loading={prioritaire ? "eager" : "lazy"}
        fetchPriority={prioritaire ? "high" : undefined}
        decoding="async"
        className={`${forme[ratio]} h-auto w-full object-cover object-top`}
      />
    </picture>
  );
}
