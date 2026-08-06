type ServiceSplitProps = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points: string[];
  imageSide: "left" | "right";
  variant: "light" | "dark";
};

function VisualPanel({ dark }: { dark: boolean }) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg border ${
        dark ? "border-white/10 bg-ibm-panel" : "border-black/5 bg-near-black"
      }`}
    >
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#2E9CC8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
      </svg>
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
      >
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

export default function ServiceSplit({
  id,
  eyebrow,
  title,
  paragraphs,
  points,
  imageSide,
  variant,
}: ServiceSplitProps) {
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
