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
      <ServiceSplit
        id="automation"
        eyebrow="AUTOMATION & CONTROL"
        title="Engineering Control Systems That Run the Line"
        paragraphs={[
          "Designing and integrating PLC-based control systems for production lines — covering control philosophy, panel design, and end-to-end commissioning under a single scope.",
        ]}
        points={[
          "Siemens S7 PLC programming and TIA Portal integration",
          "Control panel design, fabrication, and factory acceptance testing",
          "WinCC and SCADA dashboard deployment with remote access",
        ]}
        imageSide="right"
        variant="automation"
        ctaText="Explore Automation Solutions"
        ctaHref="/solutions"
        imagePlaceholderTag="CTRL.SYS · IMG"
      />
      <FabricationSection />
      <ProductsTeaser />
      <CaseStudy />
      <TechnologyPartners />
      <Industries />
      <AboutTeaser />
      <Contact />
      <Footer />
    </>
  );
}
