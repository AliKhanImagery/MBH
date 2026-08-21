import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Enterprise CIP & Product Recovery Modernization | MBH Solutions',
  description: 'Case study on enterprise CIP and product recovery modernization, featuring full-line installations and control migrations across top beverage companies.',
  alternates: {
    canonical: 'https://www.mbhsol.com/references/beverage-cip-recovery-modernization'
  }
};

export default function BeverageCIPRecoveryModernizationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.mbhsol.com/references/beverage-cip-recovery-modernization"
    },
    "headline": "Enterprise CIP & Product Recovery Modernization",
    "description": "Technical case study detailing full-line installation, modernization, and control migrations across top food and beverage brands.",
    "publisher": {
      "@type": "Organization",
      "name": "MBH Solutions",
      "url": "https://www.mbhsol.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mbhsol.com/logo.png"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "MBH Solutions",
      "url": "https://www.mbhsol.com"
    }
  };

  return (
    <>
      <Script
        id="techarticle-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          <div className="relative max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Enterprise CIP &amp; Product Recovery Modernization
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
              Full-line installation, modernization, and control migrations driving operational excellence across industry leaders including <strong>Coca-Cola</strong>, <strong>Pepsi</strong>, <strong>Meezan</strong>, and <strong>Dalda Foods (Cup Shup)</strong>.
            </p>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-200 pb-4">
            Technical Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Automated Pigging &amp; Product Recovery</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Engineered for maximum product yield and minimal waste, our automated pigging systems integrate directly with existing pipework. The implementation guarantees sanitary transport while recovering up to 99% of residual product before the CIP cycle initiates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Multi-Circuit CIP Stations</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Deployed modular, multi-circuit Clean-In-Place (CIP) stations capable of high-throughput operations up to <strong>80,000 L/h</strong>. These systems enable concurrent cleaning of multiple lines and tanks, significantly reducing turnaround times and ensuring uncompromised hygiene.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Siemens PLC &amp; SCADA Migrations</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive control system upgrades to unify disparate plant operations. We migrated legacy controllers to modern <strong>Siemens PLC architectures (S7-300, S7-1200, and S7-1500)</strong>, bringing everything under a central, high-visibility SCADA environment. This provides operators with real-time telemetry, automated cycle reporting, and predictive maintenance insights.
              </p>
            </div>
          </div>
        </section>

        {/* Specifications Table Section */}
        <section className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-200 pb-4">
            Performance Metrics &amp; Specifications
          </h2>
          <div className="overflow-x-auto shadow-sm rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="py-4 px-6 font-semibold border-b border-slate-200">Metric / System</th>
                  <th className="py-4 px-6 font-semibold border-b border-slate-200">Before Modernization</th>
                  <th className="py-4 px-6 font-semibold border-b border-slate-200">After Modernization</th>
                  <th className="py-4 px-6 font-semibold border-b border-slate-200">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">Yield Recovery</td>
                  <td className="py-4 px-6 text-slate-600">High residual waste</td>
                  <td className="py-4 px-6 text-slate-600">Up to 99% product recovered</td>
                  <td className="py-4 px-6 text-emerald-600 font-semibold">Massive ROI increase</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">CIP Cycle Automation</td>
                  <td className="py-4 px-6 text-slate-600">Manual interventions, delayed phases</td>
                  <td className="py-4 px-6 text-slate-600">Fully automated multi-circuit (80k L/h)</td>
                  <td className="py-4 px-6 text-emerald-600 font-semibold">30% Downtime reduction</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">PLC Telemetry</td>
                  <td className="py-4 px-6 text-slate-600">Isolated loop controls</td>
                  <td className="py-4 px-6 text-slate-600">Centralized S7-1500 / SCADA integration</td>
                  <td className="py-4 px-6 text-emerald-600 font-semibold">Real-time visibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
