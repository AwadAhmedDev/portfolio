// CSP par empreintes (architecture.md §6.2, décision R4) : après le build, ajoute à chaque page une balise meta
// avec l'empreinte SHA-256 de chacun de ses scripts intégrés. Aucun 'unsafe-inline' ni 'unsafe-eval'.
// L'en-tête HTTP (public/.htaccess) porte le reste (frame-ancestors, etc.) et ne restreint pas les scripts.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = process.argv[2] ?? "out";

export function politique(html) {
  const integres = [...html.matchAll(/<script\b(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((m) => !/type="application\/(ld\+)?json"/i.test(m[1])) // blocs de données : jamais exécutés
    .map((m) => m[2]);
  const empreintes = [
    ...new Set(integres.map((s) => `'sha256-${createHash("sha256").update(s, "utf8").digest("base64")}'`)),
  ];
  return [
    "default-src 'self'",
    `script-src 'self' ${empreintes.join(" ")}`.trim(),
    "style-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "manifest-src 'self'",
  ].join("; ");
}

export function erreursCsp(html) {
  const erreurs = [];
  if (/<[a-z][^>]*\son[a-z]+\s*=/i.test(html)) erreurs.push("attribut d'événement en ligne (onclick=…)");
  if (/<[a-z][^>]*\sstyle\s*=/i.test(html)) erreurs.push("attribut style=\"…\" (bloqué par style-src 'self')");
  if (/<style\b/i.test(html)) erreurs.push("balise <style> intégrée");
  if (/http-equiv="Content-Security-Policy"/i.test(html)) erreurs.push("balise CSP déjà présente");
  return erreurs;
}

export function ajouterMeta(html) {
  const meta = `<meta http-equiv="Content-Security-Policy" content="${politique(html)}">`;
  const i = html.search(/<head[^>]*>/i);
  if (i < 0) throw new Error("balise <head> introuvable");
  const fin = html.indexOf(">", i) + 1;
  return html.slice(0, fin) + meta + html.slice(fin); // en tout premier, avant tout script
}

function pagesHtml(dossier) {
  return readdirSync(dossier).flatMap((nom) => {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) return nom === "_next" ? [] : pagesHtml(chemin);
    return nom.endsWith(".html") ? [chemin] : [];
  });
}

if (process.argv[1]?.endsWith("csp-hashes.mjs")) {
  let echec = false;
  for (const page of pagesHtml(OUT)) {
    const html = readFileSync(page, "utf8");
    const erreurs = erreursCsp(html);
    if (erreurs.length) {
      echec = true;
      console.error(`ERREUR ${relative(OUT, page)} : ${erreurs.join(", ")}`);
      continue;
    }
    writeFileSync(page, ajouterMeta(html));
    const n = (politique(html).match(/sha256-/g) ?? []).length;
    console.log(`CSP ajoutée : ${relative(OUT, page)} (${n} empreintes)`);
  }
  if (echec) process.exit(1);
}
