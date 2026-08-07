const SERVICE_STRIP = [
  {
    name: "Beverage Process Systems & Modernisation",
    desc: "Turnkey CSD, juice, and CIP process lines — plus retrofit, upgradation, and automation integration for existing syrup rooms and production systems",
  },
  {
    name: "Process Equipment & Spares",
    desc: "Pumps, valves, instruments, analyzers, switchgear, and spare parts procurement",
  },
  {
    name: "Projects & References",
    desc: "Commissioned process systems and automation upgrades for Coca-Cola, Pepsi, Fauji Foods, Dalda Foods, and leading manufacturers across three countries",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background photo — replace /public/hero-bg.jpg with the supplied image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Subtle brand-blue gradient overlay — mostly opaque, lets the photo bleed through faintly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,40,0.83) 0%, rgba(4,6,47,0.83) 55%, rgba(10,16,72,0.83) 100%)",
        }}
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 md:px-12 md:pt-40">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-amber" />
              <span className="text-eyebrow text-amber">
                Siemens Solution Partner
              </span>
            </div>

            <h1 className="text-h1 text-white">
              Engineering Beverage Process Systems and Industrial Automation for the World&apos;s Leading Manufacturers
            </h1>

            <p className="text-subtitle mt-6 text-white/75">
              Delivering turnkey syrup rooms, CSD and juice process lines, and
              plant-wide control systems — from new installations to the
              modernisation and retrofit of existing production facilities.
            </p>

            <a
              href="#contact"
              className="text-cta mt-8 inline-block rounded-md bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light"
            >
              Enquire Now
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {SERVICE_STRIP.map((item, i) => (
              <div
                key={item.name}
                className={`py-6 pr-4 border-b-2 border-b-amber ${
                  i < 2 ? "md:border-r md:border-r-white/10" : ""
                }`}
              >
                <div style={{ fontWeight: 500, fontSize: 14 }} className="text-white">
                  {item.name}
                </div>
                <div className="mt-1 text-steel-text" style={{ fontWeight: 300, fontSize: 12 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
