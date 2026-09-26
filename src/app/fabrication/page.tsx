import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaLink } from "@/components/CtaLink";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mechanical Fabrication & Modular Process Engineering | MBH Solutions",
  description:
    "End-to-end mechanical fabrication, sanitary process piping, pressure vessels, modular skids, and conveyor automation. ISO 9001:2015 certified with 1 µm machining tolerance.",
  alternates: {
    canonical: "https://www.mbhsol.com/fabrication",
  },
  openGraph: {
    title: "Mechanical Fabrication & Modular Process Engineering | MBH Solutions",
    description:
      "Structural fabrication, process piping, and automation-integrated systems, engineered and commissioned to industrial tolerance.",
    url: "https://www.mbhsol.com/fabrication",
    siteName: "MBH Solutions",
    images: [
      {
        url: "/images/sections/fabrication-welding.jpeg",
        width: 1200,
        height: 630,
        alt: "MBH Solutions mechanical fabrication and sanitary orbital welding",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mechanical Fabrication & Industrial Process Engineering",
  "provider": {
    "@type": "Organization",
    "name": "MBH Solutions",
    "url": "https://www.mbhsol.com",
    "logo": "https://www.mbhsol.com/mbh-logo.png",
    "telephone": "+923322007373",
    "email": "sales@mbhsol.com",
  },
  "serviceType": "Mechanical Fabrication, Process Piping, and Skid Assembly",
  "areaServed": "Regional & Worldwide",
  "description":
    "Turnkey engineering, shop fabrication, automated orbital welding, and on-site mechanical installation of sanitary process tanks, pressure vessels, modular skids, and material handling conveyors.",
};

/* ── 4 Custom Fabrication Services (Page 02 of Profile) ── */
const CUSTOM_FABRICATION_SERVICES = [
  {
    id: "plate-work",
    number: "01",
    badge: "Plate-work and all kinds of process machines",
    title: "Sanitary Process Vessels, Tanks & Machines",
    image: "/images/sections/plate-work-vessel.jpg",
    imageAlt: "Stainless steel sanitary mixing vessel on fabricated tubular skid frame",
    summary:
      "Custom engineering and shop fabrication of atmospheric storage tanks, jacketed blending vessels, vacuum deaerators, and continuous holding tubes from 500 L pilot units up to 100,000 L industrial silos.",
    highlights: [
      {
        heading: "Vessel Architectures & Capacities",
        text: "Single-wall holding tanks, insulated storage silos, aseptic surge tanks, continuous pasteurisation holding tubes, vacuum deaerators, and chemical concentrate storage vessels engineered for aggressive CIP regimes.",
      },
      {
        heading: "Thermal Transfer Jacketing",
        text: "Precision laser-welded dimple jackets and half-pipe coils designed for operating pressures up to 10 bar. Optimized for high-velocity chilled glycol, cooling tower water, or culinary steam with zoned heat-transfer manifolds.",
      },
      {
        heading: "Agitation & Homogenization",
        text: "Engineered top-entry, bottom-entry magnetic, or high-shear rotor-stator mixers. Configured with marine-type impellers, pitched turbine blades, or PTFE scraper anchors for viscous syrups and emulsions.",
      },
      {
        heading: "Sanitary Drainability & Venting",
        text: "True conical, dished (torispherical), or flat-sloped bottom heads paired with zero-dead-leg diaphragm or mixproof bottom outlet valves ensuring 100% gravity self-drainage.",
      },
    ],
  },
  {
    id: "piping-process",
    number: "02",
    badge: "Piping and Process Engineering",
    title: "Hygienic Process & Utility Piping Networks",
    image: "/images/sections/piping-process-engineering.jpg",
    imageAlt: "Industrial factory process and utility piping headers with compressor units",
    summary:
      "High-integrity fluid transfer systems and plant utility infrastructure. Closed-chamber automated orbital TIG and manual sanitary welding under continuous inert argon purge (< 20 ppm O2).",
    highlights: [
      {
        heading: "Closed-Chamber Automated Orbital TIG",
        text: "Microprocessor-controlled orbital weld heads with synchronized pulse current, rotation speed, and arc voltage control, guaranteeing 100% full-penetration, flush internal weld profiles.",
      },
      {
        heading: "Controlled-Atmosphere Argon Purging",
        text: "Welds backed by 99.999% ultra-high purity argon purge gas monitored with calibrated digital optical oxygen analyzers. The arc is inhibited until oxygen drops below 20 ppm O2, preventing heat tint.",
      },
      {
        heading: "Turnkey Plant Utility Infrastructure",
        text: "Complete fabrication of culinary steam distribution, condensate return loops, chilled glycol headers, sterile compressed air, and reverse osmosis (RO/WFI) distribution loops.",
      },
      {
        heading: "Cleanroom Prefabricated Spooling",
        text: "Complex piping geometries extracted from 3D laser models and prefabricated into modular spool assemblies in our clean facility. Each spool is hydrostatically tested, numbered, and passivated.",
      },
    ],
  },
  {
    id: "structural-fab",
    number: "03",
    badge: "Structural Fabrication",
    title: "Industrial Pipe Bridges, Mezzanines & Frameworks",
    image: "/images/sections/structural-pipe-bridge.jpg",
    imageAlt: "Outdoor multi-tier industrial structural steel pipe rack and access catwalk",
    summary:
      "Heavy-duty sanitary stainless and galvanized steel catwalks, multi-tier overhead pipe bridges, access stair towers, and skid structural subframes engineered for extreme industrial vibration and seismic loads.",
    highlights: [
      {
        heading: "Sanitary Structural Catwalks & Platforms",
        text: "Fabrication of sanitary stainless catwalks, operator platforms, and overhead pipe bridges in bead-blasted or polished 304/316 stainless steel, engineered without unsealed hollow sections.",
      },
      {
        heading: "Heavy-Duty Pipe Bridges & Racks",
        text: "Multi-tier structural racks carrying high-density utility bundles, product headers, and electrical cable trays across factory spans with calculated expansion loops and seismic restraints.",
      },
      {
        heading: "Equipment Skid Baseframes",
        text: "Heavy tubular structural skid bases with integrated drip trays, perimeter coamings, and anti-vibration leveling feet engineered to support static and dynamic operational loads.",
      },
      {
        heading: "Fast-Track Plant Tie-In Erection",
        text: "Prefabricated modular frames designed for rapid rigging through existing roof openings or doorways during scheduled 48-to-72-hour turnaround shutdown windows.",
      },
    ],
  },
  {
    id: "mechanical-conveyors",
    number: "04",
    badge: "Mechanical and Conveyors",
    title: "Conveying Systems & Material Handling Automation",
    image: "/images/sections/sanitary-curved-conveyor.jpg",
    imageAlt: "3D CAD product render of curved sanitary modular belt conveyor with gear motor",
    summary:
      "Sanitary belt conveyors, 90°/180° modular plastic curve conveyors, cleated incline elevators, and accumulation roller tables engineered for high-speed food, beverage, and container handling.",
    highlights: [
      {
        heading: "Curved & Modular Plastic Belt Lines",
        text: "Sanitary modular belt conveyors engineered with low-friction acetal belts, tool-less quick-release belt lifters, and stainless washdown frames for hygienic sanitization.",
      },
      {
        heading: "Cleated Incline & Bucket Elevators",
        text: "Steep-angle bulk ingredient handling for bottle caps, dry powders, preforms, and packaging cartons featuring food-grade FDA-compliant belts and enclosed catch pans.",
      },
      {
        heading: "Line Synchronization & Motion Control",
        text: "Drive packages utilizing Danfoss variable frequency drives (VFDs) and high-efficiency IP66 electric gear motors synchronized directly to upstream fillers and downstream packers.",
      },
      {
        heading: "Dynamic Accumulation & Buffering",
        text: "Zero-pressure accumulation roller and modular table-top chains that absorb line micro-stops and balance production throughput across packaging operations.",
      },
    ],
  },
];

/* ── Metallurgy Reference Matrix ── */
const METALLURGY_GUIDE = [
  {
    alloy: "AISI 304 / 304L",
    pren: "18 – 20",
    composition: "18% Cr · 8% Ni · Low Carbon",
    bestFor: "Ambient sugar syrup storage, raw water intake, deaerated water holding, skid structural framework, and utility piping.",
    advantages: "Excellent formability and general atmospheric corrosion resistance; cost-effective solution for non-acidic process zones.",
    limits: "Susceptible to chloride pitting above 50°C; not recommended for hot acid CIP or high-saline products.",
  },
  {
    alloy: "AISI 316 / 316L",
    pren: "23 – 25",
    composition: "16–18% Cr · 10–14% Ni · 2.0–3.0% Mo",
    bestFor: "Carbonated soft drink lines, acidic juices, hot caustic/acid CIP loops, dairy pasteurizers, and sanitary piping.",
    advantages: "Molybdenum addition provides superior resistance to pitting and crevice corrosion under hot chemical CIP conditions.",
    limits: "Standard alloy for food/beverage. Must maintain sulfur between 0.005–0.017% for automated orbital welding.",
  },
  {
    alloy: "AISI 904L / Hastelloy C-22",
    pren: "35 – 45+",
    composition: "High Ni · High Mo · Cr · W (C-22)",
    bestFor: "Hot brine marinades, high-chloride food seasonings, concentrated phosphoric acid degumming, and aggressive pickling lines.",
    advantages: "Virtually immune to chloride-induced stress corrosion cracking and extreme acid pitting at elevated process temperatures.",
    limits: "Higher material investment; requires specialized welding procedures and specialized inert shielding gases.",
  },
];

/* ── Sanitary Elastomer Matrix ── */
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

/* ── Technical Specifications Summary Table ── */
const SPEC_TABLE_DATA = [
  { parameter: "Material Metallurgy", spec: "AISI 304, 304L, 316, 316L, 904L & Hastelloy C-22 (with EN 10204 3.1 MTRs)" },
  { parameter: "Design Standards", spec: "Sanitary Process Guidelines, EHEDG & 3-A Sanitary Design Principles" },
  { parameter: "Welding Technology", spec: "Automated Closed-Chamber Orbital TIG (GTAW) & Manual Sanitary TIG" },
  { parameter: "Inert Purge Quality", spec: "99.999% Ultra-High Purity Argon with real-time digital oxygen monitoring (< 20 ppm O2)" },
  { parameter: "Machining Tolerance", spec: "1 µm dimensional verification with calibrated Mitutoyo inspection tooling" },
  { parameter: "Surface Treatment", spec: "Sanitary Mechanical Polish, Chemical Pickling & ASTM A967 Citric/Nitric Passivation" },
  { parameter: "Non-Destructive Testing (NDT)", spec: "100% Video Boroscopy, Hydrostatic Pressure Testing (1.5x Design Pressure), Dye Penetrant (PT)" },
  { parameter: "Turnover Documentation (TOP)", spec: "Complete Audit Dossier: MTRs, 3D Weld Maps, Boroscope Video Logs, Hydro-Test Charts, O&M Manuals" },
];

/* ── 8-Item Turnover Package (TOP) Deliverables ── */
const TOP_DELIVERABLES = [
  {
    code: "DOC-01",
    title: "Certified Mill Test Reports (MTR 3.1)",
    description: "Full EN 10204 3.1 certification verifying heat numbers, chemical analysis, and mechanical tensile strengths for every sheet, pipe, and flange.",
  },
  {
    code: "DOC-02",
    title: "Weld Procedures & Qualifications",
    description: "Complete Welding Procedure Specifications (WPS), Procedure Qualification Records (PQR), and Welder Performance Qualifications (WPQ).",
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
    title: "Dimensional & Surface Inspection Sheets",
    description: "Inspection reports verifying 1 µm machining tolerances and sanitary internal surface finishes at critical vessel and piping measurement points.",
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

/* ── 4-Stage Fabrication & FAT Process ── */
const FAT_STEPS = [
  {
    step: "01",
    title: "3D CAD Modeling & Spool Isometric Engineering",
    desc: "Every vessel, skid frame, and piping spool is modeled in 3D CAD to verify nozzle orientations, dead-leg elimination, and human ergonomics before cutting steel.",
  },
  {
    step: "02",
    title: "Cleanroom Shop Fabrication & Orbital Welding",
    desc: "Components are fabricated in our dedicated facility. Trained sanitary fabrication specialists perform automated orbital welds under continuous argon purge (< 20 ppm O2).",
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

/* ── Technical Engineering FAQs ── */
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
    q: "What surface finish standards are maintained for food, beverage, and dairy contact?",
    a: "For food, dairy, and beverage applications, internal surfaces receive uniform sanitary mechanical polishing and thorough passivation to eliminate crevices where residues can anchor, ensuring complete cleanability during CIP sanitization cycles without making unrealistic sub-micron claims.",
  },
  {
    q: "How do you verify that Clean-in-Place (CIP) spray balls cover 100% of internal vessel surfaces?",
    a: "We conduct a Riboflavin Spray Coverage Test compliant with EHEDG guidelines. The vessel interior is completely coated with a fluorescent riboflavin solution and inspected under UV blacklight. The automated CIP cycle is initiated for a timed wash. Post-wash UV inspection verifies that 100% of the riboflavin has been dissolved and removed, proving that there are zero spray shadows or blind spots behind agitator shafts and baffles.",
  },
  {
    q: "What documents are included in the Turnover Package (TOP) for multinational audits?",
    a: "Every project is accompanied by an audit-ready Turnover Package containing EN 10204 3.1 Mill Test Reports (chemical & mechanical properties), Welder Qualifications (WPQ/WPS), 3D isometric weld identification maps, digital video boroscopy recordings of internal joints, certified hydrostatic test chart logs, dimensional inspection sheets verifying 1 µm tolerance, and ASTM A967 Passivation Certificates.",
  },
];

export default function FabricationPage() {
  return (
    <div className="min-h-screen bg-white text-[#080B0F]">
      <Header />

      {/* ── 1. Page Hero (Standard Corporate Subpage Banner) ── */}
      <PageHero
        eyebrow="MBH Solutions — Mechanical Fabrication Profile"
        title="Mechanical Fabrication Built to Industrial Tolerance"
        subtitle="Structural fabrication, process piping, and automation-integrated systems, engineered and commissioned to industrial tolerance."
        image="/images/sections/fabrication-welding.jpeg"
        imageAlt="MBH Solutions mechanical fabrication and sanitary orbital welding"
      />

      {/* ── 2. The Engineering & Quality Snapshot (Floating Clean White Card) ── */}
      <section className="relative z-10 -mt-10 px-6 md:px-12">
        <div className="mx-auto max-w-[1360px]">
          <div className="rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Snapshot Title Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-150 bg-slate-50/80 px-6 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-800">
                  Engineering &amp; Quality Snapshot
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-slate-500">
                <span>PROFILE REF: MF-2026</span>
                <span className="text-slate-300">|</span>
                <span className="font-semibold text-slate-800">AUDIT-READY STATUS: ACTIVE</span>
              </div>
            </div>

            {/* 4 Quantitative Metrics (Page 03 of Profile) */}
            <div className="grid grid-cols-2 divide-y divide-slate-150 sm:grid-cols-4 sm:divide-y-0 sm:divide-x divide-slate-150 bg-white">
              <div className="p-6 md:p-8">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Quality Certification</div>
                <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">ISO 9001:2015</div>
                <div className="mt-2 text-xs text-slate-600">Certified Quality Management System</div>
              </div>

              <div className="p-6 md:p-8">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Machining Tolerance</div>
                <div className="mt-2 text-2xl font-bold tracking-tight text-amber md:text-3xl">1 µm</div>
                <div className="mt-2 text-xs text-slate-600">Calibrated Stylus &amp; Micrometer Verified</div>
              </div>

              <div className="p-6 md:p-8">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">On-Time Delivery</div>
                <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">100%</div>
                <div className="mt-2 text-xs text-slate-600">Project Dispatch Track Record</div>
              </div>

              <div className="p-6 md:p-8">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Logged Operational Hours</div>
                <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">12,400+</div>
                <div className="mt-2 text-xs text-slate-600">Active Industrial Runtime Record</div>
              </div>
            </div>

            {/* Institutional Seals & Accreditations (Page 01 of Profile) */}
            <div className="border-t border-slate-150 bg-slate-50/60 px-6 py-4 md:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
                  Statutory Registrations &amp; Corporate Seals:
                </div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-800 shadow-sm">
                    ★ ISO 9001:2015 Certified
                  </span>
                  <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-800 shadow-sm">
                    🏛 SECP Incorporated
                  </span>
                  <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-800 shadow-sm">
                    🇵🇰 FBR Pakistan Registered
                  </span>
                  <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-800 shadow-sm">
                    🏢 LCCI Chamber Member
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Front-End Engineering Capabilities (Page 01 of Profile) ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <Eyebrow label="01 / Front-End Engineering" />
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Engineered In-House. Built for Process Integrity.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Structural fabrication, process piping, and automation-integrated systems, engineered and commissioned to industrial tolerance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-8 md:p-10 transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                  Pillar 01 · Engineering
                </span>
                <span className="font-mono text-xs text-slate-500">IN-HOUSE DESIGN</span>
              </div>
              <h3 className="mt-3 text-2xl font-medium text-slate-900">
                Mechanical &amp; Thermal Engineering
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Hydraulic calculations, thermal load analysis, and structural design completed in-house prior to fabrication.
                Every vessel, heat-exchange manifold, and piping line is modeled in 3D CAD to evaluate thermal expansion, pressure drop, and fluid velocities before cutting steel.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {["Hydraulic Flow Calculations", "Thermal Load Analysis", "3D CAD SolidWorks", "Thermal Expansion Checks"].map((tag) => (
                  <span key={tag} className="rounded border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-8 md:p-10 transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                  Pillar 02 · Prefabrication
                </span>
                <span className="font-mono text-xs text-slate-500">SHOP ASSEMBLY</span>
              </div>
              <h3 className="mt-3 text-2xl font-medium text-slate-900">
                Pre-Assembled Modular Systems
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Skids and process units are shop-assembled and tested prior to delivery, reducing on-site installation time.
                80% of assembly occurs in our controlled fabrication facility, collapsing on-site plant disruption into scheduled 48-to-72-hour turnaround shutdown windows.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {["Shop Pre-Piped & Wired", "FAT Hydro-Testing", "48–72 Hr Fast-Track Tie-In", "Plug-and-Play Skids"].map((tag) => (
                  <span key={tag} className="rounded border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Custom Fabrication Services (Page 02 — 2x2 Machinery Grid) ── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow label="02 / Custom Fabrication Services" />
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                End-to-End Production Expertise
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                MBH Solutions designs, fabricates, and commissions mechanical and process systems for industrial clients. Our scope spans structural fabrication, process piping, and modular skid assembly, delivered from initial engineering through site commissioning.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-mono text-xs font-semibold text-amber">
                4 CORE SHOP CAPABILITIES
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {CUSTOM_FABRICATION_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300"
              >
                {/* Visual Image with Cut-Corner Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={srv.image}
                    alt={srv.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Badge Ribbon matching Page 2 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block rounded border-l-4 border-amber bg-slate-950/90 px-4 py-2 backdrop-blur-sm">
                      <div className="font-mono text-xs font-semibold tracking-wide text-white uppercase">
                        {srv.badge}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-amber uppercase">
                      CATEGORY {srv.number}
                    </span>
                    <span className="font-mono text-xs text-slate-500 uppercase">
                      IN-HOUSE FABRICATION
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-medium text-slate-900 sm:text-2xl">
                    {srv.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {srv.summary}
                  </p>

                  <div className="mt-6 space-y-4 border-t border-slate-150 pt-6">
                    {srv.highlights.map((h, i) => (
                      <div key={i} className="text-xs">
                        <div className="font-semibold text-slate-900">{h.heading}</div>
                        <div className="mt-1 text-slate-600 leading-relaxed text-sm">{h.text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <CtaLink href="/catalogue">
                      View related equipment catalogue
                    </CtaLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Credentials, Quality & Verification (Page 03 of Profile) ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <Eyebrow label="03 / Credentials & Verification" />
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Quality Assurance, Welding Standards &amp; Documentation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Documented quality control, weld compliance, and delivery record maintained for every project.
            </p>
          </div>

          <div className="space-y-8">
            {/* Row 1: Quality Assurance */}
            <div className="grid items-center rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm overflow-hidden md:grid-cols-2">
              <div className="relative aspect-[16/11] w-full bg-slate-100">
                <Image
                  src="/images/sections/machinist-quality-inspection.jpg"
                  alt="Quality assurance inspector with clipboard verifying machined part at lathe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 sm:p-12 bg-white">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                  CREDENTIAL 01 / VERIFICATION
                </span>
                <h3 className="mt-2 text-2xl font-medium text-slate-900">
                  QUALITY ASSURANCE
                </h3>
                <ul className="mt-6 space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Material traceability with mill test certificates on structural and piping stock.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Dimensional inspection reports issued with every delivered assembly to <strong>1 µm</strong> tolerance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Non-destructive testing (dye penetrant, radiographic) on critical welds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Hydrostatic and pressure testing prior to dispatch held at 1.5x design ratings.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2: Welding & Fabrication Standards */}
            <div className="grid items-center rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm overflow-hidden md:grid-cols-2">
              <div className="order-2 p-8 sm:p-12 bg-white md:order-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                  CREDENTIAL 02 / COMPLIANCE
                </span>
                <h3 className="mt-2 text-2xl font-medium text-slate-900">
                  WELDING &amp; FABRICATION STANDARDS
                </h3>
                <ul className="mt-6 space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Welding procedures and welder qualifications maintained (WPS &amp; WPQR).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Orbital and manual TIG welding for sanitary and hygienic piping systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>ISO 9001:2015 certified quality management system governing all shop processes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Controlled inert argon purging (&lt; 20 ppm O2) to completely eliminate oxidation heat-tint.</span>
                  </li>
                </ul>
              </div>
              <div className="relative order-1 aspect-[16/11] w-full bg-slate-100 md:order-2">
                <Image
                  src="/images/sections/fabrication-welding.jpeg"
                  alt="Sanitary orbital and TIG welding arc on stainless pipe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Row 3: Project Documentation */}
            <div className="grid items-center rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm overflow-hidden md:grid-cols-2">
              <div className="relative aspect-[16/11] w-full bg-slate-100">
                <Image
                  src="/images/sections/cad-blueprint-conveyor.jpg"
                  alt="Technical 2D CAD engineering blueprint schematic of conveyor assembly with dimensional callouts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 sm:p-12 bg-white">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                  CREDENTIAL 03 / HANDOVER
                </span>
                <h3 className="mt-2 text-2xl font-medium text-slate-900">
                  PROJECT DOCUMENTATION
                </h3>
                <ul className="mt-6 space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>As-built drawings and fabrication records updated to physical tie-ins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Material certificates and inspection / test reports for audit verification.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>Comprehensive operation and maintenance handover documentation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber font-bold">―</span>
                    <span>3D isometric weld identification maps linking every joint to boroscopy pass status.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Technical Engineering Deep-Dives: Metallurgy & Elastomers ── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <Eyebrow label="Materials Science & Metallurgy" />
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Alloy Selection &amp; Process Suitability
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Selecting the appropriate stainless metallurgy and elastomer compounds prevents pitting, chloride stress cracking, and elastomer hardening under aggressive CIP conditions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {METALLURGY_GUIDE.map((m) => (
              <div key={m.alloy} className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-base font-bold text-slate-900">{m.alloy}</div>
                  <div className="rounded bg-amber/10 px-2.5 py-1 font-mono text-xs font-semibold text-amber">
                    PREN {m.pren}
                  </div>
                </div>
                <div className="mt-1 font-mono text-xs text-slate-500">{m.composition}</div>

                <div className="mt-5 border-t border-slate-150 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Optimal Process Zone</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-slate-700">{m.bestFor}</div>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Engineering Advantage</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-slate-700">{m.advantages}</div>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Operating Limit</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-slate-700">{m.limits}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Elastomer Table (Datasheet Style) */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-medium text-slate-900 mb-4">
              Sanitary Seal &amp; Gasket Compatibility Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-600 uppercase">
                    <th className="py-3 px-4">Polymer Compound</th>
                    <th className="py-3 px-4">Temperature Window</th>
                    <th className="py-3 px-4">Sanitary Standards</th>
                    <th className="py-3 px-4">Application Suitability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {ELASTOMER_GUIDE.map((e, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{e.material}</td>
                      <td className="py-3.5 px-4 font-mono font-medium text-amber">{e.tempRange}</td>
                      <td className="py-3.5 px-4 text-slate-600 font-mono text-xs">{e.standards}</td>
                      <td className="py-3.5 px-4 text-slate-700">{e.suitability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Technical Specifications Matrix ── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <Eyebrow label="Audit Reference Table" />
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Manufacturing &amp; Quality Engineering Matrix
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Core fabrication parameters verified on every mechanical manufacturing and skid assembly project.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-mono text-slate-600 uppercase">
                    <th className="py-4 px-6 w-1/3">Engineering Parameter</th>
                    <th className="py-4 px-6">Shop Capability &amp; Quality Execution Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {SPEC_TABLE_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-900">{row.parameter}</td>
                      <td className="py-4 px-6 text-slate-700 font-mono text-xs md:text-sm">{row.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Complete 8-Deliverable Turnover Package (TOP) ── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <Eyebrow label="Quality Turnover Dossier" />
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Turnover Package (TOP) for Multinational Audits
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every skid, vessel, and piping spool is accompanied by a structured handover dossier ensuring compliance with client corporate quality audits.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOP_DELIVERABLES.map((doc) => (
              <div key={doc.code} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="font-mono text-xs font-semibold text-amber">{doc.code}</div>
                <div className="mt-2 text-base font-semibold text-slate-900">{doc.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. 4-Stage Fabrication Process Workflow ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <Eyebrow label="Lifecycle Execution" />
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              4-Stage Fabrication &amp; Commissioning Workflow
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FAT_STEPS.map((s) => (
              <div key={s.step} className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 md:p-8">
                <div className="font-mono text-3xl font-bold text-amber">{s.step}</div>
                <div className="mt-3 text-base font-semibold text-slate-900">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Engineering Technical FAQs ── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <Eyebrow label="Engineering Knowledge Base" />
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {ENGINEERING_FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Mission Statement & Turnkey Integration Anchor (Page 04) ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="rounded-2xl border border-slate-800 bg-[#0D1B2E] p-8 md:p-14 text-white shadow-xl overflow-hidden">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                  MBH SOLUTIONS · MISSION STATEMENT
                </span>
                <blockquote className="mt-4 text-xl font-normal leading-relaxed text-white sm:text-2xl" style={{ fontStyle: "italic" }}>
                  &ldquo;To deliver end-to-end engineering solutions — spanning process systems, industrial automation, and mechanical fabrication — that enable manufacturers to build, modernise, and optimise their production operations with confidence, quality, and long-term reliability.&rdquo;
                </blockquote>

                <div className="mt-8 border-t border-slate-700/80 pt-6">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                    The Single-Source Advantage: Mechanical Fabrication + Siemens Automation
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Conventional projects require managing separate mechanical vessel builders and control system software integrators, leading to vendor finger-pointing during line commissioning. MBH Solutions fabricates the physical vessels, orbital piping skids, and conveyor lines while our in-house Siemens automation team programs the S7 PLCs, WinCC SCADA dashboards, and control panels under a single turnkey contract.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-block bg-amber px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-amber-light rounded"
                  >
                    Request Fabrication Proposal
                  </a>
                  <Link
                    href="/catalogue"
                    className="inline-block border border-slate-700 bg-slate-900 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-amber rounded"
                  >
                    Browse Catalogue Skids
                  </Link>
                </div>
              </div>

              {/* Conveyor CAD Render Feature Visual */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4">
                <Image
                  src="/images/sections/sanitary-curved-conveyor.jpg"
                  alt="3D CAD render of curved sanitary modular belt conveyor with drive motor"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="font-mono text-xs text-slate-300 bg-slate-900/90 px-3 py-1 border border-slate-700 rounded">
                    CAD MODEL: MODULAR CURVE CONVEYOR (SERIES C-90)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. Verified References Strip ── */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="mx-auto max-w-[1360px] px-6 md:px-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-medium text-slate-900">Fabrication Case Studies &amp; Commissioning</h2>
            <Link href="/references" className="text-xs text-amber font-mono font-semibold hover:underline">
              View all project references →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/references/coca-cola-multan-line-automation" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-mono text-xs font-semibold text-amber">Coca-Cola Multan</div>
              <div className="mt-2 text-base font-semibold text-slate-900">Continuous Sugar Dissolving Skid &amp; Syrup Room</div>
              <p className="mt-2 text-sm text-slate-600">Sanitary 316L orbital piping, continuous dissolving skids, and automated CIP manifold erection.</p>
            </Link>

            <Link href="/references/fauji-foods-syrup-room-modernization" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-mono text-xs font-semibold text-amber">Fauji Foods Ltd</div>
              <div className="mt-2 text-base font-semibold text-slate-900">Sanitary Mixproof Valve Matrix &amp; Dairy Batching</div>
              <p className="mt-2 text-sm text-slate-600">Automated GEA double-seat valve manifold, recipe dosing skids, and complete CIP integration.</p>
            </Link>

            <Link href="/references/beverage-cip-recovery-modernization" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-mono text-xs font-semibold text-amber">Enterprise Beverage Client</div>
              <div className="mt-2 text-base font-semibold text-slate-900">Multi-Circuit CIP Skids &amp; Pigging Recovery</div>
              <p className="mt-2 text-sm text-slate-600">Shop-fabricated modular CIP skid with automated chemical dosing and chemical recovery loops.</p>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
