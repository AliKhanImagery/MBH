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
    "Comprehensive engineering, shop fabrication, automated orbital TIG welding, ASME BPE process piping, modular skids, and turnkey mechanical erection for food, beverage, dairy, and chemical plants.",
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
    badge: "ASME Sec VIII · Jacketed Vessels",
    summary:
      "Custom engineering and fabrication of atmospheric storage, vacuum deaeration vessels, and high-pressure process tanks from 500 L pilot units up to 100,000 L field silos in certified AISI 304L and 316L stainless steel.",
    technicalDetails: [
      {
        heading: "Vessel Architectures & Capacities",
        text: "We fabricate single-wall holding tanks, insulated storage silos, aseptic surge tanks, continuous pasteurisation holding tubes, vacuum deaerators, and chemical concentrate storage vessels engineered specifically for aggressive CIP reagents.",
      },
      {
        heading: "Thermal Transfer Jacketing",
        text: "Precision laser-welded dimple jackets and half-pipe coils designed for operating pressures up to 10 bar. Optimized for high-velocity chilled glycol, cooling tower water, or culinary steam with zoned heat-transfer jackets for precise temperature staging.",
      },
      {
        heading: "Agitation & Homogenization",
        text: "Custom-designed mixing systems including high-shear rotor-stator bottom emulsifiers for rapid powder dissolving (pectin, sugar, milk solids), magnetic hermetic drives for zero-leak aseptic operations, and top-entry anchor sweep agitators with food-grade Virgin PTFE wall scrapers.",
      },
      {
        heading: "Hermetic Insulation & Cladding",
        text: "Fully seam-welded 304 stainless steel outer sheathing with zero pop-rivets or silicone caulking, eliminating moisture penetration into mineral wool or polyurethane insulation during high-pressure sanitary plant washdowns.",
      },
    ],
  },
  {
    number: "02",
    title: "Turnkey Modular Process Skids & Systems",
    badge: "Plug-and-Play · 70% Less Plant Downtime",
    summary:
      "Pre-engineered, fully automated process skids manufactured in our controlled facility. Skids arrive on-site pre-piped, pre-wired, and wet-tested, reducing on-site tie-in timelines from several weeks to a single scheduled shutdown window.",
    technicalDetails: [
      {
        heading: "Automated CIP/SIP Skid Systems",
        text: "Single, dual, and multi-circuit Clean-in-Place stations featuring automated chemical concentrate dosing, inline plate/tubular heat exchangers, automated acid/caustic wash cycles, and conductivity-controlled rinse water recovery loops that slash water consumption by up to 35%.",
      },
      {
        heading: "Continuous Sugar Dissolving Skids",
        text: "High-throughput continuous dissolving units equipped with Fristam or Hilge high-shear powder induction mixers. Capable of preparing 65° Brix simple syrup continuously up to 40,000 L/h with automated closed-loop Maselli optical refractometer Brix locking.",
      },
      {
        heading: "Mixproof Valve Manifold Clusters",
        text: "Compact matrix blocks utilizing GEA or Bardiani double-seat mixproof valves with integrated physical leakage cavities. Enables simultaneous product transfer on Line A while conducting active 85°C caustic CIP sanitization on Line B with zero contamination risk.",
      },
      {
        heading: "Chemical & Additive Micro-Dosing Skids",
        text: "ATEX / HazLoc Zone 1/2 rated chemical dosing skids with Endress+Hauser Promass Coriolis mass flow meters, high-viscosity progressive cavity or positive displacement pumps, and Danfoss VFDs for micro-ingredient precision.",
      },
    ],
  },
  {
    number: "03",
    title: "ASME BPE Sanitary Piping & Orbital TIG Welding",
    badge: "ASME BPE · <20 ppm O2 Purge",
    summary:
      "High-purity hygienic fluid transfer demands perfectly flush, crevice-free internal weld beads that eliminate bacterial biofilm harborage. We utilize computer-controlled closed-chamber orbital GTAW/TIG welding with automated parameter data logging.",
    technicalDetails: [
      {
        heading: "Closed-Chamber Automated Orbital TIG",
        text: "Utilizes microprocessor-controlled orbital weld heads with synchronized pulse current, rotation speed, and arc voltage control. Guarantees 100% full-penetration, flush internal weld profiles compliant with ASME BPE weld acceptance criteria.",
      },
      {
        heading: "Controlled-Atmosphere Argon Purging",
        text: "Welds are backed by 99.999% ultra-high purity argon purge gas monitored with calibrated digital optical oxygen analyzers. The weld arc is inhibited until the internal oxygen concentration drops below 20 ppm O2, completely preventing heat tint and sugar-rogging.",
      },
      {
        heading: "Metallurgical Sulfur Balance",
        text: "We procure low-carbon 316L (1.4404) tubing with tightly controlled sulfur content between 0.005% and 0.017%. This balances surface tension gradients (Marangoni convection) in the molten weld pool, preventing asymmetrical or wandering weld penetration.",
      },
      {
        heading: "Prefabricated Modular Spooling",
        text: "Complex piping geometries are extracted from 3D laser scans and prefabricated into spool assemblies under cleanroom shop conditions. Each spool is hydrostatically tested, marked with unique weld IDs, and passivated before delivery to the site.",
      },
    ],
  },
  {
    number: "04",
    title: "Surface Engineering, Chemical Pickling & ASTM Passivation",
    badge: "Ra < 0.4 µm · ASTM A967",
    summary:
      "Mechanical cutting and welding deplete protective chromium oxides from stainless steel. We execute certified chemical surface treatments to restore passive oxide films and guarantee maximum corrosion resistance under aggressive CIP chemicals.",
    technicalDetails: [
      {
        heading: "Internal Mechanical & Fine Polishing",
        text: "Multi-stage grit mechanical polishing achieving Ra < 0.8 µm (32 µin) sanitary food standard and ultra-smooth Ra < 0.4 µm (15 µin) high-purity finish. Internal surface roughness is verified and certified using calibrated Mitutoyo digital surface profilometers.",
      },
      {
        heading: "Chemical De-Rouging & Pickling",
        text: "Application of pickling pastes and immersion baths per ASTM A380 to dissolve heat-tint discoloration, free-iron inclusions, and micro-weld spatter, exposing raw unadulterated base metal.",
      },
      {
        heading: "ASTM A967 Chemical Passivation",
        text: "Total chemical passivation utilizing formulated nitric or citric acid solutions. This selectively leaches free iron from the stainless surface while enriching chromium content, accelerating the formation of a dense, corrosion-resistant Cr2O3 passive layer.",
      },
      {
        heading: "Passivation Verification & Testing",
        text: "Surface cleanliness is validated via ferroxyl swab testing for free iron detection and high-humidity test chambers. A formal Passivation Certificate of Compliance is issued for every vessel and piping spool.",
      },
    ],
  },
  {
    number: "05",
    title: "On-Site Mechanical Erection, Rigging & Turnkey Tie-Ins",
    badge: "Turnkey Mechanical Installation",
    summary:
      "Our factory-trained mechanical crews manage complete on-site rigging, vessel erection, structural platform assembly, and utility integration with minimal disruption to ongoing production operations.",
    technicalDetails: [
      {
        heading: "Heavy Rigging & Vessel Positioning",
        text: "Execution of complex vessel rigging through existing plant roof openings or restricted access corridors utilizing hydraulic gantry systems, heavy-duty machinery skates, and laser alignment tooling.",
      },
      {
        heading: "Turnkey Utility Piping Systems",
        text: "Complete fabrication of plant utility infrastructure: high-pressure steam distribution (ASME B31.1), steam pressure reducing stations, condensate return loops, chilled glycol piping, sterile compressed air, and reverse osmosis (RO/WFI) loops.",
      },
      {
        heading: "Sanitary Structural Steel & Platforms",
        text: "Fabrication of sanitary stainless steel catwalks, mezzanines, access stairways, and overhead pipe bridges in bead-blasted or polished 304 stainless steel, engineered without unsealed hollow sections to prevent hidden water accumulation.",
      },
      {
        heading: "Fast-Track Shutdown Windows",
        text: "Turnaround tie-ins executed during scheduled 48-to-72-hour plant shutdowns. Multi-disciplinary teams work continuous shifts to complete final cut-ins, flange connections, hydrostatic pressure tests, and CIP sanitization flushes.",
      },
    ],
  },
];

