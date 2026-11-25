// Logo d'Awad (modèle fourni le 25/11/2026) : grand « A » évidé et chevron de code « > » à la place de la barre.
// Couleurs du portfolio : « A » couleur du texte, chevron couleur d'accent ; elles suivent le thème clair ou sombre.
// Le masque évide les jambes du « A » (fond transparent, donc juste sur toutes les surfaces).
// `id` doit être unique dans la page (le logo apparaît dans l'en-tête et le pied de page).
export function Logo({ id, taille = 34 }: { id: string; taille?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={taille} height={taille} aria-hidden="true" focusable="false" className="shrink-0">
      <mask id={id} maskUnits="userSpaceOnUse">
        <path d="M7 58 32 6l25 52" fill="none" stroke="#fff" strokeWidth="14" strokeLinejoin="round" />
        <path d="M7 58 32 6l25 52" fill="none" stroke="#000" strokeWidth="5" strokeLinejoin="round" />
      </mask>
      <rect width="64" height="64" mask={`url(#${id})`} className="fill-foreground" />
      <path
        d="M21 25.5 39 37 21 48.5"
        fill="none"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-primary"
      />
    </svg>
  );
}
