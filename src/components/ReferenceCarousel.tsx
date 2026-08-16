'use client'

import { useEffect, useRef, useState } from 'react'
import { Eyebrow } from '@/components/Eyebrow'

type Reference = {
  client: string
  location: string
  heading: string
  body: string
  site: string
  systems: string
  scope: string
  image: string
  imageAlt: string
}

const REFERENCES: Reference[] = [
  {
    client: 'Coca-Cola',
    location: 'Tehran, Iran',
    heading: 'Turnkey Syrup Room, CIP System, and Automation Integration',
    body: "Complete syrup room and CIP system delivered to Coca-Cola's Tehran facility — mechanical installation, process piping, automation integration, and startup commissioning under one engineering scope.",
    site: 'Tehran, Iran',
    systems: 'Syrup Room · CIP',
    scope: 'Turnkey',
    image: '/references/coca-cola-tehran.jpg',
    imageAlt: 'Syrup room installation at Coca-Cola Tehran facility',
  },
  {
    client: 'Pepsi Northern Beverages',
    location: 'Pakistan',
    heading: 'Bottling Line Automation and Control Panel Upgrade',
    body: 'Siemens PLC migration, SCADA reconfiguration, and control-panel refresh across active bottling lines — executed on production schedule with staged cutover.',
    site: 'Pakistan',
    systems: 'PLC · SCADA · Panels',
    scope: 'Retrofit',
    image: '/references/pepsi-northern.jpg',
    imageAlt: 'Pepsi Northern Beverages control panel installation',
  },
  {
    client: 'Fauji Foods',
    location: 'Pakistan',
    heading: 'Plant-Wide Control System Deployment for Dairy Processing',
    body: 'Full control-architecture design, PLC and HMI programming, SCADA deployment, and factory acceptance testing across the dairy processing plant.',
    site: 'Pakistan',
    systems: 'PLC · HMI · SCADA',
    scope: 'Plant-Wide',
    image: '/references/fauji-foods.jpg',
    imageAlt: 'Fauji Foods dairy plant control room',
  },
]

export function ReferenceCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = Number(entry.target.getAttribute('data-idx'))
            setActiveIndex(idx)
          }
        })
      },
      {
        root: scrollerRef.current,
        threshold: [0.6, 0.8, 1],
      }
    )
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToIndex = (idx: number) => {
    const target = cardRefs.current[idx]
    if (target && scrollerRef.current) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }

  const total = REFERENCES.length

  return (
    <section className="bg-white overflow-hidden py-l2 md:py-l3">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-end justify-between">
          <Eyebrow variant="plain" label="Reference" />
          <div className="flex items-center gap-5">
            <span className="font-mono text-body tabular-nums transition-opacity duration-300" style={{ color: '#080B0F' }}>
              {String(activeIndex + 1).padStart(2, '0')}
              <span style={{ color: '#6A7A8A' }}> / {String(total).padStart(2, '0')}</span>
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous reference"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="h-8 w-8 flex items-center justify-center border transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#E2E8F0', color: '#080B0F' }}
              >
                &larr;
              </button>
              <button
                type="button"
                aria-label="Next reference"
                onClick={() => scrollToIndex(Math.min(total - 1, activeIndex + 1))}
                disabled={activeIndex === total - 1}
                className="h-8 w-8 flex items-center justify-center border transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#E2E8F0', color: '#080B0F' }}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-10 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-5"
        style={{ scrollbarWidth: 'none', paddingLeft: '12vw', paddingRight: '12vw' }}
      >
        {REFERENCES.map((ref, idx) => {
          const isActive = idx === activeIndex
          return (
            <article
              key={ref.client}
              ref={(el) => { cardRefs.current[idx] = el }}
              data-idx={idx}
              className={`snap-center shrink-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-[0.97]'
              }`}
              style={{ width: '76vw', maxWidth: 860 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden" style={{ background: '#0D1B2E' }}>
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(135deg, transparent 0, transparent 22px, currentColor 22px, currentColor 23px)',
                    color: 'var(--mbh-ink-steel, #9BAAB5)',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <span
                    className="font-mono uppercase tracking-tight"
                    style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1, opacity: 0.18, color: '#C87D00' }}
                  >
                    {ref.client}
                  </span>
                  <span className="mt-3 font-mono text-data uppercase tracking-wider" style={{ color: '#9BAAB5' }}>
                    {ref.location}
                  </span>
                </div>
                <span className="absolute font-mono uppercase tracking-widest" style={{ bottom: 12, right: 16, fontSize: 10, color: '#6A7A8A' }}>
                  Bridge Photograph · Pending
                </span>
                <img
                  src={ref.image}
                  alt={ref.imageAlt}
                  loading="lazy"
                  onLoad={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.opacity = '1'
                  }}
                  style={{ opacity: 0 }}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5" style={{ borderLeft: '2px solid #C87D00', paddingLeft: 24 }}>
                <p className="font-mono text-data uppercase tracking-wider" style={{ color: '#6A7A8A' }}>
                  {ref.client} &middot; {ref.location}
                </p>
                <h3 className="mt-3 text-section font-medium" style={{ color: '#080B0F' }}>
                  {ref.heading}
                </h3>
                <p className="mt-4 text-body max-w-prose" style={{ color: '#6A7A8A' }}>
                  {ref.body}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-8 border-t pt-4" style={{ borderColor: '#E2E8F0' }}>
                  <div>
                    <dt className="text-body font-medium" style={{ color: '#080B0F' }}>{ref.site}</dt>
                    <dd className="mt-1 font-mono text-data uppercase tracking-wider" style={{ color: '#6A7A8A' }}>
                      Site
                    </dd>
                  </div>
                  <div>
                    <dt className="text-body font-medium" style={{ color: '#080B0F' }}>{ref.systems}</dt>
                    <dd className="mt-1 font-mono text-data uppercase tracking-wider" style={{ color: '#6A7A8A' }}>
                      Systems
                    </dd>
                  </div>
                  <div>
                    <dt className="text-body font-medium" style={{ color: '#080B0F' }}>{ref.scope}</dt>
                    <dd className="mt-1 font-mono text-data uppercase tracking-wider" style={{ color: '#6A7A8A' }}>
                      Scope
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 mt-10">
        <a
          href="/references"
          className="inline-block font-mono text-data"
          style={{ color: '#C87D00' }}
        >
          All References &rarr;
        </a>
      </div>
    </section>
  )
}
