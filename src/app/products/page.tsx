import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProductsTeaser from "@/components/ProductsTeaser";
import TechnologyPartners from "@/components/TechnologyPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Process Equipment & Spares | Pumps, Valves, Instrumentation",
  description:
    "Explore industrial process equipment and spare parts sourced from leading OEM partners: Endress+Hauser, Fristam, Kieselmann, GEA, Danfoss, and Hilge.",
  alternates: {
    canonical: "https://www.mbhsol.com/products",
  },
  openGraph: {
    title: "Process Equipment & Spares | MBH Solutions",
    description:
      "Pumps, valves, instruments, automation components, and lab equipment sourced from leading global manufacturers.",
    url: "https://www.mbhsol.com/products",
    siteName: "MBH Solutions",
    images: [
      {
        url: "/images/generated/Industrial-automation-2.png",
        width: 1200,
        height: 630,
        alt: "Industrial automation control panels and process equipment",
      },
    ],
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Products"
        title="Process Equipment & Spares"
        subtitle="Pumps, valves, instruments, automation components, and lab equipment sourced from leading global manufacturers."
        image="/images/generated/Industrial-automation-2.png"
        imageAlt="Industrial automation control panels and process equipment"
      />
      <ProductsTeaser />
      <TechnologyPartners />
      <Contact />
      <Footer />
    </>
  );
}
