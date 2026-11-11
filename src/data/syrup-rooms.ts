// Copy for /solutions/syrup-rooms.
// Generated from the reviewed copy (writer + independent reviewer, 11 Nov 2026).
// Every company statement maps to an approved fact; see the claims ledger kept with the brief.
// Edit facts only with Hammad's sign-off. Update lastUpdated (and sitemap.ts) when content changes.

export type SyrupLink = { text: string; href: string };
export type SyrupSection = { id: string; heading: string; paragraphs: string[]; bullets: string[]; links: SyrupLink[] };
export type SyrupPage = {
  metaTitle: string; metaDescription: string; eyebrow: string; h1: string; heroSubtitle: string;
  answerBlock: string; lastUpdated: string; areaServed: string[];
  specHeading: string; specTable: { parameter: string; value: string }[];
  sections: SyrupSection[];
  reference: { heading: string; body: string; linkText: string; href: string };
  faqHeading: string; faqs: { q: string; a: string }[];
};

export const SYRUP_PAGE: SyrupPage = {
  "metaTitle": "Syrup Room Systems for Beverage Plants in Pakistan",
  "metaDescription": "Syrup rooms for beverage plants in Pakistan: sugar handling, dissolving, filtration, pasteurisation, blending, CIP and Siemens control, turnkey or retrofit.",
  "eyebrow": "Solutions · Syrup Rooms",
  "h1": "Syrup Room Systems for Beverage Plants",
  "heroSubtitle": "MBH Solutions delivers complete syrup rooms, from sugar handling to Siemens recipe control, for new beverage plants and the modernisation of existing ones.",
  "answerBlock": "MBH Solutions, a Lahore engineering company and SSP's sole representative in Pakistan, delivers complete syrup rooms for beverage plants: sugar handling, dissolving, filtration, pasteurisation, blending, storage, CIP and Siemens PLC/SCADA control. Syrup rooms are supplied turnkey for new installations or as a modernisation of existing plants, for CSD and juice producers.",
  "lastUpdated": "2026-11-11",
  "areaServed": [
    "Pakistan",
    "Iran",
    "Turkey"
  ],
  "specHeading": "Specification Summary",
  "specTable": [
    {
      "parameter": "Process Stages",
      "value": "Sugar handling, dissolving, filtration, pasteurisation, blending and dosing, storage, CIP, control"
    },
    {
      "parameter": "Dissolving",
      "value": "Continuous or batch; cold or hot; sugar syrup at various concentrations, also other powders (SSP)"
    },
    {
      "parameter": "Continuous Dissolving Capacity (SSP)",
      "value": "8 m³/h up to 30 m³/h at 65 °Brix, SSP continuous crystal-sugar dissolving system"
    },
    {
      "parameter": "Filtration",
      "value": "Stainless, bag or precoat filters, including kieselguhr filtration (SSP)"
    },
    {
      "parameter": "Thermal Treatment",
      "value": "Plate or tube pasteurisers, flash pasteuriser, tubular heat exchanger (SSP)"
    },
    {
      "parameter": "Blending and Dosing",
      "value": "Continuous or batch, from two or more components; MASTERMIXX continuous blender, final syrup blending tanks with weighing (SSP)"
    },
    {
      "parameter": "Cleaning",
      "value": "Central CIP stations and skids, 1 to 4 circuits as standard, expandable to 6 or 8"
    },
    {
      "parameter": "Control Platform",
      "value": "SSP control cabinet with recipe management and reporting; Siemens S7 PLC, WinCC SCADA/HMI and TIA Portal automation by MBH Solutions"
    },
    {
      "parameter": "Delivery",
      "value": "Complete turnkey, or modernisation and retrofit of an existing syrup room"
    },
    {
      "parameter": "Services",
      "value": "Site survey, FAT, installation, SAT, commissioning, spare parts supply"
    },
    {
      "parameter": "Fabrication",
      "value": "AISI 304 / 316L tanks, piping and skids from MBH's own workshop in Pakistan, TIG welded (orbital and manual) and passivated"
    },
    {
      "parameter": "Principal",
      "value": "SSP – Stainless Steel Processing GmbH, Bobingen, Germany"
    }
  ],
  "sections": [
    {
      "id": "what-a-syrup-room-does",
      "heading": "What a Syrup Room Does",
      "paragraphs": [
        "A syrup room is the section of a beverage plant that turns sugar, or a liquid sweetener such as HFCS, into treated simple syrup and combines it with concentrate and other ingredients to make the final syrup. Ahead of the filler, a mixer or blender doses the final syrup with treated water and, for carbonated soft drinks, carbonates the beverage.",
        "Syrup concentration is expressed in °Brix, the mass percentage of sucrose in solution, used in practice as a measure of dissolved solids. Because it fixes the sugar content of every product filled, a syrup room is designed around accurate concentration measurement, filtration, heat treatment, hygienic storage and routine CIP."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Solutions",
          "href": "/solutions"
        }
      ]
    },
    {
      "id": "syrup-room-process-stages",
      "heading": "Syrup Room Process Stages",
      "paragraphs": [
        "The equipment named below is from the SSP range that MBH Solutions supplies, installs and integrates in Pakistan."
      ],
      "bullets": [
        "Sugar Handling: receiving crystal sugar and liquid sweeteners. SSP supplies storage silos with mechanical or pneumatic filling and discharge and dust separation, the Crystal Sugar Big-Bag Receiving Station and HFCS receiving tanks.",
        "Dissolving: dissolving sugar in treated water. SSP dissolving systems produce sugar syrup continuously or in batches, cold or hot, and its CONTIMAXX system dissolves crystal sugar continuously.",
        "Filtration: removing insoluble matter carried in with the sugar. SSP supplies stainless, bag and precoat filters, including kieselguhr filtration.",
        "Pasteurisation: heat treating the syrup to reduce microbial load, then cooling it. SSP supplies plate and tube pasteurisers, a flash pasteuriser and a tubular heat exchanger.",
        "Blending and Dosing: combining simple syrup with concentrate and other components into final syrup or finished beverage. SSP supplies dosing and blending systems, a concentrate station with suction lance, final syrup blending tanks with weighing and the MASTERMIXX continuous blender.",
        "Storage: holding syrup ahead of filling. SSP supplies simple syrup storage tanks, storage and blending tanks with agitators or pumps, and a valve matrix for routing between them.",
        "CIP: cleaning equipment and piping in place. MBH Solutions supplies central CIP stations and skids.",
        "Control: running the stages on stored recipes. SSP supplies the control cabinet for its equipment, and MBH Solutions provides Siemens S7 PLC and WinCC SCADA automation without modifying SSP's original control software."
      ],
      "links": [
        {
          "text": "CIP Systems",
          "href": "/solutions/cip-systems"
        }
      ]
    },
    {
      "id": "continuous-and-batch-dissolving",
      "heading": "Continuous and Batch Dissolving",
      "paragraphs": [
        "In batch dissolving, weighed quantities of sugar and water are mixed in a tank until the sugar has dissolved. It suits smaller volumes and frequent changes of syrup type. In continuous dissolving, sugar and water are dosed in a fixed ratio, the concentration is measured inline, typically by density or refractive index, and the ratio is corrected as the syrup is produced. It suits high-volume lines that need a steady syrup supply.",
        "Hot dissolving raises sugar solubility, shortens dissolving time and contributes to microbial reduction. Cold dissolving avoids heating the full water volume, and the syrup is then normally heat treated in a downstream pasteuriser.",
        "SSP's brochure gives its continuous crystal-sugar dissolving system as 8 m³/h up to 30 m³/h at 65 °Brix; SSP's CONTIMAXX is a continuous dissolving system for crystal sugar."
      ],
      "bullets": [],
      "links": []
    },
    {
      "id": "automation-and-recipe-control",
      "heading": "Automation and Recipe Control",
      "paragraphs": [
        "The SSP control cabinet runs the syrup room partly or fully automatically on recipes, with recipe management, production, cleaning, maintenance and error reports, data archiving and data exchange with higher-level systems.",
        "MBH Solutions engineers syrup room automation on Siemens S7 PLCs and WinCC SCADA/HMI in TIA Portal, with recipe management, for new lines or as a retrofit, and builds the control and distribution panels, as a Siemens Integrator Company. MBH Solutions does not modify SSP's original control software, since doing so would void the manufacturer's warranty."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Siemens PLC",
          "href": "/catalogue/siemens-plc"
        }
      ]
    },
    {
      "id": "modernising-an-existing-syrup-room",
      "heading": "Modernising an Existing Syrup Room",
      "paragraphs": [
        "Older syrup rooms commonly depend on manual dissolving, laboratory concentration checks and manually operated valves, which makes syrup quality shift-dependent. Modernisation generally keeps serviceable tanks and piping and replaces or adds the stages that limit output or consistency, such as continuous dissolving, filtration, pasteurisation, a valve matrix or automated recipe control.",
        "MBH Solutions modernises and retrofits existing syrup rooms and lines, starting from a site survey and adding Siemens S7 and WinCC recipe automation where the existing control is manual."
      ],
      "bullets": [],
      "links": []
    },
    {
      "id": "turnkey-delivery-and-local-support",
      "heading": "Turnkey Delivery and Local Support",
      "paragraphs": [
        "The complete turnkey syrup room scope from MBH Solutions covers site survey, supply of SSP equipment, fabrication of tanks, piping and skids, control and distribution panels, Siemens automation, FAT, installation, SAT and commissioning. MBH engineers can commission internationally.",
        "Pumps, valves, instruments and spare parts are supplied through MBH's product catalogue. For SSP equipment, local services in Pakistan are provided together with and under SSP's responsibility."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Product Catalogue",
          "href": "/catalogue"
        }
      ]
    },
    {
      "id": "fabrication-and-scope",
      "heading": "Fabrication and Scope",
      "paragraphs": [
        "The stainless content of a syrup room scope, meaning food-grade sanitary process tanks, process piping and modular skids in AISI 304 or 316L, is fabricated in MBH's own workshop in Pakistan using orbital and manual TIG welding, followed by passivation. CONTIMAXX, MASTERMIXX and other branded units are SSP equipment, which MBH supplies, installs and integrates.",
        "Fabrication follows conventional food-grade hygienic practice. ASME code-stamped (U stamp) pressure vessels, equipment for explosive service and the manufacture of pumps or valves are outside the company's scope."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Fabrication",
          "href": "/fabrication"
        }
      ]
    },
    {
      "id": "ssp-germany-and-mbh-in-pakistan",
      "heading": "SSP (Germany) and MBH in Pakistan",
      "paragraphs": [
        "Based in Bobingen, Germany, SSP – Stainless Steel Processing GmbH delivers turnkey plants and single units for food and beverage processing. Beyond the syrup room stages, its optional units cover water treatment, de-aeration, carbonation and cooling.",
        "For SSP equipment, parts and services in Pakistan, MBH Solutions is SSP's sole representative and works with SSP as its principal."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Partners",
          "href": "/partners"
        }
      ]
    }
  ],
  "reference": {
    "heading": "Reference: Coca-Cola Tehran",
    "body": "MBH Solutions erected and commissioned a complete syrup room and CIP system for Coca-Cola Tehran in Iran. The scope covered mechanical installation, process piping, automation integration and start-up. MBH's reference list also names Pepsi Northern Beverages, Pepsi Haidri Beverages, Naubahar Beverages, Master Beverages, Fauji Foods, Dalda Foods and Coca-Cola Isparta (Turkey) among its beverage and food clients.",
    "linkText": "View References",
    "href": "/references"
  },
  "faqHeading": "Engineering Questions",
  "faqs": [
    {
      "q": "Who supplies SSP syrup room equipment in Pakistan?",
      "a": "MBH Solutions, an engineering company in Lahore, is the sole representative in Pakistan of SSP – Stainless Steel Processing GmbH (Germany) for SSP equipment, parts and services. It supplies, installs and integrates SSP syrup room equipment such as the CONTIMAXX dissolving system and MASTERMIXX blender, with local services provided together with and under SSP's responsibility."
    },
    {
      "q": "What is a syrup room in a beverage plant?",
      "a": "A syrup room is the part of a beverage plant that prepares the syrup from which drinks are made. It receives sugar or liquid sweetener, dissolves it, filters and pasteurises the syrup, blends it with concentrate into final syrup and stores it for the filling lines, with CIP and recipe-based control."
    },
    {
      "q": "Continuous or batch sugar dissolving: which is right?",
      "a": "Continuous dissolving generally suits high-volume lines that need a steady syrup supply, while batch dissolving suits smaller volumes and frequent changes of syrup type. Continuous systems measure concentration inline and correct the sugar-to-water ratio as they run. SSP supplies both, and gives its continuous crystal-sugar dissolving system as 8 m³/h up to 30 m³/h at 65 °Brix."
    },
    {
      "q": "How is Brix controlled in a syrup room?",
      "a": "Brix is controlled by measuring syrup concentration and adjusting the ratio of sugar to water. Batch systems weigh the ingredients and check each batch before release, while continuous systems measure concentration inline, typically by density or refractive index, and correct the dosing as they run."
    },
    {
      "q": "What is the difference between hot and cold sugar dissolving?",
      "a": "Hot dissolving heats the water to dissolve sugar faster and at higher concentration, while cold dissolving works at ambient temperature and saves the energy needed to heat the full volume. Cold-dissolved syrup is normally pasteurised downstream for microbial reduction. SSP dissolving systems are available for cold or hot operation."
    },
    {
      "q": "Can an existing syrup room be automated or upgraded?",
      "a": "Yes, an existing syrup room can usually be upgraded stage by stage while serviceable tanks and piping stay in service. Typical upgrades add continuous dissolving, filtration, pasteurisation, a valve matrix or automated recipe control. MBH Solutions retrofits existing syrup rooms from a site survey onward and adds Siemens S7 and WinCC recipe automation where control is still manual."
    },
    {
      "q": "What does an efficient and reliable syrup room need?",
      "a": "An efficient and reliable syrup room needs stable sugar handling, accurate concentration control, effective filtration and heat treatment, hygienic storage and validated CIP, all run from recipes rather than manual settings. SSP control cabinets provide recipe management, reports and data archiving, and MBH Solutions automates on Siemens S7 and WinCC."
    },
    {
      "q": "Does MBH deliver complete syrup rooms or single units?",
      "a": "MBH Solutions delivers both: complete turnkey syrup rooms, and individual SSP units supplied as SSP's sole representative in Pakistan. Turnkey scope covers site survey, supply, fabrication of tanks and piping, control panels, Siemens automation, FAT, installation, SAT and commissioning. Spare parts, pumps, valves and instruments are supplied through MBH's product catalogue."
    }
  ]
};
