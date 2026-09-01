"use client";

import { type FormEvent, useCallback, useEffect, useRef, useState } from "react";
import type { CatalogueItem } from "@/data/catalogue-items";

const SALES_EMAIL = "sales@mbhsol.com";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const copy = drawerCopy(mode, item);

  const handleClose = useCallback(() => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  }, [onClose]);

  // Modal behaviour while open: lock scroll, move focus into the panel, trap
  // Tab within it, close on Escape, and restore focus to the trigger on close.
  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
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
  }, [open, handleClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const fd = new FormData(e.currentTarget);
    if (item) {
      fd.append("itemId", item.id);
      fd.append("itemName", item.name);
      fd.append("itemSpec", item.spec);
    }
    if (typeof window !== "undefined") {
      fd.append("pageUrl", window.location.href);
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit quote request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Quote submit error:", err);
      const msg =
        err instanceof Error
          ? err.message
          : `Unable to send quote request. Please try again or email ${SALES_EMAIL}.`;
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
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
        onClick={handleClose}
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
            onClick={handleClose}
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
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber/10 text-amber">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-h3 text-white">Quote Request Received</p>
            <p className="text-body mt-2 text-white/60">
              {item ? (
                <>Your technical proposal request for <strong>{item.id}</strong> ({item.name}) has been received.</>
              ) : (
                <>Your scoping enquiry has been received.</>
              )}
            </p>
            <p className="text-sm mt-3 text-amber font-mono">
              Indicative price and scope draft within 1 business day.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="text-cta mt-6 rounded-md border border-white/10 px-[22px] py-3 text-white transition-colors hover:border-white/25 hover:bg-white/5"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col px-6 py-6">
            {errorMessage && (
              <div className="mb-5 rounded-md border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                <p className="font-medium">{errorMessage}</p>
                <p className="mt-1 text-xs text-red-400">
                  You can also email your RFQ directly to <a href="mailto:sales@mbhsol.com" className="underline font-semibold">sales@mbhsol.com</a>.
                </p>
              </div>
            )}

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
                  disabled={isSubmitting}
                  placeholder="Full name"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue disabled:opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-data text-steel-text">Company*</span>
                <input
                  name="company"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Company name"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue disabled:opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-data text-steel-text">Email*</span>
                <input
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="you@company.com"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue disabled:opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-data text-steel-text">Phone (optional)</span>
                <input
                  name="phone"
                  type="tel"
                  disabled={isSubmitting}
                  placeholder="+92 …"
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue disabled:opacity-50"
                />
              </label>

              {/* File upload — enabled for spec sheets & RFQ packages up to 10MB */}
              <label className="block">
                <span className="text-data text-steel-text">
                  Attach spec / RFQ package (optional)
                </span>
                <input
                  name="attachment"
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  disabled={isSubmitting}
                  className="text-body mt-2 w-full rounded-md border border-dashed border-white/20 bg-white/[0.02] px-3 py-2 text-white/70 outline-none file:mr-3 file:rounded file:border-0 file:bg-amber/20 file:px-3 file:py-1 file:text-xs file:font-mono file:text-amber hover:border-amber/50 cursor-pointer disabled:opacity-50"
                />
                <span className="mt-1 block font-mono text-[11px] text-steel-text">
                  Supports PDF, Word, or Excel up to 10MB.
                </span>
              </label>

              <label className="block">
                <span className="text-data text-steel-text">
                  What would you like to discuss?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  disabled={isSubmitting}
                  defaultValue={copy.message}
                  className="text-body mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-brand-blue disabled:opacity-50"
                />
              </label>
            </div>

            <p className="text-data mt-6 text-steel-text">
              We reply within one business day.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-cta mt-4 inline-flex items-center justify-center gap-2 w-full bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Sending Request...</span>
                </>
              ) : (
                <span>Send Request</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
