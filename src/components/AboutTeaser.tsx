export default function AboutTeaser() {
  return (
    <>
      <style>{`
        .mbh-about-cta { color: #C87D00; text-decoration: none; }
        .mbh-about-cta:hover { text-decoration: underline; }
      `}</style>

      <section className="bg-ibm-panel py-l3 md:py-l4">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-stretch gap-12 lg:grid-cols-[2fr_3fr]">

            {/* ── Left: image placeholder (40%) ── */}
            <div style={{
              background: "#080B0F",
              border: "1px solid #1E3352",
              minHeight: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 400,
                fontSize: 11,
                color: "#1E3352",
                letterSpacing: "0.06em",
              }}>
                TEAM · IMG
              </span>
            </div>

            {/* ── Right: copy block (60%) ── */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

              {/* Eyebrow */}
              <p style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#C87D00",
                marginBottom: 20,
              }}>
                About MBH Solutions
              </p>

              {/* H2 */}
              <h2 style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.8px",
                lineHeight: 1.25,
                color: "#ffffff",
              }}>
                Engineering Process Solutions Since 2003
              </h2>

              {/* Body paragraph 1 */}
              <p style={{
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#9BAAB5",
                marginTop: 24,
              }}>
                MBH Solutions operates as a Siemens Solution Partner delivering
                turnkey process systems, industrial automation, and engineering
                services to manufacturers across food and beverage, FMCG,
                pharmaceutical, and power generation industries.
              </p>

              {/* Body paragraph 2 */}
              <p style={{
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#9BAAB5",
                marginTop: 16,
              }}>
                From control philosophy and panel design through factory
                acceptance testing, on-site commissioning, and long-term
                maintenance contracts — covering the full project lifecycle
                under a single scope.
              </p>

              {/* CTA */}
              <a
                href="/about"
                className="mbh-about-cta"
                style={{ display: "inline-block", marginTop: 32, fontWeight: 500, fontSize: 14 }}
              >
                Learn More About MBH
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
