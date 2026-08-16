// Four-pillar shortcut strip. Content ported from the parked branch's
// PillarStrip; typography kept at this branch's compact scale.
const ITEMS = [
  {
    number: "01",
    label: "Beverage Process Systems",
    desc: "Turnkey syrup rooms, CSD and juice process lines, and modernisation of existing production systems.",
    href: "/solutions#beverage-process",
    linkText: "Explore Process Systems →",
  },
  {
    number: "02",
    label: "Industrial Automation",
    desc: "PLC-based control architecture, SCADA deployment, and end-to-end commissioning under one engineering scope.",
    href: "/solutions#automation",
    linkText: "Explore Automation →",
  },
  {
    number: "03",
    label: "Mechanical & Fabrication",
    desc: "In-house stainless and carbon steel fabrication with full mechanical installation at the client facility.",
    href: "/solutions#fabrication",
    linkText: "Explore Fabrication →",
  },
  {
    number: "04",
    label: "Equipment & Spares",
    desc: "Flow components, automation hardware, instruments, and switchgear from the leading process manufacturers.",
    href: "/products",
    linkText: "Explore Products →",
  },
];

export default function ServiceStrip() {
  return (
    <>
      <style>{`
        .ss-card {
          border: 1px solid #E2E8F0;
          padding: 28px 28px 24px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          background: #ffffff;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .ss-card:hover {
          border-color: #C87D00;
          box-shadow: 0 2px 12px rgba(200,125,0,0.08);
        }
        .ss-card:hover .ss-arrow { color: #C87D00; transform: translateX(3px); }
        .ss-arrow { transition: color 200ms ease, transform 200ms ease; }

        /* Zero the outer edges so card text aligns with the hero headline.
           Which cards sit on an edge depends on the column count. */
        @media (max-width: 639px) {
          .ss-card { padding-left: 0; padding-right: 0; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .ss-card:nth-child(odd)  { padding-left: 0; }
          .ss-card:nth-child(even) { padding-right: 0; }
        }
        @media (min-width: 1024px) {
          .ss-card:first-child { padding-left: 0; }
          .ss-card:last-child  { padding-right: 0; }
        }
      `}</style>

      <section style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <a
                key={item.number}
                href={item.href}
                className="ss-card"
                style={{
                  borderTop: "none",
                  borderBottom: "none",
                  borderLeft: i === 0 ? "none" : undefined,
                  borderRight: i === ITEMS.length - 1 ? "none" : undefined,
                }}
              >
                {/* Card label — mono */}
                <p style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#080B0F",
                  marginBottom: 12,
                }}>
                  {item.label}
                </p>

                {/* Description */}
                <p style={{
                  fontWeight: 300,
                  fontSize: 12,
                  lineHeight: 1.7,
                  color: "#6A7A8A",
                  flex: 1,
                }}>
                  {item.desc}
                </p>

                {/* Link */}
                <p className="ss-arrow" style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: 13,
                  color: "#C87D00",
                  marginTop: 20,
                }}>
                  {item.linkText}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
