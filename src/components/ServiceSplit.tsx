import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from '@/components/Eyebrow';

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

/* ─── Automation capabilities data ─── */
type AutoCap = {
  index: number
  name: string
  descriptor: string
  signature?: boolean
}

const AUTOMATION_CAPABILITIES: AutoCap[] = [
  {
    index: 1,
    name: 'Control Architecture',
    descriptor: 'Designing plant-wide control philosophy and system topology for beverage process lines.',
  },
  {
    index: 2,
    name: 'PLC Programming',
    descriptor: 'Siemens S7 code development in TIA Portal, aligned to production recipes and safety interlocks.',
    signature: true,
  },
  {
    index: 3,
    name: 'SCADA & HMI',
    descriptor: 'WinCC SCADA build, HMI screen design, and recipe management for operator handoff.',
  },
  {
    index: 4,
    name: 'Panel Design & Build',
    descriptor: 'Low-voltage control panel design, in-house wiring, and full drawing documentation.',
  },
  {
    index: 5,
    name: 'Factory Acceptance Testing',
    descriptor: 'Pre-shipment validation against the control specification with the client witnessing.',
  },
  {
    index: 6,
    name: 'Commissioning & Handover',
    descriptor: 'On-site startup, loop calibration, and operator training through to signed acceptance.',
  },
]

/* ─── Automation variant — new design ─── */
function AutomationSection({
  id,
  title,
  imagePlaceholderTag,
}: ServiceSplitProps) {
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

            <div className="flex min-w-0 flex-col">
              <Eyebrow variant="pillar" number="02" label="Industrial Automation" />

              <h2 className="mt-4 max-w-prose text-anchor font-medium text-white">
                {title}
              </h2>

              <p className="mt-c5 max-w-prose text-body text-ink-steel">
                Delivering control-system engineering under a single scope — from control philosophy through PLC code, SCADA build, and on-site commissioning.
              </p>

              <ol className="mt-l2 grid grid-cols-1 gap-px bg-rule-dark sm:grid-cols-2 lg:grid-cols-3 border-y border-rule-dark">
                {AUTOMATION_CAPABILITIES.map((cap) => {
                  const sig = cap.signature === true
                  return (
                    <li
                      key={cap.index}
                      style={{ listStyle: 'none' }}
                      className={`p-c5 transition-colors ${
                        sig
                          ? 'bg-surface-card hover:bg-surface-card-hover'
                          : 'bg-surface-forge hover:bg-surface-panel'
                      }`}
                    >
                      <div className="flex items-baseline gap-c3">
                        <span className="font-mono text-data text-cta">
                          {String(cap.index).padStart(2, '0')}
                        </span>
                        {sig && (
                          <span className="ml-auto font-mono text-data text-cta uppercase tracking-wider">
                            Signature
                          </span>
                        )}
                      </div>
                      <h3 className="mt-c3 text-caption font-medium text-ink-inverse">
                        {cap.name}
                      </h3>
                      <p className="mt-c2 text-body text-ink-steel">
                        {cap.descriptor}
                      </p>
                    </li>
                  )
                })}
              </ol>

              <a
                href="/solutions#automation"
                className="mt-l2 inline-block font-mono text-data text-cta hover:text-cta-hover"
              >
                Explore Automation →
              </a>
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