const METALLURGY_GUIDE = [
  {
    alloy: "AISI 304 / 304L",
    pren: "18 – 20",
    composition: "18% Cr · 8% Ni · Low Carbon",
    bestFor: "Ambient sugar syrup storage, dairy raw intake, deaerated water holding, skid structural framework, and utility piping.",
    advantages: "Excellent formability and general atmospheric corrosion resistance; cost-effective solution for non-acidic process zones.",
    limits: "Susceptible to chloride pitting above 50°C; not recommended for hot acid CIP or high-saline products.",
  },
  {
    alloy: "AISI 316 / 316L",
    pren: "23 – 25",
    composition: "16–18% Cr · 10–14% Ni · 2.0–3.0% Mo",
    bestFor: "Carbonated beverage lines, acidic juices, hot caustic/acid CIP loops, dairy pasteurizers, and sanitary piping.",
    advantages: "Molybdenum addition provides superior resistance to pitting and crevice corrosion under hot chemical CIP conditions.",
    limits: "Standard alloy for food/beverage. Must maintain sulfur between 0.005–0.017% for automated orbital welding.",
  },
  {
    alloy: "AISI 904L / Hastelloy C-22",
    pren: "35 – 45+",
    composition: "High Ni · High Mo · Cr · W (C-22)",
    bestFor: "Hot brine marinades, high-chloride food seasonings, concentrated phosphoric acid degumming, and aggressive pickling lines.",
    advantages: "Virtually immune to chloride-induced stress corrosion cracking and extreme acid pitting at elevated process temperatures.",
    limits: "Higher material investment; requires specialized welding procedures (ASME Sec IX) and specialized inert shielding gases.",
  },
];

