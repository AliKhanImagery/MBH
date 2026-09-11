import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sanitary Process Equipment & Modular Skid Fabrication | MBH Solutions",
  description:
    "ASME BPE compliant stainless steel tanks, automated modular skids, orbital TIG welding, pickling & passivation, and turnkey mechanical erection across Pakistan and the region.",
  alternates: {
    canonical: "https://www.mbhsol.com/fabrication",
  },
  openGraph: {
    title: "Sanitary Process Equipment & Skid Fabrication | MBH Solutions",
    description:
      "Precision stainless steel vessel manufacturing, closed-chamber orbital welding, and turnkey modular skid systems for food, beverage, dairy, and chemical plants.",
    url: "https://www.mbhsol.com/fabrication",
    siteName: "MBH Solutions",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sanitary Process Equipment & Modular Skid Fabrication",
  "provider": {
    "@type": "Organization",
    "name": "MBH Solutions",
    "url": "https://www.mbhsol.com",
    "telephone": "+923322007373",
    "email": "sales@mbhsol.com",
  },
  "serviceType": "Industrial Stainless Steel Fabrication & Mechanical Erection",
  "areaServed": "Regional",
  "description":
    "Turnkey engineering, shop fabrication, automated orbital welding, and on-site mechanical installation of sanitary process tanks, pressure vessels, modular skids, and ASME BPE piping systems.",
};

const CAPABILITY_PILLARS = [
  {
    number: "01",
    title: "Sanitary Stainless Tanks & ASME Pressure Vessels",
    badge: "ASME Sec VIII · Dimple Jacketed",
    description:
      "Custom engineering and manufacturing of atmospheric storage, vacuum deaerators, and high-pressure process vessels. We fabricate vessels from 500 L pilot tanks up to 100,000 L outdoor storage silos in certified AISI 304L and 316L stainless steel.",
    features: [
      "Dimple & half-pipe thermal jackets rated up to 10 bar for high-efficiency steam and chilled glycol heat transfer",
      "High-shear bottom emulsifiers, magnetic hermetic mixers, and top-entry turbine/anchor agitators with food-grade PTFE wall scrapers",
      "Fully seal-welded 304 stainless steel insulation cladding (mineral wool/PUR) with zero open rivets to prevent bacterial harboring",
      "Sanitary fittings: aseptic manways, bursting discs, sterile vent filters, and EHEDG-compliant dual rotating spray balls",
    ],
  },
  {
    number: "02",
    title: "Turnkey Modular Process Skids & Automation Blocks",
    badge: "Plug-and-Play · 70% Less Downtime",
    description:
      "We design and pre-assemble complete process modules onto structural stainless steel skid frames in our controlled facility. Skids arrive fully wired, pre-piped, and wet-tested, reducing on-site tie-in windows from weeks to days.",
    features: [
      "Multi-circuit automated CIP/SIP skids with plate heat exchangers, chemical concentrate dosing, and conductivity-based rinse recovery",
      "Continuous sugar dissolving & pasteurisation skids with high-shear powder induction pumps (up to 40,000 L/h continuous delivery)",
      "Hazardous-area ATEX / HazLoc Zone 1/2 ingredient and chemical dosing skids with precision Coriolis mass flow measurement",
      "Mixproof double-seat valve manifold matrices (GEA/Bardiani) with integrated leak detection and automated CIP drainage troughs",
    ],
  },
  {
    number: "03",
    title: "ASME BPE Sanitary Piping & Closed-Chamber Orbital Welding",
    badge: "ASME BPE · <20 ppm O2 Purge",
    description:
      "High-purity hygienic fluid transfer requires crevice-free, uniform weld profiles that resist bacterial biofilm adhesion. We employ computer-controlled closed-chamber orbital GTAW/TIG welding with automated parameter data-logging.",
    features: [
      "Closed-chamber automated orbital welding with computer-synchronized pulse currents for 100% full-penetration flush inner beads",
      "High-purity 99.999% argon backing gas with real-time optical oxygen monitoring maintaining purge levels under 20 ppm O2",
      "Elimination of internal oxidation, heat-tint, and sugar-rogging on all food-contact tube joints",
      "Prefabricated modular piping spools inspected, marked, and hydro-tested in-shop to minimize on-site welding during shutdowns",
    ],
  },
  {
    number: "04",
    title: "Surface Engineering, Chemical Pickling & ASTM Passivation",
    badge: "Ra < 0.4 µm · ASTM A967",
    description:
      "Mechanical welding operations deplete protective chromium oxides from stainless steel. We execute multi-stage chemical surface treatments to restore passivity and guarantee corrosion resistance under aggressive CIP chemicals.",
    features: [
      "Internal mechanical polishing down to Ra < 0.8 µm (32 µin) sanitary food-grade and Ra < 0.4 µm (15 µin) electropolish",
      "Complete chemical pickling and passivation per ASTM A380 and ASTM A967 to regenerate the protective chromium-oxide layer",
      "Zero free-iron verification via ferroxyl testing and calibrated electronic surface profilometer certification logs",
      "Full material traceability with 3.1 EN 10204 Mill Test Reports (MTRs) validating chemical heat numbers and mechanical properties",
    ],
  },
  {
    number: "05",
    title: "On-Site Mechanical Erection, Rigging & Utility Tie-Ins",
    badge: "Turnkey Mechanical Installation",
    description:
      "Our factory-trained mechanical crews execute complete site erection, heavy rigging, and utility integration with minimal disruption to your active processing operations.",
    features: [
      "Heavy rigging and precision positioning of large tanks, silos, and structural skid suites through tight plant clearances",
      "Sanitary utility distribution: steam (ASME B31.1), condensate return, chilled glycol, sterile air, and RO/WFI loops",
      "Structural stainless steel platforms, cat-walks, non-slip stairs, and overhead pipe racks engineered to sanitary washdown standards",
      "Fast-track 48-to-72-hour weekend shutdown tie-in execution with dedicated shift rotations",
    ],
  },
];

