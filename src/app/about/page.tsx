import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import TechnologyPartners from "@/components/TechnologyPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="About MBH"
        title="Engineering Partnerships Built on Trust"
        subtitle="MBH Solutions is a Siemens-certified engineering company delivering beverage process systems and industrial automation across the region."
      />
      <About />
      <TechnologyPartners />
      <Contact />
      <Footer />
    </>
  );
}
