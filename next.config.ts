import type { NextConfig } from "next";

// Site 100 % statique (architecture.md §1) : Hostinger sert le dossier out/.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // les images sont préparées à l'avance (architecture.md §5)
  poweredByHeader: false,
};

export default nextConfig;
