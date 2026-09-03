import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coca-Cola Syrup Room & Process Automation | MBH Solutions",
  description:
    "Technical case study on turnkey continuous sugar dissolving, ASME 316L process piping, and automated CIP commissioning for Coca-Cola bottling facilities.",
  alternates: {
    canonical: "https://www.mbhsol.com/references/coca-cola-multan-line-automation",
  },
  openGraph: {
    title: "Coca-Cola Syrup Room & Process Automation | MBH Solutions",
    description:
      "Turnkey erection and commissioning of continuous sugar dissolving skids, mixproof valve matrices, and automated CIP systems for Coca-Cola.",
    url: "https://www.mbhsol.com/references/coca-cola-multan-line-automation",
    siteName: "MBH Solutions",
    type: "article",
  },
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mbhsol.com/references/coca-cola-multan-line-automation",
  },
  "headline": "Coca-Cola Continuous Sugar Dissolving & Syrup Room Automation",
  "description":
    "Case study on turnkey engineering, high-shear sugar dissolving skids, and automated CIP integration across Coca-Cola bottling lines.",
  "author": {
    "@type": "Organization",
    "name": "MBH Solutions",
    "url": "https://www.mbhsol.com",
  },
  "publisher": {
    "@type": "Organization",
    "name": "MBH Solutions",
    "url": "https://www.mbhsol.com",
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does continuous hot/cold sugar dissolving maintain consistent Brix levels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Continuous dissolving systems utilize inline optical refractometers (e.g. Maselli) paired with high-frequency PID control loops adjusting water flow and dry sugar feed rates in real time, locking final simple syrup Brix within ±0.05° Brix.",
        },
      },
      {
        "@type": "Question",
        "name": "What welding standards are applied to sanitary 316L beverage process piping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All stainless steel process piping conforms to ASME BPE standards utilizing automated orbital TIG welding with inert argon purging, achieving internal surface roughness under Ra < 0.8 µm to prevent microbial adhesion.",
        },
      },
    ],
  },
};

