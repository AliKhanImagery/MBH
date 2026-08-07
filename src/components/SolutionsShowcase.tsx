import Image from "next/image";

const SOLUTIONS = [
  {
    title: "CSD Process Systems",
    href: "/solutions",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800",
  },
  {
    title: "Juice Process Systems",
    href: "/solutions",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
  },
  {
    title: "Industrial Automation",
    href: "/solutions",
    img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800",
  },
  {
    title: "CIP Systems",
    href: "/solutions",
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800",
  },
];

export default function SolutionsShowcase() {
  return (
    <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Eyebrow */}
        <p
          className="text-amber"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: "0.12em",
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
          Engineering Process Systems For The World&apos;s Leading Manufacturers
        </h2>

        {/* Card grid — 48px gap below H2 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ marginTop: 48 }}
        >
          {SOLUTIONS.map((sol) => (
            <a
              key={sol.title}
              href={sol.href}
              className="group relative block overflow-hidden"
              style={{
                height: 320,
                borderBottom: "2px solid #C87D00",
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

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,27,46,0.92) 0%, rgba(13,27,46,0.3) 50%, transparent 100%)",
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
                  style={{ fontWeight: 500, fontSize: 18 }}
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
