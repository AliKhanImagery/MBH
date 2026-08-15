import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceStrip from "@/components/ServiceStrip";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ProcessSpine from "@/components/ProcessSpine";
import FabricationSection from "@/components/FabricationSection";
import ServiceSplit from "@/components/ServiceSplit";
import ProductsTeaser from "@/components/ProductsTeaser";
import { Eyebrow } from "@/components/Eyebrow";
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

      {/* Proof band — stats-only strip */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <dl className="grid grid-cols-3 gap-8 border-y border-[#E2E8F0] py-6">
            <div>
              <dt className="text-anchor font-light text-[#080B0F]">20+</dt>
              <dd className="mt-2 font-mono text-data text-[#6A7A8A] uppercase tracking-wider">
                Years Operating
              </dd>
            </div>
            <div>
              <dt className="text-anchor font-light text-[#080B0F]">3</dt>
              <dd className="mt-2 font-mono text-data text-[#6A7A8A] uppercase tracking-wider">
                Countries Delivered
              </dd>
            </div>
            <div>
              <dt className="text-anchor font-light text-[#080B0F]">50+</dt>
              <dd className="mt-2 font-mono text-data text-[#6A7A8A] uppercase tracking-wider">
                Systems Commissioned
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ProcessSpine />
      {/* Pillar 1 — Reference */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Eyebrow variant="plain" label="Reference" />
          <article className="mt-5 max-w-prose" style={{ borderLeft: "2px solid #C87D00", paddingLeft: 24 }}>
            <p className="font-mono text-data uppercase tracking-wider" style={{ color: "#6A7A8A" }}>
              Coca-Cola · Tehran, Iran
            </p>
            <h3 className="mt-3 text-section font-medium" style={{ color: "#080B0F" }}>
              Turnkey Syrup Room, CIP System, and Automation Integration
            </h3>
            <p className="mt-4 text-body" style={{ color: "#6A7A8A" }}>
              Complete syrup room and CIP system delivered to Coca-Cola&apos;s Tehran facility — mechanical installation, process piping, automation integration, and startup commissioning under one engineering scope.
            </p>
            <dl className="mt-5 grid grid-cols-3 gap-8 border-t pt-4" style={{ borderColor: "#E2E8F0" }}>
              <div>
                <dt className="text-body font-medium" style={{ color: "#080B0F" }}>Tehran, Iran</dt>
                <dd className="mt-1 font-mono text-data uppercase tracking-wider" style={{ color: "#6A7A8A" }}>
                  Site
                </dd>
              </div>
              <div>
                <dt className="text-body font-medium" style={{ color: "#080B0F" }}>Syrup Room · CIP</dt>
                <dd className="mt-1 font-mono text-data uppercase tracking-wider" style={{ color: "#6A7A8A" }}>
                  Systems
                </dd>
              </div>
              <div>
                <dt className="text-body font-medium" style={{ color: "#080B0F" }}>Turnkey</dt>
                <dd className="mt-1 font-mono text-data uppercase tracking-wider" style={{ color: "#6A7A8A" }}>
                  Scope
                </dd>
              </div>
            </dl>
            <a
              href="/references"
              className="mt-5 inline-block font-mono text-data"
              style={{ color: "#C87D00" }}
            >
              All References →
            </a>
          </article>
        </div>
      </section>
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
