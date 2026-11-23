import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { themeScript } from "@/lib/theme-script";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

// Polices variables, alphabet latin, servies par le site (architecture.md §5, R3).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Awad Ahmed — Développeur Full Stack JavaScript / TypeScript",
  description:
    "Développeur Full Stack en Île-de-France. Applications web complètes et en ligne, avec React, Next.js et Node.js. Ouvert aux postes en CDI ou CDD et aux missions freelance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#contenu"
          className="sr-only-focusable fixed left-4 top-2 z-50 rounded-[10px] bg-primary px-4 py-3 font-semibold text-primary-foreground"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
