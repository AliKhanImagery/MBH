import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";

const DATA_POINTS = [
  { value: "Iran",            label: "Project Location" },
  { value: "Syrup Room + CIP", label: "Systems Delivered" },
  { value: "Turnkey",         label: "Delivery Scope" },
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

              {/* CTA link */}
              <CtaLink href="/references" className="mt-8">
                View All References
              </CtaLink>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
