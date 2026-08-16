# Handover — consolidating branches into `stage` for review

**Written:** 2026-08-16
**Branch this describes:** `claude-fable-lead-ui-enhancement` @ `57441cb` (pushed to origin)

---

## Read this first: there is nothing to cherry-pick

The task was framed as "take pieces from the branches to finalize `stage`."
That framing turned out not to apply. Verified with
`git merge-base --is-ancestor`:

```
CONTAINED in claude-fable-lead-ui-enhancement:
  main
  pillar-to-refinement
  hero-v2
  status
  codex/gpt-design-test
```

**Every other branch is already an ancestor of `claude-fable-lead-ui-enhancement`.**
The branches are stacked, not parallel — this branch was cut from
`pillar-to-refinement`, which was cut from `hero-v2`, and so on:

```
main
 └─ 31f0d2a  Redesign automation section
     └─ cfc6f6a  Refine automation section theme        ← codex/gpt-design-test tip
         └─ 5b9d728  overlap ServiceStrip over hero     ← hero-v2 tip AND status tip (identical)
             └─ 7b671e9  white ProcessSpine, ProjectsCarousel
                 │                                       ← pillar-to-refinement tip
                 └─ …18 more commits…
                     └─ 57441cb                          ← claude-fable-lead-ui-enhancement tip
```

Consequences:

- **No cherry-picking, no conflict resolution, no merge.** Consolidation is done.
- `status` and `hero-v2` point at the identical commit (`5b9d728`) — one is a
  duplicate and can be deleted once the user confirms.
- `stage` is a **strict ancestor of `main`** — 4 behind, 0 ahead. It holds no
  unique work and is simply stale.

## Finalizing `stage`

Because `stage` is an ancestor of this branch, it is a **pure fast-forward**.
No merge commit, no conflicts:

```bash
git checkout stage && git merge --ff-only claude-fable-lead-ui-enhancement
```

Then push:

```bash
git push origin stage
```

Verify before pushing — expect `0`:

```bash
git rev-list --count stage..claude-fable-lead-ui-enhancement
```

⚠️ **Do not touch `main`.** Per `CLAUDE.md`, merging/rebasing/pushing anything
onto `main` requires the user's explicit yes in the same session. `stage` is
fair game; `main` is not. Do not propose a `main` merge as a "next step."

---

## What is in this branch (review scope)

22 commits ahead of `main`; ~1,155 insertions / 475 deletions across 20 files.

### Design system foundations
- `src/app/globals.css` — semantic type tokens (`text-display` 54 / `text-anchor`
  36 / `text-section` 22 / `text-caption` 16) and a complete 8px spacing scale:
  `c1–c5` (4/8/12/16/24) for component rhythm, `l1–l5` (32/48/64/80/96) for
  layout rhythm.
- `src/components/Eyebrow.tsx` — shared eyebrow with `pillar` / `numbered` /
  `plain` variants.
- `CLAUDE.md` — section-label conventions, type roles, and the repository
  operating rules (merge-to-main hard stop, nondestructive git defaults).

### Homepage structure
- **Header** — added Technology Partners; WhatsApp demoted to icon-only ghost.
- **PillarStrip** (`PillarStrip.tsx`, renamed from `ServiceStrip.tsx`) — 4-cell
  hairline strip replacing the old 3 floating cards. No shadows, no overlap.
- **Pillar 1** (`ProcessSpine.tsx`) — opens with a scope block (image left,
  kicker H2, lead copy, 20+/3/50+ credentials), then the anchor H2, then the
  4×2 module grid with a Signature marker on stage 08.
- **Pillar 2** (`ServiceSplit.tsx`) — 3×2 capability grid, Signature on PLC
  Programming, control-cabinet photo right.
- **ReferenceCarousel** — peek-scroll carousel, 3 references, designed
  image-fallback with wordmark + blueprint texture.
- Section vertical rhythm unified: 12 sections moved off inline
  `paddingTop`/`paddingBottom` onto `py-l3 md:py-l4`.

### Motion
- `AnimatedNumber.tsx` — IntersectionObserver count-up, respects
  `prefers-reduced-motion`.
- Module-grid stagger reveal with a defensive observer and an 800 ms safety
  fallback so tiles can never stall at `opacity-0`.

---

## Open items for the reviewer

Ordered roughly by how likely they are to block sign-off.

1. **Placeholder imagery still in the layout.**
   - Pillar 1 scope block renders a `TEAM · IMG` grey panel — no real photo yet.
   - Reference carousel cards show `BRIDGE PHOTOGRAPH · PENDING`.
   - `ProductsTeaser` / `ServiceSplit` carry `CTRL.SYS · IMG` style tags.

2. **Dead code.** Two components are defined but imported nowhere:
   - `src/components/ProjectsCarousel.tsx` (284 lines) — arrived via
     `pillar-to-refinement`, then superseded by `ReferenceCarousel`. Almost
     certainly deletable; confirm with the user first.
   - `src/components/Clients.tsx` — pre-existing, unrelated to this branch.

3. **`/solutions` page has drifted from the homepage.**
   `src/app/solutions/page.tsx:29-30` still carries the old automation bullets
   ("Siemens S7 PLCs with TIA Portal", "Panel wiring, testing, and
   documentation") that Pillar 2 replaced with the capability grid. The two
   pages now describe automation differently.

4. **Copy repeats across two blocks.** "Siemens Solution Partner" and "2003"
   appear both in the Pillar 1 scope block and in `AboutTeaser` near the footer.
   They sit far apart so it reads as reinforcement, but if it grates: let the
   Pillar 1 block own the hard credentials and rewrite `AboutTeaser` toward
   lifecycle and industries.

5. **Adjacent same-colour sections.** `AboutTeaser` (`#0D1B2E`) butts directly
   into `Contact` (`bg-ibm-panel`, same colour) with no divider. Pre-existing,
   not introduced here, but visible.

6. **Inline styles remain in older components.** `CaseStudy`, `SolutionsShowcase`,
   `TechnologyPartners`, `AboutTeaser`, `ProductsTeaser` still hand-roll eyebrows
   with inline styles instead of using the shared `Eyebrow` component, and still
   hardcode hex values that now have tokens. The homepage-critical paths were
   converted; these were left alone to keep the diff reviewable.

---

## Verification before review

```bash
npx tsc --noEmit
```

Then run the dev server through the preview tooling (never `npm run dev` in a
plain shell — this repo's agent setup expects `.claude/launch.json`, config name
`mbh-website`, port 3000) and walk the homepage at 1440 / 768 / 375 px.

Watch for: the pillar strip sitting flush under the hero, the Pillar 1 scope
block reading as subordinate to its 36 px anchor H2, and the count-up firing
once on scroll.

**Note on the dev server:** stale Turbopack/HMR state caused repeated phantom
errors during this session — the browser console holds entries from *previous*
HMR sessions and does not clear on reload. If you see an error naming a symbol
or line that no longer exists in the file, check `preview_logs` on a freshly
restarted server before believing it. A `data-demoway-document-id` hydration
warning on `<body>` is caused by a browser extension, not by this code.

---

## Repo rules that bind the next session

From `CLAUDE.md` — these override session instructions:

- **Never** merge, rebase onto, fast-forward, or push anything to `main` without
  the user's explicit yes in the same session. Do not offer it as a default.
- Destructive git operations (`push --force`, `reset --hard`, `branch -D`,
  `clean -f`, history rewriting, deleting remote branches) each need explicit
  confirmation. Branch cleanup — including deleting the duplicate `status`
  branch — falls under this.
- Verify `git status` and `git branch --show-current` before any file change.