export default function CocaColaCaseStudy() {
  return (
    <div style={{ backgroundColor: "#080B0F", minHeight: "100vh", color: "#ffffff" }}>
      <Header />
      <PageHero
        eyebrow="Case Study · Beverage Process Systems"
        title="Coca-Cola Continuous Sugar Dissolving & Syrup Room Modernization"
        subtitle="Turnkey erection and commissioning of continuous sugar dissolving skids, ASME 316L sanitary piping, and automated CIP integration for Coca-Cola bottling facilities."
      />

      <main
        className="mx-auto max-w-[1000px] px-6 py-16 md:px-12"
        style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
        />

        <div className="mb-10">
          <Link
            href="/references"
            className="inline-flex items-center gap-2 text-sm font-mono text-amber hover:underline uppercase tracking-wider"
          >
            ← Back to all projects &amp; references
          </Link>
        </div>

        {/* Project Snapshot Strip */}
        <section className="mb-16 grid grid-cols-2 gap-4 rounded-lg border border-gray-800 bg-[#0D1B2E]/60 p-6 md:grid-cols-4">
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Client</div>
            <div className="mt-1 text-base font-semibold text-white">The Coca-Cola Bottling Co.</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Facility</div>
            <div className="mt-1 text-base font-semibold text-white">Multan / Tehran</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Scope</div>
            <div className="mt-1 text-base font-semibold text-white">Installation &amp; Commissioning</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Capacity</div>
            <div className="mt-1 text-base font-semibold text-white">40,000 L/h Continuous Dissolving</div>
          </div>
        </section>

        {/* The Engineering Challenge */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            The Engineering Challenge
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            Operating at high filling speeds across carbonated soft drink (CSD) lines requires uninterrupted syrup preparation with uncompromising standard operating consistency. Traditional batch dissolving tanks introduce thermal loss, high steam demand, manual handling variations, and batch-to-batch Brix deviation.
          </p>
          <p className="leading-relaxed" style={{ color: "#C7D0DA" }}>
            MBH Solutions was contracted to execute the mechanical fabrication, orbital sanitary piping, electrical integration, and automated startup of a 40,000 L/h continuous dissolving system, sanitary storage matrix, and dedicated 4-circuit CIP station.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Technical Architecture &amp; Execution Scope
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            The delivery encompassed end-to-end skid fabrication and process integration compliant with stringent The Coca-Cola Company Engineering Specifications (TCCC-GEC):
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ color: "#C7D0DA" }}>
            <li>
              <strong>Continuous Dissolving Skid</strong>: High-shear powder induction mixer paired with plate heat exchangers to achieve complete 65° Brix simple syrup dissolution in a single pass at lower thermal operating temperatures.
            </li>
            <li>
              <strong>ASME BPE Sanitary Orbital Piping</strong>: 100% video-boroscope inspected orbital TIG welding of 316L stainless steel process lines, ensuring ultra-smooth fluid pathways free from microbial crevices.
            </li>
            <li>
              <strong>Mixproof Valve Manifolds</strong>: Configured GEA double-seat mixproof valve arrays preventing cross-flow between raw syrup preparation, pasteurization holding tubes, and active CIP sanitization loops.
            </li>
            <li>
              <strong>Pumping &amp; Metering Infrastructure</strong>: Installed Fristam centrifugal and sanitary positive displacement pumps driven by Danfoss VLT AutomationDrives, regulated via Endress+Hauser electromagnetic flowmeters.
            </li>
            <li>
              <strong>Closed-Loop Brix Telemetry</strong>: Maselli inline optical refractometers feeding real-time density readings into a central Siemens S7-1500 PLC for dynamic micro-adjustments.
            </li>
          </ul>
        </section>

        {/* Specifications & Results Table */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Performance Metrics &amp; Operational Results
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className="uppercase tracking-wider"
                  style={{
                    backgroundColor: "rgba(21,38,84,0.35)",
                    color: "#C87D00",
                    fontSize: "12px",
                    fontFamily: "var(--font-ibm-plex-mono)",
                  }}
                >
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Process Parameter</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Batch Baseline</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Continuous Automated System</th>
                </tr>
              </thead>
              <tbody style={{ color: "#9BAAB5", fontSize: "15px" }}>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Brix Stability Tolerance</td>
                  <td className="px-6 py-4 border-b border-gray-800">±0.45° Brix (manual tank adjustments)</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">±0.05° Brix (closed-loop control)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Continuous Dissolving Throughput</td>
                  <td className="px-6 py-4 border-b border-gray-800">18,000 L/h (intermittent batches)</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">40,000 L/h continuous delivery</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Steam &amp; Thermal Energy Usage</td>
                  <td className="px-6 py-4 border-b border-gray-800">High heat dissipation in open dissolving</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">18.5% reduction via heat regeneration</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-gray-800 font-medium text-white">Sanitation Cycle Turnaround</td>
                  <td className="px-6 py-4 border-gray-800">3.8 hours manual pipe flushing</td>
                  <td className="px-6 py-4 border-gray-800 font-semibold text-amber">2.1 hours automated 4-circuit CIP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section>
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Frequently Asked Engineering Questions
          </h2>
          <div className="space-y-6">
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3
                className="text-lg font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                How does continuous hot/cold sugar dissolving maintain consistent Brix levels?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                Continuous dissolving systems utilize inline optical refractometers (such as Maselli) installed downstream of the shearing mixer. The unit continuously monitors dissolved solids and feeds high-frequency analog signals into a PID loop, instantly adjusting the dry sugar rotary feeder and treated water modulating valve to maintain Brix within ±0.05° of target.
              </p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3
                className="text-lg font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                What welding standards are applied to sanitary 316L beverage process piping?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                All stainless steel process piping conforms to ASME BPE standards utilizing automated orbital TIG welding with inert argon purging. Each weld joint is 100% boroscope inspected to verify full penetration and internal surface smoothness under Ra &lt; 0.8 µm, preventing bacterial harbor points.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
