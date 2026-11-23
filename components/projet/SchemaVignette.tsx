// Vignette SVG simplifiée de l'architecture du template (design.md §5.4) : textes de 10 px minimum.
export function SchemaVignette() {
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label="Schéma simplifié : Docker avec Caddy, Next.js 16 et Prisma 7, PostgreSQL 17 ; intégration continue à part"
      className="aspect-[16/10] w-full rounded-[10px] border border-border bg-muted"
    >
      <rect x="16" y="20" width="200" height="160" rx="8" fill="none" stroke="var(--bs)" strokeDasharray="4 3" />
      <text x="26" y="38" fontSize="11" fill="var(--mu)" fontFamily="var(--font-mono)">
        Docker
      </text>
      {[
        { y: 52, t: "Caddy 2" },
        { y: 92, t: "Next.js 16 + Prisma 7" },
        { y: 132, t: "PostgreSQL 17" },
      ].map((b) => (
        <g key={b.t}>
          <rect x="28" y={b.y} width="176" height="30" rx="6" fill="var(--bg)" stroke="var(--bd)" />
          <text x="40" y={b.y + 19} fontSize="12" fill="var(--tx)" fontFamily="var(--font-mono)">
            {b.t}
          </text>
        </g>
      ))}
      <rect x="232" y="72" width="72" height="56" rx="6" fill="var(--bg)" stroke="var(--bd)" />
      <text x="268" y="104" fontSize="12" textAnchor="middle" fill="var(--tx)" fontFamily="var(--font-mono)">
        CI
      </text>
    </svg>
  );
}
