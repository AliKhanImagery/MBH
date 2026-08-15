'use client'

import { useEffect, useRef, useState } from 'react'
import { Eyebrow } from '@/components/Eyebrow'

type Tile = {
  slug: string;
  name: string;
  desc: string;
  signature?: boolean;
};

const TILES: Tile[] = [
  { slug: "s1-raw-material-intake",   name: "Raw Material Intake",   desc: "Sugar silos, big-bag receiving, bulk handling" },
  { slug: "s3-sugar-dissolving",       name: "Sugar Dissolving",       desc: "Continuous and batch dissolving, Brix 65°" },
  { slug: "s4-filtration",             name: "Filtration",             desc: "Kieselguhr filtration, decolourisation, bag filters" },
  { slug: "s5-pasteurisation",         name: "Pasteurisation",         desc: "Flash pasteurisers, plate and tubular heat exchangers" },
  { slug: "s6-mixing-blending",        name: "Mixing & Blending",      desc: "Concentrate stations, continuous blenders, dosing skids" },
  { slug: "s7-syrup-storage",          name: "Syrup Storage",          desc: "Simple syrup and final syrup storage tanks" },
  { slug: "s8-cip-cleaning",           name: "CIP Cleaning",           desc: "Multi-circuit CIP, automated cleaning cycles" },
  { slug: "s9-automation-control",     name: "Automation & Control",   desc: "Siemens PLC, SCADA, HMI, recipe management", signature: true },
];

const isSignature = (tile: Tile) => tile.signature === true;

const CASE_STUDY_POINTS = [
  { value: "Iran", label: "Project Location" },
  { value: "Syrup Room + CIP", label: "Systems Delivered" },
  { value: "Turnkey", label: "Delivery Scope" },
];

export default function ProcessSpine() {
  const gridRef = useRef<HTMLOListElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setVisible(true)
      return
    }

    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: [0.15] }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <>
      <style>{`
        .mbh-spine-link { color: #6A7A8A; text-decoration: none; transition: color 200ms ease; }
        .mbh-spine-link:hover { color: #C87D00; }
      `}</style>

      <section style={{ position: "relative", background: "#ffffff", paddingTop: 96, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">

          {/* ── Pillar header ── */}
          <Eyebrow variant="pillar" number="01" label="Beverage Process Systems" />

          <h2 className="mt-4 max-w-prose text-anchor font-medium" style={{ color: "#080B0F" }}>
            The Complete Syrup Room, Delivered as Engineered Modules — Available Turnkey or Integrated into an Existing Line.
          </h2>

          <p className="mt-5 max-w-prose text-body" style={{ color: "#6A7A8A" }}>
            Eight modular systems covering raw material intake through automated recipe control.
          </p>

          {/* 4×2 tile grid */}
          <ol ref={gridRef} className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "#E2E8F0" }}>
            {TILES.map((tile, i) => {
              const sig = isSignature(tile);

              return (
                <li
                  key={tile.slug}
                  style={{ listStyle: "none", transitionDelay: `${i * 60}ms` }}
                  className={`p-6 transition-all duration-500 ease-out ${
                    sig
                      ? 'bg-[#0D1B2E] hover:bg-[#1E3352]'
                      : 'bg-white hover:bg-[#F8FAFC]'
                  } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`/images/process-systems/${tile.slug}.jpg`}
                      alt={tile.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="font-mono text-data" style={{ color: "#C87D00" }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-caption font-medium" style={{ color: sig ? "#ffffff" : "#080B0F" }}>
                      {tile.name}
                    </h3>
                    {sig && (
                      <span className="ml-auto font-mono text-data uppercase tracking-wider" style={{ color: "#C87D00" }}>
                        Signature
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-body" style={{ color: sig ? "#9BAAB5" : "#6A7A8A" }}>
                    {tile.desc}
                  </p>
                </li>
              );
            })}
          </ol>

          {/* Footer link */}
          <p style={{ marginTop: 32 }}>
            <a href="/solutions" className="mbh-spine-link" style={{ fontSize: 14, fontWeight: 400 }}>
              All Modules →
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
