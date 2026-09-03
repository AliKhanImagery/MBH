import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fauji Foods Dairy & Syrup Processing Automation | MBH Solutions",
  description:
    "Technical case study on plant-wide control system deployment, Siemens S7-1500 PLC migration, and sanitary valve manifold automation for Fauji Foods Ltd.",
  alternates: {
    canonical: "https://www.mbhsol.com/references/fauji-foods-syrup-room-modernization",
  },
  openGraph: {
    title: "Fauji Foods Dairy & Processing Automation | MBH Solutions",
    description:
      "Full plant-wide control architecture upgrade, automated recipe batching, and mixproof valve manifold integration for Fauji Foods.",
    url: "https://www.mbhsol.com/references/fauji-foods-syrup-room-modernization",
    siteName: "MBH Solutions",
    type: "article",
  },
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mbhsol.com/references/fauji-foods-syrup-room-modernization",
  },
  "headline": "Fauji Foods Dairy Processing & Syrup Room Automation Modernization",
  "description":
    "Case study on plant-wide control system deployment, recipe batching automation, and Siemens S7-1500 PLC modernization for Fauji Foods Ltd.",
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
        "name": "How does recipe-driven batching minimize product shrinkage in dairy processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Automated recipe management couples Coriolis mass flow meters with pneumatic proportional dosing valves, eliminating operator measurement variations and ensuring batch dosing repeatability within ±0.15% of target volume.",
        },
      },
      {
        "@type": "Question",
        "name": "Why were mixproof double-seat valves integrated across the dairy line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Double-seat mixproof valves allow incompatible fluid paths (such as raw dairy transfer and active caustic CIP cleaning) to cross without cross-contamination risk, enabling continuous processing without stopping adjacent production lines.",
        },
      },
    ],
  },
};

export default function FaujiFoodsCaseStudy() {
  return (
    <div style={{ backgroundColor: "#080B0F", minHeight: "100vh", color: "#ffffff" }}>
      <Header />
      <PageHero
        eyebrow="Case Study · Dairy & Beverage Automation"
        title="Fauji Foods Dairy Processing & Syrup Room Modernization"
        subtitle="Plant-wide control system deployment, Siemens S7-1500 PLC migration, and sanitary mixproof valve manifold integration for Fauji Foods Ltd."
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
            <div className="mt-1 text-base font-semibold text-white">Fauji Foods Ltd</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Facility</div>
            <div className="mt-1 text-base font-semibold text-white">Bhalwal, Punjab</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Scope</div>
            <div className="mt-1 text-base font-semibold text-white">Turnkey Automation &amp; Process</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Core Hardware</div>
            <div className="mt-1 text-base font-semibold text-white">Siemens S7-1500 &amp; GEA Valves</div>
          </div>
        </section>

        {/* Technical Challenge & Context */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            The Engineering Challenge
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            Fauji Foods operated multiple disparate processing skids across their dairy and flavored-milk preparation facilities. Legacy standalone relay logic, legacy PLCs, and manual swing-bend connection panels resulted in significant recipe variance, high product shrinkage during changeovers, and excessive downtime between CIP cleaning sequences.
          </p>
          <p className="leading-relaxed" style={{ color: "#C7D0DA" }}>
            The operational directive was clear: deliver a centralized, plant-wide automated architecture capable of managing dynamic high-shear sugar dissolving, sanitary milk standardization, automated flavor dosing, and complete CIP integration without interrupting active production schedules.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Technical Architecture &amp; System Integration
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            MBH Solutions architected a unified industrial control platform utilizing redundant <strong>Siemens S7-1500F fail-safe PLCs</strong> communicating over an industrial PROFINET fiber-optic ring with distributed <strong>ET 200SP I/O islands</strong>. Centralized supervisory control was implemented using <strong>Siemens WinCC Unified SCADA</strong> with real-time audit trails conforming to sanitary food safety standards.
          </p>
          <p className="leading-relaxed mb-6" style={{ color: "#C7D0DA" }}>
            Key mechanical and fluid-handling engineering deliverables included:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ color: "#C7D0DA" }}>
            <li>
              <strong>Sanitary Valve Matrix Migration</strong>: Replaced error-prone manual swing-bends with fully automated double-seat mixproof valve manifolds (GEA / Bardiani), allowing simultaneous CIP flushing of preparation tanks while product transfer runs concurrently.
            </li>
            <li>
              <strong>High-Precision Coriolis Mass Flow Dosing</strong>: Integrated Endress+Hauser Promass flowmeters with PID modulating control valves for continuous inline sugar and concentrate dosing.
            </li>
            <li>
              <strong>Recipe-Driven Batch Execution</strong>: Standardized over 18 proprietary dairy and flavored beverage formulations into an automated recipe engine with batch-tracking genealogies.
            </li>
            <li>
              <strong>Decentralized Valve Control Tops</strong>: Deployed AS-Interface intelligent valve tops with integrated diagnostic LED arrays for millisecond actuator feedback.
            </li>
          </ul>
        </section>

        {/* Performance Metrics Table */}
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
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Performance Parameter</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Pre-Modernization Baseline</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Commissioned System</th>
                </tr>
              </thead>
              <tbody style={{ color: "#9BAAB5", fontSize: "15px" }}>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Batch Changeover Time</td>
                  <td className="px-6 py-4 border-b border-gray-800">75–90 min (manual pipe changes)</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">22 min (automated recipe purge)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Ingredient Dosing Repeatability</td>
                  <td className="px-6 py-4 border-b border-gray-800">±1.8% volume variance</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">±0.15% target volume accuracy</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">CIP Turnaround &amp; Downtime</td>
                  <td className="px-6 py-4 border-b border-gray-800">4.5 hours per circuit</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">1.5 hours with concurrent routing</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-gray-800 font-medium text-white">Control Telemetry &amp; Audit Trail</td>
                  <td className="px-6 py-4 border-gray-800">Manual log sheets &amp; local dials</td>
                  <td className="px-6 py-4 border-gray-800 font-semibold text-amber">Centralized SCADA, 100ms historian log</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Engineering FAQ */}
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
                How does recipe-driven batching minimize product shrinkage in dairy processing?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                Automated recipe management couples Coriolis mass flow meters with pneumatic proportional dosing valves, eliminating operator measurement variations and ensuring batch dosing repeatability within ±0.15% of target volume. This substantially curtails ingredient overuse and batch dump-outs.
              </p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3
                className="text-lg font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Why were mixproof double-seat valves integrated across the dairy line?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                Double-seat mixproof valves feature an atmospheric leakage chamber between two independent seals. Incompatible fluid paths (such as active raw dairy milk transfer on Line 1 and active 85°C caustic CIP cleaning on Line 2) can safely pass through the same valve body without cross-contamination risk, preventing plant shutdowns during cleaning cycles.
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
