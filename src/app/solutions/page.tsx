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
        ctaText="Enquire About Automation"
        ctaHref="/contact"
        imagePlaceholderTag="CTRL.SYS · IMG"
      />
      <FabricationSection />
      <Contact />
      <Footer />
    </>
  );
}
