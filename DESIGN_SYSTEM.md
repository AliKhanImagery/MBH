# MBH Solutions — Design System Reference

> **Source of truth** extracted from Hero.tsx and ProcessSpine.tsx — the two highest-fidelity components.
> All new components and subpages MUST conform to these specifications.

---

## Color Tokens (from globals.css @theme)

| Token | Hex | Role |
|---|---|---|
| `--color-near-black` | `#080B0F` | Page dark bg, gradient terminus |
| `--color-ibm-panel` | `#0D1B2E` | Card surface, tile bg |
| `--color-card-hover` | `#1E3352` | Hover state, dark borders |
| `--color-amber` / `--color-cta` | `#C87D00` | Accent, eyebrow, CTA bg |
| `--color-amber-light` / `--color-cta-hover` | `#E8A020` | CTA hover only |
| `--color-steel-text` / `--color-ink-steel` | `#9BAAB5` | Muted text on dark |
| `--color-ink-muted` | `#6A7A8A` | Muted text on light |
| `--color-ink` | `#080B0F` | Body text on light |
| `--color-surface-page` | `#ffffff` | Light section bg |
| `--color-rule` | `#E2E8F0` | Light-mode borders |
| `--color-rule-dark` | `#1E3352` | Dark-mode borders |

### Hero Gradient (Blue-shifted — NOT pure black)
```
rgba(21,38,84,0.80) → rgba(21,38,84,0.65) → rgba(21,38,84,0.35) → rgba(8,11,15,0.50)
```

---

## Typography

**Fonts:** IBM Plex Sans (300/400/500) + IBM Plex Mono (400/500)
**Max weight: 500 (medium).** Never use semibold/bold/black.

| Role | Size | Weight | Tracking | Line-Height | Font |
|---|---|---|---|---|---|
| Eyebrow | 10px | 500 | 0.5px | — | Mono |
| H1 | 42px | 400 | −1.5px | 1.1 | Sans |
| H2/Anchor | 28–36px | 500 | −0.8px | 1.2 | Sans |
| H3 | 18px | 500 | −0.3px | 1.3 | Sans |
| Subtitle | 16px | 300 | 0 | 1.55 | Sans |
| Body | 15px | 400 | 0 | 1.7 | Sans |
| CTA | 14px | 500 | 0 | — | Sans |
| Data | 11px | 400 | 0.04em | — | Mono |

---

## Spacing (8px base)

| Token | Value |
|---|---|
| c1–c5 | 4, 8, 12, 16, 24 |
| l1–l5 | 32, 48, 64, 80, 96 |

**Container:** `mx-auto max-w-[1400px] px-6 md:px-12`

---

## Component Patterns

### Section Flow (mandatory order)
1. `<Eyebrow variant="pillar" number="XX" label="..." />`
2. H2 anchor statement (max-w-prose, left-aligned)
3. Subtitle (16px/300, muted color)
4. Content area
5. `<CtaLink href="..." />` footer

### Card Language
- Surface: `#0D1B2E` (solid, no opacity variants)
- Hover: `#162540`
- Border: `#1E3352` (not gray-800)
- Corner: **Diagonal clip-path** (14–20px), never rounded-xl
- Gap: 2px hairline gutter

### Diagonal Cut (clip-path)
```css
/* Top-right */ polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)
/* Bottom-left */ polygon(12px 0, 100% 0, 100% 100%, 0 100%, 0 12px)
```

---

## 10 Rules

1. Font weight ceiling = 500
2. Diagonal cuts on dark cards, never rounded corners
3. All colors from @theme tokens — no slate-*, gray-*
4. Dark borders = `#1E3352`, not border-gray-800
5. Always use `<Eyebrow />` component
6. Section flow: Eyebrow → H2 → Subtitle → Content → CtaLink (left-aligned)
7. Card surface = solid `#0D1B2E`, hover = `#162540`
8. Spacing follows c*/l* token scale
9. No emoji — use SVG or mono labels
10. Subpage hero gradients must use blue-shifted overlay, not pure black