const SPEC_TABLE_DATA = [
  { parameter: "Material Metallurgy", spec: "AISI 304, 304L, 316, 316L, 904L & Hastelloy C-22 (with EN 10204 3.1 MTRs)" },
  { parameter: "Design Codes & Standards", spec: "ASME BPE, ASME Section VIII Div 1, ASME B31.3 / B31.1, EHEDG & 3-A Sanitary" },
  { parameter: "Welding Technology", spec: "Automated Closed-Chamber Orbital TIG (GTAW) & Manual Sanitary TIG per ASME Section IX" },
  { parameter: "Inert Purge Quality", spec: "99.999% High-Purity Argon with real-time digital oxygen monitoring (< 20 ppm O2)" },
  { parameter: "Internal Surface Finish", spec: "Mechanical Polish Ra < 0.8 µm (standard) / Ra < 0.4 µm (high-purity / electropolished)" },
  { parameter: "Chemical Passivation", spec: "Nitric / Citric Acid Chemical Treatment per ASTM A380 / ASTM A967 with Ferroxyl validation" },
  { parameter: "Non-Destructive Testing (NDT)", spec: "100% Video Boroscopy, Hydrostatic Pressure Testing (1.5x Design Pressure), Dye Penetrant (PT)" },
  { parameter: "Turnover Documentation (TOP)", spec: "Complete Dossier: MTRs, Weld Maps, Boroscope Video Logs, Hydro-Test Charts, FAT Protocols" },
];

const FAT_STEPS = [
  {
    step: "01",
    title: "3D CAD Modeling & Spool Isometric Engineering",
    desc: "Every vessel, skid frame, and piping spool is modeled in 3D CAD to verify nozzle orientations, dead-leg elimination, and human ergonomics before cutting steel.",
  },
  {
    step: "02",
    title: "Cleanroom Shop Fabrication & Orbital Welding",
    desc: "Components are fabricated in our dedicated stainless facility. Certified ASME Section IX welders perform automated orbital welds under continuous argon purge.",
  },
  {
    step: "03",
    title: "Factory Acceptance Testing (FAT) & Hydro-Testing",
    desc: "Complete skid systems undergo simulated water runs, automated valve sequencing, and hydrostatic pressure testing at 1.5x design limits in our testing bay.",
  },
  {
    step: "04",
    title: "Site Rigging, Fast-Track Tie-In & Commissioning",
    desc: "Skids are delivered modularly for swift rigging, utility tie-in, automated passivation flushing, and startup during scheduled plant turnaround windows.",
  },
];

