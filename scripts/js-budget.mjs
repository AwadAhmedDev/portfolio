// Budget JavaScript par page (architecture.md §7.1) : 150 Ko = 153 600 octets, gzip niveau 9.
// Compte le JavaScript chargé à l'ouverture : <script src> (sauf noModule, ignoré par les navigateurs modernes),
// fichiers préchargés, fichiers cités dans les données intégrées, et scripts intégrés. Chaque fichier compte une fois.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { gzipSync } from "node:zlib";

export const BUDGET = 153_600;
const OUT = process.argv[2] ?? "out";
const gz = (buf) => gzipSync(buf, { level: 9 }).length;

function pagesHtml(dossier) {
  return readdirSync(dossier).flatMap((nom) => {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) return nom === "_next" ? [] : pagesHtml(chemin);
    return nom.endsWith(".html") ? [chemin] : [];
  });
}

export function mesurerPage(html, lireFichier) {
  const sansNoModule = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>/gi)].filter(
    (m) => !/\bnomodule\b/i.test(m[0]),
  );
  const prechargees = [...html.matchAll(/<link\b[^>]*>/gi)]
    .filter((m) => /rel="(?:preload|modulepreload)"/i.test(m[0]) && /as="script"|modulepreload/i.test(m[0]))
    .map((m) => (m[0].match(/href="([^"]+)"/i) || [])[1]);
  const integres = [...html.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const cites = integres.join("\n").match(/\/?_next\/static\/[\w.\-%[\]/]+?\.js/g) ?? [];
  const fichiers = new Set(
    [...sansNoModule.map((m) => m[1]), ...prechargees, ...cites]
      .filter(Boolean)
      .map((u) => decodeURIComponent((u.startsWith("/") ? u : `/${u}`).split("?")[0])),
  );
  let total = 0;
  for (const f of fichiers) total += gz(lireFichier(f));
  for (const s of integres) total += gz(Buffer.from(s));
  return { total, fichiers: fichiers.size, integres: integres.length };
}

if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, "/")}` || process.argv[1].endsWith("js-budget.mjs")) {
  const lire = (u) => readFileSync(join(OUT, u));
  let depasse = false;
  console.log(`Budget JavaScript : ${BUDGET} octets par page (gzip 9)\n`);
  for (const page of pagesHtml(OUT).sort()) {
    const r = mesurerPage(readFileSync(page, "utf8"), lire);
    const ok = r.total <= BUDGET;
    depasse ||= !ok;
    console.log(
      `${ok ? "OK      " : "DÉPASSÉ "} ${relative(OUT, page).padEnd(42)} ${String(r.total).padStart(7)} o  ${(r.total / 1024).toFixed(1).padStart(6)} Ko  marge ${String(BUDGET - r.total).padStart(6)} o  (${r.fichiers} fichiers, ${r.integres} intégrés)`,
    );
  }
  if (depasse) {
    console.error("\nBudget JavaScript dépassé sur au moins une page.");
    process.exit(1);
  }
}
