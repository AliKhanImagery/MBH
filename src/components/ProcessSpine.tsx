import Image from "next/image";

type Tile = {
  code: string;
  slug: string;
  name: string;
  desc: string;
  highlight?: boolean;
};

// Drop images into /public/images/process-systems/ using the slug as filename.
// Supported extensions (checked in order): .jpg .jpeg .webp .png
// Example: s1-raw-material-intake.jpg
const TILES: Tile[] = [
  { code: "S1", slug: "s1-raw-material-intake",   name: "Raw Material Intake",   desc: "Sugar silos, big-bag receiving, bulk handling" },
  { code: "S2", slug: "s3-sugar-dissolving",       name: "Sugar Dissolving",       desc: "Continuous and batch dissolving, Brix 65°" },
  { code: "S3", slug: "s4-filtration",             name: "Filtration",             desc: "Kieselguhr filtration, decolourisation, bag filters" },
  { code: "S4", slug: "s5-pasteurisation",         name: "Pasteurisation",         desc: "Flash pasteurisers, plate and tubular heat exchangers" },
  { code: "S5", slug: "s6-mixing-blending",        name: "Mixing & Blending",      desc: "Concentrate stations, continuous blenders, dosing skids" },
  { code: "S6", slug: "s7-syrup-storage",          name: "Syrup Storage",          desc: "Simple syrup and final syrup storage tanks" },
  { code: "S7", slug: "s8-cip-cleaning",           name: "CIP Cleaning",           desc: "Multi-circuit CIP, automated cleaning cycles" },
  { code: "S8", slug: "s9-automation-control",     name: "Automation & Control",   desc: "Siemens PLC, SCADA, HMI, recipe management", highlight: true },
];

// Card dimensions (update here if changed):
// CSS: 253 × 352 px  |  2× asset: 506 × 704 px  |  padding inset: 30 px all sides
const TILE_WIDTH  = 253;
const TILE_HEIGHT = 352;
const TILE_PAD    = 30;

const STATS = [
  { value: "20+", label: "Years" },
  { value: "3", label: "Countries" },
  { value: "50+", label: "Projects" },
];

const CASE_STUDY_POINTS = [
  { value: "Iran", label: "Project Location" },
  { value: "Syrup Room + CIP", label: "Systems Delivered" },
  { value: "Turnkey", label: "Delivery Scope" },
];

