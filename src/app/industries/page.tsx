import { DEFAULT_OG_IMAGE } from "@/lib/schema";
import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sectors We Serve — F&B, FMCG & Dairy",
  description:
    "Tailored process automation and hygienic engineering solutions for Food & Beverage, Edible Oils, Dairy, Pharmaceutical, and Industrial Utilities.",
  alternates: {
    canonical: "https://www.mbhsol.com/industries",
  },
  // TEC-16: thin page (sector names only). Keep out of the index until
  // per-sector copy ships (PG-07), then remove this and re-add it to sitemap.ts.
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Sectors We Serve | MBH Solutions",
    description:
      "Engineering solutions for food and beverage, FMCG, pharmaceutical, and process manufacturing industries.",
    url: "https://www.mbhsol.com/industries",
    siteName: "MBH Solutions",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Industries"
        title="Sectors We Serve"
        subtitle="Engineering solutions for food and beverage, FMCG, pharmaceutical, and process manufacturing industries."
      />
      <Industries />
      {/* <SolutionsShowcase /> */}
      <Contact />
      <Footer />
    </>
  );
}
