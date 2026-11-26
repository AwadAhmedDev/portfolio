// Portrait provisoire (décision C6 : emplacement clairement signalé) tant que la photo d'Awad n'est pas fournie :
// silhouette aux couleurs du thème, sans aucune photo de quelqu'un d'autre.
export function PhotoProvisoire({ alt, libelle }: { alt: string; libelle: string }) {
  return (
    <div
      role="img"
      aria-label={`${alt} (${libelle.toLowerCase()})`}
      className="relative aspect-square w-full overflow-hidden rounded-full border border-border bg-gradient-to-b from-secondary to-muted"
    >
      <svg viewBox="0 0 160 200" aria-hidden="true" focusable="false" className="absolute inset-x-0 bottom-0 w-full">
        <circle cx="80" cy="80" r="34" className="fill-primary/20" />
        <path d="M14 200c0-46 29-74 66-74s66 28 66 74Z" className="fill-primary/20" />
      </svg>
      <span className="mono absolute left-3 top-3 rounded-full border border-border bg-background px-2.5 py-1 text-[12px] text-muted-foreground">
        {libelle}
      </span>
    </div>
  );
}
