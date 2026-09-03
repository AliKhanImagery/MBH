import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edible Oil Refining & Neutralization Automation | MBH Solutions",
  description:
    "Technical case study on continuous chemical neutralization, ATEX/HazLoc control systems, and Coriolis mass flow dosing for Meezan and Dalda Foods.",
  alternates: {
    canonical: "https://www.mbhsol.com/references/edible-oil-processing-automation",
  },
  openGraph: {
    title: "Edible Oil Refining & Automation | MBH Solutions",
    description:
      "Continuous neutralization, bleaching skids, and hazardous area automation for edible oil refineries including Meezan and Dalda Foods.",
    url: "https://www.mbhsol.com/references/edible-oil-processing-automation",
    siteName: "MBH Solutions",
    type: "article",
  },
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mbhsol.com/references/edible-oil-processing-automation",
  },
  "headline": "Edible Oil Continuous Neutralization & Refining Automation",
  "description":
    "Case study on hazardous area control panel engineering, precision chemical dosing skids, and automated deodorization loops for vegetable oil processing plants.",
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
        "name": "Why are Coriolis mass flow meters critical in edible oil chemical dosing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because vegetable oils experience fluctuating densities and viscosities across varying temperatures, volumetric meters produce dosing inaccuracies. Coriolis mass flow meters measure direct mass flow (kg/h) independent of viscosity changes, ensuring accurate stoichiometric neutralization.",
        },
      },
      {
        "@type": "Question",
        "name": "How are explosion-proof safety requirements addressed in hexane extraction and refining areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deploy ATEX / IECEx Zone 1 and Zone 2 certified positive-pressure purged control enclosures (Ex p) and intrinsically safe galvanic isolators (Ex i) on all field instrumentation, preventing thermal or electrical ignition in hazardous solvent atmospheres.",
        },
      },
    ],
  },
};

export default function EdibleOilCaseStudy() {
  return (
    <div style={{ backgroundColor: "#080B0F", minHeight: "100vh", color: "#ffffff" }}>
      <Header />
      <PageHero
        eyebrow="Case Study · Oils, Fats &amp; Chemical Processing"
        title="Edible Oil Continuous Neutralization &amp; Refining Automation"
        subtitle="Turnkey hazardous-area control systems, precision Coriolis acid/lye dosing skids, and temperature/vacuum control for leading edible oil processors (Meezan &amp; Dalda Foods)."
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
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Client References</div>
            <div className="mt-1 text-base font-semibold text-white">Meezan &amp; Dalda Foods</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Sector</div>
            <div className="mt-1 text-base font-semibold text-white">Edible Oil Refining &amp; FMCG</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Scope</div>
            <div className="mt-1 text-base font-semibold text-white">Process Automation &amp; Skid Build</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Safety Standard</div>
            <div className="mt-1 text-base font-semibold text-white">ATEX / IECEx Zone 1 &amp; Zone 2</div>
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
            Edible oil refining (crude palm oil, soybean, and canola) requires precise chemical neutralization to remove Free Fatty Acids (FFA), followed by bleaching and high-vacuum deodorization. In manual or semi-automated plants, crude oil variations lead to over-dosing of caustic soda (producing neutral oil saponification and high oil yield loss) or under-dosing (failing finished product FFA specifications).
          </p>
          <p className="leading-relaxed" style={{ color: "#C7D0DA" }}>
            Furthermore, processing areas require stringent adherence to hazardous atmosphere regulations (ATEX/HazLoc) due to solvent recovery stages, demanding explosion-proof containment and intrinsically safe control architecture.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Technical Architecture &amp; Automation Scope
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            MBH Solutions designed and commissioned a closed-loop chemical conditioning skid and supervisory SCADA platform engineered specifically for continuous refining lines:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ color: "#C7D0DA" }}>
            <li>
              <strong>Coriolis Mass-Based Stoichiometric Dosing</strong>: Integrated Endress+Hauser Promass flowmeters measuring incoming crude mass flow and density, instantly calculating exact stoichiometric requirements for phosphoric acid (degumming) and sodium hydroxide (neutralization).
            </li>
            <li>
              <strong>ATEX Purged Enclosures (Ex p)</strong>: Engineered pressurized control panels with automatic inert gas purge cycles and continuous internal pressure monitoring for hazardous plant sectors.
            </li>
            <li>
              <strong>High-Viscosity Fluid Handling</strong>: Equipped centrifugal and progressive cavity pumps with Danfoss VLT AutomationDrives, dynamically modulating pump speeds to prevent shear stress and thermal degradation.
            </li>
            <li>
              <strong>Deodorizer Vacuum &amp; Thermal Loops</strong>: Automated multi-stage steam ejector vacuum control and high-temperature thermal oil heating loops to ensure stable strip-temperature maintenance within ±1.0°C.
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
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Volumetric / Manual Dosing</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Automated Coriolis Closed-Loop</th>
                </tr>
              </thead>
              <tbody style={{ color: "#9BAAB5", fontSize: "15px" }}>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Chemical Dosing Precision</td>
                  <td className="px-6 py-4 border-b border-gray-800">±2.5% volumetric deviation</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">±0.2% mass-based accuracy</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Neutral Oil Loss (Saponification)</td>
                  <td className="px-6 py-4 border-b border-gray-800">1.45–1.80% above theoretical</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">&lt; 0.65% above theoretical</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Finished Product FFA Stability</td>
                  <td className="px-6 py-4 border-b border-gray-800">Variable (0.06% to 0.12%)</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">Consistent &lt; 0.045% FFA target</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-gray-800 font-medium text-white">Steam &amp; Thermal Energy Efficiency</td>
                  <td className="px-6 py-4 border-gray-800">Manual throttle valve drift</td>
                  <td className="px-6 py-4 border-gray-800 font-semibold text-amber">12.5% thermal energy savings</td>
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
                Why are Coriolis mass flow meters critical in edible oil chemical dosing?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                Because vegetable oils undergo significant viscosity and density shifts across seasonal temperature swings, volumetric flow sensors deliver fluctuating readings. Coriolis mass flow meters measure pure mass throughput (kg/h) independent of fluid viscosity, ensuring consistent chemical reaction ratios and preventing oil loss.
              </p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3
                className="text-lg font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                How are explosion-proof safety requirements addressed in solvent extraction zones?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                In hexane extraction and chemical preparation areas, we deploy ATEX Zone 1/2 certified purged and pressurized enclosures (Ex p) paired with intrinsically safe galvanic barriers (Ex i) on all field transmitter wiring. This guarantees that neither electrical sparks nor component overheating can trigger ignition.
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
