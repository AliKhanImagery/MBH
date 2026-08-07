import Image from "next/image";

type ServiceSplitProps = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points: string[];
  imageSide: "left" | "right";
  variant: "light" | "dark" | "automation";
  ctaText?: string;
  ctaHref?: string;
  imagePlaceholderTag?: string;
};

/* ─── Existing visual panel — used by the light / dark variants only ─── */
function VisualPanel({ dark }: { dark: boolean }) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg border ${
        dark ? "border-white/10 bg-ibm-panel" : "border-black/5 bg-near-black"
      }`}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-40">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#2E9CC8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
      </svg>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <circle cx="90" cy="150" r="34" fill="none" stroke="#2E9CC8" strokeWidth="1.5" />
        <rect x="180" y="110" width="80" height="80" fill="none" stroke="#C87D00" strokeWidth="1.5" />
        <path d="M124 150h56M260 150h60" stroke="#9BAAB5" strokeWidth="1.5" />
        <circle cx="330" cy="150" r="4" fill="#2E9CC8" />
        <circle cx="90" cy="150" r="4" fill="#2E9CC8" />
        <path d="M90 116v-30M90 184v30" stroke="#9BAAB5" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      <div className="text-data absolute bottom-4 left-4 text-steel-signal">
        SYS.LIVE · 001
      </div>
    </div>
  );
}

/* ─── Automation variant — new design ─── */
function AutomationSection({
  id,
  eyebrow,
  title,
  paragraphs,
  points,
  ctaText,
  ctaHref,
  imagePlaceholderTag,
}: ServiceSplitProps) {
  return (
    <>
      <style>{`
        .mbh-auto-cta { color: #C87D00; text-decoration: none; }
        .mbh-auto-cta:hover { text-decoration: underline; }
      `}</style>

      <section
        id={id}
        style={{ background: "#080B0F", paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-stretch gap-12 lg:grid-cols-[3fr_2fr]">

            {/* ── Left: copy block ── */}
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
                {eyebrow}
              </p>

              {/* H2 */}
              <h2
                style={{
                  fontWeight: 500,
                  fontSize: 28,
                  letterSpacing: "-0.8px",
                  lineHeight: 1.25,
                  color: "#ffffff",
                }}
              >
                {title}
              </h2>

              {/* Body paragraphs */}
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#9BAAB5",
                    marginTop: 24,
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Em-dash capability lines */}
              <ul style={{ marginTop: 32, listStyle: "none", padding: 0 }}>
                {points.map((point, i) => (
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
                        color: "#9BAAB5",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              {ctaText && ctaHref && (
                <a
                  href={ctaHref}
                  className="mbh-auto-cta"
                  style={{
                    display: "inline-block",
                    marginTop: 32,
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  {ctaText}
                </a>
              )}
            </div>

            {/* ── Right: automation panel image ── */}
            <div style={{ position: "relative", minHeight: 320 }}>
              <Image
                src="/images/sections/plc-cabinet-mbh.webp"
                alt="MBH Solutions PLC control cabinet"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Default export — dispatches on variant ─── */
export default function ServiceSplit(props: ServiceSplitProps) {
  if (props.variant === "automation") {
    return <AutomationSection {...props} />;
  }

  const { id, eyebrow, title, paragraphs, points, imageSide, variant } = props;
  const dark = variant === "dark";

  const textBlock = (
    <div>
      <span
        className={`text-eyebrow inline-block rounded-full border px-3 py-1 ${
          dark
            ? "border-amber/30 bg-amber/10 text-amber"
            : "border-amber/30 bg-amber/10 text-amber"
        }`}
      >
        {eyebrow}
      </span>

      <h2 className={`text-h2 mt-4 ${dark ? "text-white" : "text-near-black"}`}>
        {title}
      </h2>

      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-body mt-4 ${dark ? "text-white/60" : "text-[#4a5568]"}`}
        >
          {p}
        </p>
      ))}

      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            <span className={`text-body ${dark ? "text-white/70" : "text-[#4a5568]"}`}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  const visualBlock = <VisualPanel dark={dark} />;

  return (
    <section id={id} className={dark ? "bg-ibm-panel" : "bg-white"}>
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {imageSide === "left" ? (
            <>
              {visualBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {visualBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
