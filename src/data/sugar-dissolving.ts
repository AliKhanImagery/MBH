// Copy for /solutions/sugar-dissolving.
// Generated from the reviewed copy (writer + independent reviewer, 20 Nov 2026).
// Every company statement maps to an approved fact; see the claims ledger kept with the brief.
// Edit facts only with Hammad's sign-off. Update lastUpdated (and sitemap.ts) when content changes.

export type SugarLink = { text: string; href: string };
export type SugarSection = { id: string; heading: string; paragraphs: string[]; bullets: string[]; links: SugarLink[] };
export type SugarPage = {
  metaTitle: string; metaDescription: string; eyebrow: string; h1: string; heroSubtitle: string;
  answerBlock: string; lastUpdated: string; areaServed: string[];
  specHeading: string; specTable: { parameter: string; value: string }[];
  sections: SugarSection[];
  reference: { heading: string; body: string; linkText: string; href: string };
  faqHeading: string; faqs: { q: string; a: string }[];
};

export const SUGAR_PAGE: SugarPage = {
  "metaTitle": "Sugar Dissolving System Pakistan: Batch and Continuous",
  "metaDescription": "Batch and continuous sugar dissolving systems in Pakistan: sugar intake, hot or cold dissolving, inline Brix control and Siemens automation, with SSP equipment.",
  "eyebrow": "Solutions · Sugar Dissolving",
  "h1": "Sugar Dissolving Systems for Simple Syrup Production",
  "heroSubtitle": "MBH Solutions supplies SSP batch and continuous dissolving systems that turn crystal sugar into simple syrup at the specified °Brix, cold or hot.",
  "answerBlock": "MBH Solutions, a Lahore engineering company and SSP's sole representative in Pakistan, supplies batch and continuous sugar dissolving systems, cold or hot, covering the process from sugar intake to simple syrup at the target °Brix. Systems are delivered turnkey or added to an existing syrup room, with Siemens PLC/SCADA control engineered by MBH as a Siemens Integrator Company.",
  "lastUpdated": "2026-11-20",
  "areaServed": [
    "Pakistan",
    "Iran",
    "Turkey"
  ],
  "specHeading": "Specification Summary",
  "specTable": [
    {
      "parameter": "Dissolving Method",
      "value": "Batch or continuous (SSP Sugar Batch Dissolving, CONTIMAXX continuous dissolving for crystal sugar, Crystal Sugar High Capacity Dissolving Tanks)"
    },
    {
      "parameter": "Processing",
      "value": "Cold or hot; dissolving and pasteurising of granulated sugar available (SSP)"
    },
    {
      "parameter": "Products",
      "value": "Simple syrup from crystal sugar at various concentrations; other powders through SSP Powder Dissolving"
    },
    {
      "parameter": "Continuous Capacity (SSP)",
      "value": "SSP Crystal Sugar Continuous Dissolving System: 8 m³/h up to 30 m³/h at 65 °Brix (SSP brochure figure)"
    },
    {
      "parameter": "Sugar Intake",
      "value": "Big-bag receiving (SSP Crystal Sugar Big-Bag Receiving Station); sugar silos with dust separation, drying and mechanical or pneumatic filling and discharge; HFCS receiving tanks; Double Bag Filter (all SSP)"
    },
    {
      "parameter": "Concentration Control",
      "value": "Batch: weighed or metered charge, checked before release. Continuous: typically inline measurement by density or refractive index, with recipe-based ratio control"
    },
    {
      "parameter": "Downstream",
      "value": "Stainless, bag or precoat filtration and plate or tube pasteurisation (SSP), within a complete syrup room"
    },
    {
      "parameter": "Control Platform",
      "value": "Recipe-based dissolver automation by MBH Solutions on Siemens S7, WinCC and TIA Portal; SSP original control software left unmodified"
    },
    {
      "parameter": "Delivery",
      "value": "Turnkey, or addition to an existing syrup room"
    },
    {
      "parameter": "Services",
      "value": "Survey on site; FAT before shipment, then installation, SAT and commissioning; spare parts"
    },
    {
      "parameter": "Fabrication",
      "value": "Sanitary tanks, piping and skids in AISI 304 or 316L, orbital and manual TIG welded and passivated in MBH's Pakistan workshop"
    },
    {
      "parameter": "Principal",
      "value": "SSP – Stainless Steel Processing GmbH (Bobingen, Germany), represented in Pakistan by MBH Solutions"
    }
  ],
  "sections": [
    {
      "id": "what-a-sugar-dissolving-system-does",
      "heading": "What a Sugar Dissolving System Does",
      "paragraphs": [
        "A sugar dissolving system follows sugar intake as the first wet stage of a syrup room. It combines crystal sugar with treated water to produce simple syrup at a defined concentration, which is then filtered, heat treated and stored before blending with concentrate.",
        "SSP's dissolving range, which MBH Solutions supplies in Pakistan, includes Sugar Batch Dissolving, the CONTIMAXX continuous dissolving system for crystal sugar, Crystal Sugar High Capacity Dissolving Tanks and Powder Dissolving for other powders."
      ],
      "bullets": [],
      "links": [
        {
          "text": "syrup room systems",
          "href": "/solutions/syrup-rooms"
        },
        {
          "text": "all process solutions",
          "href": "/solutions"
        }
      ]
    },
    {
      "id": "batch-and-continuous-dissolving",
      "heading": "Batch and Continuous Dissolving",
      "paragraphs": [
        "The two methods differ in how sugar and water are proportioned and how concentration is verified.",
        "SSP builds its dissolving systems for continuous or batch production of sugar syrup, at a range of concentrations. Its brochure lists the Crystal Sugar Continuous Dissolving System from 8 m³/h up to 30 m³/h at 65 °Brix."
      ],
      "bullets": [
        "Batch: sugar and water are charged into an agitated tank by weight or volume, dissolved, checked and released as a complete batch. Typically suited to lower or irregular demand and several syrup types.",
        "Continuous: sugar and water are fed at a controlled ratio, concentration is measured inline and the ratio is trimmed while syrup flows. Typically suited to high, steady demand and one main syrup specification."
      ],
      "links": []
    },
    {
      "id": "hot-and-cold-dissolving",
      "heading": "Hot and Cold Dissolving",
      "paragraphs": [
        "Sucrose solubility rises with temperature, so hot dissolving reaches high concentration sooner and helps reduce microbial load. Cold dissolving uses water near ambient temperature and avoids heating the dissolving water, but it takes longer and depends on downstream pasteurisation for microbial reduction.",
        "Either temperature mode is available from SSP, whose brochure also lists equipment to dissolve and pasteurise granulated sugar."
      ],
      "bullets": [],
      "links": []
    },
    {
      "id": "brix-measurement-and-control",
      "heading": "Brix Measurement and Control",
      "paragraphs": [
        "°Brix is the mass percentage of sucrose in solution and the working measure of syrup strength.",
        "In continuous operation, concentration is typically measured inline by density or refractive index, with temperature compensation, and the sugar or water feed is adjusted to hold the setpoint. In batch operation, the charge is weighed or metered, and each batch is checked and corrected before release.",
        "MBH Solutions engineers dissolver automation on Siemens S7 PLCs with WinCC SCADA/HMI in TIA Portal, including recipe management, as a Siemens Integrator Company. Where SSP supplies its own control cabinet, MBH does not alter SSP's original control software, as that would void the manufacturer's warranty."
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
      "id": "sugar-intake-and-handling",
      "heading": "Sugar Intake and Handling",
      "paragraphs": [
        "The intake method sets the manual work, dust and contamination risk at the dissolver. SSP equipment is named below where SSP supplies it:",
        "Sugar quality also matters: insoluble matter sets the filtration duty, colour (commonly specified in ICUMSA units) decides whether further treatment such as activated carbon is needed, and lumps or moisture disturb continuous feeding."
      ],
      "bullets": [
        "Bags: 50 kg bags tipped into a hopper suit low volumes, with manual handling and dust as the usual limits.",
        "Big bags: the SSP Crystal Sugar Big-Bag Receiving Station discharges big bags to the dissolver.",
        "Bulk silos: SSP storage silos for sugar offer mechanical or pneumatic filling and discharge, dust separation and drying.",
        "Liquid sugars: SSP HFCS receiving tanks take in high fructose corn syrup, which needs no dissolving and is generally filtered and stored before metering to blending."
      ],
      "links": []
    },
    {
      "id": "filtration-and-pasteurisation-after-dissolving",
      "heading": "Filtration and Pasteurisation After Dissolving",
      "paragraphs": [
        "Simple syrup leaving the dissolver is typically filtered, pasteurised and cooled before storage. Filtration options from SSP include stainless, bag and precoat (kieselguhr) filters, followed by plate or tube pasteurisers; both stages, and syrup storage, are described on the syrup room page. Dissolving equipment is normally included in the syrup room's CIP circuits; central CIP stations and skids for this duty are part of MBH's supply."
      ],
      "bullets": [],
      "links": [
        {
          "text": "syrup room page",
          "href": "/solutions/syrup-rooms"
        },
        {
          "text": "CIP Systems",
          "href": "/solutions/cip-systems"
        }
      ]
    },
    {
      "id": "adding-a-dissolver-to-an-existing-syrup-room",
      "heading": "Adding a Dissolver to an Existing Syrup Room",
      "paragraphs": [
        "A continuous or larger batch dissolver can generally be installed ahead of existing filtration and pasteurisation, provided those stages can accept the new flow and the tie-in points, utilities and space are confirmed.",
        "MBH Solutions begins each syrup room retrofit with a site survey. New sanitary tanks, connecting piping and skids in AISI 304 or 316L are produced in MBH's own workshop in Pakistan by orbital and manual TIG welding and then passivated, to conventional food-grade hygienic practice. Pumps, valves and instruments, which MBH does not manufacture, come from its product catalogue."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Fabrication",
          "href": "/fabrication"
        },
        {
          "text": "Product Catalogue",
          "href": "/catalogue"
        }
      ]
    },
    {
      "id": "information-needed-to-size-a-system",
      "heading": "Information Needed to Size a System",
      "paragraphs": [
        "A quotation is based on the following, normally confirmed by a site survey:"
      ],
      "bullets": [
        "Target output in m³/h of syrup or tonnes of sugar per hour, including planned expansion.",
        "Target °Brix and any additional concentrations.",
        "Sugar type and quality: crystal or liquid sugar, with colour and insolubles specifications.",
        "Intake method: 50 kg bags, big bags or bulk silo.",
        "Batch or continuous and hot or cold operation, with daily changeovers and the heat treatment installed downstream.",
        "Utilities: treated water, steam or hot water, cooling, compressed air and power.",
        "Space and floor loading.",
        "Existing control: PLC platform, SCADA, and whether the syrup room must keep running during installation."
      ],
      "links": []
    },
    {
      "id": "supply-installation-and-local-support",
      "heading": "Supply, Installation and Local Support",
      "paragraphs": [
        "SSP – Stainless Steel Processing GmbH of Bobingen, Germany, supplies the dissolving equipment as single units or within turnkey plants. MBH Solutions is SSP's sole representative in Pakistan for SSP equipment, parts and services, and works with SSP as its principal. MBH delivers local support and services jointly with SSP and under SSP's responsibility.",
        "A typical MBH scope runs from site survey and supply through fabrication, control and distribution panels and Siemens automation, followed by FAT, installation, SAT and commissioning, with spare parts supply afterwards."
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
    "body": "MBH's syrup room reference is Coca-Cola Tehran in Iran, where the company was responsible for erecting and commissioning the complete syrup room and CIP system, from mechanical installation and process piping to automation integration and start-up. Further beverage and food clients, including Pepsi Northern Beverages, Fauji Foods and Coca-Cola Isparta (Turkey), are listed on the references page.",
    "linkText": "View References",
    "href": "/references"
  },
  "faqHeading": "Engineering Questions",
  "faqs": [
    {
      "q": "What is a sugar dissolving system?",
      "a": "A sugar dissolving system is the syrup room equipment that dissolves crystal sugar in treated water to make simple syrup at a set °Brix. It typically includes a sugar feed, a dissolving vessel or line, concentration measurement and automatic control, and it feeds the filtration and pasteurisation stages that follow."
    },
    {
      "q": "Batch or continuous sugar dissolving — which is better?",
      "a": "Neither method is better in every case: continuous dissolving fits plants with a high, steady syrup draw, and batch dissolving fits lower volumes or several syrup recipes in a day. For high volumes, SSP offers its Crystal Sugar Continuous Dissolving System, listed at 8 m³/h up to 30 m³/h at 65 °Brix."
    },
    {
      "q": "Should crystal sugar be dissolved hot or cold?",
      "a": "It depends on the plant: hot dissolving suits lines that need high concentration quickly, while cold dissolving suits plants that want to avoid heating the dissolving water and already pasteurise syrup downstream. Warmer water dissolves sucrose faster and helps reduce microbial load, so cold-dissolved syrup relies on the pasteuriser that follows."
    },
    {
      "q": "How is Brix controlled in a sugar dissolver?",
      "a": "A dissolver holds Brix in a closed loop: concentration is measured, compared with the recipe setpoint and corrected by changing the sugar or water feed. Continuous dissolvers measure inline, typically by density or refractive index, while batch dissolvers weigh or meter the charge and correct each batch before release."
    },
    {
      "q": "Who supplies SSP sugar dissolving systems in Pakistan?",
      "a": "MBH Solutions, a Lahore engineering company, is SSP's sole representative in Pakistan and supplies, installs and integrates SSP dissolving equipment, from batch dissolving to the CONTIMAXX continuous system for crystal sugar. Local services for SSP equipment are provided together with and under SSP's responsibility."
    },
    {
      "q": "Can a continuous sugar dissolver be added to an existing syrup room?",
      "a": "Yes, a continuous dissolver can generally be installed ahead of an existing syrup room's filtration and pasteurisation, provided those stages can accept the new flow. MBH Solutions starts with a site survey of intake, utilities, space and control, then ties the new dissolver into plant control, using Siemens S7 and WinCC where required."
    },
    {
      "q": "What information is needed to quote a sugar dissolving system?",
      "a": "A quotation needs the target output in m³/h or tonnes of sugar per hour, the target °Brix, sugar type and quality, the intake method, batch or continuous and hot or cold operation, available utilities and space, and the existing control platform. A site survey then confirms them."
    }
  ]
};
