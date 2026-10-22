import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteGraph, toJsonLd } from "@/lib/schema";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
