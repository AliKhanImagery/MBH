'use client'

import { useEffect, useRef, useState } from 'react'
import { Eyebrow } from '@/components/Eyebrow'
import { AnimatedNumber } from '@/components/AnimatedNumber'

const CREDENTIALS = [
  { value: 20, suffix: '+', label: 'Years Operating' },
  { value: 3, suffix: '', label: 'Countries Delivered' },
  { value: 50, suffix: '+', label: 'Systems Commissioned' },
]

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

    if (!el) {
      const t = setTimeout(() => setVisible(true), 100)
      return () => clearTimeout(t)
    }

    const safetyTimer = setTimeout(() => setVisible(true), 800)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            clearTimeout(safetyTimer)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(safetyTimer)
    }
  }, [visible])

  return (
    <>
      <section className="relative bg-white py-l3 md:py-l4">
        <div className="mbh-shell">

          {/* ── Pillar header ── */}
          <Eyebrow variant="pillar" number="01" label="Beverage Process Systems" />

          {/* ── Scope: single-scope lead + credentials ── */}
          <div className="mt-c5 grid items-start gap-l2 lg:grid-cols-[2fr_3fr]">
            <div className="aspect-[4/3] overflow-hidden border border-rule bg-surface-panel">
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-mono text-data text-ink-muted">TEAM · IMG</span>
              </div>
            </div>

            <div>
              <h2 className="max-w-prose text-section font-medium text-ink">
                One Engineering Partner, From Control Philosophy to Commissioning.
              </h2>

              <p className="mt-c4 max-w-prose text-body text-ink-muted">
                MBH Solutions has delivered turnkey process systems and industrial
                automation since 2003 — a Siemens Solution Partner carrying design,
                fabrication, panel build, and site commissioning under a single
                contract.
              </p>

              <dl className="mt-l1 grid grid-cols-3 gap-c5 border-t border-rule pt-c5">
                {CREDENTIALS.map((item) => (
                  <div key={item.label}>
                    <dt className="text-section font-light text-ink-muted">
                      <AnimatedNumber value={item.value} suffix={item.suffix} />
                    </dt>
                    <dd className="mt-c1 font-mono text-data uppercase tracking-wider text-steel-text">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* ── Anchor statement ── */}
          <h2 className="mt-l3 max-w-prose text-anchor font-medium text-ink">
            The Complete Syrup Room, Delivered as Engineered Modules — Available Turnkey or Integrated into an Existing Line.
          </h2>

          <p className="mt-c4 max-w-prose text-body text-ink-muted">
            Eight modular systems covering raw material intake through automated recipe control.
          </p>

          {/* 4×2 tile grid */}
          <ol ref={gridRef} className="mt-l2 grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {TILES.map((tile, i) => {
              const sig = isSignature(tile);

              return (
                <li
                  key={tile.slug}
                  style={{ listStyle: "none", transitionDelay: `${i * 60}ms` }}
                  className={`p-c5 transition-all duration-500 ease-out ${
                    sig
                      ? 'bg-surface-card hover:bg-surface-card-hover'
                      : 'bg-surface-page hover:bg-surface-panel'
                  } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`/images/process-systems/${tile.slug}.jpg`}
                      alt={tile.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-c3 flex items-baseline gap-c3">
                    <span className="font-mono text-data text-cta">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-caption font-medium ${sig ? 'text-ink-inverse' : 'text-ink'}`}>
                      {tile.name}
                    </h3>
                    {sig && (
                      <span className="ml-auto font-mono text-data uppercase tracking-wider text-cta">
                        Signature
                      </span>
                    )}
                  </div>
                  <p className={`mt-c2 text-body ${sig ? 'text-ink-steel' : 'text-ink-muted'}`}>
                    {tile.desc}
                  </p>
                </li>
              );
            })}
          </ol>

          {/* Footer link */}
          <a
            href="/solutions"
            className="mt-l1 inline-block font-mono text-data text-cta hover:text-cta-hover"
          >
            All Modules →
          </a>

        </div>
      </section>
    </>
  );
}