const ELASTOMER_GUIDE = [
  {
    material: "EPDM (Ethylene Propylene)",
    tempRange: "-40°C to +140°C",
    standards: "FDA CFR 177.2600 · USP Class VI",
    suitability: "Culinary steam, hot caustic wash (NaOH), hot water, and non-fatty beverages. Excellent ozone and heat resistance.",
  },
  {
    material: "FKM (Viton® Fluoroelastomer)",
    tempRange: "-15°C to +200°C",
    standards: "FDA CFR 177.2600 · 3-A Sanitary",
    suitability: "Edible oils, fatty milk solids, essential oil flavor concentrates, and hydrocarbons. Resistant to animal fats and oils.",
  },
  {
    material: "Virgin PTFE / TFM",
    tempRange: "-200°C to +260°C",
    standards: "FDA 21 CFR 177.1550 · USP Class VI",
    suitability: "Universal chemical inertness. Used in scraper blades, valve seats, and high-purity sanitary gasket envelopes.",
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

const TOP_DELIVERABLES = [
  {
    code: "DOC-01",
    title: "Certified Mill Test Reports (MTR 3.1)",
    description: "Full EN 10204 3.1 certification verifying heat numbers, chemical analysis, and mechanical tensile strengths for every sheet, pipe, and flange.",
  },
  {
    code: "DOC-02",
    title: "Weld Procedure & Welder Qualifications",
    description: "Complete Welding Procedure Specifications (WPS), Procedure Qualification Records (PQR), and Welder Performance Qualifications (WPQ) per ASME Section IX.",
  },
  {
    code: "DOC-03",
    title: "Weld Identification Map & Joint Log",
    description: "Detailed 3D isometric drawing linking every physical joint to its assigned weld ID, welder number, date of execution, and boroscopic pass status.",
  },
  {
    code: "DOC-04",
    title: "100% Video Boroscopy Digital Package",
    description: "High-definition video files of all internal orbital welds provided on digital media, showing full 360-degree internal bead profiles.",
  },
  {
    code: "DOC-05",
    title: "Hydrostatic Pressure Test Certificates",
    description: "Certified test chart logs recording test pressures held at 1.5x design ratings for 60+ minutes with calibrated test gauge serials.",
  },
  {
    code: "DOC-06",
    title: "Surface Roughness (Ra) Test Sheets",
    description: "Digital stylus profilometer reports certifying internal surface finishes at critical vessel and piping measurement points.",
  },
  {
    code: "DOC-07",
    title: "Passivation Certificate of Compliance",
    description: "Verification records detailing acid chemistry, exposure durations, rinse water pH neutralization, and negative ferroxyl test results per ASTM A967.",
  },
  {
    code: "DOC-08",
    title: "As-Built P&IDs & General Arrangement CAD",
    description: "Final red-line updated Process & Instrumentation Diagrams (P&ID) and 3D CAD models detailing all final tie-in dimensions and nozzle coordinates.",
  },
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

const ENGINEERING_FAQS = [
  {
    q: "What is the operational advantage of automated orbital welding over manual sanitary TIG?",
    a: "Manual TIG welding relies on human hand speed and torch angle, which can result in inconsistent internal weld penetration, micro-crevices, and excess heat-tint oxidation. Automated closed-chamber orbital welding regulates current, pulse frequency, and travel speed with computerized precision. Under continuous argon purge (< 20 ppm O2), it delivers a perfectly flush, crevice-free internal weld bead that resists bacterial biofilm formation and ensures 100% cleanability during CIP sanitization.",
  },
  {
    q: "Why does MBH strictly control sulfur content between 0.005% and 0.017% in sanitary 316L tubing?",
    a: "Sulfur acts as a surface-active element in the molten weld pool. If sulfur is below 0.005%, Marangoni fluid flow causes the molten metal to spread outward, resulting in wide, shallow penetration. If sulfur exceeds 0.017%, fluid flows deeply downward, causing burn-through. Controlling sulfur tightly between 0.005% and 0.017% guarantees symmetrical, uniform weld pool penetration across all orbital joints.",
  },
  {
    q: "How does modular off-site skid fabrication reduce overall CAPEX and installation downtime?",
    a: "Building process equipment on an active plant floor requires hot-work permits, dust containment tents, temporary scaffolding, and prolonged plant shutdowns costing tens of thousands of dollars per day. With modular skid fabrication, 80% of assembly occurs in our clean facility while your plant continues running. The completed skid arrives pre-piped, pre-wired, and wet-tested. On-site installation is reduced to rigging into position, bolting down, and connecting primary utility tie-ins during a single 48-to-72-hour weekend shutdown.",
  },
  {
    q: "What internal surface roughness (Ra) is required for food, beverage, and dairy contact?",
    a: "For general food and beverage applications, an internal mechanical finish of Ra < 0.8 µm (32 µin) is the recognized sanitary standard under 3-A and EHEDG guidelines. For dairy, baby food, and aseptic processing, a high-purity mechanical polish of Ra < 0.4 µm (15 µin) or electropolishing is recommended to eliminate surface microscopic pockets where proteins and bacterial colonies can anchor.",
  },
  {
    q: "How do you verify that Clean-in-Place (CIP) spray balls cover 100% of internal vessel surfaces?",
    a: "We conduct a Riboflavin Spray Coverage Test compliant with EHEDG guidelines. The vessel interior is completely coated with a fluorescent riboflavin solution and inspected under UV blacklight. The automated CIP cycle is initiated for a timed wash. Post-wash UV inspection verifies that 100% of the riboflavin has been dissolved and removed, proving that there are zero spray shadows or blind spots behind agitator shafts and baffles.",
  },
  {
    q: "What documents are included in the Turnover Package (TOP) for multinational audits?",
    a: "Every project is accompanied by an audit-ready Turnover Package containing EN 10204 3.1 Mill Test Reports (chemical & mechanical properties), Welder Performance Qualifications (WPQ/WPS), 3D isometric weld identification maps, digital video boroscopy recordings of internal joints, certified hydrostatic test chart logs, surface profilometer roughness sheets, and ASTM A967 Passivation Certificates.",
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
              <p className="leading-relaxed mb-4" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                MBH Solutions shifts up to <strong>80% of construction off-site</strong> into our clean manufacturing facility. We fabricate modular process skids, pre-welded piping spools, and jacketed vessels under controlled conditions, performing full factory acceptance testing (FAT) before the equipment ever reaches your loading dock.
              </p>
              <p className="leading-relaxed" style={{ color: "#C7D0DA", fontSize: "15px" }}>
                Our turnkey engineering approach unites <strong>mechanical vessel fabrication, sanitary orbital welding, and Siemens automation</strong> under a single contract, eliminating vendor finger-pointing between mechanical builders and control system integrators.
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-gray-800 bg-[#0D1B2E]">
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

        {/* ── 5 Core Capability Pillars (Deep Dives) ── */}
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
            <p className="mt-2 text-sm" style={{ color: "#9BAAB5" }}>
              Explore the technical engineering specifications of our shop-built vessels, modular skid assemblies, and orbital piping.
            </p>
          </div>

          <div className="space-y-8">
            {CAPABILITY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-xl border border-gray-800 bg-[#0D1B2E]/50 p-8 transition-all duration-200 hover:border-amber hover:bg-[#0D1B2E]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-gray-800/80 gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl font-bold text-amber">{pillar.number}</span>
                    <h3 className="text-2xl font-semibold text-white leading-snug">{pillar.title}</h3>
                  </div>
                  <span className="rounded bg-amber/15 px-3 py-1 font-mono text-xs font-semibold text-amber uppercase tracking-wider self-start md:self-auto">
                    {pillar.badge}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-8" style={{ color: "#C7D0DA" }}>
                  {pillar.summary}
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  {pillar.technicalDetails.map((detail, idx) => (
                    <div key={idx} className="rounded-lg border border-gray-800/80 bg-black/20 p-5">
                      <div className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="text-amber">▪</span>
                        {detail.heading}
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "#9BAAB5" }}>
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Metallurgy & Chemical Compatibility Guide ── */}
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
              Metallurgy &amp; Material Selection
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.6px",
                color: "#ffffff",
              }}
            >
              Alloy Selection for Chemical &amp; Thermal Compatibility
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#9BAAB5" }}>
              Choosing the correct stainless metallurgy prevents pitting corrosion, stress cracking, and product degradation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {METALLURGY_GUIDE.map((mat, idx) => (
              <div key={idx} className="rounded-xl border border-gray-800 bg-[#0D1B2E]/60 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{mat.alloy}</h4>
                    <span className="font-mono text-xs text-amber font-semibold">PREN {mat.pren}</span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 mb-4">{mat.composition}</div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-1">Recommended Use:</span>
                    <p className="text-xs leading-relaxed" style={{ color: "#9BAAB5" }}>{mat.bestFor}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-amber uppercase tracking-wider block mb-1">Key Advantages:</span>
                    <p className="text-xs leading-relaxed" style={{ color: "#C7D0DA" }}>{mat.advantages}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Operational Limit: </span>
                  {mat.limits}
                </div>
              </div>
            ))}
          </div>

          {/* Elastomers & Gaskets Strip */}
          <div className="rounded-xl border border-gray-800 bg-[#0A0E17] p-6">
            <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-amber">🛡️</span> Sanitary Seal &amp; Gasket Compatibility
            </h4>
            <div className="grid gap-4 sm:grid-cols-3">
              {ELASTOMER_GUIDE.map((el, i) => (
                <div key={i} className="rounded-lg border border-gray-800/80 bg-[#0D1B2E]/40 p-4">
                  <div className="text-sm font-semibold text-white mb-1">{el.material}</div>
                  <div className="font-mono text-[11px] text-amber mb-1">{el.tempRange}</div>
                  <div className="text-[10px] font-mono text-slate-400 mb-2">{el.standards}</div>
                  <p className="text-xs" style={{ color: "#9BAAB5" }}>{el.suitability}</p>
                </div>
              ))}
            </div>
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

        {/* ── Turnover Documentation Package (TOP) Dossier ── */}
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
              Audit-Ready Documentation
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.6px",
                color: "#ffffff",
              }}
            >
              Turnover Package (TOP) Dossier Deliverables
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#9BAAB5" }}>
              Every fabricated vessel and skid arrives with complete certification packages required for multinational QA sign-offs and regulatory validation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOP_DELIVERABLES.map((doc, idx) => (
              <div key={idx} className="rounded-xl border border-gray-800 bg-[#0D1B2E]/40 p-5 hover:border-gray-700 transition-colors">
                <div className="font-mono text-xs text-amber font-semibold mb-2">{doc.code}</div>
                <h4 className="text-sm font-semibold text-white mb-2">{doc.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#9BAAB5" }}>
                  {doc.description}
                </p>
              </div>
            ))}
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

        {/* ── In-Depth Technical Engineering FAQs ── */}
        <section className="mb-24">
          <div className="mb-10">
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
              Technical Clarity
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.6px",
                color: "#ffffff",
              }}
            >
              Frequently Asked Engineering Questions
            </h2>
          </div>

          <div className="space-y-6">
            {ENGINEERING_FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-800 p-6 rounded-xl bg-white/[0.03]">
                <h3 className="text-base font-semibold text-white mb-3 flex items-start gap-3">
                  <span className="text-amber font-mono">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#C7D0DA" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Direct Inquiry & RFQ Form (Contact.tsx) ── */}
      <Contact />

      <Footer />
    </div>
  );
}
