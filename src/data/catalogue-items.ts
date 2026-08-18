// MBH Catalogue — single source of truth for the /catalogue page.
// Hand-authored (31 items). Each item carries a permanent ID that appears on
// the row, in the anchor URL (#csd-line-01), on the Quote drawer, and in the
// quote email subject line so sales can triage by ID. See the page spec.

export const CATALOGUE_CATEGORIES = [
  "Process Systems",
  "Automation",
  "Fabrication",
  "Utilities",
] as const;

export type CatalogueCategory = (typeof CATALOGUE_CATEGORIES)[number];

export type CatalogueItem = {
  /** Display sequence 1..31 across the whole catalogue. */
  seq: number;
  /** Permanent line-item ID, e.g. "CSD-LINE-01". Used in URL + quote email. */
  id: string;
  category: CatalogueCategory;
  name: string;
  /** Sales-direct description — product noun first, hard numbers, availability. */
  description: string;
  /** Compact spec line shown on the Quote drawer. */
  spec: string;
  /** Optional emphasis tag: SIGNATURE | SIEMENS | MBH WORKSHOP. */
  badge?: string;
};

export const CATALOGUE_ITEMS: CatalogueItem[] = [
  // ── Process Systems (14) ──────────────────────────────────────────────
  {
    seq: 1,
    id: "CSD-LINE-01",
    category: "Process Systems",
    name: "Carbonated soft drink processing line",
    description:
      "Cola, lemon-lime, flavoured sparkling. Complete syrup room through CIP. 2–40 m³/h at upto 70°. Available turnkey. Siemens + MBH fabrication.",
    spec: "2–40 m³/h · upto 70° · Turnkey",
    badge: "SIGNATURE",
  },
  {
    seq: 2,
    id: "JUICE-LINE-01",
    category: "Process Systems",
    name: "Juice processing line",
    description:
      "Concentrate handling, pasteurisation, blending, storage. Configurable capacity. Available turnkey or as retrofit. Tubular heat exchangers, MASTERMIXX blender.",
    spec: "Configurable capacity · Turnkey or retrofit",
  },
  {
    seq: 3,
    id: "SYRUP-ROOM-01",
    category: "Process Systems",
    name: "Turnkey syrup room",
    description:
      "Standalone syrup manufacturing module. Plugs into existing filling line. 2–40 m³/h continuous. Available turnkey. Complete stages in line with MBH.",
    spec: "2–40 m³/h continuous · Turnkey",
  },
  {
    seq: 4,
    id: "SUGAR-SYS-01",
    category: "Process Systems",
    name: "Sugar handling and dissolving system",
    description:
      "Big-bag receiving through continuous dissolving to finished simple syrup. 2–40 m³/h at upto 70°. Available as standalone module.",
    spec: "2–40 m³/h · upto 70° · Standalone",
  },
  {
    seq: 5,
    id: "BATCH-DISS-01",
    category: "Process Systems",
    name: "Batch dissolving station",
    description:
      "Batch sugar dissolving for smaller runs or specialty syrups. Configurable tank sizes. Available standalone. Manual or automated recipe control.",
    spec: "Configurable tanks · Standalone",
  },
  {
    seq: 6,
    id: "MASTERMIXX-01",
    category: "Process Systems",
    name: "Continuous blender · MASTERMIXX",
    description:
      "Continuous blender for final syrup and finished beverage. Multi-component. Recipe-driven. Available as standalone module or integrated into new line.",
    spec: "Continuous · Recipe-driven · Standalone",
  },
  {
    seq: 7,
    id: "DOSING-01",
    category: "Process Systems",
    name: "Concentrate and dosing station",
    description:
      "Precise dosing of concentrates, minor ingredients, additives. Recipe-driven with suction lance and valve matrix. Available standalone or integrated into new line.",
    spec: "Recipe-driven · Standalone or integrated",
  },
  {
    seq: 8,
    id: "PAST-FLASH-01",
    category: "Process Systems",
    name: "Flash pasteuriser",
    description:
      "Thermal treatment for syrup or finished beverage. Plate or tubular heat exchanger. Configurable capacity. Available as standalone unit or line-integrated.",
    spec: "Configurable capacity · Standalone or integrated",
  },
  {
    seq: 9,
    id: "FILT-KIES-01",
    category: "Process Systems",
    name: "Kieselguhr filtration unit",
    description:
      "Diatomaceous-earth filtration for removing impurities for syrup polishing and decolourisation. Available standalone or integrated into new line.",
    spec: "Standalone or integrated",
  },
  {
    seq: 10,
    id: "FILT-BAG-01",
    category: "Process Systems",
    name: "Double bag filter",
    description:
      "Inline bag filtration for the Final treatment or product polishing. Sanitary construction. Available ex-workshop.",
    spec: "Sanitary · Ex-workshop",
  },
  {
    seq: 11,
    id: "HOMO-01",
    category: "Process Systems",
    name: "Homogeniser",
    description:
      "High-pressure homogenisation for juice, dairy, or emulsified beverages. Configurable capacity. Available on request.",
    spec: "Configurable capacity",
  },
  {
    seq: 12,
    id: "TANK-SIMPLE-01",
    category: "Process Systems",
    name: "Simple syrup storage tank",
    description:
      "Sanitary stainless-steel storage vessel for intermediate simple syrup. Sizes to spec. Available standalone or integrated into new line.",
    spec: "Sizes to spec · Standalone or integrated",
  },
  {
    seq: 13,
    id: "TANK-BLEND-01",
    category: "Process Systems",
    name: "Final syrup blending tank with weighing",
    description:
      "Final syrup blending tank with integrated load cells for recipe verification. Sizes to spec. Available standalone.",
    spec: "Load cells · Sizes to spec · Standalone",
  },
  {
    seq: 14,
    id: "TANK-ASEPTIC-01",
    category: "Process Systems",
    name: "Aseptic storage tank",
    description:
      "Aseptic buffering between process and filling. Sizes to spec. Supplied for aseptic-grade requirements.",
    spec: "Aseptic-grade · Sizes to spec",
  },

  // ── Automation (6) ────────────────────────────────────────────────────
  {
    seq: 15,
    id: "AUTO-PLANT-01",
    category: "Automation",
    name: "Plant automation and control",
    description:
      "End-to-end PLC, SCADA, HMI, recipe management on Siemens S7 and WinCC. Available for new lines or as retrofit. MBH Siemens Integrators.",
    spec: "Siemens S7 · WinCC · New or retrofit",
    badge: "SIEMENS",
  },
  {
    seq: 16,
    id: "PANEL-STD-01",
    category: "Automation",
    name: "Control cabinet · standard",
    description:
      "HMI and control cabinet housing PLC, I/O, and field terminations. Designed and built at MBH workshop. Full drawings included.",
    spec: "HMI & field cabinet · Full drawings",
  },
  {
    seq: 17,
    id: "PANEL-CUS-01",
    category: "Automation",
    name: "Control cabinet · custom",
    description:
      "Custom-engineered control cabinet to buyer's electrical specification. Available for both process and non-process applications.",
    spec: "Custom spec · Process or non-process",
  },
  {
    seq: 18,
    id: "SCADA-01",
    category: "Automation",
    name: "SCADA and HMI development",
    description:
      "WinCC SCADA build, HMI screen design, recipe management, operator training. Available as standalone service or line-integrated.",
    spec: "WinCC · HMI · Standalone or integrated",
  },
  {
    seq: 19,
    id: "FAT-01",
    category: "Automation",
    name: "Factory acceptance testing (FAT)",
    description:
      "Pre-shipment validation of control system against buyer specification. Witnessed by buyer or third party.",
    spec: "Witnessed",
  },
  {
    seq: 20,
    id: "COMMISSION-01",
    category: "Automation",
    name: "Site commissioning and handover",
    description:
      "On-site startup, loop calibration, operator training, and with handover. Available for MBH-supplied or third-party equipment.",
    spec: "On-site · Any equipment",
  },

  // ── Fabrication (5) ───────────────────────────────────────────────────
  {
    seq: 21,
    id: "FAB-TANK-01",
    category: "Fabrication",
    name: "Stainless steel tanks and vessels",
    description:
      "Sanitary-grade process vessels, storage tanks, blending tanks. Sizes to spec. clean welded, passivated, documented.",
    spec: "Clean welded · Sizes to spec",
    badge: "MBH WORKSHOP",
  },
  {
    seq: 22,
    id: "FAB-PIPE-01",
    category: "Fabrication",
    name: "Process and utility piping and skid assembly",
    description:
      "Process and utility piping, pre-fabricated skids for site install.",
    spec: "Pre-fabricated · Site install",
    badge: "MBH WORKSHOP",
  },
  {
    seq: 23,
    id: "FAB-STRUCT-01",
    category: "Fabrication",
    name: "Structural steel platforms",
    description:
      "Platforms, walkways, and support structures. Carbon steel, galvanised or painted to spec.",
    spec: "Carbon steel · To spec",
    badge: "MBH WORKSHOP",
  },
  {
    seq: 24,
    id: "FAB-ERECT-01",
    category: "Fabrication",
    name: "On-site mechanical erection",
    description:
      "Mechanical installation, rigging, and alignment at the buyer's facility with supervision.",
    spec: "On-site · Supervised",
    badge: "MBH WORKSHOP",
  },
  {
    seq: 25,
    id: "FAB-INSUL-01",
    category: "Fabrication",
    name: "Insulation and cladding",
    description:
      "Thermal insulation and stainless-steel cladding of installed equipment and piping. Applied on-site.",
    spec: "On-site · SS cladding",
    badge: "MBH WORKSHOP",
  },

  // ── Utilities (6) ─────────────────────────────────────────────────────
  {
    seq: 26,
    id: "UTIL-CIP-01",
    category: "Utilities",
    name: "CIP system · standalone",
    description:
      "Automated and manual cleaning skid can clean one line upto multiple lines or tanks alltogether. Single to four circuits standard, expandable to six or eight. Multi-detergent, recipe-driven. Available standalone or retrofit.",
    spec: "1 to 4 circuits standard · Standalone or retrofit",
  },
  {
    seq: 27,
    id: "UTIL-WATER-01",
    category: "Utilities",
    name: "Water treatment module",
    description:
      "Filtration, reverse osmosis, ozonation, de-aeration for beverage-grade water. Configurable to raw-water analysis. Available standalone or line-integrated.",
    spec: "RO · Ozonation · Standalone or integrated",
  },
  {
    seq: 28,
    id: "UTIL-CHILL-01",
    category: "Utilities",
    name: "Chilled water skid",
    description:
      "Chilled water production and distribution for process cooling. Sizes to spec.",
    spec: "Sizes to spec",
  },
  {
    seq: 29,
    id: "UTIL-STEAM-01",
    category: "Utilities",
    name: "Steam distribution skid",
    description:
      "Steam distribution, condensate return, and pressure regulation. Sanitary or industrial grade.",
    spec: "Sanitary or industrial",
  },
  {
    seq: 30,
    id: "RETRO-01",
    category: "Utilities",
    name: "Retrofit and modernisation service",
    description:
      "Line-by-line assessment for automation upgrade, consultancy, or module replacement. Available for any brand or installed equipment. Engineering and execution.",
    spec: "Any brand · Engineering and execution",
  },
  {
    seq: 31,
    id: "UTIL-RECOVERY-01",
    category: "Utilities",
    name: "Product recovery system",
    description:
      "Product recovery system designed to minimise waste and increase yield during product changeovers. Custom engineered.",
    spec: "Minimise waste · Increase yield",
  },
];

/** Count of items in a category, or the whole catalogue for "All". */
export function categoryCount(category: CatalogueCategory | "All"): number {
  if (category === "All") return CATALOGUE_ITEMS.length;
  return CATALOGUE_ITEMS.filter((i) => i.category === category).length;
}

/** Lower-case anchor id for an item, e.g. "csd-line-01". */
export function itemAnchor(id: string): string {
  return id.toLowerCase();
}
