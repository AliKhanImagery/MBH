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

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background photo */}
      <Image
        src="/images/hero/hero.png"
        alt="MBH Solutions process engineering facility"
        fill
        priority
        style={{ objectFit: "cover", zIndex: 0 }}
        sizes="100vw"
      />

      {/* Directional gradient overlay — heavier on left for legibility, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,11,15,0.93) 0%, rgba(8,11,15,0.8) 40%, rgba(8,11,15,0.5) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-[2]">
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
