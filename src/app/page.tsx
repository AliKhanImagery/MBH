import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceStrip from "@/components/ServiceStrip";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ProcessSpine from "@/components/ProcessSpine";
import FabricationSection from "@/components/FabricationSection";
import ServiceSplit from "@/components/ServiceSplit";
import ProductsTeaser from "@/components/ProductsTeaser";
import ProjectsCarousel from "@/components/ProjectsCarousel";
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
      {/* <SolutionsShowcase /> */}
      <ProcessSpine />
      <ProjectsCarousel />
      <ServiceSplit
        id="automation"
        eyebrow="AUTOMATION & CONTROL"
        title="PLC, SCADA, and Control Panel Integration"
        paragraphs={[
          "Control architecture, PLC and HMI programming, SCADA screens, panel build, FAT, and site commissioning for beverage process lines.",
        ]}
        points={[
          "Siemens S7 PLCs with TIA Portal",
          "Panel wiring, testing, and documentation",
          "WinCC SCADA, HMI screens, and recipes",
        ]}
        imageSide="right"
        variant="automation"
        ctaText="View automation scope"
        ctaHref="/solutions"
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
