// Les 6 projets, dans l'ordre A2. Textes recopiés mot pour mot de docs/contenus.md §2 et §3 (règle R8).
// Chiffres : docs/design.md §7.1. Une valeur Lighthouse à null s'affiche « Non relevé ».

export type Badge = "Projet client" | "Projet personnel" | "Projet de formation";

export type Tests = {
  unitaires?: number;
  integration?: number;
  scenariosE2E?: number;
  profilsE2E?: number;
};

export type Scores = {
  performance: number | null;
  accessibilite: number | null;
  bonnesPratiques: number | null;
  seo: number | null;
};

export type ChoixTechnique = { decision: string; raison?: string };

export type Projet = {
  slug: string;
  nom: string;
  badge: Badge;
  equipe?: string; // complément du badge (Solidays)
  phrase: string; // phrase de la carte et introduction de la fiche
  techCarte: string[]; // 5 au plus
  debut: string; // mois de début (A5)
  site?: string;
  code?: string;
  mentionHaut?: string; // encadré en tête de fiche
  mentionCode?: string; // à la place du lien « code » (I Make My World)
  mentionSite?: string; // à la place du lien « site » (Template)
  titrePage: string;
  description: string;
  leProjet: string;
  monRole: { texte: string; gras?: string; suite?: string };
  fonctionnalites: string[];
  technologies: string[] | { titre: string; liste: string[] }[];
  choix: ChoixTechnique[];
  defis: string[]; // le problème que résout chaque choix, dans le même ordre (fiche « Défis et solutions »)
  architecture?: { titre: string; detail: string }[]; // couches du schéma d'architecture
  roleCourt?: string; // rôle affiché en tête de fiche quand « Mon rôle » est long (Solidays)
  qualite: string[];
  tests: Tests;
  lighthouse?: { mesure: string; ordinateur: Scores; mobile: Scores };
  // Parcours en images (26/11/2026) : écrans clés légendés et courte vidéo sans son, dans « Fonctionnalités clés ».
  parcours?: { image: string; titre: string; legende: string }[];
  video?: { fichier: string; poster: string; description: string };
  schema?: boolean; // schéma d'architecture à la place des captures (Template)
};

