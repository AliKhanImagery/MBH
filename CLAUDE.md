@AGENTS.md

## Section conventions

The four homepage pillars carry numbered eyebrows:

- Pillar 01 · Beverage Process Systems
- Pillar 02 · Industrial Automation
- Pillar 03 · Mechanical & Fabrication
- Pillar 04 · Equipment & Spares

Blocks inside a pillar use single-word structural labels — Modules, Reference,
Scope, Capability. Never use narrative or editorial section labels. Explicit
veto list: "In Practice", "At Work", "In Action", "In Focus", "Highlights",
"Featured". Use the shared Eyebrow component (components/Eyebrow.tsx) for
every instance.

## Type roles (semantic tokens)

Use these tokens by role, not by size:

- text-display  — hero only
- text-anchor   — top-of-pillar H2
- text-section  — sub-block heading within a pillar
- text-caption  — coda block, reference card heading, footnote

Never use text-h1/h2/h3 directly on new sections. Existing usages will
migrate incrementally.
