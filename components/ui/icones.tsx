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
export const IconeFleche = () => (
  <svg {...props} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
