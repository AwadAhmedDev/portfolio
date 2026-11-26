// Textes des pages, recopiés mot pour mot de docs/contenus.md (règle R8).

export const accueil = {
  titrePage: "Awad Dev — Développeur Full Stack JavaScript / TypeScript",
  description:
    "Développeur Full Stack en Île-de-France. Applications web complètes et en ligne, avec React, Next.js et Node.js. Ouvert aux postes en CDI ou CDD et aux missions freelance.",
  petitTitre: "Développeur Full Stack JavaScript / TypeScript",
  titre: "Awad",
  technologies: ["React", "Next.js", "Node.js"],
  presentation:
    "Je conçois, développe et mets en ligne des applications web complètes : de l'interface au serveur et à la base de données, avec des tests et un déploiement automatique.",
  // Premier écran refait le 25/11/2026 (choix d'Awad) : le titre dit ce que je fais, le nom passe au-dessus.
  accroche: "Je conçois et développe des applications web complètes, testées et mises en ligne.",
  sousAccroche: "De l'interface au serveur et à la base de données, avec React, Next.js et Node.js.",
  // Preuves du premier écran, en langage client (25/11/2026) ; {enLigne} et {clients} sont calculés.
  preuvesHaut: [
    "{enLigne} sites en ligne, dont {clients} pour des clients",
    "Chaque modification vérifiée avant la mise en ligne",
    "Jusqu'à 100/100 en vitesse sur l'outil de mesure de Google",
  ],
  // « Ce que vous obtenez » (25/11/2026) : bénéfices pour le client, chacun avec une preuve vérifiable.
  // {seo}, {tests} et {projets} sont calculés depuis les données des projets.
  avantages: {
    titre: "Ce que vous obtenez",
    sousTitre: "Un site professionnel, pensé pour vos visiteurs, pour Google et pour durer.",
    liste: [
      {
        cle: "rapide",
        titre: "Un site rapide",
        texte: "Il s'affiche en un instant, même sur téléphone : vos visiteurs restent.",
        preuve: "Jusqu'à 100/100 en vitesse sur l'outil de mesure de Google",
      },
      {
        cle: "google",
        titre: "Trouvé sur Google",
        texte:
          "Chaque page est préparée pour le référencement : titres, descriptions et aperçus pour les réseaux sociaux.",
        preuve: "{seo} de mes sites ont 100/100 en référencement sur l'outil de Google",
      },
      {
        cle: "securise",
        titre: "Sécurisé",
        texte: "Connexion HTTPS, serveur protégé et formulaires à l'abri des robots.",
        preuve: "Protections contrôlées automatiquement à chaque mise en ligne de ce portfolio",
      },
      {
        cle: "ecrans",
        titre: "Parfait sur tous les écrans",
        texte: "Téléphone, tablette ou ordinateur : le site s'adapte et reste agréable à utiliser.",
        preuve: "Ce portfolio est testé sur Chrome, Firefox et Safari",
      },
      {
        cle: "fiable",
        titre: "Fiable",
        texte: "Chaque modification est vérifiée automatiquement avant d'être mise en ligne : moins de pannes.",
        preuve: "{tests} tests automatiques sur mes {projets} projets",
      },
      {
        cle: "accessible",
        titre: "Accessible à tous",
        texte: "Lisible par tous, y compris par les personnes malvoyantes ou qui naviguent au clavier.",
        preuve: "100/100 en accessibilité pour ce portfolio",
      },
    ],
  },
  // « Vous êtes… » (26/11/2026) : juste sous le premier écran, chaque visiteur trouve son chemin.
  pourQui: {
    titre: "Vous êtes…",
    choix: [
      {
        pour: "Recruteur ou entreprise",
        texte: "Vous cherchez un développeur Full Stack en CDI, en CDD ou pour une mission longue.",
        bouton: "Voir mon profil",
        lien: "/a-propos/",
      },
      {
        pour: "Porteur de projet",
        texte: "Vous voulez créer ou refaire un site, une boutique ou une application sur mesure.",
        bouton: "Voir l'offre freelance",
        lien: "#freelance",
      },
    ],
  },
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
  // Bloc freelance repensé le 26/11/2026 (demande d'Awad) : deux parcours, premier site ou refonte,
  // chacun avec ce qui compte pour un client (vitesse, Google, sécurité, accessibilité, téléphone).
  freelance: {
    titre: "Vous avez un projet de site ou d'application ?",
    texte:
      "Entrepreneur, artisan, association ou PME : que ce soit votre tout premier site ou la refonte de l'actuel, je m'occupe de tout, de l'idée à la mise en ligne.",
    realisationsTitre: "Ce que je réalise",
    realisations: [
      "Site vitrine",
      "Réservation en ligne",
      "Boutique en ligne",
      "Application sur mesure",
      "Back-office pour gérer votre activité",
      "Refonte d'un site existant",
    ],
    etapesTitre: "Comment je travaille",
    etapes: [
      {
        titre: "Échange gratuit",
        texte: "vous me présentez votre besoin ; si vous avez déjà un site, je l'analyse avant.",
      },
      { titre: "Devis", texte: "une solution, un prix et un délai clairs, sans surprise." },
      {
        titre: "Réalisation",
        texte: "je développe et je teste ; vous suivez l'avancement et donnez votre avis.",
      },
      { titre: "Mise en ligne", texte: "votre site est en ligne et je vous montre comment le gérer." },
    ],
    parcours: [
      {
        titre: "Votre premier site ou application",
        intro: "Vous partez de zéro ? Je vous accompagne à chaque étape.",
        points: [
          "Je vous aide à définir l'essentiel : objectifs, pages, fonctionnalités et budget",
          "Je m'occupe de toute la technique : nom de domaine, hébergement, connexion sécurisée (HTTPS)",
          "Rapide, sécurisé et accessible à tous dès le premier jour, sur téléphone comme sur ordinateur",
          "Prêt pour Google : titres, descriptions et aperçus pour les réseaux sociaux",
        ],
      },
      {
        titre: "Vous avez déjà un site ?",
        intro: "Il est lent, daté ou mal référencé ? Je le remets à niveau.",
        points: [
          "Je fais le point : vitesse, référencement, sécurité, accessibilité et affichage sur téléphone",
          "Je le refais avec un design moderne, en gardant vos textes, vos images et votre identité",
          "Plus sûr : connexion HTTPS, serveur protégé, formulaires à l'abri des robots",
          "Votre place sur Google est préservée : les anciennes adresses mènent aux nouvelles pages",
          "Changement d'hébergeur ou de nom de domaine si besoin",
        ],
      },
    ],
    // Ce qu'Awad inclut vraiment (décisions du 25/11/2026 : 1 mois de corrections, maintenance en option).
    inclusTitre: "Ce qui est inclus",
    inclus: [
      "Mise en ligne, avec nom de domaine et hébergement configurés",
      "Vitesse, sécurité et accessibilité contrôlées avant la livraison",
      "Prise en main : je vous montre comment gérer votre site",
      "1 mois de corrections offertes après la mise en ligne",
      "Maintenance proposée après la livraison, selon vos besoins",
    ],
    bouton: "Parlons de votre projet",
  },
  rappel: "Un poste, une mission ou une question ? Je réponds sous 24 h.",
};

