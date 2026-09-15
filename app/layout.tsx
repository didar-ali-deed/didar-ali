import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Didar Ali — Junior Data Scientist & AI-ML Engineer",
  description: "Portfolio of Didar Ali, a Junior Data Scientist and AI-ML Engineer working across machine learning, data analytics, computer vision, and production AI workflows.",
  keywords: ["Didar Ali", "Data Scientist", "Machine Learning", "AI Engineer", "Python", "Pakistan"],
  authors: [{ name: "Didar Ali" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Didar Ali — Junior Data Scientist & AI-ML Engineer",
    description: "Building practical intelligence from data, one thoughtful pipeline at a time.",
    type: "website",
    siteName: "Didar Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Didar Ali — Junior Data Scientist & AI-ML Engineer",
    description: "Portfolio of Didar Ali — machine learning, analytics, computer vision, and AI workflows.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
