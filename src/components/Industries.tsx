const INDUSTRIES = [
  {
    name: "Food & Beverage",
    desc: "Delivering hygienic-design control systems for bottling, dairy, and packaged food lines.",
  },
  {
    name: "FMCG",
    desc: "Integrating high-speed line control and OEE monitoring across fast-moving consumer goods plants.",
  },
  {
    name: "Power Generation",
    desc: "Providing SCADA and control panel engineering for captive and grid-connected power plants.",
  },
  {
    name: "Process Manufacturing",
    desc: "Automating batch and continuous processes across chemical and industrial process lines.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-off-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <span className="text-eyebrow inline-block rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-amber">
          Industries Served
        </span>
        <h2 className="text-h2 mt-4 max-w-xl text-near-black">
          Automating Pakistan&rsquo;s Manufacturing Sector
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="rounded-lg border border-black/5 bg-white p-6"
            >
              <div className="text-data text-steel-signal">
                {industry.name.slice(0, 2).toUpperCase()}.SEC
              </div>
              <h3
                className="mt-3 text-near-black"
                style={{ fontWeight: 500, fontSize: 18 }}
              >
                {industry.name}
              </h3>
              <p
                className="mt-2 text-[#4a5568]"
                style={{ fontWeight: 400, fontSize: 13, lineHeight: 1.6 }}
              >
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
