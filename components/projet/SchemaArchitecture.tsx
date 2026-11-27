// Schéma d'architecture simplifié d'une fiche (26/11/2026) : les couches dans l'ordre où passe une demande,
// en CSS seul (aucun JavaScript), côte à côte sur grand écran et les unes sous les autres sur téléphone.
export function SchemaArchitecture({ couches }: { couches: { titre: string; detail: string }[] }) {
  return (
    <ol aria-label="Schéma d'architecture" className="flex flex-col gap-2 wide:flex-row wide:items-stretch">
      {couches.map((c, i) => (
        <li key={c.titre} className="flex flex-col gap-2 wide:flex-1 wide:flex-row wide:items-center">
          {i > 0 && (
            <span aria-hidden="true" className="mono self-center text-primary wide:order-first">
              <span className="wide:hidden">↓</span>
              <span className="hidden wide:inline">→</span>
            </span>
          )}
          <div className="h-full flex-1 rounded-[10px] border border-border bg-card p-4">
            <p className="mono text-[12px] font-semibold uppercase tracking-[0.08em] text-primary">{c.titre}</p>
            <p className="mt-1 text-[15px]">{c.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
