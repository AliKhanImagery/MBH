import Image from "next/image";

const SOLUTIONS = [
  {
    title: "CSD Process Systems",
    href: "/solutions",
    img: "/images/sections/CSD_processing.png",
  },
  {
    title: "Juice Process Systems",
    href: "/solutions",
    img: "/images/sections/juice-system-poster.jpg",
  },
  {
    title: "Industrial Automation",
    href: "/solutions",
    img: "/images/sections/industrial-automation.png",
  },
  {
    title: "CIP Systems",
    href: "/solutions",
    img: "/images/sections/cip-system-poster.jpg",
  },
];

export default function SolutionsShowcase() {
  return (
    <section className="bg-white" style={{ paddingTop: 48, paddingBottom: 96 }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Eyebrow */}
        <p
          className="text-amber"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Our Solutions
        </p>

        {/* H2 */}
        <h2
          className="text-near-black"
          style={{
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: "-0.8px",
            lineHeight: 1.25,
            maxWidth: 640,
          }}
        >
          Process Systems For The World&apos;s Leading Manufacturers
        </h2>

        {/* Card grid — 48px gap below H2, 2px gutter between cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ marginTop: 48, gap: 2 }}
        >
          {SOLUTIONS.map((sol) => (
            <a
              key={sol.title}
              href={sol.href}
              className="group relative block overflow-hidden"
              style={{
                height: 320,
                backgroundColor: "#0D1B2E",
                // Small cosmetic diagonal cut on the bottom-left of one card
                clipPath:
                  sol.title === "Industrial Automation"
                    ? "polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px))"
                    : undefined,
              }}
            >
              {/* Background image */}
              <Image
                src={sol.img}
                alt={sol.title}
                fill
                className="object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient overlay — boosted contrast for high readability on any monitor */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,11,15,0.95) 0%, rgba(13,27,46,0.60) 40%, rgba(13,27,46,0.15) 75%, transparent 100%)",
                }}
              />

              {/* Hover deepening overlay */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-100"
                style={{ background: "rgba(13,27,46,0.2)" }}
              />

              {/* Solution title */}
              <div className="absolute bottom-0 left-0" style={{ padding: 24 }}>
                <span
                  className="text-white"
                  style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-0.2px" }}
                >
                  {sol.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
