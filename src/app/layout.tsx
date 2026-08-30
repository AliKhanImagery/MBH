import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
    "Providing end-to-end PLC and SCADA-based automation solutions for food and beverage, FMCG, power generation, and process manufacturing industries — combining our expertise as a SIEMENS Integrator company with real-time monitoring and ongoing maintenance support.",
  keywords: [
    "Industrial Automation",
    "Siemens Integrator",
    "PLC",
    "SCADA",
    "Beverage Process Systems",
    "FMCG Automation",
    "Turnkey Syrup Rooms",
    "MBH Solutions"
  ],
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
  twitter: {
    card: 'summary_large_image',
    title: "MBH Solutions | Industrial Automation & Engineering",
    description: "End-to-end PLC and SCADA-based automation and beverage process solutions.",
    images: ['/images/hero/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MBH Solutions",
    url: "https://www.mbhsol.com",
    logo: "https://www.mbhsol.com/mbh-logo.png",
    description: "Providing end-to-end PLC and SCADA-based automation solutions for food and beverage, FMCG, power generation, and process manufacturing industries."
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MBH Solutions",
    url: "https://www.mbhsol.com"
  }
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