export const pageProjets = {
  titrePage: "Projets — Awad Dev",
  description:
    "Six projets web : trois projets clients en ligne, un template SaaS et deux projets de formation. Technologies, rôle et preuves de qualité.",
  titre: "Mes projets",
  intro:
    "Trois projets clients en ligne, un projet personnel et deux projets de formation. Pour chacun : ce qu'il fait, mon rôle et ce qui prouve sa qualité.",
  bas: "Un projet en tête ?",
};

export const aPropos = {
  titrePage: "À propos — Awad Dev, développeur Full Stack JavaScript / TypeScript",
  description:
    "Awad, développeur Full Stack JavaScript / TypeScript en Île-de-France : ce qu'il apporte aux entreprises et aux porteurs de projet, compétences et parcours.",
  // Refonte du 26/11/2026 (texte proposé par Awad, adapté) : chaque promesse a une preuve vérifiable.
  surtitre: "À propos",
  titre: "Je transforme un besoin en application web qui fonctionne.",
  presentation: [
    "Je suis Awad, développeur Full Stack JavaScript / TypeScript en Île-de-France. Je conçois des applications web sur mesure, de la base de données jusqu'à l'écran de vos utilisateurs.",
    "Mon objectif : allier rigueur technique et vision business. Avant d'écrire du code, je cherche à comprendre ce que le produit doit apporter, puis je livre une solution solide qui répond précisément au besoin.",
    "Formé chez Simplon.co, j'ai déjà livré {clients} projets pour des clients, tous en ligne aujourd'hui.",
  ],
  garantiesTitre: "Ce que je garantis",
  garantiesSousTitre: "À mes clients comme à mes employeurs.",
  garanties: [
    {
      titre: "Une maîtrise de bout en bout",
      texte:
        "Je prends en charge une fonctionnalité entière : base de données, API, serveur, puis une interface fluide et agréable sur tous les écrans.",
      preuve: "{clients} projets clients en ligne, que vous pouvez visiter",
    },
    {
      titre: "Vos objectifs avant la technique",
      texte:
        "Je traduis vos objectifs en fonctionnalités concrètes et je choisis la solution la plus simple qui marche : moins de coûts, une mise en ligne plus rapide, des utilisateurs satisfaits.",
      preuve: "{seo} de mes sites ont 100/100 en référencement sur l'outil de Google",
    },
    {
      titre: "Fiabilité et transparence",
      texte:
        "Code propre et versionné avec Git, tests automatisés, intégration continue. Je vous tiens informé à chaque étape et je m'engage sur un délai dès le devis.",
      preuve: "{tests} tests automatiques sur mes {projets} projets",
    },
  ],
  aideTitre: "Comment je peux vous aider",
  aide: [
    {
      pour: "Entreprises et recruteurs",
      contrat: "CDI, CDD ou mission longue",
      points: [
        "Je m'intègre dans votre équipe : je lis le code existant et je respecte vos conventions.",
        "Je propose des choix d'architecture argumentés (React, Next.js, Node.js, TypeScript).",
        "Je développe des fonctionnalités complètes en autonomie, testées avant la mise en ligne.",
      ],
      bouton: "Me proposer un poste",
      lien: "/contact/",
    },
    {
      pour: "Porteurs de projet et startups",
      contrat: "Freelance",
      points: [
        "Un MVP (première version de votre produit) pour tester votre marché rapidement.",
        "La refonte d'un site ou d'une application existante.",
        "L'amélioration de la vitesse et du référencement de votre site.",
      ],
      bouton: "Parlons de votre projet",
      lien: "/contact/?demande=freelance",
    },
  ],
  competencesTitre: "Compétences",
  competences: [
    { titre: "Interface (front-end)", liste: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui"] },
    {
      titre: "Serveur et API (back-end)",
      liste: ["Node.js", "Express", "Zod", "JWT", "Better Auth", "Resend", "Stripe (mode test)"],
    },
    {
      titre: "Données",
      liste: ["PostgreSQL", "MySQL", "Prisma", "Supabase (Row Level Security, Edge Functions)", "Cloudflare R2"],
    },
    {
      titre: "Qualité et sécurité",
      liste: ["Vitest", "Supertest", "Playwright", "Dependabot", "Cloudflare Turnstile"],
    },
    { titre: "Mise en ligne", liste: ["Git et GitHub", "GitHub Actions", "Docker", "Caddy", "Hostinger"] },
    { titre: "Outils d'IA", liste: ["Claude Code", "Claude Design", "ChatGPT"] },
  ],
  competencesNote: "Je n'affiche que des technologies utilisées dans des projets que vous pouvez consulter.",
  ia: "J'utilise ces outils d'IA pour concevoir, relire le code et écrire des tests. Je relis, je teste et je reste responsable de tout ce que je livre.",
  parcoursTitre: "Parcours",
  rappel: "Un poste à pourvoir ou un projet à lancer ? Parlons-en.",
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
  titrePage: "Contact — Awad Dev",
  description:
    "Proposer un poste, une mission freelance ou poser une question à Awad, développeur Full Stack JavaScript / TypeScript. Réponse sous 24 h.",
  titre: "Me contacter",
  intro: "Un poste en CDI ou CDD, une mission freelance ou une simple question : écrivez-moi. Je réponds sous 24 h.",
  moyens: "Pour me joindre : ce formulaire ou LinkedIn.",
  // Page refaite le 25/11/2026 (demande d'Awad) : repères, étapes et formulaire dans une carte.
  reperes: [
    { titre: "Réponse", texte: "Sous 24 h, par e-mail." },
    { titre: "Disponibilité", texte: "Postes en CDI ou CDD et missions freelance." },
    { titre: "Lieu", texte: "Île-de-France" },
  ],
  etapes: {
    titre: "Comment ça se passe",
    liste: [
      "Vous m'écrivez avec ce formulaire ou sur LinkedIn.",
      "Je vous réponds sous 24 h, par e-mail.",
      "Nous échangeons sur votre poste ou votre projet.",
    ],
  },
  formulaireTitre: "Envoyer un message",
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
  titrePage: "Page introuvable — Awad Dev",
  titre: "Cette page n'existe pas.",
  texte: "L'adresse est peut-être mal écrite, ou la page a été déplacée.",
};

// Mentions légales (contenus.md §6, décision A11). La note interne sur l'adresse de Hostinger n'est pas affichée ;
// adresse revérifiée le 23/11/2026 dans les conditions d'utilisation de Hostinger.
export const mentions = {
  titrePage: "Mentions légales — Awad Dev",
  description: "Éditeur, hébergeur et traitement des données personnelles du portfolio Awad Dev.",
  titre: "Mentions légales",
  editeur: {
    titre: "Éditeur du site",
    avant: "Awad Ahmed, particulier. Contact : par le ",
    lien: "formulaire de contact",
    apres: ".",
  },
  hebergeur: {
    titre: "Hébergeur",
    avant: "Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre — ",
    lien: "www.hostinger.fr",
    url: "https://www.hostinger.fr",
    apres: ".",
  },
  donnees: {
    titre: "Données personnelles (formulaire de contact)",
    elements: [
      "Données collectées : nom, adresse e-mail, type de demande, message.",
      "But : uniquement répondre à votre demande.",
      "Base : votre accord, donné en cochant la case du formulaire.",
      "Destinataire : Awad Ahmed. Le message est transmis par le service d'envoi d'e-mails Resend.",
      "Durée de conservation : **12 mois** après le dernier échange, puis suppression.",
      "Transfert hors de l'Union européenne : Resend est une société américaine ; les messages peuvent donc transiter par des serveurs situés hors de l'Union européenne.",
    ],
    droits: {
      avant:
        "Vos droits : accès, rectification, effacement et opposition, en écrivant par le formulaire de contact. Vous pouvez aussi déposer une réclamation auprès de la CNIL (",
      lien: "cnil.fr",
      url: "https://www.cnil.fr",
      apres: ").",
    },
  },
  cookies: {
    titre: "Cookies",
    texte:
      "Ce site n'utilise aucun cookie ni outil de mesure d'audience. Votre choix de thème clair ou sombre est gardé dans votre navigateur, uniquement sur votre appareil.",
  },
  propriete: {
    titre: "Propriété",
    texte:
      "Les textes et le code de ce site sont ceux d'Awad ; les captures d'écran montrent des sites qu'il a réalisés.",
  },
};
