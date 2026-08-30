import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects & Engineering References | Industrial Case Studies",
  description:
    "Explore MBH Solutions commissioned engineering references and automation case studies across Coca-Cola, Pepsi, Meezan, and Dalda Foods.",
  alternates: {
    canonical: "https://www.mbhsol.com/references",
  },
  openGraph: {
    title: "Projects & References | MBH Solutions",
    description:
      "Commissioned process systems and automation upgrades for leading manufacturers across the region.",
    url: "https://www.mbhsol.com/references",
    siteName: "MBH Solutions",
    type: "website",
  },
};

export default function ReferencesPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="References"
        title="Projects Delivered"
        subtitle="Commissioned process systems and automation upgrades for leading manufacturers across the region."
      />
      <CaseStudy />
      <Contact />
      <Footer />
    </>
  );
}
