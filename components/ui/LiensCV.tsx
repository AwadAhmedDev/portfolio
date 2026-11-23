import { cvsDisponibles } from "@/content/site";
import { lienTexte } from "./styles";

// Les 3 CV (EF-7) : seuls les PDF fournis ont un lien ; chaque lien annonce langue, format et taille.
// Rien n'est affiché tant qu'aucun CV n'est fourni (pas de lien vers un fichier absent).
export function LiensCV({ texte }: { texte: string }) {
  const cvs = cvsDisponibles();
  if (cvs.length === 0) return null;
  return (
    <div>
      {cvs.length === 3 && <p>{texte}</p>}
      <ul className="mt-2 flex flex-wrap gap-x-6">
        {cvs.map((cv) => (
          <li key={cv.langue}>
            <a href={cv.fichier} hrefLang={cv.langue} type="application/pdf" className={lienTexte}>
              {cv.nom} (PDF, {cv.taille})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
