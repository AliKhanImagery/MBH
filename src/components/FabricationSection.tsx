const CAPABILITIES = [
  "Stainless steel and carbon steel tank and vessel fabrication",
  "Piping, structure, and skid assembly to engineering specifications",
  "On-site rigging, erection, and mechanical installation",
];

export default function FabricationSection() {
  return (
    <>
      <style>{`
        .mbh-fab-cta { color: #C87D00; text-decoration: none; }
        .mbh-fab-cta:hover { text-decoration: underline; }
      `}</style>

      <section
        id="fabrication"
        style={{ background: "#ffffff", paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-stretch gap-12 lg:grid-cols-[2fr_3fr]">

            {/* ── Left: image placeholder (40%) ── */}
            <div
              style={{
                background: "#0D1B2E",
                border: "1px solid #1E3352",
                minHeight: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: "#1E3352",
                  letterSpacing: "0.06em",
                }}
              >
                FAB.WRK · IMG
              </span>
            </div>

            {/* ── Right: copy block (60%) ── */}
            <div>
              {/* Eyebrow */}
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#C87D00",
                  marginBottom: 20,
                }}
              >
                Fabrication & Erection
              </p>

              {/* H2 */}
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 28,
                  letterSpacing: "-0.8px",
                  lineHeight: 1.25,
                  color: "#080B0F",
                }}
              >
                Designing, Fabricating, and Erecting Process Equipment On Site
              </h2>

              {/* Body paragraph */}
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#4A5568",
                  marginTop: 24,
                }}
              >
                Manufacturing stainless steel and carbon steel process equipment
                in-house — tanks, vessels, piping spools, skids, and structural
                steel — with full mechanical and electrical installation at the
                client&apos;s facility.
              </p>

              {/* Em-dash capability lines */}
              <ul style={{ marginTop: 32, listStyle: "none", padding: 0 }}>
                {CAPABILITIES.map((line, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      marginTop: i > 0 ? 16 : 0,
                    }}
                  >
                    <span
                      style={{
                        color: "#C87D00",
                        flexShrink: 0,
                        fontWeight: 400,
                        lineHeight: 1.7,
                        userSelect: "none",
                      }}
                    >
                      —
                    </span>
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "#4A5568",
                      }}
                    >
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href="/solutions"
                className="mbh-fab-cta"
                style={{
                  display: "inline-block",
                  marginTop: 32,
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                Explore Fabrication Services
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
