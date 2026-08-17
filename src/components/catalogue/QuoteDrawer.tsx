"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import type { CatalogueItem } from "@/data/catalogue-items";

const SALES_EMAIL = "sales@mbhsolutions.pk";

export type DrawerMode = "item" | "generic" | "bulk" | "call";

type Props = {
  open: boolean;
  mode: DrawerMode;
  item: CatalogueItem | null;
  onClose: () => void;
};

/** Heading + pre-filled message vary by how the drawer was opened. */
function drawerCopy(mode: DrawerMode, item: CatalogueItem | null) {
  if (mode === "item" && item) {
    return {
      heading: "Request Quote",
      message: `I'd like a quote for ${item.id} (${item.name}).\nPlease share a technical proposal and indicative price.`,
    };
  }
  if (mode === "bulk") {
    return {
      heading: "Attach RFQ · Request Quote",
      message:
        "I have a spec sheet / RFQ package to share for a full-plant enquiry.\nPlease review and reply with a scoping response.",
    };
  }
  if (mode === "call") {
    return {
      heading: "Book a scoping call",
      message:
        "I'd like to book a 30-minute scoping call to discuss a full-plant enquiry.",
    };
  }
  return {
    heading: "Request Quote",
    message:
      "I'd like a quote. Please share a technical proposal and indicative price.",
  };
}

export default function QuoteDrawer({ open, mode, item, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const copy = drawerCopy(mode, item);

  // Reset the success state whenever a fresh drawer is opened.
  useEffect(() => {
    if (open) setSubmitted(false);
  }, [open, mode, item]);

  // Modal behaviour while open: lock scroll, move focus into the panel, trap
  // Tab within it, close on Escape, and restore focus to the trigger on close.
  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const activeEl = document.activeElement;
        if (e.shiftKey && activeEl === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreFocusRef.current?.focus?.();
    };
  }, [open, onClose]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) ?? "";
    const company = (fd.get("company") as string) ?? "";
    const email = (fd.get("email") as string) ?? "";
    const phone = (fd.get("phone") as string) ?? "";
    const message = (fd.get("message") as string) ?? "";
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const tag = item ? item.id : "GENERAL";
    const label = item ? item.name : "General enquiry";

    // TODO(backlog): replace this mailto with a POST to /api/quote (Resend).
    // The route will send to sales@mbhsolutions.pk with the same subject/body,
    // forward the attached RFQ file, and remove the buyer's own-client step.
    const subject = encodeURIComponent(
      `[QUOTE REQUEST] ${tag} · ${label}${company ? ` · ${company}` : ""}`
    );
    const bodyLines = [
      `Item ID: ${tag}`,
      `Item: ${label}`,
      item ? `Spec: ${item.spec}` : null,
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
      "",
      `Page: ${pageUrl}`,
    ].filter((l) => l !== null);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-label={copy.heading}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/60"
      />

      {/* Panel — slides in from the right */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="mbh-drawer-panel absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col overflow-y-auto bg-near-black outline-none"
      >
        <style>{`
          @keyframes mbh-drawer-in { from { transform: translateX(24px); opacity: 0.4; } to { transform: translateX(0); opacity: 1; } }
          @media (prefers-reduced-motion: no-preference) {
            .mbh-drawer-panel { animation: mbh-drawer-in 220ms ease-out; }
          }
        `}</style>

        {/* Header row */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <p className="font-mono text-data uppercase tracking-wider text-amber">
            {copy.heading}
          </p>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white transition-colors hover:border-white/25 hover:bg-white/5"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="text-h3 text-white">Enquiry ready to send</p>
            <p className="text-body mt-2 text-white/55">
              Your email client should have opened with the request pre-filled to{" "}
              {SALES_EMAIL}. Press send and we&apos;ll reply within one business day.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="text-cta mt-6 rounded-md border border-white/10 px-[22px] py-3 text-white transition-colors hover:border-white/25 hover:bg-white/5"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col px-6 py-6">
            {/* Item context block */}
            {item && (
              <div className="mb-6 border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-body font-medium text-white">
                    {item.name}
                  </span>
                  <span className="font-mono text-data text-amber">{item.id}</span>
                </div>
                <p className="mt-1 font-mono text-data text-steel-text">
                  {item.spec}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-5">
              <label className="block">
                <span className="text-data text-steel-text">Name*</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Full name"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue"
                />
              </label>
              <label className="block">
                <span className="text-data text-steel-text">Company*</span>
                <input
                  name="company"
                  type="text"
                  required
                  placeholder="Company name"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue"
                />
              </label>
              <label className="block">
                <span className="text-data text-steel-text">Email*</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue"
                />
              </label>
              <label className="block">
                <span className="text-data text-steel-text">Phone (optional)</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+92 …"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue"
                />
              </label>

              {/* File upload — design only until the /api/quote (Resend) route
                  is built. mailto cannot carry an attachment. */}
              <label className="block">
                <span className="text-data text-steel-text">
                  Attach spec / RFQ (optional)
                </span>
                <input
                  name="attachment"
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  disabled
                  className="text-body mt-2 w-full cursor-not-allowed rounded-md border border-dashed border-white/10 bg-transparent px-3 py-2 text-white/40 outline-none file:mr-3 file:rounded file:border-0 file:bg-white/5 file:px-3 file:py-1 file:text-white/40"
                />
                <span className="mt-1 block font-mono text-[11px] text-steel-text">
                  Upload enabled once quote routing goes live — email the file for now.
                </span>
              </label>

              <label className="block">
                <span className="text-data text-steel-text">
                  What would you like to discuss?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  defaultValue={copy.message}
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue"
                />
              </label>
            </div>

            <p className="text-data mt-6 text-steel-text">
              We reply within one business day.
            </p>

            <button
              type="submit"
              className="text-cta mt-4 w-full bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light"
            >
              Send Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
