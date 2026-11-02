import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteGraph, toJsonLd } from "@/lib/schema";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// IBM Plex is bundled (OFL-1.1, via @fontsource) so builds never depend on a
// live Google Fonts download — that fetch was failing production builds.
const ibmPlexSans = localFont({
  variable: "--font-ibm-plex-sans",
  display: "swap",
  src: [
    { path: "../fonts/ibm-plex-sans-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
});

const ibmPlexMono = localFont({
  variable: "--font-ibm-plex-mono",
  display: "swap",
  src: [
    { path: "../fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mbhsol.com'),
  title: {
    default: "MBH Solutions | Industrial Automation & Engineering",
    template: "%s | MBH Solutions"
  },
  description:
    "Turnkey beverage process systems, Siemens PLC/SCADA automation, and sanitary stainless fabrication for food, dairy, and FMCG manufacturing plants.",
  alternates: {
    canonical: 'https://www.mbhsol.com',
  },
  openGraph: {
    title: "MBH Solutions | Industrial Automation & Engineering",
    description: "End-to-end PLC and SCADA-based automation and beverage process solutions.",
    url: 'https://www.mbhsol.com',
    siteName: 'MBH Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero.png',
        width: 1200,
        height: 630,
        alt: 'MBH Solutions Industrial Automation and Beverage Process Systems',
      },
    ],
  },
  // Card type only: title, description and image are left to each page's
  // openGraph, which X/Twitter falls back to. Setting them here would leak the
  // homepage values onto every route (metadata merges shallowly).
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(siteGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
