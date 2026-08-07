import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ProcessSpine from "@/components/ProcessSpine";
import FabricationSection from "@/components/FabricationSection";
import About from "@/components/About";
import ServiceSplit from "@/components/ServiceSplit";
import Clients from "@/components/Clients";
import Industries from "@/components/Industries";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SolutionsShowcase />
      <ProcessSpine />
      <About />
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
      <ServiceSplit
        id="monitoring"
        eyebrow="Live Monitoring"
        title="Giving Plant Management Real-Time Visibility"
        paragraphs={[
          "Providing SCADA-based monitoring platforms that surface OEE, downtime, and alarm data from the plant floor to management in real time – supporting faster decisions and reduced unplanned downtime.",
        ]}
        points={[
          "WinCC and SCADA dashboard deployment",
          "OEE and downtime tracking across lines",
          "Remote alerting for critical process states",
        ]}
        imageSide="left"
        variant="dark"
      />
      <Clients />
      <Industries />
      <CaseStudy />
      <Contact />
      <Footer />
    </>
  );
}
