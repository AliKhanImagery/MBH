import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import TechnologyPartners from "@/components/TechnologyPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technology Partners | Endress+Hauser, Fristam, Siemens, Kieselmann",
  description:
    "Partnering with leading global OEMs to integrate certified pumps, valves, flowmeters, and Siemens automation hardware into industrial process lines.",
  alternates: {
    canonical: "https://www.mbhsol.com/partners",
  },
  openGraph: {
    title: "Technology Ecosystem | MBH Solutions",
    description:
      "Working with the world's leading process and automation manufacturers to deliver certified, integrated solutions.",
    url: "https://www.mbhsol.com/partners",
    siteName: "MBH Solutions",
    type: "website",
  },
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Technology Partners"
        title="Our Technology Ecosystem"
        subtitle="Working with the world's leading process and automation manufacturers to deliver certified, integrated solutions."
      />
      <TechnologyPartners />
      <Contact />
      <Footer />
    </>
  );
}
