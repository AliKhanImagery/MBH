import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise CIP & Product Recovery Modernization | MBH Solutions",
  description: "Technical case study on full-line installation, modernization, and control migrations for Coca-Cola, Pepsi, Meezan, and Dalda Foods.",
  alternates: {
    canonical: "https://www.mbhsol.com/references/beverage-cip-recovery-modernization",
  },
  openGraph: {
    title: "Enterprise CIP & Product Recovery Modernization | MBH Solutions",
    description: "Technical case study on full-line installation, modernization, and control migrations for Coca-Cola, Pepsi, Meezan, and Dalda Foods.",
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
  "description": "Technical case study on full-line installation, modernization, and control migrations for Coca-Cola, Pepsi, Meezan, and Dalda Foods.",
  "author": {
    "@type": "Organization",
    "name": "MBH Solutions",
    "url": "https://www.mbhsol.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MBH Solutions",
    "url": "https://www.mbhsol.com"
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does automated pigging improve yield recovery in beverage processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Automated pigging systems recover residual product from pipelines before the CIP cycle begins, drastically reducing product loss and minimizing the biological load sent to wastewater treatment. This can increase yield recovery up to 98%."
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
        subtitle="Highlighting full-line installation, modernization, and control migrations across Coca-Cola, Pepsi, Meezan, and Dalda Foods (Cup Shup)."
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
        </div>
        
        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Technical Architecture</h2>
          <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA" }}>
            Our modernization strategy for enterprise food and beverage clients involves end-to-end automation of product recovery and Cleaning-in-Place (CIP) systems. We implement highly efficient, multi-circuit CIP stations capable of handling flow rates up to 80,000 L/h, integrated with advanced automated pigging systems to maximize yield and minimize waste.
          </p>
          <p className="leading-relaxed" style={{ color: "#C7D0DA" }}>
            A critical component of this architecture is the seamless migration of legacy control systems to modern Siemens PLC infrastructure. By upgrading from S7-300 to S7-1200 and S7-1500 controllers, and standardizing them into a central SCADA network, we deliver enhanced real-time telemetry, precise parameter control, and extensive diagnostic capabilities.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Specifications & Results</h2>
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
                  <td className="px-6 py-4 border-b border-gray-800">Automated pigging, up to 98% recovery</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-800 font-medium text-white">CIP Cycle Automation</td>
                  <td className="px-6 py-4 border-b border-gray-800">Manual intervention, 4-6 hours downtime</td>
                  <td className="px-6 py-4 border-b border-gray-800">Multi-circuit stations, &lt; 2 hours downtime</td>
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
              <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>How does automated pigging improve yield recovery in beverage processing?</h3>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>Automated pigging systems recover residual product from pipelines before the CIP cycle begins, drastically reducing product loss and minimizing the biological load sent to wastewater treatment. This can increase yield recovery up to 98%.</p>
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
