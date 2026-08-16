import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
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
      {/* Image placeholder — awaiting a real solutions photograph.
          Replaced the SolutionsShowcase tile grid on this page only;
          the homepage still mounts SolutionsShowcase. */}
      <section style={{ background: "#ffffff", paddingTop: 48, paddingBottom: 96 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div
            style={{
              background: "#0D1B2E",
              border: "1px solid #1E3352",
              minHeight: 380,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 400,
                fontSize: 11,
                color: "#1E3352",
                letterSpacing: "0.06em",
              }}
            >
              SOLUTIONS · IMG
            </span>
          </div>
        </div>
      </section>

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
