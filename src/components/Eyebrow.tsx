type EyebrowProps = {
  label: string
  number?: string
  variant?: 'pillar' | 'numbered' | 'plain'
}

export function Eyebrow({ label, number, variant = 'plain' }: EyebrowProps) {
  const prefix =
    variant === 'pillar'   ? `Pillar ${number}` :
    variant === 'numbered' ? number :
    null

  return (
    <p
      className="font-mono text-data text-cta uppercase tracking-wider"
      style={{ fontFeatureSettings: "'smcp'" }}
    >
      {prefix ? `${prefix} · ${label}` : label}
    </p>
  )
}
