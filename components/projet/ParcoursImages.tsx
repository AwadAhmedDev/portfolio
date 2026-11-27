import generees from "@/content/images-generees.json";
import { Picture } from "@/components/Picture";
import type { Projet } from "@/content/projets";

type Generee = { largeur: number };

// « Le parcours en images » (26/11/2026) : écrans clés légendés, puis une courte vidéo sans son.
// Aucun JavaScript : un clic sur une capture ouvre l'image en grand ; la vidéo ne charge rien avant le clic (preload="none").
export function ParcoursImages({ p }: { p: Projet }) {
  if (!p.parcours && !p.video) return null;
  return (
    <div className="mb-8 flex flex-col gap-8">
      {p.parcours && (
        <ol className="grid gap-6 md:grid-cols-3">
          {p.parcours.map((e) => {
            const grande = (generees as Record<string, Generee>)[e.image]?.largeur;
            return (
              <li key={e.image}>
                <figure>
                  <a href={grande ? `/images/${e.image}-${grande}.webp` : undefined} className="block">
                    <Picture
                      nom={e.image}
                      ratio="16:10"
                      sizes="(min-width: 768px) 30vw, 100vw"
                      provisoire={{ libelle: "Capture à venir", alt: e.titre }}
                    />
                  </a>
                  <figcaption className="mt-3">
                    <span className="block font-semibold">{e.titre}</span>
                    <span className="mt-1 block text-[15px] text-muted-foreground">{e.legende}</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ol>
      )}
      {p.video && (
        <figure className="max-w-[860px]">
          <video
            controls
            muted
            playsInline
            preload="none"
            poster={p.video.poster}
            width={1280}
            height={800}
            aria-describedby={`video-${p.slug}`}
            className="aspect-[16/10] h-auto w-full rounded-[10px] border border-border bg-muted"
          >
            <source src={p.video.fichier} type="video/mp4" />
          </video>
          <figcaption id={`video-${p.slug}`} className="mt-2 text-[14px] text-muted-foreground">
            {p.video.description}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
