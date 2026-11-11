// Copy for /solutions/cip-systems.
// Generated from the reviewed copy (writer + independent reviewer, 11 Nov 2026).
// Every company statement maps to an approved fact; see the claims ledger kept with the brief.
// Edit facts only with Hammad's sign-off. Update lastUpdated (and sitemap.ts) when content changes.

export type CipLink = { text: string; href: string };
export type CipSection = { id: string; heading: string; paragraphs: string[]; bullets: string[]; links: CipLink[] };
export type CipPage = {
  metaTitle: string; metaDescription: string; eyebrow: string; h1: string; heroSubtitle: string;
  answerBlock: string; lastUpdated: string; areaServed: string[];
  specHeading: string; specTable: { parameter: string; value: string }[];
  sections: CipSection[];
  reference: { heading: string; body: string; linkText: string; href: string };
  faqHeading: string; faqs: { q: string; a: string }[];
};

export const CIP_PAGE: CipPage = {
  "metaTitle": "CIP Systems for Beverage and Food Plants in Pakistan",
  "metaDescription": "Central CIP stations and skids for beverage, dairy and food plants in Pakistan: 1 to 4 circuits, expandable to 6 or 8, Siemens S7 control, turnkey or retrofit.",
  "eyebrow": "Solutions · CIP Systems",
  "h1": "Automated CIP Systems for Beverage and Food Plants",
  "heroSubtitle": "Delivering central CIP stations, skids and mobile CIP trolleys for beverage, dairy and food plants, turnkey or as a retrofit.",
  "answerBlock": "MBH Solutions, a Lahore engineering company and SSP's sole representative in Pakistan, supplies central CIP stations and skids for beverage, dairy and food plants, with mobile CIP trolleys on demand: 1 to 4 circuits as standard, expandable to 6 or 8. Automated systems run multi-detergent recipes on Siemens S7 and WinCC, delivered turnkey or as a retrofit.",
  "lastUpdated": "2026-11-11",
  "areaServed": [
    "Pakistan",
    "Iran",
    "Turkey"
  ],
  "specHeading": "Specification Summary",
  "specTable": [
    {
      "parameter": "Configurations",
      "value": "Central CIP stations and skids; mobile CIP trolleys on demand"
    },
    {
      "parameter": "Circuits",
      "value": "1 to 4 as standard, expandable to 6 or 8"
    },
    {
      "parameter": "Cleaning Media",
      "value": "Multi-detergent"
    },
    {
      "parameter": "Instrumentation",
      "value": "Typically conductivity, temperature and flow measurement"
    },
    {
      "parameter": "Control Platform",
      "value": "Siemens S7 PLC, WinCC SCADA/HMI, TIA Portal, recipe management"
    },
    {
      "parameter": "Electrical",
      "value": "Control and distribution panels built by MBH Solutions"
    },
    {
      "parameter": "Delivery",
      "value": "Turnkey, or retrofit to an existing CIP set; automated or manual"
    },
    {
      "parameter": "Services",
      "value": "Site survey, FAT, SAT, installation and commissioning"
    },
    {
      "parameter": "Fabrication",
      "value": "Own workshop in Pakistan; orbital and manual TIG welding, passivation"
    },
    {
      "parameter": "Materials",
      "value": "AISI 304 / 316L stainless steel"
    },
    {
      "parameter": "Applications",
      "value": "Beverage, dairy and food plants: single line, multiple lines or tanks"
    }
  ],
  "sections": [
    {
      "id": "what-a-cip-system-does",
      "heading": "What a CIP System Does",
      "paragraphs": [
        "A clean-in-place (CIP) system cleans the interior of tanks, process piping, heat exchangers and filling equipment without dismantling them, by circulating rinse water and cleaning solutions through the product circuit under controlled time, temperature, concentration and flow. Flow velocity and spray devices supply the mechanical action; the detergent supplies the chemical action.",
        "A typical cycle follows the sequence below; steps, media and contact times are set per circuit by the product and the hygiene plan."
      ],
      "bullets": [
        "Pre-Rinse: flushing loose product residue from the circuit with water before any chemical is introduced.",
        "Caustic Wash: circulating a heated alkaline detergent to remove sugars, proteins, fats and organic films.",
        "Intermediate Rinse: displacing caustic so that it does not carry over into the acid step.",
        "Acid Wash: removing mineral scale or milkstone; routine in dairy, applied as required in beverage lines.",
        "Final Rinse: flushing with clean water until return conductivity confirms that no detergent remains.",
        "Sanitisation: applying hot water or a chemical sanitiser where the hygiene plan requires disinfection before production restarts."
      ],
      "links": []
    },
    {
      "id": "cip-system-configurations",
      "heading": "CIP System Configurations",
      "paragraphs": [
        "A CIP circuit is one cleaning route with its own supply and return path, typically serving a process line or a group of tanks. The number of circuits needed depends on how many lines and vessels must be cleaned independently at overlapping times.",
        "Single-use CIP makes up the solution for one cycle and then discharges it, which suits heavily soiled circuits and circuits where carry-over must be excluded. Recovery (reuse) CIP returns detergent to its tank for concentration and temperature correction and commonly keeps final rinse water for the next pre-rinse.",
        "MBH Solutions supplies central CIP stations and skids that clean a single line, multiple lines or tanks, with 1 to 4 circuits as standard, expandable to 6 or 8, and provides mobile CIP trolleys on demand."
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
      "id": "automation-and-control",
      "heading": "Automation and Control",
      "paragraphs": [
        "MBH Solutions automates CIP on Siemens S7 PLCs and WinCC SCADA/HMI, engineered in TIA Portal with recipe management, so each circuit runs its cleaning sequence as a stored recipe, on new lines or as a retrofit, as a Siemens Integrator Company.",
        "In general practice, automated CIP measures conductivity to confirm detergent concentration and detect the detergent-water interface, temperature to confirm the set point, and supply flow to confirm mechanical action. Return-line measurement confirms the whole circuit was covered and gives QA a consistent record for line release.",
        "MBH Solutions' automated CIP systems are typically fitted with conductivity, temperature and flow measurement, and the company builds the control and distribution panels in-house."
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
      "id": "product-recovery-before-cip",
      "heading": "Product Recovery Before CIP",
      "paragraphs": [
        "Product recovery, by pigging or a water push, runs before CIP and returns product held in the lines to process or to a recovery tank; CIP then cleans the emptied circuit.",
        "MBH Solutions supplies product recovery systems and integrates them with CIP under one control sequence, as described in the case study Beverage CIP and Product Recovery Modernisation."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Beverage CIP and Product Recovery Modernisation",
          "href": "/references/beverage-cip-recovery-modernization"
        }
      ]
    },
    {
      "id": "retrofitting-an-existing-cip-system",
      "heading": "Retrofitting an Existing CIP System",
      "paragraphs": [
        "Manually operated CIP sets make results shift-dependent and leave little record. Automating one generally starts with a survey of existing tanks, pumps, valves, instruments and piping, then circuit and recipe definition, added instrumentation and commissioning.",
        "MBH Solutions supplies its CIP systems as a retrofit as well as new, with Siemens S7 and WinCC recipe automation for existing lines. Site surveys, factory acceptance testing (FAT), site acceptance testing (SAT), installation and commissioning are standard MBH services."
      ],
      "bullets": [],
      "links": []
    },
    {
      "id": "turnkey-delivery",
      "heading": "Turnkey CIP Delivery",
      "paragraphs": [
        "MBH Solutions delivers CIP as a complete turnkey scope: circuit and recipe design, fabrication of skids and process piping, control and distribution panels, Siemens automation, installation, FAT, SAT and commissioning, under a single point of responsibility."
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
      "id": "fabrication-and-scope",
      "heading": "Fabrication and Scope",
      "paragraphs": [
        "MBH Solutions fabricates food-grade sanitary process tanks, sanitary process piping and modular skids in AISI 304 and 316L stainless steel in its own workshop in Pakistan, with orbital and manual TIG welding and passivation. Pumps, valves and heat exchangers for CIP circuits are supplied through MBH's product catalogue.",
        "MBH Solutions builds to conventional food-grade hygienic practice and does not build ASME code-stamped (U stamp) pressure vessels or equipment for explosive service."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Fabrication",
          "href": "/fabrication"
        },
        {
          "text": "Valves",
          "href": "/catalogue/valves"
        },
        {
          "text": "Pumps",
          "href": "/catalogue/pumps"
        },
        {
          "text": "Heat Exchangers",
          "href": "/catalogue/heat-exchangers"
        }
      ]
    },
    {
      "id": "working-with-ssp-germany",
      "heading": "Sole Representative of SSP (Germany) in Pakistan",
      "paragraphs": [
        "MBH Solutions is the sole representative in Pakistan of SSP – Stainless Steel Processing GmbH of Bobingen, Germany, and works with SSP as its principal.",
        "SSP supplies processing systems for food and drink production, including syrup rooms, dissolving, filtration and pasteurisation, tanks, dosing and blending, CIP cleaning systems and control. Its brochure describes a CIP system with four circuits, expandable to six to eight."
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
    "body": "At Coca-Cola Tehran (Iran), MBH Solutions carried out the erection and commissioning of a complete syrup room and CIP system, covering mechanical installation, process piping, automation integration and start-up. MBH's wider beverage and food references include Coca-Cola Isparta (Turkey), Pepsi Northern Beverages, Pepsi Haidri Beverages, Fauji Foods, Dalda Foods, Naubahar Beverages and Master Beverages.",
    "linkText": "View References",
    "href": "/references"
  },
  "faqHeading": "Engineering Questions",
  "faqs": [
    {
      "q": "Who builds CIP systems for beverage plants in Pakistan?",
      "a": "MBH Solutions, a Lahore engineering company and the sole representative of SSP (Germany) in Pakistan, supplies central CIP stations, skids and, on demand, mobile CIP trolleys for beverage, dairy and food plants. Automated systems run on Siemens S7 and WinCC and are delivered turnkey or as a retrofit. Its CIP reference is Coca-Cola Tehran, where it erected and commissioned a syrup room and CIP system."
    },
    {
      "q": "What are the steps of a CIP cycle?",
      "a": "A typical CIP cycle runs a pre-rinse, caustic wash, intermediate rinse, acid wash where scale forms, final rinse and, where required, sanitisation. Caustic removes organic soil, acid removes mineral deposits, and the final rinse continues until conductivity shows no detergent remains. Media, temperatures and contact times are set per circuit by product and hygiene plan."
    },
    {
      "q": "How many CIP circuits does a beverage plant need?",
      "a": "A plant needs as many circuits as it has lines and tank groups that must be cleaned independently at overlapping times. A single line with its tanks may run on one circuit, while a syrup room, several filling lines and storage tanks cleaned in parallel need more. MBH Solutions supplies skids with 1 to 4 circuits as standard, expandable to 6 or 8."
    },
    {
      "q": "What is the difference between single-use and recovery CIP?",
      "a": "Single-use CIP discharges the cleaning solution after one cycle, while recovery CIP returns detergent to a storage tank for reuse. Single-use suits heavily soiled circuits and those where carry-over must be excluded. Recovery CIP corrects the returned detergent for concentration and temperature, commonly reuses final rinse water as the next pre-rinse, and lowers water and chemical use where the soil allows."
    },
    {
      "q": "Can an existing manual CIP system be automated?",
      "a": "Yes, a manual CIP system can usually be automated by adding PLC control, automated valves and the instruments the sequence depends on, while suitable tanks, pumps and piping stay in service. MBH Solutions supplies CIP skids as a retrofit and delivers Siemens S7 and WinCC automation with recipe management for existing lines."
    },
    {
      "q": "How does product recovery work with CIP?",
      "a": "Product recovery runs before CIP: a pig or a water push drives product held in the lines back to process or to a recovery tank, and CIP then cleans the emptied circuit. Recovering product first returns usable product to process instead of sending it to drain with the pre-rinse. MBH Solutions supplies product recovery systems and integrates them with CIP."
    },
    {
      "q": "What makes a CIP system efficient and reliable for a beverage plant?",
      "a": "An efficient and reliable CIP system holds flow, temperature, concentration and contact time at set point on every circuit and verifies them each cycle. In general that depends on correctly sized supply and return pumps, spray devices matched to each vessel, drainable piping and conductivity, temperature and flow measurement. MBH Solutions' automated systems typically carry that instrumentation and run multi-detergent recipes on Siemens S7 and WinCC."
    },
    {
      "q": "Is CIP for a beverage plant different from CIP for a dairy?",
      "a": "Yes, the principle is the same but the soils and recipes differ. Dairy circuits, especially heated sections, form protein films and milkstone that make a regular acid step routine. Soft drink, juice and water lines deal mainly with sugars, flavours, pulp and microbial risk, so acid and sanitising steps follow the product and the hygiene plan. MBH Solutions supplies CIP for both beverage and dairy plants."
    }
  ]
};
