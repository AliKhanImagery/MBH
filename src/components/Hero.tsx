const SERVICE_STRIP = [
  { name: "PLC Programming", desc: "Siemens-certified control logic" },
  { name: "SCADA Systems", desc: "Real-time plant supervision" },
  { name: "HMI Design", desc: "Operator interface engineering" },
  { name: "Process Automation", desc: "End-to-end line integration" },
];

export default function Hero() {
  return (
    <section
      className="text-white"
      style={{
        background: "#000028",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 md:px-12 md:pt-40">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-[2px] w-6 bg-amber" />
            <span className="text-eyebrow text-amber">
              Siemens Solution Partner · Lahore, Pakistan
            </span>
          </div>

          <h1 className="text-h1 text-white">
            Industrial Automation and Engineering Solutions
          </h1>

          <p className="text-subtitle mt-6 text-white/75">
            Delivering Comprehensive Automation, Monitoring, and Control
            Systems for Pakistan&rsquo;s Manufacturing Sector
          </p>

          <p className="text-body mt-4 max-w-2xl text-white/55">
            Providing end-to-end PLC and SCADA-based automation solutions for
            food and beverage, FMCG, power generation, and process
            manufacturing industries – combining Siemens-certified
            engineering with real-time monitoring and ongoing maintenance
            support.
          </p>

          <a
            href="#contact"
            className="text-cta mt-8 inline-block rounded-md bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light"
          >
            Enquire Now
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] border-t border-white/15 px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {SERVICE_STRIP.map((item, i) => (
            <div
              key={item.name}
              className={`border-white/10 py-6 pr-4 ${
                i % 2 === 0 ? "border-r md:border-r" : ""
              } ${i < 3 ? "md:border-r" : ""} border-b-2 border-b-amber`}
            >
              <div style={{ fontWeight: 500, fontSize: 14 }} className="text-white">
                {item.name}
              </div>
              <div className="mt-1 text-white/40" style={{ fontWeight: 300, fontSize: 12 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
