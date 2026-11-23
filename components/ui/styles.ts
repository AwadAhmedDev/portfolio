// Classes des boutons et badges (docs/design.md §4), sans dépendance : simples chaînes Tailwind.
const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-[15px] font-semibold no-underline transition-colors";

export const bouton = {
  principal: `${base} bg-primary text-primary-foreground hover:bg-primary-hover`,
  secondaire: `${base} border border-input bg-background text-foreground hover:bg-muted`,
  icone:
    "inline-flex size-11 items-center justify-center rounded-[10px] border border-input bg-background text-foreground hover:bg-muted",
};

export const lienTexte =
  "inline-flex min-h-11 items-center font-medium text-primary underline underline-offset-4 hover:text-primary-hover";

// Badge neutre commun aux 3 catégories (décision C4).
export const badge =
  "inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-[13px] font-medium text-foreground";

export const puce = "mono inline-flex items-center rounded-[6px] border border-border px-2 py-0.5 text-[13px]";
