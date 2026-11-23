import type { Metadata } from "next";
import { metaPage } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = metaPage(
  "Mentions légales — Awad Ahmed",
  "Éditeur, hébergeur et traitement des données personnelles du portfolio d'Awad Ahmed.",
  "/mentions-legales/",
);

const lien = "text-primary underline underline-offset-4";

// Mentions légales (contenus.md §6, décision A11). La note interne sur l'adresse de Hostinger n'est pas affichée.
export default function MentionsLegales() {
  return (
    <article aria-labelledby="titre-mentions" className="conteneur py-16">
      <div className="max-w-[760px] text-[17px]">
        <h1 id="titre-mentions" className="text-[clamp(40px,6vw,60px)] leading-none">
          Mentions légales
        </h1>

        <h2 className="mt-10 text-[22px]">Éditeur du site</h2>
        <p className="mt-3">
          Awad Ahmed, particulier. Contact : par le{" "}
          <Link href="/contact/" className={lien}>
            formulaire de contact
          </Link>
          .
        </p>

        <h2 className="mt-10 text-[22px]">Hébergeur</h2>
        <p className="mt-3">
          Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre —{" "}
          <a href="https://www.hostinger.fr" className={lien}>
            www.hostinger.fr
          </a>
          .
        </p>

        <h2 className="mt-10 text-[22px]">Données personnelles (formulaire de contact)</h2>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
          <li>Données collectées : nom, adresse e-mail, type de demande, message.</li>
          <li>But : uniquement répondre à votre demande.</li>
          <li>Base : votre accord, donné en cochant la case du formulaire.</li>
          <li>Destinataire : Awad Ahmed. Le message est transmis par le service d&apos;envoi d&apos;e-mails Resend.</li>
          <li>
            Durée de conservation : <strong>12 mois</strong> après le dernier échange, puis suppression.
          </li>
          <li>
            Transfert hors de l&apos;Union européenne : Resend est une société américaine ; les messages peuvent donc
            transiter par des serveurs situés hors de l&apos;Union européenne.
          </li>
          <li>
            Vos droits : accès, rectification, effacement et opposition, en écrivant par le formulaire de contact. Vous
            pouvez aussi déposer une réclamation auprès de la CNIL (
            <a href="https://www.cnil.fr" className={lien}>
              cnil.fr
            </a>
            ).
          </li>
        </ul>

        <h2 className="mt-10 text-[22px]">Cookies</h2>
        <p className="mt-3">
          Ce site n&apos;utilise aucun cookie ni outil de mesure d&apos;audience. Votre choix de thème clair ou sombre
          est gardé dans votre navigateur, uniquement sur votre appareil.
        </p>

        <h2 className="mt-10 text-[22px]">Propriété</h2>
        <p className="mt-3">
          Les textes et le code de ce site sont ceux d&apos;Awad Ahmed ; les captures d&apos;écran montrent des sites
          qu&apos;il a réalisés.
        </p>
      </div>
    </article>
  );
}
