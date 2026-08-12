import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import TechnologyPartners from "@/components/TechnologyPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
