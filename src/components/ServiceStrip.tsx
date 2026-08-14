const ITEMS = [
  {
    name: "Beverage Process Systems & Modernisation",
    desc: "Turnkey CSD, juice, and CIP process lines — plus retrofit, upgradation, and automation integration for existing syrup rooms and production systems",
    href: "/solutions",
  },
  {
    name: "Process Equipment & Spares",
    desc: "Pumps, valves, instruments, analyzers, switchgear, and spare parts procurement",
    href: "/products",
  },
  {
    name: "Projects & References",
    desc: "Commissioned process systems and automation upgrades for Coca-Cola, Pepsi, Fauji Foods, Dalda Foods, and leading manufacturers across three countries",
    href: "/references",
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
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .ss-card:hover {
          border-color: #C87D00;
          box-shadow: 0 4px 20px rgba(200,125,0,0.12);
        }
        .ss-card:hover .ss-arrow { color: #C87D00; transform: translateX(3px); }
        .ss-arrow { transition: color 200ms ease, transform 200ms ease; }
      `}</style>

      <section className="-mt-20 md:-mt-24 relative z-10 pb-10 md:pb-14">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {ITEMS.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="ss-card"
                style={{}}
              >
                {/* Eyebrow label */}
                <p style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#C87D00",
                  marginBottom: 12,
                }}>
                  {i === 0 ? "Solutions" : i === 1 ? "Products" : "References"}
                </p>

                {/* Title */}
                <p style={{
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: 1.4,
                  color: "#080B0F",
                  marginBottom: 10,
                }}>
                  {item.name}
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

                {/* Arrow */}
                <p className="ss-arrow" style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: 13,
                  color: "#C87D00",
                  marginTop: 20,
                }}>
                  →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
