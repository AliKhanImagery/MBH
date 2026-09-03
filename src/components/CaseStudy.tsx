import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";

const DATA_POINTS = [
  { value: "Iran",            label: "Project Location" },
  { value: "Syrup Room + CIP", label: "Systems Delivered" },
  { value: "Installation and commissioning", label: "Delivery Scope" },
];

// Supporting references with dedicated case study routes.
const SUPPORTING = [
  {
    client: "Pepsi Northern Beverages",
    heading: "Bottling Line Automation and Control Panel Upgrade",
    meta: "Pakistan · PLC · SCADA · Panels",
    tag: "PEPSI",
    image: "/references/pepsi-northern.png",
    href: "/references/pepsi-northern-bottling-line-automation",
  },
  {
    client: "Fauji Foods",
    heading: "Plant-Wide Control System Deployment for Dairy Processing",
    meta: "Pakistan · PLC · HMI · SCADA",
    tag: "FAUJI FOODS",
    image: "/references/fauji-foods.jpg",
    href: "/references/fauji-foods-syrup-room-modernization",
  },
  {
    client: "Meezan & Dalda Foods",
    heading: "Edible Oil Continuous Neutralization & Bleaching Automation",
    meta: "Pakistan · ATEX · Mass Flow · Dosing Skids",
    tag: "EDIBLE OIL",
    image: "/images/sections/industrial-automation.png",
    href: "/references/edible-oil-processing-automation",
  },
  {
    client: "Enterprise Beverage Facilities",
    heading: "Automated CIP System & Pipeline Pigging Product Recovery",
    meta: "Regional · Sanitary Valves · Multi-Circuit CIP",
    tag: "CIP SYSTEMS",
    image: "/images/sections/cip-valves.png",
    href: "/references/beverage-cip-recovery-modernization",
  },
];

export default function CaseStudy() {
  return (
    <>
      <section
        id="case-study"
        style={{ background: "#ffffff", paddingTop: 48, paddingBottom: 96 }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-stretch gap-12 lg:grid-cols-[45fr_55fr]">

            {/* ── Left: reference image (45%) ── */}
            <div
              style={{
                position: "relative",
                minHeight: 380,
                overflow: "hidden",
                backgroundColor: "#0D1B2E",
              }}
            >
              <Image
                src="/references/coca-cola-tehran.jpg"
                alt="Coca-Cola Tehran — syrup room and CIP system installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* ── Right: copy block (55%) ── */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

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
                Featured Project
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
                Coca-Cola Tehran — Syrup Room and CIP System
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
                Erection and commissioning of a complete syrup room and CIP
                system at Coca-Cola&apos;s Tehran facility — covering mechanical
                installation, process piping, automation integration, and system
                startup.
              </p>

              {/* Data strip */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 40,
                  gap: 0,
                }}
              >
                {DATA_POINTS.map((dp, i) => (
                  <div key={dp.label} style={{ display: "flex", alignItems: "stretch" }}>
                    {/* Divider before 2nd and 3rd items */}
                    {i > 0 && (
                      <div
                        style={{
                          width: 1,
                          height: 40,
                          background: "#E2E8F0",
                          alignSelf: "center",
                          flexShrink: 0,
                          marginLeft: 24,
                          marginRight: 24,
                        }}
                      />
                    )}
                    <div>
                      <div
                        style={{
                          fontWeight: 500,
                          fontSize: 22,
                          lineHeight: 1.1,
                          color: "#080B0F",
                        }}
                      >
                        {dp.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono)",
                          fontWeight: 400,
                          fontSize: 11,
                          textTransform: "uppercase",
                          color: "#9BAAB5",
                          letterSpacing: "0.04em",
                          marginTop: 4,
                        }}
                      >
                        {dp.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Link to Full Technical Case Study */}
              <div className="mt-8">
                <CtaLink href="/references/coca-cola-multan-line-automation">
                  Read Technical Case Study: Continuous Sugar Dissolving &amp; Syrup Room
                </CtaLink>
              </div>

            </div>
          </div>

          {/* ── Supporting references ── */}
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#C87D00",
              marginTop: 64,
              marginBottom: 24,
            }}
          >
            More References &amp; Case Studies
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {SUPPORTING.map((ref) => (
              <Link
                key={ref.client}
                href={ref.href}
                className="group block text-inherit transition-transform hover:-translate-y-0.5"
              >
                {/* Reference photo, or navy placeholder if none set */}
                <div
                  style={{
                    position: "relative",
                    height: 200,
                    overflow: "hidden",
                    backgroundColor: "#0D1B2E",
                    border: "1px solid #1E3352",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  {ref.image ? (
                    <Image
                      src={ref.image}
                      alt={`${ref.client} — ${ref.heading}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 400,
                        fontSize: 11,
                        color: "#1E3352",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {ref.tag} · IMG
                    </span>
                  )}
                </div>

                <h3
                  className="group-hover:text-amber transition-colors"
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    letterSpacing: "-0.3px",
                    lineHeight: 1.3,
                    color: "#080B0F",
                  }}
                >
                  {ref.client}
                </h3>

                <p
                  style={{
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#4A5568",
                    marginTop: 8,
                  }}
                >
                  {ref.heading}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 400,
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "#9BAAB5",
                    letterSpacing: "0.04em",
                    marginTop: 12,
                  }}
                >
                  {ref.meta}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
