import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sectors We Serve | F&B, FMCG, Dairy & Process Manufacturing",
  description:
    "Tailored process automation and hygienic engineering solutions for Food & Beverage, Edible Oils, Dairy, Pharmaceutical, and Industrial Utilities.",
  alternates: {
    canonical: "https://www.mbhsol.com/industries",
  },
  openGraph: {
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
