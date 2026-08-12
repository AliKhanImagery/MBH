import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