export default function ProcessSpine() {
  return (
    <>
      {/* Scoped hover styles — no JS required */}
      <style>{`
        .mbh-tile {
          background-color: #0D1B2E;
          transition: background-color 200ms ease;
          text-decoration: none;
          cursor: pointer;
        }
        .mbh-tile:hover { background-color: #162540; }

        .mbh-tile-s9 {
          background-color: #0F1A2E;
          border-left: 2px solid #C87D00 !important;
        }
        .mbh-tile-s9:hover { background-color: #1E3352; }

        .mbh-spine-link { color: #6A7A8A; text-decoration: none; transition: color 200ms ease; }
        .mbh-spine-link:hover { color: #C87D00; }

        .mbh-spine-scroll { overflow-x: auto; }
        .mbh-spine-scroll::-webkit-scrollbar { display: none; }
        .mbh-spine-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        .mbh-tile:hover .mbh-tile-img { opacity: 0.60; }
      `}</style>

      <section style={{ position: "relative", background: "#ffffff", paddingTop: 96, paddingBottom: 80, overflow: "hidden" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">

          {/* ── Feature card header ── */}
          <div className="mb-16 grid items-stretch gap-0 lg:grid-cols-[1fr_1fr]" style={{ border: "1px solid #E2E8F0" }}>

            {/* Left — image */}
            <div style={{ position: "relative", minHeight: 340 }}>
              <Image
                src="/images/process-systems/s6-mixing-blending.jpg"
                alt="MBH beverage process line — mixing and blending system"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right — copy */}
            <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#C87D00",
                marginBottom: 20,
              }}>
                Siemens Solution Partner
              </p>

              <h2 style={{
                fontWeight: 500,
                fontSize: 26,
                letterSpacing: "-0.6px",
                lineHeight: 1.3,
                color: "#080B0F",
                marginBottom: 16,
              }}>
                Turnkey Beverage Process Engineering and Industrial Automation
              </h2>

              <p style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.75,
                color: "#6A7A8A",
                marginBottom: 32,
              }}>
                From syrup room design and process line integration to PLC programming,
                SCADA deployment, and plant-wide commissioning — delivering complete
                production systems for food and beverage manufacturers.
              </p>

              {/* Stats row */}
              <div style={{ display: "flex", gap: 40, borderTop: "1px solid #E2E8F0", paddingTop: 24 }}>
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <span style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 600,
                      fontSize: 28,
                      color: "#080B0F",
                      lineHeight: 1,
                    }}>
                      {stat.value}
                    </span>
                    <span style={{
                      display: "block",
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 400,
                      fontSize: 10,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      color: "#6A7A8A",
                      marginTop: 6,
                    }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Carousel header ── */}
          <p style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "#C87D00",
            marginBottom: 16,
          }}>
            Process Systems
          </p>

          <h2 style={{
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: "-0.8px",
            lineHeight: 1.25,
            color: "#080B0F",
            marginBottom: 6,
          }}>
            Eight Engineered Modules. One Complete Beverage Line.
          </h2>

          <p style={{
            fontWeight: 300,
            fontSize: 16,
            color: "#6A7A8A",
            marginBottom: 48,
          }}>
            Each module is available as a turnkey solution or integrated into your existing process line.
          </p>

          {/* Scroll hint */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 8,
            marginBottom: 12,
          }}>
            <span style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: "0.3px",
              textTransform: "uppercase",
              color: "#6A7A8A",
            }}>
              Scroll
            </span>
            <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0 7h28m0 0l-5.5-5.5M28 7l-5.5 5.5" stroke="#C87D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Horizontally scrollable tile row */}
          <div className="mbh-spine-scroll">
            <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
              {TILES.map((tile, i) => {
                const isLast = i === TILES.length - 1;
                const hi = tile.highlight ?? false;

                return (
                  <a
                    key={tile.code}
                    href="/solutions"
                    className={hi ? "mbh-tile mbh-tile-s9" : "mbh-tile"}
                    style={{
                      width: TILE_WIDTH,
                      minWidth: TILE_WIDTH,
                      height: TILE_HEIGHT,
                      padding: TILE_PAD,
                      display: "flex",
                      flexDirection: "column",
                      flexShrink: 0,
                      borderRight: "none",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Full-bleed card image — drop file at /public/images/process-systems/<slug>.jpg */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url('/images/process-systems/${tile.slug}.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.85,
                      transition: "opacity 300ms ease",
                    }} className="mbh-tile-img" />
                    {/* Bottom gradient so text stays legible over any image */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 0%, rgba(8,11,15,0.15) 25%, rgba(8,11,15,0.55) 60%, rgba(8,11,15,0.90) 100%)",
                      pointerEvents: "none",
                    }} />

                    {/* Content — sits above image layers */}
                    <span style={{
                      position: "relative",
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 500,
                      fontSize: 30,
                      lineHeight: 1,
                      color: "#C87D00",
                    }}>
                      {tile.code}
                    </span>

                    <div style={{ flex: 1 }} />

                    <span style={{
                      position: "relative",
                      display: "block",
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.3,
                      color: "#ffffff",
                    }}>
                      {tile.name}
                    </span>
                    <span style={{
                      position: "relative",
                      display: "block",
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "#9BAAB5",
                      marginTop: 8,
                      minHeight: 40,
                    }}>
                      {tile.desc}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer link — left aligned */}
          <p style={{ marginTop: 32 }}>
            <a href="/solutions" className="mbh-spine-link" style={{ fontSize: 14, fontWeight: 400 }}>
              Explore all process systems →
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
