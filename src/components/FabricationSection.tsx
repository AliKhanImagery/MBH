import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { Eyebrow } from "@/components/Eyebrow";

const CAPABILITIES = [
  "Stainless steel and carbon steel tank and vessel fabrication",
  "Piping, structure, and skid assembly to engineering specifications",
  "On-site rigging, erection, and mechanical installation",
];

export default function FabricationSection() {
  return (
    <>
      <section
        id="fabrication"
        style={{ background: "#ffffff", paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-stretch gap-12 lg:grid-cols-[2fr_3fr]">

            {/* ── Left: fabrication image (40%) ── */}
            <div style={{ position: "relative", minHeight: 320 }}>
              <Image
                src="/images/sections/fabrication-welding.jpeg"
                alt="MBH Solutions fabrication and welding"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* ── Right: copy block (60%) ── */}
            <div>
              {/* Eyebrow */}
              <div className="mb-5">
                <Eyebrow variant="pillar" number="04" label="Fabrication & Erection" />
              </div>

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
                Designing, Fabricating, and Erecting Process Equipment On Site
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
                Manufacturing stainless steel and carbon steel process equipment
                in-house — tanks, vessels, piping spools, skids, and structural
                steel — with full mechanical and electrical installation at the
                client&apos;s facility.
              </p>

              {/* Em-dash capability lines */}
              <ul style={{ marginTop: 32, listStyle: "none", padding: 0 }}>
                {CAPABILITIES.map((line, i) => (
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
                        color: "#4A5568",
                      }}
                    >
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <CtaLink href="/solutions" className="mt-8">
                Explore Fabrication Services
              </CtaLink>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
