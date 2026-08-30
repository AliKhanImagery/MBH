"use client";

import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import QuoteDrawer, { type DrawerMode } from "./QuoteDrawer";
import {
  CATALOGUE_CATEGORIES,
  CATALOGUE_ITEMS,
  categoryCount,
  itemAnchor,
  type CatalogueCategory,
  type CatalogueItem,
} from "@/data/catalogue-items";

const FILTERS: (CatalogueCategory | "All")[] = ["All", ...CATALOGUE_CATEGORIES];

const HOW_TO_ORDER = [
  {
    step: "01",
    title: "Pick a line item",
    body: "Browse by category or scroll the full catalogue below. 31 items available individually or as a turnkey package.",
  },
  {
    step: "02",
    title: "Request quote on any item",
    body: "Fill four fields — name, company, email, message. Attach a spec sheet if you have one.",
  },
  {
    step: "03",
    title: "Receive a technical proposal",
    body: "We reply within one business day with a scope draft and indicative price. Refinements continue by email or on a scheduled call.",
  },
];

type DrawerState = { open: boolean; mode: DrawerMode; item: CatalogueItem | null };

// Shared keyboard focus ring — visible only for keyboard users (focus-visible).
const FOCUS_RING =
  "focus-visible:[outline:2px_solid_var(--color-amber)] focus-visible:outline-offset-2";

// Approx. height of the sticky category rail; used to offset filter scrolling.
const RAIL_OFFSET = 58;

