"use client";

import { type ReactNode, useRef } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaLink } from "@/components/CtaLink";

type Tile = {
  code: string;
  slug: string;
  name: string;
  desc: string;
  highlight?: boolean;
};

// Drop images into /public/images/process-systems/ using the slug as filename.
// Supported extensions (checked in order): .jpg .jpeg .webp .png
// Example: s1-raw-material-intake.jpg
// `code` is the displayed sequence label and renumbers freely.
// `slug` is the image filename and must not change.
const TILES: Tile[] = [
  { code: "S1", slug: "s1-raw-material-intake",   name: "Raw Material Intake",   desc: "Sugar silos, big-bag receiving, bulk handling" },
  { code: "S2", slug: "s3-sugar-dissolving",       name: "Sugar Dissolving",       desc: "Continuous and batch dissolving, Brix 65°" },
  { code: "S3", slug: "s4-filtration",             name: "Filtration",             desc: "Kieselguhr filtration, decolourisation, bag filters" },
  { code: "S4", slug: "s5-pasteurisation",         name: "Pasteurisation",         desc: "Flash pasteurisers, plate and tubular heat exchangers" },
  { code: "S5", slug: "s6-mixing-blending",        name: "Mixing & Blending",      desc: "Concentrate stations, continuous blenders, dosing skids" },
  { code: "S6", slug: "s7-syrup-storage",          name: "Syrup Storage",          desc: "Simple syrup and final syrup storage tanks" },
  { code: "S7", slug: "s8-cip-cleaning",           name: "CIP Cleaning",           desc: "Multi-circuit CIP, automated cleaning cycles" },
  { code: "S8", slug: "s9-automation-control",     name: "Automation & Control",   desc: "Siemens PLC, SCADA, HMI, recipe management", highlight: true },
];

// Card dimensions (update here if changed):
// CSS: 220 × 306 px  |  2× asset: 440 × 612 px  |  padding inset: 26 px all sides
const TILE_WIDTH  = 220;
const TILE_HEIGHT = 306;
const TILE_PAD    = 26;

type ProcessSpineProps = {
  /** Optional block rendered between the pillar eyebrow and the anchor H2.
   *  Used by /solutions to host an image; the homepage passes nothing. */
  imageSlot?: ReactNode;
};

export default function ProcessSpine({ imageSlot }: ProcessSpineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: Math.max(el.clientWidth * 0.8, 240), behavior: "smooth" });
  };

  return (
    <>
      {/* Scoped hover styles — no JS required */}
      <style>{`
        .mbh-tile {
          background-color: #0D1B2E;
          transition: background-color 200ms ease;
          text-decoration: none;
          cursor: pointer;
          /* Small cosmetic diagonal cut on the top-right corner */
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
        }
        .mbh-tile:hover { background-color: #162540; }

        .mbh-tile-s9 {
          background-color: #0F1A2E;
          border-left: 2px solid #C87D00 !important;
        }
        .mbh-tile-s9:hover { background-color: #1E3352; }

        .mbh-spine-scroll { overflow-x: auto; }
        .mbh-spine-scroll::-webkit-scrollbar { display: none; }
        .mbh-spine-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        .mbh-tile:hover .mbh-tile-img { opacity: 0.60; }
      `}</style>

      <section style={{ position: "relative", background: "#ffffff", paddingTop: 48, paddingBottom: 80, overflow: "hidden" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">

          {/* Pillar eyebrow */}
          <Eyebrow variant="pillar" number="02" label="Beverage Process Systems" />

          {imageSlot ? <div className="mt-c5 mb-l1">{imageSlot}</div> : null}

          {/* Anchor statement */}
          <h2 className="mt-4 max-w-prose text-anchor font-medium text-ink">
            The Complete Syrup Room, Delivered as Engineered Modules — Available Turnkey or Integrated into an Existing Line.
          </h2>

          {/* Subtitle */}
          <p style={{
            fontWeight: 300,
            fontSize: 16,
            color: "#6A7A8A",
            marginTop: 12,
            marginBottom: 48,
          }}>
            Each module is available as a turnkey solution or integrated into your existing process line.
          </p>

          {/* Carousel with a floating scroll-right control */}
          <div style={{ position: "relative", marginTop: 12 }}>
            <div className="mbh-spine-scroll" ref={scrollRef}>
              <div style={{ display: "flex", flexDirection: "row", gap: 2 }}>
                {TILES.map((tile) => {
                  const hi = tile.highlight ?? false;

                return (
                  <a
                    key={tile.code}
                    href="/solutions"
                    className={hi ? "mbh-tile mbh-tile-s9" : "mbh-tile"}
                    style={{
                      width: TILE_WIDTH,
                      minWidth: TILE_WIDTH,
                      height: TILE_HEIGHT,
                      padding: TILE_PAD,
                      display: "flex",
                      flexDirection: "column",
                      flexShrink: 0,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Full-bleed card image — drop file at /public/images/process-systems/<slug>.jpg */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url('/images/process-systems/${tile.slug}.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 1,
                      transition: "opacity 300ms ease",
                    }} className="mbh-tile-img" />
                    {/* Bottom gradient so text stays legible over any image */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 50%, rgba(8,11,15,0.15) 62%, rgba(8,11,15,0.55) 80%, rgba(8,11,15,0.90) 100%)",
                      pointerEvents: "none",
                    }} />

                    {/* Content — sits above image layers */}
                    <span style={{
                      position: "relative",
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 500,
                      fontSize: 30,
                      lineHeight: 1,
                      color: "#C87D00",
                    }}>
                      {tile.code}
                    </span>

                    <div style={{ flex: 1 }} />

                    <span style={{
                      position: "relative",
                      display: "block",
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.3,
                      color: "#ffffff",
                    }}>
                      {tile.name}
                    </span>
                    <span style={{
                      position: "relative",
                      display: "block",
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "#9BAAB5",
                      marginTop: 8,
                      minHeight: 40,
                    }}>
                      {tile.desc}
                    </span>
                  </a>
                );
              })}
              </div>
            </div>

            {/* Floating scroll-right control */}
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll process modules right"
              style={{
                position: "absolute",
                top: "50%",
                right: 16,
                transform: "translateY(-50%)",
                zIndex: 10,
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0D1B2E",
                border: "none",
                cursor: "pointer",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
              }}
            >
              <svg width="28" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M0 7h28m0 0l-5.5-5.5M28 7l-5.5 5.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Footer link — left aligned */}
          <CtaLink href="/solutions" className="mt-8">
            Explore all process systems
          </CtaLink>

        </div>
      </section>
    </>
  );
}
