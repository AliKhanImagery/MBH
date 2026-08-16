import { CtaLink } from "@/components/CtaLink";

const INDUSTRIES = [
  "Food & Beverage",
  "FMCG",
  "Pharmaceutical",
  "Power Generation",
  "Process Manufacturing",
];

export default function Industries() {
  return (
    <>
      <style>{`
        /* Industry list row */
        .mbh-ind-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }

        /* Each industry link */
        .mbh-ind-item {
          padding: 0 32px;
          border-right: 1px solid #E2E8F0;
          color: #080B0F;
          font-weight: 500;
          font-size: 18px;
          text-decoration: none;
          transition: color 200ms ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .mbh-ind-item:first-child { padding-left: 0; }
        .mbh-ind-item:last-child  { border-right: none; }
        .mbh-ind-item:hover       { color: #C87D00; }

        /* Footer link */

        /* Mobile — vertical stack */
        @media (max-width: 767px) {
          .mbh-ind-list { flex-direction: column; align-items: flex-start; }
          .mbh-ind-item {
            padding: 16px 0;
            border-right: none;
            border-bottom: 1px solid #E2E8F0;
            width: 100%;
            white-space: normal;
          }
          .mbh-ind-item:first-child { padding-left: 0; }
          .mbh-ind-item:last-child  { border-bottom: none; }
        }
      `}</style>

      <section style={{ background: "#ffffff", paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">

          {/* ── Header block — left-aligned ── */}
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#C87D00",
            }}
          >
            Industries Served
          </p>

          <h2
            style={{
              fontWeight: 500,
              fontSize: 28,
              letterSpacing: "-0.8px",
              lineHeight: 1.25,
              color: "#080B0F",
              marginTop: 16,
            }}
          >
            Delivering Engineered Solutions Across Process-Driven Industries
          </h2>

          {/* ── Industry row ── */}
          <div className="mbh-ind-list" style={{ marginTop: 48 }}>
            {INDUSTRIES.map((name) => (
              <a key={name} href="/industries" className="mbh-ind-item">
                {name}
              </a>
            ))}
          </div>

          {/* ── Footer link ── */}
          <CtaLink href="/industries" className="mt-8">
            Explore industry solutions
          </CtaLink>

        </div>
      </section>
    </>
  );
}
