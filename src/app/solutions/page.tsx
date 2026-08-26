import Image from "next/image";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProcessSpineStepper from "@/components/ProcessSpineStepper";
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
        image="/images/generated/solutions-banner.jpg"
        imageAlt="Stainless steel syrup tanks, process piping, and control panels in a beverage plant"
      />
      <ProcessSpineStepper />
      {/* Image placeholder sits inside Pillar 01, under its eyebrow.
          Passed as a slot so the homepage's <ProcessSpine /> is unaffected.
          Replaced the SolutionsShowcase tile grid on this page only. */}
      <ProcessSpine
        imageSlot={
          <Image
            src="/images/sections/beverage-process-line.png"
            alt="MBH beverage process line — raw material handling through blending, CIP, and control"
            width={4977}
            height={1920}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1400px"
          />
        }
      />
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
