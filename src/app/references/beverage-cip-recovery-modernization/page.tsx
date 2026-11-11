import { DEFAULT_OG_IMAGE, ORG_ID } from "@/lib/schema";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Recovery and CIP Integration",
  description: "Product recovery runs before CIP: pigging or a water push returns product from the lines, then CIP cleans them. How MBH modernizes beverage lines.",
  alternates: {
    canonical: "https://www.mbhsol.com/references/beverage-cip-recovery-modernization",
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Product Recovery and CIP Integration | MBH Solutions",
    description: "Product recovery runs before CIP: pigging or a water push returns product from the lines, then CIP cleans them. How MBH modernizes beverage lines.",
    url: "https://www.mbhsol.com/references/beverage-cip-recovery-modernization",
    siteName: "MBH Solutions",
    type: "article",
  },
};

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mbhsol.com/references/beverage-cip-recovery-modernization"
  },
  "headline": "Enterprise CIP & Product Recovery Modernization",
  "description": "Product recovery runs before CIP: pigging or a water push returns product from the lines, then CIP cleans them. How MBH modernizes beverage lines.",
  "author": { "@id": ORG_ID },
  "publisher": { "@id": ORG_ID },
  "dateModified": "2026-11-11",
  "about": { "@id": "https://www.mbhsol.com/solutions/cip-systems#service" },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do product recovery systems integrate with CIP operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Product recovery runs as the first step of the cleaning sequence. Pigging or a water push clears product from pipes and tanks, back to process or to a recovery tank. The CIP system then starts its rinse, caustic and acid steps. In an integrated system one PLC sequence controls both, so cleaning never starts while product is still in the line."
        }
      },
      {
        "@type": "Question",
        "name": "How does automated pigging improve yield recovery in beverage processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Automated pigging recovers residual product from pipelines before the CIP cycle begins. Product that would otherwise be flushed to drain is returned to process or a recovery tank, which reduces product loss and lowers the organic load sent to wastewater treatment."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of migrating from Siemens S7-300 to S7-1500?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Migrating to the S7-1500 platform offers higher processing speeds, advanced integrated diagnostics, standardized PROFINET communication, and seamless integration into modern central SCADA systems, preventing obsolescence risks associated with legacy S7-300 hardware."
        }
      }
    ]
  }
};

export default function CIPRecoveryCaseStudy() {
  return (
    <div style={{ backgroundColor: "#080B0F", minHeight: "100vh", color: "#ffffff" }}>
      <Header />
      <PageHero
        eyebrow="Case Study"
        title="Enterprise CIP & Product Recovery Modernization"
        subtitle="Integrating product recovery, multi-circuit CIP and Siemens PLC control migration on existing beverage lines."
      />
      
      <main className="mx-auto max-w-[1000px] px-6 py-16 md:px-12" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
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
          <p className="mt-4 text-sm" style={{ color: "#C7D0DA" }}>
            Related solution:{" "}
            <Link href="/solutions/cip-systems" className="text-amber hover:underline">
              Automated CIP Systems for Beverage and Food Plants
            </Link>
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Technical Architecture</h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            MBH Solutions modernises product recovery and Cleaning-in-Place (CIP) on existing food and beverage lines as one integrated system. Multi-circuit CIP stations are combined with pigging or water-push product recovery, so product is returned to process before the cleaning sequence begins and less product is lost to drain.
          </p>
          <p className="leading-relaxed" style={{ color: "#C7D0DA" }}>
            Control migration is part of the same scope: legacy Siemens S7-300 controllers are upgraded to S7-1200 or S7-1500 and brought into a central SCADA system, giving operators real-time process data, recipe-driven cleaning sequences and plant-wide diagnostics.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Before and After Modernisation</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="uppercase tracking-wider" style={{ backgroundColor: "rgba(21,38,84,0.35)", color: "#C87D00", fontSize: "12px", fontFamily: "var(--font-ibm-plex-mono)" }}>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Metric</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Before Modernization</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">After Modernization</th>
                </tr>
              </thead>
              <tbody style={{ color: "#9BAAB5", fontSize: "15px" }}>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">Yield Recovery</td>
                  <td className="px-6 py-4 border-b border-gray-800">Manual draining, high product loss</td>
                  <td className="px-6 py-4 border-b border-gray-800">Pigging or water-push recovery before CIP</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">CIP Cycle Automation</td>
                  <td className="px-6 py-4 border-b border-gray-800">Manual valve changes and operator-timed steps</td>
                  <td className="px-6 py-4 border-b border-gray-800">Recipe-driven multi-circuit CIP stations</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-gray-800 font-medium text-white">PLC Infrastructure & Telemetry</td>
                  <td className="px-6 py-4 border-gray-800">Legacy S7-300, standalone HMI logs</td>
                  <td className="px-6 py-4 border-gray-800">S7-1200 / S7-1500, Central SCADA & real-time telemetry</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-medium mb-6 text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>How do product recovery systems integrate with CIP operations?</h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>Product recovery runs as the first step of the cleaning sequence. Pigging or a water push clears product from pipes and tanks, back to process or to a recovery tank. The CIP system then starts its rinse, caustic and acid steps. In an integrated system one PLC sequence controls both, so cleaning never starts while product is still in the line.</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>How does automated pigging improve yield recovery in beverage processing?</h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>Automated pigging recovers residual product from pipelines before the CIP cycle begins. Product that would otherwise be flushed to drain is returned to process or a recovery tank, which reduces product loss and lowers the organic load sent to wastewater treatment.</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>What are the benefits of migrating from Siemens S7-300 to S7-1500?</h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>Migrating to the S7-1500 platform offers higher processing speeds, advanced integrated diagnostics, standardized PROFINET communication, and seamless integration into modern central SCADA systems, preventing obsolescence risks associated with legacy S7-300 hardware.</p>
            </div>
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
