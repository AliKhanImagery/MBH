'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedNumberProps = {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedNumber({
  value,
  suffix = '',
  duration = 800,
  className,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setDisplay(value)
      setHasAnimated(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const start = performance.now()

            const tick = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(value * eased))

              if (progress < 1) {
                requestAnimationFrame(tick)
              } else {
                setDisplay(value)
                setHasAnimated(true)
                observer.disconnect()
              }
            }

            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: [0.5] }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
