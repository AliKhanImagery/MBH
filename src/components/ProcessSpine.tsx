type Tile = {
  code: string;
  name: string;
  desc: string;
  highlight?: boolean;
};

// S7 ↔ S8 content swapped (codes unchanged)
const TILES: Tile[] = [
  { code: "S1", name: "Raw Material Intake",    desc: "Sugar silos, big-bag receiving, bulk handling" },
  { code: "S2", name: "Water Treatment",         desc: "RO filtration, de-aeration, microbiological treatment" },
  { code: "S3", name: "Sugar Dissolving",        desc: "Continuous and batch dissolving, Brix 65°" },
  { code: "S4", name: "Filtration",              desc: "Kieselguhr filtration, decolourisation, bag filters" },
  { code: "S5", name: "Pasteurisation",          desc: "Flash pasteurisers, plate and tubular heat exchangers" },
  { code: "S6", name: "Mixing & Blending",       desc: "Concentrate stations, continuous blenders, dosing skids" },
  { code: "S7", name: "Syrup Storage",           desc: "Simple syrup and final syrup storage tanks" },
  { code: "S8", name: "CIP Cleaning",            desc: "Multi-circuit CIP, automated cleaning cycles" },
  { code: "S9", name: "Automation & Control",    desc: "Siemens PLC, SCADA, HMI, recipe management", highlight: true },
];

// Card dimensions (update here if changed):
// CSS: 200 × 253 px  |  2× asset: 400 × 506 px  |  padding inset: 24 px all sides
const TILE_WIDTH  = 200;
const TILE_HEIGHT = 253; // 220 × 1.15 = 253

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

        .mbh-spine-link { color: #9BAAB5; text-decoration: none; transition: color 200ms ease; }
        .mbh-spine-link:hover { color: #C87D00; }
      `}</style>

      <section style={{ background: "#080B0F", paddingTop: 96, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">

          {/* Eyebrow */}
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

          {/* H2 — tighter gap to subtitle */}
          <h2 style={{
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: "-0.8px",
            lineHeight: 1.25,
            color: "#ffffff",
            marginBottom: 6,
          }}>
            Nine Engineered Modules. One Complete Beverage Line.
          </h2>

          {/* Subtitle */}
          <p style={{
            fontWeight: 300,
            fontSize: 16,
            color: "#9BAAB5",
            marginBottom: 48,
          }}>
            Each module is available as a turnkey solution or integrated into your existing process line.
          </p>

          {/* Horizontally scrollable tile row */}
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
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
                      padding: 24,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between", // code top, name+desc bottom
                      flexShrink: 0,
                      borderRight: isLast ? "none" : "1px solid #1E3352",
                    }}
                  >
                    {/* Stage code — pinned top */}
                    <span style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 500,
                      fontSize: 28,
                      lineHeight: 1,
                      color: "#C87D00",
                    }}>
                      {tile.code}
                    </span>

                    {/* Name + descriptor — pinned bottom */}
                    <div>
                      <span style={{
                        display: "block",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: 1.3,
                        color: "#ffffff",
                      }}>
                        {tile.name}
                      </span>
                      <span style={{
                        display: "block",
                        fontWeight: 400,
                        fontSize: 13,
                        lineHeight: 1.5,
                        color: "#9BAAB5",
                        marginTop: 8,
                      }}>
                        {tile.desc}
                      </span>
                    </div>
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