export default function FabricationPage() {
  return (
    <div style={{ backgroundColor: "#080B0F", minHeight: "100vh", color: "#ffffff" }}>
      <Header />

      <PageHero
        eyebrow="Engineering & Manufacturing"
        title="Sanitary Process Equipment & Modular Skid Fabrication"
        subtitle="ASME BPE compliant stainless steel vessel fabrication, continuous orbital TIG welding, automated modular skids, and turnkey on-site mechanical erection for food, beverage, dairy, and high-purity chemical plants."
        image="/images/sections/fabrication-welding.jpeg"
        imageAlt="MBH Solutions sanitary stainless steel welding and skid fabrication"
      />

      <main className="mx-auto max-w-[1400px] px-6 py-16 md:px-12" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {/* ── Engineering Snapshot Metrics Strip ── */}
        <section className="mb-20 grid grid-cols-2 gap-4 rounded-xl border border-gray-800 bg-[#0D1B2E]/70 p-6 md:grid-cols-4">
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Metallurgy</div>
            <div className="mt-1 text-base font-semibold text-white">304L · 316L · Hastelloy</div>
            <div className="mt-1 text-xs text-slate-400">Controlled Sulfur (0.005–0.017%)</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Welding Standard</div>
            <div className="mt-1 text-base font-semibold text-white">Orbital TIG · ASME Sec IX</div>
            <div className="mt-1 text-xs text-slate-400">&lt; 20 ppm O2 Purge Monitoring</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Surface Finish</div>
            <div className="mt-1 text-base font-semibold text-white">Ra &lt; 0.8 µm / Ra &lt; 0.4 µm</div>
            <div className="mt-1 text-xs text-slate-400">ASTM A967 Chemical Passivation</div>
          </div>
          <div>
            <div className="font-mono text-xs text-amber uppercase tracking-wider">Quality Turnover</div>
            <div className="mt-1 text-base font-semibold text-white">100% Video Boroscopy</div>
            <div className="mt-1 text-xs text-slate-400">Hydro-Test 1.5x &amp; EN 10204 3.1</div>
          </div>
        </section>

        {/* ── Section Intro: Why Modular Sanitary Fabrication Matters ── */}
        <section className="mb-24">
          <div className="grid gap-12 lg:grid-cols-[55fr_45fr] items-center">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#C87D00",
                  marginBottom: 16,
                }}
              >
                Hygienic Process Engineering
              </p>
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 32,
                  letterSpacing: "-0.8px",
                  lineHeight: 1.25,
                  color: "#ffffff",
                  marginBottom: 20,
                }}
              >
                Zero-Crevice Craftsmanship Engineered for Zero Plant Downtime
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                In food, dairy, and beverage manufacturing, product contamination from irregular weld seams, dead legs, or incomplete CIP drainage is a multi-million-dollar operational risk. Building process equipment directly on the plant floor causes prolonged shutdowns, dust contamination, and unpredictable quality.
              </p>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                MBH Solutions shifts up to <strong>80% of construction off-site</strong> into our clean manufacturing facility. We fabricate modular process skids, pre-welded piping spools, and jacketed vessels under controlled conditions, performing full factory acceptance testing (FAT) before the equipment ever reaches your loading dock.
              </p>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-xl border border-gray-800 bg-[#0D1B2E]">
              <Image
                src="/images/sections/cip-valves.png"
                alt="Sanitary mixproof valve matrix and stainless steel fabrication"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

        {/* ── 5 Core Capability Pillars ── */}
        <section className="mb-24">
          <div className="mb-12">
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#C87D00",
                marginBottom: 8,
              }}
            >
              Core Capabilities
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 30,
                letterSpacing: "-0.6px",
                color: "#ffffff",
              }}
            >
              Comprehensive Process Equipment &amp; Fabrication Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="flex flex-col justify-between rounded-xl border border-gray-800 bg-[#0D1B2E]/50 p-8 transition-all duration-200 hover:border-amber hover:bg-[#0D1B2E]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-amber">{pillar.number}</span>
                    <span className="rounded bg-amber/15 px-2.5 py-1 font-mono text-[10px] font-semibold text-amber uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 leading-snug">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#9BAAB5" }}>
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-3 pt-6 border-t border-gray-800/80 text-xs leading-relaxed" style={{ color: "#C7D0DA" }}>
                  {pillar.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber font-bold flex-shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technical Specifications & Tolerances Table ── */}
        <section className="mb-24">
          <div className="mb-8">
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#C87D00",
                marginBottom: 8,
              }}
            >
              Engineering Standards
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.6px",
                color: "#ffffff",
              }}
            >
              Manufacturing Tolerances &amp; Inspection Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className="uppercase tracking-wider"
                  style={{
                    backgroundColor: "rgba(21,38,84,0.4)",
                    color: "#C87D00",
                    fontSize: "12px",
                    fontFamily: "var(--font-ibm-plex-mono)",
                  }}
                >
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">Engineering Parameter</th>
                  <th className="px-6 py-4 border-b border-gray-800 font-medium">MBH Quality &amp; Compliance Specification</th>
                </tr>
              </thead>
              <tbody style={{ color: "#C7D0DA", fontSize: "14px" }}>
                {SPEC_TABLE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors border-b border-gray-800/80 last:border-0">
                    <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">{row.parameter}</td>
                    <td className="px-6 py-4">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Factory Acceptance Testing (FAT) & QA Workflow ── */}
        <section className="mb-24">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#C87D00",
                marginBottom: 8,
              }}
            >
              Quality Assurance Protocol
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 30,
                letterSpacing: "-0.6px",
                color: "#ffffff",
              }}
            >
              From 3D Spool Modeling to Commissioned Reality
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#9BAAB5" }}>
              Every skid and vessel is manufactured under a certified Quality Plan ensuring 100% compliance with client specifications before release.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FAT_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-gray-800 bg-[#0D1B2E]/60 p-6 transition-all hover:border-amber/50"
              >
                <div className="font-mono text-3xl font-black text-amber/40 mb-3">{step.step}</div>
                <h4 className="text-base font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#9BAAB5" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Commissioned Project References (Case Study Links) ── */}
        <section className="mb-24 rounded-2xl border border-gray-800 bg-[#0A0E17] p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#C87D00",
                  marginBottom: 6,
                }}
              >
                Proven Track Record
              </p>
              <h3 className="text-2xl font-medium text-white">Fabrication &amp; Mechanical Erection References</h3>
            </div>
            <Link
              href="/references"
              className="text-xs font-mono text-amber hover:underline uppercase tracking-wider"
            >
              View all project references &rarr;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/references/coca-cola-multan-line-automation"
              className="group block rounded-xl border border-gray-800 bg-[#0D1B2E]/50 p-6 transition-transform hover:-translate-y-1 hover:border-amber"
            >
              <div className="font-mono text-xs text-amber uppercase tracking-wider mb-2">Coca-Cola Tehran &amp; Multan</div>
              <div className="text-base font-semibold text-white group-hover:text-amber transition-colors mb-2">
                40,000 L/h Continuous Sugar Dissolving Skid &amp; Syrup Room
              </div>
              <div className="text-xs text-slate-400">
                ASME BPE 316L orbital piping, continuous dissolving skids, and automated CIP manifold erection.
              </div>
            </Link>

            <Link
              href="/references/fauji-foods-syrup-room-modernization"
              className="group block rounded-xl border border-gray-800 bg-[#0D1B2E]/50 p-6 transition-transform hover:-translate-y-1 hover:border-amber"
            >
              <div className="font-mono text-xs text-amber uppercase tracking-wider mb-2">Fauji Foods Ltd</div>
              <div className="text-base font-semibold text-white group-hover:text-amber transition-colors mb-2">
                Sanitary Mixproof Valve Matrix &amp; Dairy Batching
              </div>
              <div className="text-xs text-slate-400">
                Automated GEA double-seat valve manifold, recipe dosing skids, and complete CIP integration.
              </div>
            </Link>

            <Link
              href="/references/beverage-cip-recovery-modernization"
              className="group block rounded-xl border border-gray-800 bg-[#0D1B2E]/50 p-6 transition-transform hover:-translate-y-1 hover:border-amber"
            >
              <div className="font-mono text-xs text-amber uppercase tracking-wider mb-2">Enterprise Beverage Clients</div>
              <div className="text-base font-semibold text-white group-hover:text-amber transition-colors mb-2">
                Multi-Circuit CIP Skids &amp; Pigging Recovery
              </div>
              <div className="text-xs text-slate-400">
                Multi-tank CIP stations, automated pipeline pigging loops, and sanitary heat exchanger assemblies.
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* ── Direct Inquiry & RFQ Form (Contact.tsx) ── */}
      <Contact />

      <Footer />
    </div>
  );
}
