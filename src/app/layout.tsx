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
  openGraph: {
    title: "MBH Solutions | Industrial Automation & Engineering",
    description: "End-to-end PLC and SCADA-based automation and beverage process solutions.",
    url: 'https://www.mbhsol.com',
    siteName: 'MBH Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MBH Solutions | Industrial Automation & Engineering",
    description: "End-to-end PLC and SCADA-based automation and beverage process solutions.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
