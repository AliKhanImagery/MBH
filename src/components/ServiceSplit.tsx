import Image from "next/image";
import Link from "next/link";

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
  const specs = [
    { label: "PLC", value: "Siemens S7" },
    { label: "HMI/SCADA", value: "WinCC" },
    { label: "Delivery", value: "Panel, FAT, commissioning" },
  ];

  return (
    <>
      <style>{`
        .mbh-auto-grid {
          background:
            linear-gradient(rgba(30, 51, 82, 0.28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 51, 82, 0.22) 1px, transparent 1px),
            #080B0F;
          background-size: 56px 56px;
        }
        .mbh-auto-cta {
          color: #E8A020;
          text-decoration: none;
        }
        .mbh-auto-cta:hover {
          text-decoration: underline;
        }
        .mbh-auto-panel {
          background: #0D1B2E;
        }
      `}</style>

      <section
        id={id}
        className="mbh-auto-grid border-y border-[#1E3352] py-20 md:py-24"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-14">

            <div className="flex min-w-0 flex-col justify-between">
              <div>
                <p className="text-eyebrow mb-5 text-amber">
                  {eyebrow}
                </p>

                <h2 className="max-w-[720px] text-[28px] font-medium leading-[1.2] text-white md:text-[34px]">
                  {title}
                </h2>

                <div className="mt-6 max-w-[760px] space-y-4">
                  {paragraphs.map((p, i) => (
                    <p key={i} className="text-body text-steel-text">
                      {p}
                    </p>
                  ))}
                </div>

                <ul className="mt-8 grid gap-4 sm:grid-cols-3 lg:max-w-[840px]">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="border-l border-amber/70 bg-[#0D1B2E]/55 px-4 py-3 text-[14px] leading-6 text-white/75"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-[#1E3352] pt-6">
                <dl className="grid gap-4 sm:grid-cols-3">
                  {specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-data text-amber">{spec.label}</dt>
                      <dd className="mt-1 text-[13px] leading-5 text-white/80">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {ctaText && ctaHref && (
                  <Link href={ctaHref} className="mbh-auto-cta text-cta mt-8 inline-flex">
                    {ctaText}
                  </Link>
                )}
              </div>
            </div>

            <div className="mbh-auto-panel flex min-h-[360px] flex-col justify-between overflow-hidden border border-[#1E3352]">
              <div className="relative min-h-[280px] flex-1">
                <Image
                  src="/images/sections/plc-cabinet-mbh.webp"
                  alt="PLC modules and pneumatic controls inside an automation cabinet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,15,0)_55%,rgba(8,11,15,0.76)_100%)]" />
              </div>
              <div className="flex items-center justify-between gap-5 border-t border-[#1E3352] px-5 py-4">
                <span className="text-data text-amber">{imagePlaceholderTag}</span>
                <span className="text-[12px] leading-5 text-steel-text">
                  Control cabinet integration
                </span>
              </div>
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
