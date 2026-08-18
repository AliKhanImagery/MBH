const STRENGTHS = [
  {
    title: "SIEMENS Integrator company",
    desc: "Delivering PLC and SCADA architecture built on certified Siemens TIA Portal and Simatic platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 2l1.5 3.5L17 7l-3.5 1.5L12 12l-1.5-3.5L7 7l3.5-1.5L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "24/7 Remote Monitoring",
    desc: "Providing continuous plant-floor visibility through live SCADA dashboards and alerting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M3 12h4l2 6 4-14 2 8h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Rapid Deployment Teams",
    desc: "Field engineering crews positioned across Pakistan for FAT, commissioning, and site support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Full Lifecycle Support",
    desc: "Covering design, integration, commissioning, and long-term maintenance under a single contract.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M18 4v3h-3M6 20v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-off-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <span className="text-eyebrow inline-block rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-amber">
              About MBH Solutions
            </span>

            <h2 className="text-h2 mt-4 text-near-black">
              Engineering Reliability Into Every Production Line
            </h2>

            <p className="text-body mt-6 text-[#4a5568]">
              MBH Solutions operates as a Siemens Solution Partner delivering
              industrial automation and engineering services to
              manufacturers across Pakistan – covering PLC programming, SCADA
              integration, HMI design, and control panel engineering for
              food and beverage, FMCG, power generation, and process
              manufacturing plants.
            </p>

            <p className="text-body mt-4 text-[#4a5568]">
              The company&rsquo;s engineering teams work across the full
              project lifecycle – from control philosophy and panel design
              through FAT, on-site commissioning, and ongoing maintenance
              contracts – ensuring systems remain productive well beyond
              handover.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {STRENGTHS.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/10 text-amber">
                  {item.icon}
                </div>
                <h3
                  className="mt-4 text-[#1A2F6A]"
                  style={{ fontWeight: 500, fontSize: 13 }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-[#6A7A9A]" style={{ fontWeight: 400, fontSize: 12, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
