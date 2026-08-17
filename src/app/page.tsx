import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceStrip from "@/components/ServiceStrip";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ProcessSpine from "@/components/ProcessSpine";
import FabricationSection from "@/components/FabricationSection";
import ServiceSplit from "@/components/ServiceSplit";
import ProductsTeaser from "@/components/ProductsTeaser";
import CaseStudy from "@/components/CaseStudy";
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
      <ServiceStrip />
      <SolutionsShowcase />
      <ProcessSpine />
      <CaseStudy />
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
