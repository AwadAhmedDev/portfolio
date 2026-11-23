import { Fragment, type ReactNode } from "react";

// Met en gras les passages entourés de ** dans un texte des données (ex. « **en mode test** »).
export function riche(texte: string): ReactNode {
  return texte.split(/\*\*(.+?)\*\*/g).map((morceau, i) =>
    i % 2 === 1 ? <strong key={i}>{morceau}</strong> : <Fragment key={i}>{morceau}</Fragment>,
  );
}
