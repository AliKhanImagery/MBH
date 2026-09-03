import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pepsi Bottling Line Automation & VFD Control Systems | MBH Solutions",
  description:
    "Technical case study on high-speed bottling line synchronization, custom control panel fabrication, and Danfoss VFD automation for Pepsi Northern Beverages.",
  alternates: {
    canonical: "https://www.mbhsol.com/references/pepsi-northern-bottling-line-automation",
  },
  openGraph: {
    title: "Pepsi Bottling Line Automation & VFD Control | MBH Solutions",
    description:
      "High-speed line synchronization, Danfoss VFD control cabinets, and Siemens PLC migration for Pepsi Northern Beverages.",
    url: "https://www.mbhsol.com/references/pepsi-northern-bottling-line-automation",
    siteName: "MBH Solutions",
    type: "article",
  },
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mbhsol.com/references/pepsi-northern-bottling-line-automation",
  },
  "headline": "Pepsi Northern Beverages Bottling Line Automation & Control Modernization",
  "description":
    "Case study on conveyor motion synchronization, custom IP66 control panel fabrication, and Siemens S7-1500 PLC migration for Pepsi Northern Beverages.",
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
        "name": "How does VFD multi-axis synchronization prevent bottle tipping on high-speed lines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By linking variable frequency drives over PROFINET IRT (Isochronous Real-Time), adjacent conveyor sections ramp up and down with synchronized S-curves, eliminating jerky transitions and container tipping at speeds exceeding 36,000 bottles per hour.",
        },
      },
      {
        "@type": "Question",
        "name": "What safety standards are incorporated into the line control panels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All control panels feature integrated fail-safe safety relays and Category 4 / Ple architecture compliant with ISO 13849-1, including emergency stops, interlocked access guards, and safety light curtains.",
        },
      },
    ],
  },
};

export default function PepsiCaseStudy() {
  return (
    <div style={{ backgroundColor: "#080B0F", minHeight: "100vh", color: "#ffffff" }}>
      <Header />
      <PageHero
        eyebrow="Case Study · Packaging &amp; Bottling Automation"
        title="Pepsi Northern Beverages Bottling Line Control Modernization"
        subtitle="High-speed container synchronization, custom IP66 electrical control panel fabrication, and Siemens S7-1500 PLC integration for Pepsi Northern Beverages."
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
            <div className="mt-1 text-base font-semibold text-white">Pepsi Northern Beverages</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Line Type</div>
            <div className="mt-1 text-base font-semibold text-white">RGB &amp; PET High-Speed Line</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Scope</div>
            <div className="mt-1 text-base font-semibold text-white">PLC, Panels &amp; Drive Sync</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Core Tech</div>
            <div className="mt-1 text-base font-semibold text-white">Danfoss VFDs &amp; Siemens S7</div>
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
            High-speed packaging and bottling lines running Returnable Glass Bottles (RGB) and PET containers rely heavily on precise conveyor speed synchronization. In the client’s legacy installation, unsynchronized analog drives and relay-logic controls caused container pressure buildup at the filler infeed, erratic bottle surging, high tipping rates, and frequent line trips.
          </p>
          <p className="leading-relaxed" style={{ color: "#C7D0DA" }}>
            The operational mandate was to eliminate unscheduled line stoppages, upgrade aging control panels to IP66 sanitary washdown standards, and establish seamless PROFINET communication across all conveyor drive sections.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Technical Architecture &amp; Control Engineering
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            MBH Solutions engineered an integrated electrical and digital motion control solution tailored for beverage packaging reliability:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ color: "#C7D0DA" }}>
            <li>
              <strong>Danfoss VLT AutomationDrive Synchronization</strong>: Replaced legacy motor starters with synchronized Danfoss FC-302 VFDs connected over PROFINET, executing dynamic acceleration/deceleration S-curves based on optical photo-eye container density sensors.
            </li>
            <li>
              <strong>Custom IP66 Stainless Steel Enclosures</strong>: Fabricated laser-cut 304 stainless steel floor-mounted control suites with Rittal climate control units, isolating sensitive electronics from humid washdown environments.
            </li>
            <li>
              <strong>Siemens S7-1500 &amp; Comfort HMI Deployment</strong>: Centralized line sequencing onto a Siemens S7-1500 processor paired with high-definition TP1200 Comfort touchscreens providing graphical line layout visualization and immediate fault diagnostics.
            </li>
            <li>
              <strong>ISO 13849-1 Category 4 Safety Circuitry</strong>: Integrated dual-channel emergency stop circuits, pneumatic dump valves, and safety interlock switches, ensuring immediate machine stoppage without loss of diagnostic state.
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
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Metric</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Legacy Line Baseline</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Synchronized System</th>
                </tr>
              </thead>
              <tbody style={{ color: "#9BAAB5", fontSize: "15px" }}>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Unscheduled Line Stoppages</td>
                  <td className="px-6 py-4 border-b border-gray-800">14–18 incidents per shift</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">&lt; 3 incidents per shift (-38% overall downtime)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Conveyor Speed Variance</td>
                  <td className="px-6 py-4 border-b border-gray-800">±5.2% analog slip</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">±0.2% digital PROFINET lock</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Fault Diagnostics &amp; Triage Time</td>
                  <td className="px-6 py-4 border-b border-gray-800">45 minutes average (multimeter troubleshooting)</td>
                  <td className="px-6 py-4 border-b border-gray-800 font-semibold text-amber">&lt; 8 minutes (visual HMI alarm mapping)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-gray-800 font-medium text-white">Drive Electrical Efficiency</td>
                  <td className="px-6 py-4 border-gray-800">Direct-on-line fixed speed motors</td>
                  <td className="px-6 py-4 border-gray-800 font-semibold text-amber">15.2% reduction in kilowatt-hour consumption</td>
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
                How does VFD multi-axis synchronization prevent bottle tipping on high-speed lines?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                By connecting Danfoss variable frequency drives over high-speed PROFINET communications, conveyor belts accelerate and decelerate using mathematical S-curve profiles. The drives continuously track line sensor feedback to ensure smooth transfers between conveyor modules, eliminating the sharp jerky motions that cause container tipping.
              </p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3
                className="text-lg font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                What safety standards are incorporated into the line control panels?
              </h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                All custom control suites conform to ISO 13849-1 Category 4 / Ple requirements. Fail-safe safety relays monitor emergency pull-cords, physical interlocks, and optical curtains, executing controlled power cutoff and pneumatic dump sequences to protect operating personnel while preserving PLC diagnostic state.
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
