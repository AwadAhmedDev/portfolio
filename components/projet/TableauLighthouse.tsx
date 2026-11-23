import type { Projet, Scores } from "@/content/projets";

const mesures: { cle: keyof Scores; nom: string }[] = [
  { cle: "performance", nom: "Performance" },
  { cle: "accessibilite", nom: "Accessibilité" },
  { cle: "bonnesPratiques", nom: "Bonnes pratiques" },
  { cle: "seo", nom: "SEO" },
];

const valeur = (v: number | null) => (v === null ? "Non relevé" : String(v));

// Vrai tableau, avec légende datée et en-têtes (design.md §5.5). Aucune couleur pour juger un score.
export function TableauLighthouse({ lighthouse }: { lighthouse: NonNullable<Projet["lighthouse"]> }) {
  return (
    <table className="w-full max-w-[560px] border-collapse text-left">
      <caption className="mb-3 text-left text-[14px] text-muted-foreground">
        Scores Lighthouse (mesuré {lighthouse.mesure})
      </caption>
      <thead>
        <tr className="border-b border-border">
          <th scope="col" className="py-2 pr-2 font-semibold sm:pr-6">
            Mesure
          </th>
          <th scope="col" className="py-2 pr-2 font-semibold sm:pr-6">
            Ordinateur
          </th>
          <th scope="col" className="py-2 font-semibold">
            Mobile
          </th>
        </tr>
      </thead>
      <tbody className="mono text-[14px]">
        {mesures.map((m) => (
          <tr key={m.cle} className="border-b border-border">
            <th scope="row" className="py-2 pr-2 font-sans font-normal sm:pr-6">
              {m.nom}
            </th>
            <td className="whitespace-nowrap py-2 pr-2 sm:pr-6">{valeur(lighthouse.ordinateur[m.cle])}</td>
            <td className="whitespace-nowrap py-2">{valeur(lighthouse.mobile[m.cle])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
