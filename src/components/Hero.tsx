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

      {/* Directional gradient overlay — heavier on left for legibility, fades
          right. Blue darkened ~10 points from the base tone. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(21,38,84,0.80) 0%, rgba(21,38,84,0.65) 40%, rgba(21,38,84,0.35) 65%, rgba(8,11,15,0.50) 100%)",
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

            <h1
              className="text-h1 text-white"
              style={{ textShadow: "0 1px 2px rgba(8,11,15,0.45), 0 6px 24px rgba(8,11,15,0.30)" }}
            >
              Engineering Beverage Process Systems and Industrial Automation for the World&apos;s Leading Manufacturers
            </h1>

            <p
              className="text-subtitle mt-6 text-white/75"
              style={{ textShadow: "0 1px 2px rgba(8,11,15,0.40), 0 4px 16px rgba(8,11,15,0.25)" }}
            >
              Delivering turnkey syrup rooms, CSD and juice process lines, and
              plant-wide control systems — from new installations to the
              modernisation and retrofit of existing production facilities.
            </p>

            <a
              href="#contact"
              className="text-cta mt-8 inline-block bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light"
            >
              Enquire Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
