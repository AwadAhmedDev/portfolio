import type { MetadataRoute } from "next";
import { projets } from "@/content/projets";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// Toutes les pages indexables (requirements.md §5). La 404 n'y figure pas.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/projets/", "/a-propos/", "/contact/", "/mentions-legales/", ...projets.map((p) => `/projets/${p.slug}/`)];
  return pages.map((p) => ({ url: `${SITE_URL}${p}` }));
}