export default function CatalogueClient() {
  const [active, setActive] = useState<CatalogueCategory | "All">("All");
  const [drawer, setDrawer] = useState<DrawerState>({
    open: false,
    mode: "generic",
    item: null,
  });
  const bodyRef = useRef<HTMLElement>(null);
  const didMountRef = useRef(false);

  // Switching category: if the buyer has already scrolled past the top of the
  // list, bring the (now shorter/different) results back under the sticky rail so
  // they never land in a lower section. A double rAF lets the browser finish
  // re-layout and scroll-clamping first — otherwise we'd measure a mid-reflow
  // offset and scroll to the wrong place. Uses the element's stable absolute
  // offset and only ever scrolls up, so filtering from the top never yanks down.
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const el = bodyRef.current;
        if (!el) return;
        const absTop = el.getBoundingClientRect().top + window.scrollY;
        const target = absTop - RAIL_OFFSET;
        if (window.scrollY > target) {
          window.scrollTo({ top: target, behavior: "smooth" });
        }
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [active]);

  function onFilter(f: CatalogueCategory | "All") {
    setActive(f);
  }

  const openItem = (item: CatalogueItem) =>
    setDrawer({ open: true, mode: "item", item });
  const openGeneric = () =>
    setDrawer({ open: true, mode: "generic", item: null });
  const openBulk = () => setDrawer({ open: true, mode: "bulk", item: null });
  const openCall = () => setDrawer({ open: true, mode: "call", item: null });
  const close = () => setDrawer((d) => ({ ...d, open: false }));

  const shownCategories: CatalogueCategory[] =
    active === "All" ? [...CATALOGUE_CATEGORIES] : [active];

  return (
    <>
      {/* ── §01 Overture — dark ground ── */}
      <section className="bg-surface-forge">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-l4 md:flex-row md:items-end md:justify-between md:px-12">
          <div>
            <Eyebrow label="Catalogue" />
            <h1 className="text-h1 mt-4 text-white">MBH Catalogue</h1>
            <p className="text-subtitle mt-4 max-w-2xl text-ink-steel">
              Every system, module, and service MBH supplies — quotable line by
              line. Request a quote on any item and receive a technical proposal
              within one business day.
            </p>
            <p className="mt-6 font-mono text-data uppercase tracking-wider text-steel-text">
              {CATALOGUE_ITEMS.length} line items · Process Systems · Automation ·
              Fabrication · Utilities
            </p>
          </div>
          <button
            type="button"
            onClick={openGeneric}
            className={`text-cta shrink-0 self-start bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light md:self-auto ${FOCUS_RING}`}
          >
            Request Quote
          </button>
        </div>
      </section>

      {/* ── §02 How to Order — light ground ── */}
      <section className="bg-surface-page">
        <div className="mx-auto max-w-[1400px] px-6 py-l4 md:px-12">
          <Eyebrow label="How to Order" />
          <div className="mt-l2 grid gap-10 md:grid-cols-3 md:gap-12">
            {HOW_TO_ORDER.map((s) => (
              <div key={s.step}>
                <span className="font-mono text-data text-amber">{s.step}</span>
                <h3 className="mt-c3 text-[18px] font-medium leading-snug text-ink">
                  {s.title}
                </h3>
                <p className="text-body mt-c2 text-ink-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §03 Category rail — sticky filter ── */}
      <div className="sticky top-0 z-40 border-y border-rule bg-surface-page/95 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex gap-7 overflow-x-auto py-4">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => onFilter(f)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap border-b-2 pb-1 text-[14px] transition-colors ${FOCUS_RING} ${
                    isActive
                      ? "border-amber font-medium text-ink"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  {f}{" "}
                  <span className="font-mono text-[12px] text-ink-muted">
                    ({categoryCount(f)})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── §04 Catalogue body — table ── */}
      <section ref={bodyRef} className="bg-surface-page">
        <div className="mx-auto max-w-[1400px] px-6 py-l3 md:px-12">
          {shownCategories.map((cat) => (
            <div key={cat} className="mb-l3 last:mb-0">
              {/* Category header row */}
              <div className="flex items-baseline justify-between border-b border-ink py-3">
                <h2 className="font-mono text-data uppercase tracking-wider text-ink">
                  Category: {cat}
                </h2>
                <span className="font-mono text-data text-ink-muted">
                  {categoryCount(cat)} items
                </span>
              </div>

              {/* Item rows */}
              {CATALOGUE_ITEMS.filter((i) => i.category === cat).map((item) => {
                const isSignature = item.badge === "SIGNATURE";
                return (
                  <div
                    key={item.id}
                    id={itemAnchor(item.id)}
                    className="grid scroll-mt-28 gap-3 border-b border-rule py-6 transition-colors hover:bg-surface-panel/60 md:grid-cols-[2.5rem_minmax(0,1fr)_13rem] md:gap-8"
                  >
                    {/* Sequence number */}
                    <div className="font-mono text-data text-ink-muted md:pt-1">
                      {String(item.seq).padStart(2, "0")}
                    </div>

                    {/* Name + badge + description */}
                    <div className="min-w-0">
                      {item.badge && (
                        <span
                          className={`font-mono text-data uppercase tracking-wider ${
                            isSignature ? "text-amber" : "text-ink-muted"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <h3
                        className={`text-[18px] font-medium leading-snug text-ink ${
                          item.badge ? "mt-1" : ""
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => openItem(item)}
                          className={`block text-left hover:underline ${FOCUS_RING}`}
                        >
                          {item.name}
                        </button>
                      </h3>
                      <p className="text-body mt-2 max-w-prose text-[#4A5568]">
                        {item.description}
                      </p>
                    </div>

                    {/* Request Quote + item ID */}
                    <div className="flex flex-col gap-2 md:items-end md:text-right">
                      <button
                        type="button"
                        onClick={() => openItem(item)}
                        aria-label={`Request quote for ${item.name} (${item.id})`}
                        className={`mbh-cta-link ${FOCUS_RING}`}
                      >
                        <span>Request Quote</span>
                        <span className="mbh-cta-arrow">→</span>
                      </button>
                      <span className="font-mono text-data text-ink-muted">
                        ID · {item.id}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* ── §05 Bulk enquiry — light strip ── */}
      <section className="border-y border-rule bg-surface-panel">
        <div className="mx-auto max-w-[1400px] px-6 py-l3 text-center md:px-12">
          <Eyebrow label="Bulk Enquiry" />
          <h2 className="text-anchor mx-auto mt-3 max-w-2xl font-medium text-ink">
            Have a spec sheet, an RFQ package, or a full-plant brief?
          </h2>
          <p className="text-body mt-4 text-ink-muted">
            Send it directly. We reply within one business day with a scoping
            response.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openBulk}
              className={`text-cta bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light ${FOCUS_RING}`}
            >
              Attach RFQ · Request Quote
            </button>
            <button
              type="button"
              onClick={openCall}
              className={`text-cta border border-ink/15 px-[22px] py-3 text-ink transition-colors hover:bg-ink/5 ${FOCUS_RING}`}
            >
              Book a scoping call
            </button>
          </div>
        </div>
      </section>

      {/* ── §06 Quote rail — dark full-bleed ── */}
      <section className="bg-surface-forge">
        <div className="mx-auto max-w-[1400px] px-6 py-l4 text-center md:px-12">
          <Eyebrow label="Request Quote" />
          <h2 className="text-anchor mx-auto mt-3 max-w-2xl font-medium text-white">
            Every item in this catalogue is available for individual or turnkey
            quotation.
          </h2>
          <p className="text-body mt-4 text-ink-steel">
            We reply within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openGeneric}
              className={`text-cta bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light ${FOCUS_RING}`}
            >
              Request Quote
            </button>
            <a
              href="#contact"
              className={`text-cta border border-white/15 px-[22px] py-3 text-white transition-colors hover:bg-white/5 ${FOCUS_RING}`}
            >
              Speak to Engineering
            </a>
          </div>
        </div>
      </section>

      <QuoteDrawer
        open={drawer.open}
        mode={drawer.mode}
        item={drawer.item}
        onClose={close}
      />
    </>
  );
}
