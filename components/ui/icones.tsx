// Icônes décoratives (aria-hidden) : trait de 2 px, 20 px (docs/design.md §3.3).
const props = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const IconeSoleil = () => (
  <svg {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const IconeLune = () => (
  <svg {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);
export const IconeMenu = () => (
  <svg {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
export const IconeCroix = () => (
  <svg {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const IconeCoche = () => (
  <svg {...props} width={18} height={18}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);
// Icônes de « Ce que vous obtenez » (accueil), 24 px.
const grande = { ...props, width: 24, height: 24 };
export const IconeEclair = () => (
  <svg {...grande}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);
export const IconeLoupe = () => (
  <svg {...grande}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);
export const IconeCadenas = () => (
  <svg {...grande}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);
export const IconeEcrans = () => (
  <svg {...grande}>
    <rect x="2" y="4" width="15" height="11" rx="2" />
    <rect x="15" y="9" width="7" height="12" rx="1.5" />
    <path d="M6 19h6" />
  </svg>
);
export const IconeBouclier = () => (
  <svg {...grande}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const IconeAccessible = () => (
  <svg {...grande}>
    <circle cx="12" cy="4.5" r="1.5" />
    <path d="M5 8.5 12 10l7-1.5M12 10v4l-3 6M12 14l3 6" />
  </svg>
);
export const IconeFleche = () => (
  <svg {...props} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconeHaut = () => (
  <svg {...props}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);
// Logos simplifiés de LinkedIn et GitHub (pleins), décoratifs : le nom est toujours écrit à côté.
const plein = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  focusable: false,
};
export const IconeLinkedIn = () => (
  <svg {...plein}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.6 4.77 6v5.46h-4v-4.84c0-1.16-.02-2.64-1.62-2.64-1.62 0-1.86 1.26-1.86 2.56v4.92h-4v-11Z" />
  </svg>
);
export const IconeGitHub = () => (
  <svg {...plein}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);
