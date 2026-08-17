// MBH Catalogue — single source of truth for the /catalogue page.
// Hand-authored (32 items). Each item carries a permanent ID that appears on
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
  /** Display sequence 1..32 across the whole catalogue. */
  seq: number;
  /** Permanent line-item ID, e.g. "CSD-LINE-01". Used in URL + quote email. */
  id: string;
  category: CatalogueCategory;
  name: string;
  /** Sales-direct description — product noun first, hard numbers, availability. */
  description: string;
  /** Compact spec line shown on the Quote drawer. */
  spec: string;
  /** Optional emphasis tag: SIGNATURE | SSP TECHNOLOGY | SIEMENS | MBH WORKSHOP. */
  badge?: string;
};

export const CATALOGUE_ITEMS: CatalogueItem[] = [
  // ── Process Systems (14) ──────────────────────────────────────────────
  {
    seq: 1,
    id: "CSD-LINE-01",
    category: "Process Systems",
    name: "Carbonated soft drink line",
    description:
      "Cola, lemon-lime, flavoured sparkling. Complete syrup room through CIP. 8–30 m³/h at Brix 65°. Available turnkey. SSP + Siemens + MBH fabrication.",
    spec: "8–30 m³/h · Brix 65° · Turnkey",
    badge: "SIGNATURE",
  },
  {
    seq: 2,
    id: "JUICE-LINE-01",
    category: "Process Systems",
    name: "Juice processing line",
    description:
      "Concentrate handling, pasteurisation, blending, storage. Configurable capacity. Available turnkey or as retrofit. SSP tubular heat exchangers, MASTERMIXX blender.",
    spec: "Configurable capacity · Turnkey or retrofit",
  },
  {
    seq: 3,
    id: "SYRUP-ROOM-01",
    category: "Process Systems",
    name: "Turnkey syrup room",
    description:
      "Standalone syrup manufacturing module. Plugs into existing filling line. 8–30 m³/h continuous. Available turnkey. Full SSP S1–S8 stack with MBH Siemens automation.",
    spec: "8–30 m³/h continuous · Turnkey",
    badge: "SSP TECHNOLOGY",
  },
  {
    seq: 4,
    id: "SUGAR-SYS-01",
    category: "Process Systems",
    name: "Sugar handling and dissolving system",
    description:
      "Big-bag receiving through continuous dissolving to finished simple syrup. 8–30 m³/h at Brix 65°. Available as standalone module. SSP CONTIMAXX.",
    spec: "8–30 m³/h · Brix 65° · Standalone",
    badge: "SSP TECHNOLOGY",
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
    badge: "SSP TECHNOLOGY",
  },
  {
    seq: 7,
    id: "DOSING-01",
    category: "Process Systems",
    name: "Concentrate and dosing station",
    description:
      "Precise dosing of concentrates, minor ingredients, additives. Recipe-driven with suction lance and valve matrix. Available standalone.",
    spec: "Recipe-driven · Standalone",
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
      "Diatomaceous-earth filtration for syrup polishing and decolourisation. Available standalone. SSP-supplied elements.",
    spec: "Standalone · SSP elements",
  },
  {
    seq: 10,
    id: "FILT-BAG-01",
    category: "Process Systems",
    name: "Double bag filter",
    description:
      "Inline bag filtration for pre-treatment or product polishing. Sanitary construction. Available ex-workshop.",
    spec: "Sanitary · Ex-workshop",
  },
  {
    seq: 11,
    id: "HOMO-01",
    category: "Process Systems",
    name: "Homogeniser",
    description:
      "High-pressure homogenisation for juice, dairy, or emulsified beverages. Configurable capacity. Available on request through SSP.",
    spec: "Configurable capacity · Via SSP",
  },
  {
    seq: 12,
    id: "TANK-SIMPLE-01",
    category: "Process Systems",
    name: "Simple syrup storage tank",
    description:
      "Sanitary stainless-steel storage vessel for intermediate simple syrup. Sizes to spec. Fabricated in-house at Lahore workshop.",
    spec: "Sizes to spec · In-house",
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
      "Aseptic buffering between process and filling. Sizes to spec. SSP-supplied for aseptic-grade requirements.",
    spec: "Aseptic-grade · Sizes to spec",
  },

  // ── Automation (6) ────────────────────────────────────────────────────
  {
    seq: 15,
    id: "AUTO-PLANT-01",
    category: "Automation",
    name: "Plant automation and control",
    description:
      "End-to-end PLC, SCADA, HMI, recipe management on Siemens S7 and WinCC. Available for new lines or as retrofit. MBH Siemens Solution Partner.",
    spec: "Siemens S7 · WinCC · New or retrofit",
    badge: "SIEMENS",
  },
  {
    seq: 16,
    id: "PANEL-STD-01",
    category: "Automation",
    name: "Control cabinet · standard",
    description:
      "Low-voltage control cabinet housing PLC, I/O, and instrumentation terminations. Designed and built at MBH Lahore workshop. Full drawings included.",
    spec: "LV cabinet · Full drawings",
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
      "WinCC SCADA build, HMI screen design, recipe management, operator handover. Available as standalone service or line-integrated.",
    spec: "WinCC · HMI · Standalone or integrated",
  },
  {
    seq: 19,
    id: "FAT-01",
    category: "Automation",
    name: "Factory acceptance testing (FAT)",
    description:
      "Pre-shipment validation of control system against buyer specification. Witnessed by buyer or third party. Documentation package included.",
    spec: "Witnessed · Documentation included",
  },
  {
    seq: 20,
    id: "COMMISSION-01",
    category: "Automation",
    name: "Site commissioning and handover",
    description:
      "On-site startup, loop calibration, operator training, and signed handover. Same-week response from Lahore workshop. Available for MBH-supplied or third-party equipment.",
    spec: "On-site · Any equipment",
  },

  // ── Fabrication (6) ───────────────────────────────────────────────────
  {
    seq: 21,
    id: "FAB-TANK-01",
    category: "Fabrication",
    name: "Stainless steel tanks and vessels",
    description:
      "Sanitary-grade process vessels, storage tanks, blending tanks. Sizes to spec. Orbital-welded, passivated, documented.",
    spec: "Orbital-welded · Sizes to spec",
    badge: "MBH WORKSHOP",
  },
  {
    seq: 22,
    id: "FAB-PIPE-01",
    category: "Fabrication",
    name: "Process piping and skid assembly",
    description:
      "Orbital-welded process piping, pre-fabricated skids for shop or site install. Isometric drawings, weld maps, material certificates included.",
    spec: "Orbital-welded · Shop or site",
    badge: "MBH WORKSHOP",
  },
  {
    seq: 23,
    id: "FAB-STRUCT-01",
    category: "Fabrication",
    name: "Structural steel platforms",
    description:
      "Platforms, walkways, and support structures for process equipment. Carbon steel, galvanised or painted to spec.",
    spec: "Carbon steel · To spec",
    badge: "MBH WORKSHOP",
  },
  {
    seq: 24,
    id: "FAB-ERECT-01",
    category: "Fabrication",
    name: "On-site mechanical erection",
    description:
      "Mechanical installation, rigging, and alignment at the buyer's facility. Full site supervision included.",
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
  {
    seq: 26,
    id: "FAB-DOC-01",
    category: "Fabrication",
    name: "Fabrication documentation package",
    description:
      "Weld maps, material certificates, dimensional inspection reports, hydro-test records. Delivered per project or per skid.",
    spec: "Per project or per skid",
    badge: "MBH WORKSHOP",
  },

  // ── Utilities (6) ─────────────────────────────────────────────────────
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
    id: "UTIL-CIP-01",
    category: "Utilities",
    name: "CIP system · standalone",
    description:
      "Automated cleaning skid. Four circuits standard, expandable to six or eight. Multi-detergent, recipe-driven. Available standalone or retrofit.",
    spec: "4 circuits, expandable to 8 · Standalone or retrofit",
  },
  {
    seq: 29,
    id: "UTIL-AIR-01",
    category: "Utilities",
    name: "Compressed air treatment skid",
    description:
      "Sanitary compressed air treatment for process contact. Filters, dryers, receivers. Available ex-workshop.",
    spec: "Sanitary · Ex-workshop",
  },
  {
    seq: 30,
    id: "UTIL-CHILL-01",
    category: "Utilities",
    name: "Chilled water skid",
    description:
      "Chilled water production and distribution for process cooling. Sizes to spec.",
    spec: "Sizes to spec",
  },
  {
    seq: 31,
    id: "UTIL-STEAM-01",
    category: "Utilities",
    name: "Steam distribution skid",
    description:
      "Steam distribution, condensate return, and pressure regulation. Sanitary or industrial grade.",
    spec: "Sanitary or industrial",
  },
  {
    seq: 32,
    id: "RETRO-01",
    category: "Utilities",
    name: "Retrofit and modernisation service",
    description:
      "Line-by-line assessment for automation upgrade, capacity extension, or module replacement. Available for any brand of installed equipment. Engineered and executed from Lahore.",
    spec: "Any brand · From Lahore",
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
