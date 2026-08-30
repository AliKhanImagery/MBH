import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import TechnologyPartners from "@/components/TechnologyPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Siemens Solution Partner & Process Engineering Experts",
  description:
    "Learn about MBH Solutions — a trusted Siemens Solution Partner delivering turnkey beverage process systems, CIP recovery, and industrial PLC/SCADA migrations.",
  alternates: {
    canonical: "https://www.mbhsol.com/about",
  },
  openGraph: {
    title: "About MBH Solutions | Engineering Partnerships Built on Trust",
    description:
      "Siemens Solution Partner delivering beverage process systems and industrial automation across the region.",
    url: "https://www.mbhsol.com/about",
    siteName: "MBH Solutions",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="About MBH"
        title="Engineering Partnerships Built on Trust"
        subtitle="MBH Solutions is a SIEMENS Integrator company delivering beverage process systems and industrial automation across the region."
      />
      <About />
      <TechnologyPartners />
      <Contact />
      <Footer />
    </>
  );
}
