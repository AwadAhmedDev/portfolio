// Préchargement de Next.js 16 en export statique : le navigateur demande
//   projets/repatek/__next.projets.$d$slug.__PAGE__.txt
// alors que l'export range le fichier dans
//   projets/repatek/__next.projets/$d$slug/__PAGE__.txt
// Ce script crée, à côté de chaque fichier rangé, une copie au nom demandé (sinon : erreurs 404 dans la console).
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = process.argv[2] ?? "out";

// Chemin d'un fichier rangé → chemin plat attendu par le navigateur, ou null s'il n'est pas concerné.
export function cheminPlat(cheminRelatif) {
  const parties = cheminRelatif.split(/[\\/]/);
  const i = parties.findIndex((p) => p.startsWith("__next.") && !p.endsWith(".txt"));
  if (i < 0 || !cheminRelatif.endsWith(".txt")) return null;
  return [...parties.slice(0, i), parties.slice(i).join(".")].join(sep);
}

function fichiers(dossier) {
  return readdirSync(dossier).flatMap((nom) => {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) return nom === "_next" ? [] : fichiers(chemin);
    return [chemin];
  });
}

if (process.argv[1]?.endsWith("segments-plats.mjs")) {
  let n = 0;
  for (const f of fichiers(OUT)) {
    const plat = cheminPlat(relative(OUT, f));
    if (!plat) continue;
    copyFileSync(f, join(OUT, plat));
    n++;
  }
  console.log(`Préchargement : ${n} fichiers copiés sous leur nom plat.`);
}
