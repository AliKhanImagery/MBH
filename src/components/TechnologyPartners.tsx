"use client";

import { useState, useRef, useEffect } from "react";
import type { RefObject } from "react";

type Partner = {
  name: string;
  logoUrl?: string;
  fallback: string;
};

const PARTNERS: Partner[] = [
  { name: "SSP",               logoUrl: "/logo-ssp.png",              fallback: "SSP" },
  { name: "GEA",               logoUrl: "/logo-gea.svg",              fallback: "GEA" },
  { name: "Siemens",           logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg", fallback: "Siemens" },
  { name: "Endress+Hauser",    logoUrl: "/logo-Endress+Hauser.svg",   fallback: "Endress+Hauser" },
  { name: "Fristam",           logoUrl: "/logo-Fristam.webp",         fallback: "Fristam" },
  { name: "Hilge",             logoUrl: "/logo-Hilge.png",            fallback: "Hilge" },
  { name: "Kieselmann",        logoUrl: "/logo-Kieselmann.png",       fallback: "Kieselmann" },
  { name: "Bardiani Valvole",  logoUrl: "/logo-Bardiani.png",         fallback: "Bardiani" },
  { name: "Danfoss",           logoUrl: "/logo-danfoss.png",          fallback: "Danfoss" },
  { name: "Maselli",           logoUrl: "/logo-maselli.png",          fallback: "Maselli" },
  { name: "ACM",               logoUrl: "/logo-acm.png",              fallback: "ACM" },
  { name: "ARI-Armaturen",     logoUrl: "/logo-ari.svg",              fallback: "ARI" },
  { name: "MSR Electronic",    logoUrl: "/logo-msr.png",              fallback: "MSR" },
];

/* ─── Single logo cell — manages its own load/fail state ─── */
function LogoCell({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(!partner.logoUrl);
  const imgRef = useRef<HTMLImageElement>(null) as RefObject<HTMLImageElement>;

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !partner.logoUrl) return;

    // After the browser paints, check whether the img rendered as a real image
    // or as a broken/alt-text placeholder.
    //
    // naturalHeight > 0  → properly-dimensioned image (e.g. Siemens SVG) — always keep.
    // naturalHeight === 0 → either a dimensionless SVG (viewBox-only, fills our
    //   maxHeight:40 CSS → renders ≥ 30px) OR a blocked/empty response that the
    //   browser renders as alt text (~19–24px). We use 26px as the cut-off.
    const checkAfterPaint = () => {
      if (!img) return;
      if (img.naturalHeight > 0) return; // confirmed real image
      const h = img.getBoundingClientRect().height;
      if (h <= 26) setFailed(true);
    };

    if (img.complete) {
      // Already loaded from cache — wait one frame for layout/paint to finalise
      requestAnimationFrame(checkAfterPaint);
    } else {
      const onLoad  = () => requestAnimationFrame(checkAfterPaint);
      const onError = () => setFailed(true);
      img.addEventListener("load",  onLoad);
      img.addEventListener("error", onError);
      return () => {
        img.removeEventListener("load",  onLoad);
        img.removeEventListener("error", onError);
      };
    }
  }, [partner.logoUrl]);

  return (
    <div className="mbh-partner-cell">
      {!failed && partner.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={partner.logoUrl}
          alt={partner.name}
          style={{ maxHeight: 40, maxWidth: "100%", objectFit: "contain" }}
        />
      ) : (
        <span
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: "#ffffff",
            textAlign: "center",
            display: "block",
          }}
        >
          {partner.fallback}
        </span>
      )}
    </div>
  );
}

/* ─── Section ─── */
export default function TechnologyPartners() {
  return (
    <>
      <style>{`
        /* Amber separator above section */
        .mbh-partners-section {
          border-top: 1px solid rgba(200, 125, 0, 0.3);
        }

        /* Logo cell — centers content, handles hover opacity */
        .mbh-partner-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          width: 200px;
        }
        .mbh-partner-cell img,
        .mbh-partner-cell span {
          opacity: 0.6;
          transition: opacity 200ms ease;
        }
        /* White-monochrome filter for all img logos */
        .mbh-partner-cell img {
          filter: brightness(0) invert(1);
        }
        .mbh-partner-cell:hover img,
        .mbh-partner-cell:hover span {
          opacity: 1;
        }

        /* Footer text link */
        .mbh-partners-link {
          color: #9BAAB5;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .mbh-partners-link:hover { color: #C87D00; }
      `}</style>

      <section
        className="mbh-partners-section"
        style={{ background: "#080B0F", paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">

          {/* ── Header block — centered ── */}
          <div style={{ textAlign: "center" }}>
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
              Technology Partners
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: "-0.8px",
                lineHeight: 1.25,
                color: "#ffffff",
                marginTop: 16,
              }}
            >
              Representing the World&apos;s Leading Process and Automation Brands
            </h2>
          </div>

          {/* ── Logo grid ── */}
          <div
            className="flex flex-wrap justify-center"
            style={{ marginTop: 64, rowGap: 48, columnGap: 32 }}
          >
            {PARTNERS.map((p) => (
              <LogoCell key={p.name} partner={p} />
            ))}
          </div>

          {/* ── Footer link ── */}
          <p style={{ textAlign: "center", marginTop: 48 }}>
            <a href="/partners" className="mbh-partners-link" style={{ fontSize: 14, fontWeight: 400 }}>
              View all technology partners →
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
