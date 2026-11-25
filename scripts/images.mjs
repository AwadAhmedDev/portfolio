// Préparation des images (architecture.md §5, roadmap lot 11) : lancé seulement par le workflow images.yml,
// où sharp est installé (rien sur l'ordinateur d'Awad, R7). Les originaux de images-source/ deviennent
// des AVIF et WebP en plusieurs largeurs dans public/images/, sans métadonnées ; leurs dimensions sont
// écrites dans content/images-generees.json pour le composant Picture.
// Lancement : node --experimental-strip-types scripts/images.mjs (pour lire content/images.ts).
import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, parse } from "node:path";

export const SOURCE = "images-source";
export const SORTIE = "public/images";
export const GENEREES = "content/images-generees.json";
export const LARGEURS = { capture: [640, 960, 1440], photo: [200, 320, 640] };
export const POIDS_MAX = 200 * 1024; // octets par fichier produit
export const QUALITE = { avif: 50, webp: 75 };

export const genre = (nom) => (nom === "awad-ahmed" ? "photo" : "capture");

// PNG ou JPEG, en minuscules, sans espace ni accent.
export const nomValide = (fichier) => /^[a-z0-9]+(-[a-z0-9]+)*\.(png|jpe?g)$/.test(fichier);

// Jamais d'agrandissement : on garde les largeurs prévues qui ne dépassent pas l'original,
// ou la largeur de l'original seule s'il est plus petit que toutes.
export function largeursProduites(nom, largeurSource) {
  const prevues = LARGEURS[genre(nom)].filter((l) => l <= largeurSource);
  return prevues.length > 0 ? prevues : [largeurSource];
}

// Chaque original est déclaré dans content/images.ts, et chaque déclaration a son original.
export function erreursDeclarations(fichiers, declarations) {
  const noms = fichiers.map((f) => parse(f).name);
  const declares = declarations.map((d) => d.nom);
  const erreurs = [];
  for (const f of fichiers)
    if (!nomValide(f)) erreurs.push(`nom ou format refusé : ${f} (PNG ou JPEG, minuscules, tirets)`);
  for (const n of noms) if (!declares.includes(n)) erreurs.push(`original non déclaré dans content/images.ts : ${n}`);
  for (const d of declarations) {
    if (!noms.includes(d.nom)) erreurs.push(`image déclarée sans original dans ${SOURCE}/ : ${d.nom}`);
    if (!d.alt?.trim()) erreurs.push(`texte alternatif manquant : ${d.nom}`);
  }
  if (new Set(noms).size !== noms.length) erreurs.push("deux originaux portent le même nom");
  return erreurs;
}

async function principal() {
  const sharp = (await import("sharp")).default;
  const { images } = await import("../content/images.ts");
  const fichiers = readdirSync(SOURCE).filter((f) => !f.startsWith(".") && statSync(join(SOURCE, f)).isFile());
  const erreurs = erreursDeclarations(fichiers, images);

  const generees = {};
  rmSync(SORTIE, { recursive: true, force: true });
  mkdirSync(SORTIE, { recursive: true });
  for (const f of erreurs.length ? [] : fichiers) {
    const nom = parse(f).name;
    // rotate() applique l'orientation EXIF ; sharp n'écrit ensuite aucune métadonnée (EXIF, GPS, appareil).
    const original = sharp(join(SOURCE, f)).rotate();
    const { width, height } = await original.metadata();
    const [l, h] = [width, height];
    if (genre(nom) === "photo" && Math.abs(h / l - 1.25) > 0.02)
      erreurs.push(`la photo doit être au format 4:5 : ${f}`);
    const largeurs = largeursProduites(nom, l);
    for (const largeur of largeurs) {
      for (const format of ["avif", "webp"]) {
        const sortie = join(SORTIE, `${nom}-${largeur}.${format}`);
        const info = await original
          .clone()
          .resize({ width: largeur })
          [format]({ quality: QUALITE[format] })
          .toFile(sortie);
        if (info.size > POIDS_MAX) erreurs.push(`${sortie} pèse ${info.size} octets (maximum ${POIDS_MAX})`);
      }
    }
    const max = largeurs.at(-1);
    generees[nom] = { largeurs, largeur: max, hauteur: Math.round((h * max) / l) };
  }

  if (erreurs.length) {
    console.error(`Images refusées :\n- ${erreurs.join("\n- ")}`);
    process.exit(1);
  }
  writeFileSync(GENEREES, `${JSON.stringify(generees, null, 2)}\n`);
  console.log(`Images : ${Object.keys(generees).length} originaux traités, sans métadonnées.`);
}

if (process.argv[1]?.endsWith("images.mjs")) await principal();
