const CATEGORIES = [
  { cat: "Flow Components",          desc: "Pumps, Valves, Strainers, Spray Balls" },
  { cat: "Automation Products",      desc: "PLC, HMI, SCADA, VFD, Inverters" },
  { cat: "Instruments",              desc: "Temperature, Pressure, Flow, Conductivity Sensors" },
  { cat: "Switchgear",               desc: "Low Voltage Panels, Control Panels, Distribution" },
  { cat: "Analyzers",                desc: "Online Brix and CO₂ Monitoring Systems" },
  { cat: "Dosing & Metering Pumps",  desc: "Fruit Juice, Pulp, Cosmetic, Shampoo" },
  { cat: "Lab & Packaging Equipment",desc: "PET Testing, Labelling Machines" },
];

export default function ProductsTeaser() {
  return (
    <>
      <style>{`
        .mbh-prod-cta { color: #C87D00; text-decoration: none; }
        .mbh-prod-cta:hover { text-decoration: underline; }
      `}</style>

      <section style={{ background: "#080B0F", paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-start gap-16 lg:grid-cols-[55fr_45fr]">

            {/* ── Left: copy stack (55%) ── */}
            <div>
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
                Process Equipment &amp; Spares
              </p>

              {/* H2 */}
              <h2 style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.8px",
                lineHeight: 1.25,
                color: "#ffffff",
              }}>
                Supplying Critical Components for Every Stage of Your Process Line
              </h2>

              {/* Body */}
              <p style={{
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#9BAAB5",
                marginTop: 24,
              }}>
                Procuring and delivering flow components, automation hardware,
                instruments, and switchgear from the world&apos;s leading
                manufacturers — with spare parts availability and technical
                support for installed systems.
              </p>

              {/* CTA */}
              <a
                href="/products"
                className="mbh-prod-cta"
                style={{ display: "inline-block", marginTop: 32, fontWeight: 500, fontSize: 14 }}
              >
                Explore Products
              </a>
            </div>

            {/* ── Right: product category list (45%) ── */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {CATEGORIES.map((item, i) => (
                <li
                  key={item.cat}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginTop: i > 0 ? 16 : 0,
                  }}
                >
                  {/* Amber bullet */}
                  <span style={{
                    color: "#C87D00",
                    flexShrink: 0,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    userSelect: "none",
                  }}>
                    —
                  </span>
                  {/* Category — Description */}
                  <span style={{ fontWeight: 400, fontSize: 15, lineHeight: 1.7, color: "#9BAAB5" }}>
                    {item.cat}
                    <span style={{ color: "#C87D00", margin: "0 6px" }}>—</span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}
