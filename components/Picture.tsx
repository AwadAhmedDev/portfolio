import { images } from "@/content/images";
import generees from "@/content/images-generees.json";
import { Provisoire } from "@/components/ui/Provisoire";

type Generee = { largeurs: number[]; largeur: number; hauteur: number };

type Props = {
  nom: string; // nom déclaré dans content/images.ts
  ratio: "16:10" | "4:5";
  sizes: string; // largeur affichée, pour que le navigateur choisisse le bon fichier
  provisoire: { libelle: string; alt: string }; // emplacement signalé tant que l'image manque (C6)
  prioritaire?: boolean; // image du premier écran : chargée tout de suite
};

// Image responsive en AVIF et WebP (architecture.md §5) : next/image n'optimise pas en export statique.
// Dimensions fixées (pas de saut de mise en page) ; aucun attribut style= (CSP).
export function Picture({ nom, ratio, sizes, provisoire, prioritaire = false }: Props) {
  const declaree = images.find((i) => i.nom === nom);
  const generee = (generees as Record<string, Generee>)[nom];
  if (!declaree || !generee) return <Provisoire libelle={provisoire.libelle} ratio={ratio} alt={provisoire.alt} />;

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
        className={`${ratio === "4:5" ? "aspect-[4/5]" : "aspect-[16/10]"} h-auto w-full rounded-[10px] border border-border object-cover object-top`}
      />
    </picture>
  );
}
