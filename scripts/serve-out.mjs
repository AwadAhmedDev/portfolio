// Petit serveur statique pour tester l'export (out/) tel qu'il sera mis en ligne, CSP comprise.
// Sans dépendance. Usage : node scripts/serve-out.mjs [port]. Ne sert que des fichiers sous out/.
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const RACINE = resolve("out");
const PORT = Number(process.argv[2] ?? 3101);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
};

createServer((req, res) => {
  const chemin = decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname);
  let fichier = normalize(join(RACINE, chemin));
  if (!fichier.startsWith(RACINE)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(fichier) && statSync(fichier).isDirectory()) fichier = join(fichier, "index.html");
  // Comme sur Hostinger : PHP n'est pas exécuté ici, et les fichiers cachés ou du dossier _app ne sont pas servis.
  const interdit = /(^|[\\/])\.|[\\/]_app[\\/]|\.php$/.test(fichier.slice(RACINE.length));
  if (!interdit && existsSync(fichier)) {
    res.writeHead(200, {
      "Content-Type": TYPES[extname(fichier)] ?? "application/octet-stream",
      "Content-Security-Policy": "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
    });
    res.end(readFileSync(fichier));
    return;
  }
  res.writeHead(404, { "Content-Type": TYPES[".html"] });
  res.end(readFileSync(join(RACINE, "404.html")));
}).listen(PORT, () => console.log(`Export servi sur http://localhost:${PORT}`));
