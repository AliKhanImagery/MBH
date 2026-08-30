import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";

export default function AboutTeaser() {
  return (
    <>
      <section style={{ background: "#0D1B2E", paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid items-stretch gap-12 lg:grid-cols-[2fr_3fr]">

            {/* ── Left: engineering image (40%) ── */}
            <div
              style={{
                position: "relative",
                minHeight: 360,
                overflow: "hidden",
                border: "1px solid #1E3352",
                backgroundColor: "#080B0F",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
                alt="MBH Solutions industrial engineering and automation team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(8,11,15,0) 60%, rgba(8,11,15,0.7) 100%)",
                }}
              />
            </div>

            {/* ── Right: copy block (60%) ── */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

              {/* Eyebrow */}
              <p style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#C87D00",
                marginBottom: 20,
              }}>
                About MBH Solutions
              </p>

              {/* H2 */}
              <h2 style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.8px",
                lineHeight: 1.25,
                color: "#ffffff",
              }}>
                Engineering Process Solutions Since 2003
              </h2>

              {/* Body paragraph 1 */}
              <p style={{
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#9BAAB5",
                marginTop: 24,
              }}>
                MBH Solutions operates as a Siemens Solution Partner delivering
                turnkey process systems, industrial automation, and engineering
                services to manufacturers across food and beverage, FMCG,
                pharmaceutical, and power generation industries.
              </p>

              {/* Body paragraph 2 */}
              <p style={{
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#9BAAB5",
                marginTop: 16,
              }}>
                From control philosophy and panel design through factory
                acceptance testing, on-site commissioning, and long-term
                maintenance contracts — covering the full project lifecycle
                under a single scope.
              </p>

              {/* CTA */}
              <CtaLink href="/about" className="mt-8">
                Learn More About MBH
              </CtaLink>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
