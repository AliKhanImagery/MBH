// Copy for /solutions/industrial-automation.
// Generated from the reviewed copy (writer + independent reviewer, 20 Nov 2026).
// Every company statement maps to an approved fact; see the claims ledger kept with the brief.
// Edit facts only with Hammad's sign-off. Update lastUpdated (and sitemap.ts) when content changes.

export type AutoLink = { text: string; href: string };
export type AutoSection = { id: string; heading: string; paragraphs: string[]; bullets: string[]; links: AutoLink[] };
export type AutomationPage = {
  metaTitle: string; metaDescription: string; eyebrow: string; h1: string; heroSubtitle: string;
  answerBlock: string; lastUpdated: string; areaServed: string[];
  specHeading: string; specTable: { parameter: string; value: string }[];
  sections: AutoSection[];
  reference: { heading: string; body: string; linkText: string; href: string };
  faqHeading: string; faqs: { q: string; a: string }[];
};

export const AUTOMATION_PAGE: AutomationPage = {
  "metaTitle": "Industrial Automation in Pakistan: Siemens PLC and SCADA",
  "metaDescription": "Siemens S7-1200 and S7-1500 automation, S5 and S7-300 migration, WinCC SCADA, MCC and PCC panels and remote monitoring for process plants in Pakistan.",
  "eyebrow": "Solutions · Industrial Automation",
  "h1": "Industrial Automation and Siemens PLC Systems for Process Plants",
  "heroSubtitle": "MBH Solutions engineers Siemens PLC, SCADA and panel systems for process plants, from new installations to the migration of legacy controllers.",
  "answerBlock": "MBH Solutions is an engineering company in Lahore, Pakistan, and a Siemens Integrator Company. It engineers Siemens S7-1200 and S7-1500 automation, migrates legacy S5, S7-300 and S7-400 systems to S7-1500, and delivers WinCC SCADA and HMI, control, MCC and PCC panels and remote monitoring for beverage, dairy, edible oil, food and power plants, through erection and commissioning.",
  "lastUpdated": "2026-11-20",
  "areaServed": [
    "Pakistan",
    "Iran",
    "Turkey"
  ],
  "specHeading": "Specification Summary",
  "specTable": [
    {
      "parameter": "PLC Platforms",
      "value": "Siemens S7-1200 and S7-1500 for new systems"
    },
    {
      "parameter": "Engineering Software",
      "value": "Siemens TIA Portal"
    },
    {
      "parameter": "Migration",
      "value": "Legacy Siemens S5, S7-300 and S7-400 systems migrated to S7-1500"
    },
    {
      "parameter": "SCADA / HMI",
      "value": "Siemens WinCC SCADA and HMI; operator panels and SCADA stations"
    },
    {
      "parameter": "Remote Monitoring",
      "value": "Remote monitoring of plant automation; MBH's own cloud monitoring and telemetry software for S7-1200, S7-1500 and S7-300 PLCs"
    },
    {
      "parameter": "Panels",
      "value": "Control, distribution (DP), MCC and PCC panels, factory acceptance tested before dispatch"
    },
    {
      "parameter": "Drives",
      "value": "VFD integration with drives such as Siemens and Danfoss"
    },
    {
      "parameter": "Instrumentation",
      "value": "Field instrumentation supplied and integrated, including Endress+Hauser and ifm; loop checks"
    },
    {
      "parameter": "Safety",
      "value": "Safety relays, emergency stops and interlocks"
    },
    {
      "parameter": "Industries",
      "value": "Beverage, dairy, edible oil, food and FMCG, power generation"
    },
    {
      "parameter": "Services",
      "value": "Site survey, design, FAT, erection, SAT, commissioning; turnkey delivery; spare parts"
    },
    {
      "parameter": "Label",
      "value": "Siemens Integrator Company"
    }
  ],
  "sections": [
    {
      "id": "what-industrial-automation-covers",
      "heading": "What Industrial Automation Covers in a Process Plant",
      "paragraphs": [
        "In a process plant, automation is the layer that measures, decides and acts. Field instruments report level, flow, pressure and temperature; a programmable logic controller (PLC) runs the sequences and interlocks; drives and valves act on the process; and HMI and SCADA systems give operators control, alarms and records. Motor control centres and distribution panels power the equipment the controller commands.",
        "MBH Solutions engineers this layer as a Siemens Integrator Company, alongside its beverage process systems, CIP systems and stainless fabrication, for new installations and the modernisation of existing plants."
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
      "id": "new-plc-systems",
      "heading": "New PLC Systems on S7-1200 and S7-1500",
      "paragraphs": [
        "For new lines and plant sections, MBH Solutions engineers automation systems on Siemens S7-1200 and S7-1500 controllers, programmed and configured in TIA Portal. In general practice, the S7-1200 is applied to compact machines and smaller process units, while the S7-1500 is chosen where a system needs more I/O, larger programs, faster cycle times or several networked units.",
        "One TIA Portal project can hold the PLC program, HMI screens, network configuration and Siemens drive parameters, simplifying documentation, modifications and fault finding."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Siemens PLC range",
          "href": "/catalogue/siemens-plc"
        }
      ]
    },
    {
      "id": "migrating-legacy-plc-systems",
      "heading": "Migrating Legacy S5, S7-300 and S7-400 Systems",
      "paragraphs": [
        "Siemens S5, S7-300 and S7-400 controllers remain in service in many process plants, while replacement modules and the skills to maintain them grow scarcer. MBH Solutions migrates these legacy systems to the S7-1500 platform.",
        "A controlled migration generally follows a fixed sequence:"
      ],
      "bullets": [
        "Audit: hardware, networks, field wiring and program are surveyed, including site changes missing from the drawings.",
        "Program backup: a verified copy of the running program and its data is secured before any work begins.",
        "I/O mapping: every existing input and output is assigned to its new address, module and terminal.",
        "Conversion: STEP 7 programs from S7-300 and S7-400 systems can be converted and then reworked in TIA Portal, whereas S5 programs are usually re-engineered from the documented process logic.",
        "Testing: the new program is tested in simulation and at FAT before reaching site.",
        "Cut-over: the switch is made during planned shutdowns, in stages where the process allows, with the old system kept as a fallback."
      ],
      "links": [
        {
          "text": "Discuss a migration",
          "href": "#contact"
        }
      ]
    },
    {
      "id": "wincc-scada-and-hmi",
      "heading": "WinCC SCADA and HMI",
      "paragraphs": [
        "An HMI is the operator panel at a machine or process unit. A SCADA system supervises an entire area or plant from a control-room station, collecting process values, logging alarms and trends, and managing recipes and reports.",
        "MBH Solutions delivers Siemens WinCC SCADA and HMI systems, from operator panels on individual skids to SCADA stations supervising a complete process area. Screens follow the process, showing the states, setpoints and alarms needed to run and clean a line such as a syrup room or a CIP station."
      ],
      "bullets": [],
      "links": [
        {
          "text": "syrup room",
          "href": "/solutions/syrup-rooms"
        },
        {
          "text": "CIP station",
          "href": "/solutions/cip-systems"
        }
      ]
    },
    {
      "id": "remote-monitoring-and-telemetry",
      "heading": "Remote Monitoring and Telemetry",
      "paragraphs": [
        "MBH Solutions provides remote monitoring of plant automation, giving engineering and management teams visibility of PLC data beyond the control room. The company also develops its own cloud monitoring and telemetry products and software for Siemens S7-1200, S7-1500 and S7-300 PLCs.",
        "As general practice, remote access to a control system should be separated from the office network, encrypted and restricted to authorised users, with read-only monitoring kept distinct from any ability to change the running process."
      ],
      "bullets": [],
      "links": []
    },
    {
      "id": "control-mcc-pcc-panels",
      "heading": "Control, MCC and PCC Panels",
      "paragraphs": [
        "MBH Solutions designs and builds control panels, distribution (DP) panels, and motor control centre (MCC) and power control centre (PCC) panels. Panels undergo factory acceptance testing before dispatch, so wiring, I/O and functions are checked before installation begins.",
        "In common usage, a PCC receives the incoming supply from the transformer or generator and distributes power to MCCs and other large loads, while an MCC groups the starters, feeders and drives for individual process motors. A control panel houses the PLC, I/O, network components and safety relays that coordinate them."
      ],
      "bullets": [],
      "links": []
    },
    {
      "id": "drives-instrumentation-safety",
      "heading": "Drives, Instrumentation and Safety Circuits",
      "paragraphs": [
        "VFD integration places variable frequency drives for pumps, agitators and conveyors under PLC speed control and fault monitoring. MBH Solutions integrates drives such as Siemens and Danfoss.",
        "MBH also supplies and integrates field instrumentation, with Endress+Hauser and ifm among its technology partners, and performs loop checks from each instrument through the PLC to the operator display. MBH does not manufacture pumps or valves; these, like drives and instruments, come from its catalogue.",
        "Safety circuits are implemented with safety relays, emergency stops and interlocks, designed to stop the relevant equipment when an emergency stop is pressed or an interlock condition is lost."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Variable frequency drives",
          "href": "/catalogue/vfd"
        },
        {
          "text": "ifm sensors",
          "href": "/catalogue/ifm-sensors"
        },
        {
          "text": "Technology partners",
          "href": "/partners"
        }
      ]
    },
    {
      "id": "industries-served",
      "heading": "Industries Served",
      "paragraphs": [
        "MBH Solutions carries out automation work in beverage, dairy, edible oil, food and FMCG, and power generation plants. In beverage plants, automation is engineered together with the company's process systems, including syrup rooms, sugar dissolving and CIP.",
        "Food-grade stainless tanks, piping and skids for these process systems are fabricated in MBH's own workshop in Pakistan in AISI 304 and 316L. MBH also represents SSP – Stainless Steel Processing GmbH (Bobingen, Germany) as its sole representative in Pakistan."
      ],
      "bullets": [],
      "links": [
        {
          "text": "Syrup rooms",
          "href": "/solutions/syrup-rooms"
        },
        {
          "text": "Sugar dissolving",
          "href": "/solutions/sugar-dissolving"
        },
        {
          "text": "CIP systems",
          "href": "/solutions/cip-systems"
        },
        {
          "text": "Fabrication",
          "href": "/fabrication"
        }
      ]
    },
    {
      "id": "survey-to-commissioning",
      "heading": "From Survey to Commissioning",
      "paragraphs": [
        "MBH Solutions takes automation projects through a defined sequence, either as part of turnkey delivery or as a standalone automation scope:"
      ],
      "bullets": [
        "Site survey: existing equipment, panels and cabling routes are recorded.",
        "Design: control architecture, panel layouts, I/O lists and software structure are engineered.",
        "FAT: panels and software are tested before dispatch.",
        "Erection: panels, instruments, drives and cabling are installed on site.",
        "SAT: the installed system is tested with the plant's own field devices.",
        "Commissioning: the system is brought into production, with spare parts supply afterwards."
      ],
      "links": []
    },
    {
      "id": "information-for-a-quotation",
      "heading": "Information Needed for a Quotation",
      "paragraphs": [
        "An automation proposal is more precise when the following documents accompany the enquiry:"
      ],
      "bullets": [
        "I/O list, or a list of instruments, motors and valves to be controlled",
        "P&IDs or process flow diagrams",
        "Backup of the existing PLC and HMI program, for migration work",
        "Existing panel drawings and single-line diagrams",
        "Motor list with ratings, and the drives already installed",
        "Planned shutdown windows and the site location"
      ],
      "links": [
        {
          "text": "Send an enquiry",
          "href": "#contact"
        }
      ]
    }
  ],
  "reference": {
    "heading": "Reference: Coca-Cola Tehran",
    "body": "For Coca-Cola Tehran in Iran, MBH Solutions handled the erection and commissioning of a complete syrup room and CIP system, a scope that included automation integration and start-up. MBH's beverage and food clients include Fauji Foods, Dalda Foods, Master Beverages, Naubahar Beverages, Pepsi Haidri Beverages and Coca-Cola Isparta (Turkey).",
    "linkText": "View References",
    "href": "/references"
  },
  "faqHeading": "Engineering Questions",
  "faqs": [
    {
      "q": "Who does Siemens PLC programming in Pakistan?",
      "a": "MBH Solutions, a Lahore engineering company and Siemens Integrator Company, programs Siemens PLCs for process plants in Pakistan. It engineers new S7-1200 and S7-1500 systems in TIA Portal and migrates legacy S5, S7-300 and S7-400 systems to S7-1500, together with WinCC SCADA, panels and commissioning."
    },
    {
      "q": "Can an S7-300 or S5 system be migrated to S7-1500?",
      "a": "Yes, both can be migrated to S7-1500, by different routes. STEP 7 programs from S7-300 and S7-400 systems can generally be converted and reworked in TIA Portal, while S5 programs are normally re-engineered from the process logic. MBH Solutions carries out both, starting with an audit and a verified program backup."
    },
    {
      "q": "How is downtime handled during a PLC migration?",
      "a": "Downtime is kept short by completing most of the work before the plant stops. As general practice, the new program and panels are built and tested off site, I/O is mapped in advance, and cut-over takes place in a planned shutdown, with the old system held as a fallback."
    },
    {
      "q": "What does a SCADA system do in a process plant?",
      "a": "A SCADA system supervises and records the process across an area or a whole plant. It displays live values and equipment states, raises and logs alarms, stores trends, manages recipes and produces reports for production, QA and maintenance. MBH Solutions delivers Siemens WinCC SCADA systems together with HMI operator panels for the individual machines and skids."
    },
    {
      "q": "Can MBH monitor a plant's PLCs remotely?",
      "a": "Yes, MBH Solutions provides remote monitoring of plant automation. The company also develops its own cloud monitoring and telemetry software for Siemens S7-1200, S7-1500 and S7-300 PLCs. As general practice, remote connections should be encrypted, restricted to authorised users and kept separate from the plant's office network."
    },
    {
      "q": "What is the difference between an MCC and a PCC panel?",
      "a": "A PCC distributes incoming power, while an MCC controls individual motors. The PCC takes the transformer or generator supply and feeds MCCs and large loads; the MCC holds the starters, feeders and drives for process motors. MBH Solutions designs and builds both, with factory acceptance testing before dispatch."
    },
    {
      "q": "What information is needed to quote an automation project?",
      "a": "An I/O or equipment list and the P&IDs are the starting point for an automation quotation. Migration work also needs a backup of the existing PLC and HMI programs and the current panel drawings. A motor list, installed drives, shutdown windows and site location complete a firm scope."
    },
    {
      "q": "What does MBH provide after commissioning?",
      "a": "After commissioning, MBH Solutions supplies spare parts and can provide remote monitoring of plant automation. Replacement drives, sensors and other components are supplied through the MBH catalogue. Where a plant later modernises, MBH can migrate older Siemens controllers to S7-1500 as part of a retrofit."
    }
  ]
};