export const projets: Projet[] = [
  {
    slug: "repatek",
    nom: "RepaTek",
    badge: "Projet client",
    phrase: "Réservation en ligne pour un service de dépannage informatique à domicile, aux Ulis (Essonne).",
    techCarte: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Resend"],
    debut: "juin 2026",
    site: "https://repatek.fr",
    code: "https://github.com/AwadAhmedDev/repartech-booking",
    titrePage: "RepaTek — réservation de dépannage informatique · Awad Dev",
    description:
      "Site de réservation pour un technicien informatique à domicile : créneaux calculés, back-office, e-mails. React, TypeScript, Supabase.",
    leProjet:
      "RepaTek est le site d'un service de dépannage informatique à domicile aux Ulis, en Essonne : diagnostic, suppression de virus, passage au SSD, récupération de données. Le client choisit une prestation et un créneau, indique son adresse, et le technicien valide le rendez-vous depuis un back-office.",
    monRole: {
      texte: "seul développeur, de la conception à la mise en ligne, pour le client ",
      gras: "Aden Dahier Okieh",
      suite: ".",
    },
    fonctionnalites: [
      "Réservation en 4 étapes : prestation, date et créneau, coordonnées et adresse, confirmation.",
      "Créneaux calculés selon les horaires, les jours fermés, la durée de la prestation, le délai de prévenance et une marge de trajet entre deux rendez-vous.",
      "E-mail de réception de la demande, puis e-mail de confirmation quand le technicien valide.",
      "Back-office : rendez-vous, prestations, horaires, jours fermés et réglages.",
      "Une page par prestation, une FAQ et les pages légales.",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS 4",
      "Supabase (PostgreSQL, authentification, Row Level Security, fonctions SQL, Edge Functions)",
      "Resend",
      "GitHub Actions",
      "Hostinger",
    ],
    choix: [
      {
        decision: "Une réservation passe uniquement par une fonction SQL qui revalide tout",
        raison:
          " (horaires, délai, marge de trajet, champs) : le navigateur ne peut pas créer un rendez-vous qui ne respecte pas les règles.",
      },
      {
        decision: "La base refuse elle-même deux rendez-vous qui se chevauchent",
        raison: " (contrainte d'exclusion PostgreSQL) : c'est la dernière barrière, quel que soit le code.",
      },
      {
        decision: "Aucune donnée client n'est lisible publiquement",
        raison: " (Row Level Security) : le calendrier public ne reçoit que des heures occupées.",
      },
    ],
    defis: [
      "Un visiteur ne doit pas pouvoir contourner les règles de réservation depuis son navigateur.",
      "Deux clients ne doivent jamais obtenir le même créneau, même s'ils réservent au même moment.",
      "Le calendrier public ne doit révéler aucune information sur les autres clients.",
    ],
    architecture: [
      { titre: "Interface", detail: "React 19, TypeScript, Vite, Tailwind CSS 4" },
      { titre: "Serveur", detail: "Supabase : authentification, fonctions SQL, Edge Functions" },
      { titre: "Base de données", detail: "PostgreSQL avec Row Level Security" },
      { titre: "Services", detail: "Resend pour les e-mails" },
    ],
    parcours: [
      {
        image: "repatek-etape-prestation",
        titre: "1. Le client choisit sa prestation",
        legende: "Chaque service affiche son prix et sa durée, qui servent ensuite à calculer les créneaux.",
      },
      {
        image: "repatek-etape-creneau",
        titre: "2. Il choisit un jour et un créneau",
        legende:
          "Seuls les créneaux vraiment libres sont proposés : horaires, jours fermés, durée de la prestation et temps de trajet sont pris en compte.",
      },
      {
        image: "repatek-etape-coordonnees",
        titre: "3. Il indique ses coordonnées et son adresse",
        legende:
          "Le technicien valide ensuite la demande depuis son back-office, et le client reçoit un e-mail à chaque étape.",
      },
    ],
    video: {
      fichier: "/videos/repatek-reservation.mp4",
      poster: "/images/repatek-etape-prestation-960.webp",
      description:
        "Vidéo sans son : choix d'une prestation, d'un jour et d'un créneau, puis formulaire de coordonnées. La démonstration s'arrête avant l'envoi.",
    },
    qualite: ["17 tests automatisés, lancés avant chaque déploiement", "Déploiement automatique sur Hostinger"],
    tests: { unitaires: 17 },
    lighthouse: {
      mesure: "le 22 novembre 2026",
      ordinateur: { performance: 97, accessibilite: 100, bonnesPratiques: 100, seo: 100 },
      mobile: { performance: 87, accessibilite: 100, bonnesPratiques: 100, seo: 100 },
    },
  },
  {
    slug: "i-make-my-world",
    nom: "I Make My World",
    badge: "Projet client",
    phrase:
      "Plateforme qui réunit des projets à impact, des experts et des investisseurs, avec un espace de modération.",
    techCarte: ["React", "TypeScript", "Express", "MySQL", "Tailwind CSS"],
    debut: "mars 2026",
    site: "https://teal-starling-640860.hostingersite.com",
    mentionCode: "Le code de ce projet client est privé. Je peux le présenter en entretien.",
    titrePage: "I Make My World — plateforme de projets à impact · Awad Dev",
    description:
      "Plateforme qui réunit créateurs, experts et investisseurs, avec back-office de modération. React, Express, MySQL, 45 tests.",
    leProjet:
      "I Make My World réunit sur une même plateforme des créateurs, qui publient des projets à impact, des experts, qui proposent leur accompagnement, et des investisseurs, qui découvrent des projets à soutenir. Tout contenu publié est d'abord validé par un administrateur.",
    monRole: { texte: "seul développeur, de la conception à la mise en ligne." },
    fonctionnalites: [
      "Catalogue des projets filtrable par thématique, annuaire des experts filtrable par domaine, demande d'accompagnement.",
      "Espace membre : profil, changement de mot de passe, suppression du compte.",
      "Créateurs : dépôt et modification de projets avec image, suivi du statut (en attente, publié, refusé avec motif).",
      "Experts : candidature, gestion de ses expertises, réponse aux demandes reçues.",
      "Back-office : tableau de bord, modération des projets et des expertises, gestion des utilisateurs et de leurs rôles, abonnements, messages de contact.",
    ],
    technologies: [
      {
        titre: "Interface",
        liste: [
          "React 19",
          "TypeScript",
          "Vite",
          "React Router",
          "Tailwind CSS 4",
          "shadcn/ui",
          "React Hook Form",
          "Zod",
        ],
      },
      {
        titre: "Serveur",
        liste: ["Node.js", "Express 5", "MySQL", "JWT", "bcrypt", "Helmet", "Cloudflare R2", "Resend"],
      },
      { titre: "Tests et mise en ligne", liste: ["Vitest", "Supertest", "GitHub Actions", "Hostinger"] },
    ],
    choix: [
      { decision: "Une API Express séparée de l'interface", raison: ", avec authentification par jeton (JWT)." },
      { decision: "Images stockées dans un espace privé Cloudflare R2", raison: ", servies uniquement par l'API." },
      { decision: "Protection de l'API", raison: " : limite de demandes et en-têtes de sécurité." },
    ],
    defis: [
      "Chaque profil (créateur, expert, administrateur) doit n'accéder qu'à ce qui le concerne.",
      "Les images déposées par les membres ne doivent pas être accessibles à tout le monde.",
      "Une API ouverte sur Internet est exposée aux abus et aux attaques courantes.",
    ],
    architecture: [
      { titre: "Interface", detail: "React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui" },
      { titre: "API", detail: "Node.js, Express 5, authentification JWT" },
      { titre: "Données", detail: "MySQL, images privées sur Cloudflare R2" },
      { titre: "Services", detail: "Resend pour les e-mails" },
    ],
    parcours: [
      {
        image: "i-make-my-world-etape-catalogue",
        titre: "1. Le catalogue des projets, filtré",
        legende: "Recherche et filtre par thématique : le nombre de projets trouvés se met à jour aussitôt.",
      },
      {
        image: "i-make-my-world-etape-projet",
        titre: "2. La fiche d'un projet",
        legende:
          "Description, marché, problème, solution et porteur du projet. Tout contenu publié a d'abord été validé par un administrateur.",
      },
      {
        image: "i-make-my-world-etape-experts",
        titre: "3. L'annuaire des experts, filtré par domaine",
        legende:
          "Chaque expert présente son domaine et son expérience, et un porteur de projet peut lui demander un accompagnement.",
      },
    ],
    video: {
      fichier: "/videos/i-make-my-world-parcours.mp4",
      poster: "/images/i-make-my-world-etape-catalogue-960.webp",
      description:
        "Vidéo sans son : filtre des projets par catégorie, ouverture d'une fiche, puis annuaire des experts filtré par domaine. Données de démonstration du site.",
    },
    qualite: ["45 tests d'intégration (Vitest et Supertest)", "TypeScript strict", "Intégration continue"],
    tests: { integration: 45 },
    lighthouse: {
      mesure: "le 28 novembre 2026",
      ordinateur: { performance: 99, accessibilite: 96, bonnesPratiques: 100, seo: 100 },
      mobile: { performance: 94, accessibilite: 96, bonnesPratiques: 100, seo: 100 },
    },
  },
  {
    slug: "plateforme-editoriale",
    nom: "Plateforme éditoriale",
    badge: "Projet client",
    phrase: "Média francophone sur l'actualité et l'analyse de la Corne de l'Afrique, avec son espace de rédaction.",
    techCarte: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare R2"],
    debut: "juin 2026",
    site: "https://snowy-floralwhite-giraffe-20.hostingersite.com",
    code: "https://github.com/AwadAhmedDev/plateforme-editoriale",
    titrePage: "Plateforme éditoriale — média sur la Corne de l'Afrique · Awad Dev",
    description:
      "Média francophone et son espace de rédaction. Next.js 16, Prisma, PostgreSQL, Cloudflare R2. 16 tests, Lighthouse 100.",
    leProjet:
      "Un média francophone consacré à la Corne de l'Afrique (asile, migrations, droits humains, analyses par pays), avec son espace de rédaction. Une seule personne administre le site, rédige et publie.",
    monRole: { texte: "conception et développement du site, pour l'éditeur ", gras: "Harbi Egueh Aouled", suite: "." },
    fonctionnalites: [
      "Accueil éditorial : article à la une, actualités, analyses et enquêtes, fil « En continu ».",
      "Pages par rubrique et par pays, liste des articles avec filtres.",
      "Recherche plein texte.",
      "Page article : temps de lecture, partage, « citer cet article », articles liés.",
      "Newsletter et formulaire de contact protégé contre les robots.",
      "Back-office : tableau de bord, articles (brouillon, publié, archivé), rubriques et pays, inscrits à la newsletter, messages.",
    ],
    technologies: [
      "Next.js 16 (App Router, Server Components, Server Actions)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma 7",
      "PostgreSQL (Supabase)",
      "Zod",
      "Cloudflare R2",
      "Resend",
      "Cloudflare Turnstile",
      "Vitest",
      "GitHub Actions",
      "Hostinger",
    ],
    choix: [
      { decision: "Images stockées sur Cloudflare R2", raison: ", hors du serveur du site." },
      {
        decision: "E-mails envoyés par l'API de Resend avec un simple appel HTTP",
        raison: ", sans bibliothèque en plus.",
      },
      { decision: "Protection anti-robots avec Cloudflare Turnstile." },
    ],
    defis: [
      "Un média accumule beaucoup d'images, qui ne doivent pas alourdir le serveur du site.",
      "Envoyer des e-mails sans ajouter de dépendance à maintenir.",
      "Les formulaires de contact et de newsletter attirent les robots.",
    ],
    architecture: [
      { titre: "Application", detail: "Next.js 16 : Server Components et Server Actions, TypeScript" },
      { titre: "Base de données", detail: "PostgreSQL (Supabase) avec Prisma 7" },
      { titre: "Stockage", detail: "Cloudflare R2 pour les images" },
      { titre: "Services", detail: "Resend pour les e-mails, Cloudflare Turnstile contre les robots" },
    ],
    parcours: [
      {
        image: "plateforme-editoriale-etape-pays",
        titre: "1. Les articles d'un pays",
        legende: "Chaque pays et chaque rubrique a sa page, avec des filtres par rubrique, type de contenu et date.",
      },
      {
        image: "plateforme-editoriale-etape-recherche",
        titre: "2. La recherche plein texte",
        legende: "Un mot-clé suffit, et les résultats peuvent être affinés par pays, rubrique, type et période.",
      },
      {
        image: "plateforme-editoriale-etape-article",
        titre: "3. La lecture d'un article",
        legende: "Fil d'Ariane, chapeau, rubrique et date, puis le temps de lecture, le partage et les articles liés.",
      },
    ],
    video: {
      fichier: "/videos/plateforme-editoriale-parcours.mp4",
      poster: "/images/plateforme-editoriale-etape-pays-960.webp",
      description:
        "Vidéo sans son : page d'un pays, recherche du mot « déplacés », puis ouverture du premier article trouvé.",
    },
    qualite: [
      "16 tests unitaires sur les règles de sécurité",
      "Lint sans aucun avertissement",
      "TypeScript strict",
      "Intégration continue",
    ],
    tests: { unitaires: 16 },
    lighthouse: {
      mesure: "le 28 novembre 2026",
      ordinateur: { performance: 100, accessibilite: 100, bonnesPratiques: 100, seo: 100 },
      mobile: { performance: 95, accessibilite: 100, bonnesPratiques: 100, seo: 100 },
    },
  },
  {
    slug: "template-nextjs",
    nom: "Template Next.js",
    badge: "Projet personnel",
    phrase: "Base de projet SaaS prête à l'emploi : comptes, paiement, e-mails, tests et déploiement.",
    techCarte: ["Next.js", "Better Auth", "Stripe", "Prisma", "Playwright"],
    debut: "octobre 2026",
    code: "https://github.com/AwadAhmedDev/nextjs-freelance-template",
    mentionSite: "Pas de site en ligne",
    titrePage: "Template Next.js SaaS · Awad Dev",
    description: "Base de projet SaaS : Next.js 16, Better Auth, Stripe, Prisma, tests Playwright, Docker et Caddy.",
    leProjet:
      "Une base de départ pour lancer une application SaaS : comptes utilisateurs, paiement, e-mails, base de données, tests et déploiement déjà en place.",
    monRole: { texte: "projet personnel, conçu et développé seul." },
    fonctionnalites: [
      "Comptes utilisateurs avec Better Auth.",
      "Paiement Stripe avec webhook.",
      "E-mails avec Resend et React Email.",
      "Base de données avec Prisma 7 et PostgreSQL.",
      "Déploiement prêt avec Docker et Caddy.",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Better Auth",
      "Stripe",
      "Prisma 7",
      "PostgreSQL",
      "Resend",
      "Vitest",
      "Playwright",
      "Docker",
      "Caddy",
      "GitHub Actions",
    ],
    choix: [
      {
        decision: "Tests de bout en bout Playwright dans l'intégration continue",
        raison: ", sur une vraie base de données préparée à chaque lancement.",
      },
      { decision: "Docker et Caddy", raison: " pour déployer sur un serveur avec HTTPS automatique." },
      {
        decision: "Contrôle des failles des dépendances dans l'intégration continue",
        raison: ", et mises à jour proposées par Dependabot.",
      },
    ],
    defis: [
      "Vérifier automatiquement les parcours complets avant chaque mise en ligne.",
      "Pouvoir déployer simplement sur un serveur, avec HTTPS.",
      "Les dépendances d'un projet vieillissent et peuvent contenir des failles.",
    ],
    qualite: [
      "13 tests unitaires (Vitest)",
      "7 scénarios E2E exécutés sur 2 profils : ordinateur et mobile (Playwright)",
      "Intégration continue",
      "Aucune faille connue dans les dépendances (vérifié le 22 novembre 2026)",
    ],
    tests: { unitaires: 13, scenariosE2E: 7, profilsE2E: 2 },
    schema: true,
  },
  {
    slug: "emateriel",
    nom: "eMatériel",
    badge: "Projet de formation",
    phrase: "Boutique en ligne de smartphones, tablettes et ordinateurs, avec paiement Stripe en mode test.",
    techCarte: ["React", "Express", "MySQL", "Stripe", "Vitest"],
    debut: "décembre 2025",
    site: "https://darkseagreen-sandpiper-710943.hostingersite.com",
    code: "https://github.com/AwadAhmedDev/eMateriel",
    titrePage: "eMatériel — boutique en ligne · Awad Dev",
    description:
      "Boutique en ligne avec panier, stock et paiement Stripe en mode test. React, Express, MySQL, 63 tests.",
    leProjet:
      "Une boutique en ligne de smartphones, tablettes, ordinateurs et accessoires. Projet de formation Simplon.co, que j'ai ensuite terminé et mis en ligne.",
    monRole: { texte: "projet de formation réalisé seul, puis terminé et mis en ligne." },
    fonctionnalites: [
      "Catalogue et panier.",
      "Paiement par Stripe, **en mode test** (aucun vrai paiement possible).",
      "Stock mis à jour de façon sûre au moment de la commande.",
      "Suivi de commande.",
      "Back-office.",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Express 5",
      "MySQL",
      "Zod",
      "Stripe",
      "Vitest",
      "Supertest",
      "GitHub Actions",
      "Hostinger",
    ],
    choix: [
      {
        decision: "Le stock est modifié dans une transaction",
        raison: " : deux commandes en même temps ne peuvent pas vendre le même dernier article.",
      },
      {
        decision: "Stripe appelé directement par son API",
        raison: ", sans bibliothèque en plus, et seule une clé de test est acceptée.",
      },
      { decision: "API testée avec Supertest", raison: " : 63 tests vérifient le serveur à chaque modification." },
    ],
    defis: [
      "Deux clients peuvent commander le dernier article en stock au même moment.",
      "Intégrer le paiement sans aucun risque de débiter une vraie carte.",
      "Chaque modification ne doit pas casser le serveur de la boutique.",
    ],
    architecture: [
      { titre: "Interface", detail: "React 19, TypeScript, Vite" },
      { titre: "API", detail: "Express 5, validation avec Zod" },
      { titre: "Base de données", detail: "MySQL" },
      { titre: "Services", detail: "Stripe en mode test" },
    ],
    parcours: [
      {
        image: "emateriel-etape-catalogue",
        titre: "1. Le catalogue",
        legende: "Chaque produit affiche sa catégorie, son prix et sa disponibilité en stock.",
      },
      {
        image: "emateriel-etape-produit",
        titre: "2. La fiche produit et l'ajout au panier",
        legende:
          "Le stock restant est indiqué, et l'ajout au panier est confirmé tout de suite, compteur du panier compris.",
      },
      {
        image: "emateriel-etape-panier",
        titre: "3. Le panier",
        legende:
          "Quantités modifiables et total TTC. La commande passe ensuite par une connexion, puis par le paiement Stripe en mode test.",
      },
    ],
    video: {
      fichier: "/videos/emateriel-parcours.mp4",
      poster: "/images/emateriel-etape-catalogue-960.webp",
      description:
        "Vidéo sans son : catalogue, fiche d'un produit, ajout au panier, puis le panier. La démonstration s'arrête avant la commande.",
    },
    qualite: ["63 tests automatisés", "Intégration continue"],
    tests: { unitaires: 63 },
    lighthouse: {
      mesure: "le 28 novembre 2026",
      ordinateur: { performance: 100, accessibilite: 100, bonnesPratiques: 100, seo: 100 },
      mobile: { performance: 100, accessibilite: 100, bonnesPratiques: 100, seo: 100 },
    },
  },
  {
    slug: "solidays",
    roleCourt: "Lead Dev de l'équipe de 3",
    nom: "Solidays",
    badge: "Projet de formation",
    equipe: "en équipe de 3",
    phrase: "Reproduction du site du festival Solidays, avec un espace de gestion des artistes.",
    techCarte: ["React", "TypeScript", "Vite", "Express", "MySQL"],
    debut: "décembre 2025",
    site: "https://tasteful-lightcoral-yak-94.hostingersite.com",
    code: "https://github.com/AwadAhmedDev/solidays_app",
    mentionHaut: "Projet de formation Simplon.co, réalisé en équipe de 3 : Awad, Prativa et Manon.",
    titrePage: "Solidays — projet de formation en équipe · Awad Dev",
    description:
      "Reproduction du site du festival Solidays avec gestion des artistes. Projet de formation en équipe de 3. React, Express, MySQL.",
    leProjet:
      "Une reproduction du site du festival Solidays, avec un espace de gestion des artistes. Le site de démonstration n'est pas référencé sur Google, pour ne pas être confondu avec le vrai festival.",
    monRole: {
      texte: "",
      gras: "Lead Dev de l'équipe de 3.",
      suite:
        " J'ai créé et mis en place le dépôt du projet, puis réalisé l'en-tête et la navigation adaptés au mobile, la section d'accueil animée, le pied de page, la page Festival, la billetterie, les mentions légales et le back-office de gestion des artistes. Après la formation, j'ai rénové le site, ajouté les tests et l'intégration continue, et je l'ai mis en ligne. Organisation de l'équipe : une branche par fonctionnalité, pull requests et revues de code, modélisation de la base réalisée ensemble.",
    },
    fonctionnalites: [
      "Accueil fidèle au site d'origine, avec une bannière d'artistes interactive : la photo change au survol de chaque nom.",
      "Programmation chargée depuis l'API, filtrée par jour.",
      "Fiches artistes : description, jour du concert, lien vidéo.",
      "Billetterie (liens vers les vendeurs officiels) et page Festival.",
      "Back-office sécurisé : connexion administrateur, ajout, modification et suppression d'artistes, envoi d'images avec aperçu.",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router",
      "Express 5",
      "MySQL",
      "Zod",
      "Helmet",
      "GitHub Actions",
      "Dependabot",
      "Hostinger",
    ],
    choix: [
      {
        decision: "Une branche par fonctionnalité et des revues de code",
        raison: " pour travailler à trois sur le même dépôt.",
      },
      {
        decision: "Les données des artistes viennent d'une API Express et d'une base MySQL",
        raison: ", modélisée ensemble avec la méthode Merise.",
      },
      { decision: "Entrées validées côté serveur avec Zod", raison: " et en-têtes de sécurité avec Helmet." },
    ],
    defis: [
      "Travailler à trois sur le même code sans se gêner.",
      "Gérer la programmation des artistes sans toucher au code du site.",
      "Protéger l'API et le back-office contre les données invalides et les attaques courantes.",
    ],
    architecture: [
      { titre: "Interface", detail: "React 19, TypeScript, Vite, React Router" },
      { titre: "API", detail: "Express 5, Zod, Helmet" },
      { titre: "Base de données", detail: "MySQL, modélisée avec la méthode Merise" },
    ],
    parcours: [
      {
        image: "solidays-etape-programmation",
        titre: "1. La programmation, filtrée par jour",
        legende: "Les artistes sont chargés depuis l'API et se filtrent par jour en un clic.",
      },
      {
        image: "solidays-etape-artiste",
        titre: "2. La fiche d'un artiste",
        legende: "Description, jour du concert et lien vidéo, gérés par l'équipe depuis le back-office.",
      },
      {
        image: "solidays-etape-billetterie",
        titre: "3. La billetterie",
        legende: "Chaque pass renvoie vers les vendeurs officiels du festival : le site ne vend rien lui-même.",
      },
    ],
    video: {
      fichier: "/videos/solidays-parcours.mp4",
      poster: "/images/solidays-etape-programmation-960.webp",
      description:
        "Vidéo sans son : programmation filtrée sur le samedi, fiche d'un artiste, puis les pass de la billetterie.",
    },
    qualite: ["24 tests automatisés", "Intégration et déploiement continus", "Dependabot"],
    tests: { unitaires: 24 },
  },
];

export function projetParSlug(slug: string): Projet | undefined {
  return projets.find((p) => p.slug === slug);
}

export function projetSuivant(slug: string): Projet {
  const i = projets.findIndex((p) => p.slug === slug);
  return projets[(i + 1) % projets.length]!;
}
