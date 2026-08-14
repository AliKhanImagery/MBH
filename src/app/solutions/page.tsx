import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ProcessSpine from "@/components/ProcessSpine";
import ServiceSplit from "@/components/ServiceSplit";
import FabricationSection from "@/components/FabricationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Solutions"
        title="Beverage Process Systems & Automation"
        subtitle="Turnkey engineering for CSD, juice, and syrup production lines — from raw material intake through automation and CIP."
      />
      {/* <SolutionsShowcase /> */}
      <ProcessSpine />
      <ServiceSplit
        id="automation"
        eyebrow="PILLAR 02 · AUTOMATION & CONTROL"
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
        ctaText="Discuss automation scope"
        ctaHref="/contact"
        imagePlaceholderTag="CTRL.SYS · IMG"
      />
      <FabricationSection />
      <Contact />
      <Footer />
    </>
  );
}
