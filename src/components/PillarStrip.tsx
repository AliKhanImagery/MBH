'use client'

import { Eyebrow } from '@/components/Eyebrow'

type Pillar = {
  number: string
  label: string
  title: string
  descriptor: string
  href: string
  linkText: string
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    label: 'Beverage Process Systems',
    title: 'Beverage Process Engineering',
    descriptor: 'Turnkey syrup rooms, CSD and juice process lines, and modernisation of existing production systems.',
    href: '/solutions#beverage-process',
    linkText: 'Explore Process Systems →',
  },
  {
    number: '02',
    label: 'Industrial Automation',
    title: 'Industrial Automation',
    descriptor: 'PLC-based control architecture, SCADA deployment, and end-to-end commissioning under one engineering scope.',
    href: '/solutions#automation',
    linkText: 'Explore Automation →',
  },
  {
    number: '03',
    label: 'Mechanical & Fabrication',
    title: 'Mechanical & Fabrication Installation',
    descriptor: 'In-house stainless and carbon steel fabrication with full mechanical installation at the client facility.',
    href: '/solutions#fabrication',
    linkText: 'Explore Fabrication →',
  },
  {
    number: '04',
    label: 'Equipment & Spares',
    title: 'Equipment & Spares Procurement',
    descriptor: 'Flow components, automation hardware, instruments, and switchgear from the leading process manufacturers.',
    href: '/products',
    linkText: 'Explore Products →',
  },
]

export default function PillarStrip() {
  return (
    <section className="mbh-section bg-surface-page py-l2">
      <div className="mbh-shell">
        <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4 border-y border-rule">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.number}
              href={pillar.href}
              className="group bg-surface-page p-c5 transition-colors duration-200 hover:bg-surface-panel"
            >
              <Eyebrow variant="pillar" number={pillar.number} label={pillar.label} />
              <h3 className="mt-c4 text-section font-medium text-ink">
                {pillar.title}
              </h3>
              <p className="mt-c3 text-body text-ink-muted">
                {pillar.descriptor}
              </p>
              <span className="mt-c5 inline-block font-mono text-data text-cta group-hover:text-cta-hover">
                {pillar.linkText}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
