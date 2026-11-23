// Textes des pages, recopiés mot pour mot de docs/contenus.md (règle R8).

export const accueil = {
  petitTitre: "Développeur Full Stack JavaScript / TypeScript",
  titre: "Awad Ahmed",
  technologies: ["React", "Next.js", "Node.js"],
  presentation:
    "Je conçois, développe et mets en ligne des applications web complètes : de l'interface au serveur et à la base de données, avec des tests et un déploiement automatique.",
  lieu: "Île-de-France",
  disponibilite: "Ouvert aux postes en CDI ou CDD et aux missions freelance.",
  projets: {
    titre: "Projets clients",
    sousTitre: "Des sites réels, conçus et développés pour des clients, en ligne aujourd'hui.",
    lien: "Voir les 6 projets",
  },
  chiffres: {
    titre: "Preuves en chiffres",
    note: "Chiffres relevés sur les dépôts et les sites en ligne le 22 novembre 2026.",
  },
  freelance: {
    titre: "Vous avez un projet de site ou d'application ?",
    texte: "Entrepreneur, artisan ou PME : je réalise votre projet de A à Z et je le mets en ligne.",
    realisationsTitre: "Ce que je réalise",
    realisations: [
      "Site vitrine",
      "Réservation en ligne",
      "Boutique en ligne",
      "Application sur mesure",
      "Back-office pour gérer votre activité",
    ],
    etapesTitre: "Comment je travaille",
    etapes: [
      { titre: "Échange gratuit", texte: "vous me présentez votre besoin." },
      { titre: "Devis", texte: "je vous propose une solution, un prix et un délai." },
      { titre: "Réalisation et mise en ligne", texte: "je développe, je teste et je mets votre site en ligne." },
    ],
    bouton: "Parlons de votre projet",
  },
  rappel: "Un poste, une mission ou une question ? Je réponds sous 24 h.",
};

export const pageProjets = {
  titrePage: "Projets — Awad Ahmed",
  description:
    "Six projets web : trois projets clients en ligne, un template SaaS et deux projets de formation. Technologies, rôle et preuves de qualité.",
  titre: "Mes projets",
  intro:
    "Trois projets clients en ligne, un projet personnel et deux projets de formation. Pour chacun : ce qu'il fait, mon rôle et ce qui prouve sa qualité.",
  bas: "Un projet en tête ?",
};

export const aPropos = {
  titrePage: "À propos — Awad Ahmed, développeur Full Stack",
  description:
    "Compétences, parcours et façon de travailler d'Awad Ahmed, développeur Full Stack JavaScript / TypeScript en Île-de-France.",
  titre: "À propos",
  presentation:
    "Je suis Awad Ahmed, développeur Full Stack JavaScript / TypeScript en Île-de-France. Formé chez Simplon.co, je réalise des applications web complètes, de l'interface à la base de données, et je les mets en ligne. J'ai livré des projets pour des clients, que vous pouvez visiter aujourd'hui.",
  competences: [
    {
      titre: "Utilisé dans plusieurs projets",
      liste: [
        "React",
        "TypeScript",
        "Vite",
        "Next.js",
        "Node.js",
        "Express",
        "MySQL",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "Tailwind CSS",
        "Zod",
        "Vitest",
        "Supertest",
        "GitHub Actions",
        "Resend",
        "Stripe (mode test)",
        "Cloudflare R2",
        "Dependabot",
      ],
    },
    {
      titre: "Utilisé dans un projet",
      liste: [
        "Row Level Security et Edge Functions (Supabase)",
        "Cloudflare Turnstile",
        "Better Auth",
        "Playwright",
        "Docker",
        "Caddy",
        "shadcn/ui",
        "JWT",
      ],
    },
    { titre: "Outils de travail", liste: ["Git et GitHub", "Hostinger", "Claude Code", "Claude Design", "ChatGPT"] },
  ],
  competencesNote: "Je n'affiche que des technologies utilisées dans des projets que vous pouvez consulter.",
  facon: [
    { titre: "Tester", texte: "mes projets ont des tests automatisés, lancés à chaque modification." },
    { titre: "Automatiser", texte: "intégration continue sur GitHub et mise en ligne automatique." },
    { titre: "Mesurer", texte: "je vérifie la vitesse, l'accessibilité et le référencement avec Lighthouse." },
    {
      titre: "Outils d'IA",
      texte:
        "J'utilise Claude Code, Claude Design et ChatGPT pour concevoir, relire le code et écrire des tests. Je relis, je teste et je reste responsable de tout ce que je livre.",
    },
  ],
  formation: {
    titre: "Formation « Développeur web et web mobile » — Simplon.co",
    dates: "septembre 2025 – avril 2026",
  },
  // Parcours daté, relié aux fiches (design.md §2).
  parcours: [
    {
      date: "Décembre 2025",
      projets: [
        { slug: "solidays", note: "formation, en équipe de 3" },
        { slug: "emateriel", note: "formation" },
      ],
    },
    { date: "Mars 2026", projets: [{ slug: "i-make-my-world", note: "client" }] },
    {
      date: "Juin 2026",
      projets: [
        { slug: "repatek", note: "client" },
        { slug: "plateforme-editoriale", note: "client" },
      ],
    },
    { date: "Octobre 2026", projets: [{ slug: "template-nextjs", note: "personnel" }] },
  ],
  cvTexte: "CV disponible en français, en anglais et en allemand.",
};

export const contact = {
  titrePage: "Contact — Awad Ahmed",
  description:
    "Proposer un poste, une mission freelance ou poser une question à Awad Ahmed, développeur Full Stack. Réponse sous 24 h.",
  titre: "Me contacter",
  intro: "Un poste en CDI ou CDD, une mission freelance ou une simple question : écrivez-moi. Je réponds sous 24 h.",
  moyens: "Pour me joindre : ce formulaire ou LinkedIn.",
  champs: {
    nom: "Votre nom",
    email: "Votre adresse e-mail",
    emailAide: "Pour que je puisse vous répondre.",
    demande: "Votre demande",
    demandes: ["Offre d'emploi", "Projet freelance", "Autre"],
    message: "Votre message",
    messageAide: "Entre 20 et 3 000 caractères.",
    accord: "J'accepte que mes données servent uniquement à répondre à ma demande.",
    accordLien: "En savoir plus",
    envoyer: "Envoyer le message",
    envoi: "Envoi en cours…",
    obligatoire: "(obligatoire)",
  },
  messages: {
    succes: "Merci, votre message est bien envoyé. Je vous réponds sous 24 h.",
    vide: "Ce champ est obligatoire.",
    emailInvalide: "Cette adresse e-mail ne semble pas valide.",
    tropCourt: "Votre message doit contenir au moins 20 caractères.",
    tropLong: "Votre message ne doit pas dépasser 3 000 caractères.",
    accord: "Merci de cocher la case pour que je puisse vous répondre.",
    tropDeDemandes: "Vous avez envoyé plusieurs messages en peu de temps. Réessayez dans quelques minutes.",
    echec: "Le message n'a pas pu être envoyé. Réessayez, ou écrivez-moi sur LinkedIn.",
  },
  sansJs: "Le formulaire a besoin de JavaScript. Vous pouvez aussi m'écrire sur LinkedIn.",
};

export const page404 = {
  titrePage: "Page introuvable — Awad Ahmed",
  titre: "Cette page n'existe pas.",
  texte: "L'adresse est peut-être mal écrite, ou la page a été déplacée.",
};
