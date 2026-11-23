// Marque « AA » (logo validé par Awad le 23/11/2026) : carré aux couleurs de l'accent, deux « A » tracés.
// Même dessin que public/favicon.svg ; ici les couleurs suivent le thème clair ou sombre.
export function Logo({ taille = 32 }: { taille?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={taille} height={taille} aria-hidden="true" focusable="false" className="shrink-0">
      <rect width="64" height="64" rx="15" className="fill-primary" />
      <path
        d="M13 46 21.5 18 30 46M16.5 36h10M34 46l8.5-28L51 46M37.5 36h10"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-primary-foreground"
      />
    </svg>
  );
}
