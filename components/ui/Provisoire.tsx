// Emplacement d'image clairement signalé tant que le vrai fichier manque (décision C6).
export function Provisoire({ libelle, ratio, alt }: { libelle: string; ratio: "16:10" | "4:5" | "1:1"; alt: string }) {
  return (
    <div
      role="img"
      aria-label={`${alt} (${libelle.toLowerCase()})`}
      className={`${ratio === "4:5" ? "aspect-[4/5]" : ratio === "1:1" ? "aspect-square" : "aspect-[16/10]"} flex w-full items-center justify-center rounded-[10px] border border-dashed border-input bg-muted text-[13px] text-muted-foreground`}
    >
      <span aria-hidden="true" className="mono">
        {libelle}
      </span>
    </div>
  );
}
