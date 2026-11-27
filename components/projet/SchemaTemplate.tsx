// Schéma d'architecture cible du template, en HTML et CSS (design.md §5.4, contenus.md §3.4).
const boite = "rounded-[10px] border border-border bg-card p-4";

export function SchemaTemplate() {
  return (
    <figure className="rounded-[16px] border border-border bg-muted p-5">
      <p className="text-[17px] font-bold">Architecture cible — configuration de production</p>
      <div className="mt-4 flex flex-col gap-4 wide:flex-row">
        <div className="flex-[3] rounded-[10px] border border-dashed border-input p-4">
          <p className="mono text-[13px] text-muted-foreground">VPS · Docker Compose · réseau interne</p>
          <ul className="mt-3 flex flex-col gap-3 wide:flex-row">
            <li className={`${boite} flex-1`}>
              <p className="mono font-semibold">Caddy 2</p>
            </li>
            <li className={`${boite} flex-1`}>
              <p className="mono font-semibold">Next.js 16</p>
              <p className="mt-1 text-[14px] text-muted-foreground">Prisma 7 comme bibliothèque intégrée</p>
            </li>
            <li className={`${boite} flex-1`}>
              <p className="mono font-semibold">PostgreSQL 17</p>
            </li>
            <li className={`${boite} flex-1 border-dashed`}>
              <p className="mono font-semibold">migrate</p>
              <p className="mt-1 text-[14px] text-muted-foreground">conteneur ponctuel</p>
            </li>
          </ul>
        </div>
        <div className="flex-1 rounded-[10px] border border-border p-4">
          <p className="mono text-[13px] text-muted-foreground">Services externes</p>
          <ul className="mt-3 flex flex-col gap-3">
            <li className={boite}>
              <p className="mono font-semibold">Stripe</p>
            </li>
            <li className={boite}>
              <p className="mono font-semibold">Resend</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 rounded-[10px] border border-border bg-card p-3 text-[14px]">
        <span className="mono font-semibold">CI/CD</span> — Workflow de déploiement configuré — désactivé par défaut.
      </p>
      <figcaption className="mt-3 text-[14px] text-muted-foreground">
        Architecture cible de production, d&apos;après docker-compose.prod.yml, Dockerfile et Caddyfile.
      </figcaption>
    </figure>
  );
}
