import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PillarStrip from "@/components/PillarStrip";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ProcessSpine from "@/components/ProcessSpine";
import FabricationSection from "@/components/FabricationSection";
import ServiceSplit from "@/components/ServiceSplit";
import ProductsTeaser from "@/components/ProductsTeaser";
import { ReferenceCarousel } from "@/components/ReferenceCarousel";
import TechnologyPartners from "@/components/TechnologyPartners";
import Industries from "@/components/Industries";
import AboutTeaser from "@/components/AboutTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PillarStrip />
      {/* <SolutionsShowcase /> */}

      <ProcessSpine />
      <ReferenceCarousel />
      <ServiceSplit
        id="automation"
        eyebrow="AUTOMATION & CONTROL"
        title="PLC, SCADA, and Control Panel Integration"
        paragraphs={[]}
        points={[]}
        imageSide="right"
        variant="automation"
        imagePlaceholderTag="CTRL.SYS · IMG"
      />
      <FabricationSection />
      <ProductsTeaser />
      <TechnologyPartners />
      <Industries />
      <AboutTeaser />
      <Contact />
      <Footer />
    </>
  );
}
