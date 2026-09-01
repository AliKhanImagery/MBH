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
  const [mounted, setMounted] = useState(open);
  const [active, setActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const copy = drawerCopy(mode, item);

  // When open changes to true, mount during render (official React pattern)
  if (open && !mounted) {
    setMounted(true);
  }

  // Smooth entrance & exit animations
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (open) {
      timer = setTimeout(() => {
        setActive(true);
      }, 16);
    } else {
      timer = setTimeout(() => {
        setActive(false);
        setMounted(false);
      }, 280);
    }
    return () => clearTimeout(timer);
  }, [open]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClose = useCallback(() => {
    setActive(false);
    setTimeout(() => {
      setSubmitted(false);
      setErrorMessage(null);
      onClose();
    }, 260);
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

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ease-out ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={copy.heading}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Panel — slides in from the right with cubic-bezier physics */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`mbh-drawer-panel absolute right-0 top-0 flex h-full w-full max-w-[580px] flex-col overflow-y-auto bg-white text-slate-900 shadow-2xl border-l border-slate-200 outline-none transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header row */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-8 py-5">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-amber" />
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber">
              {copy.heading}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition-all duration-150 active:scale-90 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
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
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-white">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber/15 text-amber">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-bold text-slate-900">Quote Request Received</p>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 max-w-md">
              {item ? (
                <>Your technical proposal request for <strong className="text-slate-900">{item.id}</strong> ({item.name}) has been registered.</>
              ) : (
                <>Your scoping enquiry has been registered with our proposal desk.</>
              )}
            </p>
            <div className="mt-4 rounded-md border border-amber/30 bg-amber/10 px-4 py-2.5 text-xs font-mono font-medium text-amber-900">
              ⚡ Indicative price and scope draft within 1 business day.
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="mt-8 rounded-md bg-slate-900 px-8 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-150 hover:bg-slate-800 active:scale-95 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col px-8 py-7 bg-white">
            {errorMessage && (
              <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <p className="font-semibold">{errorMessage}</p>
                <p className="mt-1 text-xs text-red-600">
                  You can also email your RFQ directly to <a href={`mailto:${SALES_EMAIL}`} className="underline font-bold">{SALES_EMAIL}</a>.
                </p>
              </div>
            )}

            {/* Item context block */}
            {item && (
              <div className="mb-6 rounded-md border border-slate-200 bg-slate-50/80 p-4 shadow-2xs">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </span>
                  <span className="rounded bg-amber/15 border border-amber/30 px-2 py-0.5 font-mono text-xs font-bold text-amber-800">
                    {item.id}
                  </span>
                </div>
                <p className="mt-1.5 font-mono text-xs text-slate-500">
                  {item.spec}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-5">
              <label className="block">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-600">
                  Full Name*
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Tariq Mahmood"
                  className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-amber focus:ring-1 focus:ring-amber shadow-2xs disabled:opacity-50"
                />
              </label>

              <label className="block">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-600">
                  Company / Organization*
                </span>
                <input
                  name="company"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. National Beverage Corp"
                  className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-amber focus:ring-1 focus:ring-amber shadow-2xs disabled:opacity-50"
                />
              </label>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-600">
                    Email Address*
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="you@company.com"
                    className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-amber focus:ring-1 focus:ring-amber shadow-2xs disabled:opacity-50"
                  />
                </label>

                <label className="block">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-600">
                    Phone (optional)
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    disabled={isSubmitting}
                    placeholder="+92 300 …"
                    className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-amber focus:ring-1 focus:ring-amber shadow-2xs disabled:opacity-50"
                  />
                </label>
              </div>

              {/* Anti-spam honeypot (hidden from real users) */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                style={{ display: "none" }}
              />

              {/* File upload — enabled for spec sheets & RFQ packages up to 10MB */}
              <div className="block">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-600">
                  Attach Spec / RFQ Package (optional)
                </span>
                
                {selectedFile ? (
                  <div className="mt-1.5 flex items-center justify-between rounded-md border border-amber/40 bg-amber/5 px-3.5 py-2.5 text-sm text-slate-900">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-amber font-bold">📎</span>
                      <span className="truncate font-mono text-xs font-semibold">{selectedFile.name}</span>
                      <span className="text-xs text-slate-500">
                        ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleClearFile}
                      className="ml-2 rounded px-2 py-0.5 text-xs font-mono text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                      title="Remove file"
                    >
                      ✕ Remove
                    </button>
                  </div>
                ) : (
                  <div className="mt-1.5 rounded-md border-2 border-dashed border-slate-300 bg-slate-50/80 p-3 hover:border-amber/60 hover:bg-amber/5 transition-colors">
                    <input
                      ref={fileInputRef}
                      name="attachment"
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      disabled={isSubmitting}
                      onChange={handleFileChange}
                      className="w-full text-xs text-slate-600 outline-none file:mr-3 file:rounded file:border file:border-slate-300 file:bg-white file:px-3 file:py-1 file:text-xs file:font-mono file:font-semibold file:text-slate-700 hover:file:bg-slate-100 cursor-pointer disabled:opacity-50"
                    />
                  </div>
                )}

                <span className="mt-1 block font-mono text-[11px] text-slate-500">
                  Supports PDF, Word, or Excel up to 10MB.
                </span>
              </div>

              <label className="block">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-600">
                  What would you like to discuss?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  disabled={isSubmitting}
                  defaultValue={copy.message}
                  className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-amber focus:ring-1 focus:ring-amber shadow-2xs disabled:opacity-50"
                />
              </label>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
              <span className="font-mono text-xs text-slate-500">
                ⚡ Response within 1 business day
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-cta mt-4 inline-flex items-center justify-center gap-2 w-full rounded-md bg-amber px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-150 hover:bg-amber-light hover:shadow-md active:scale-[0.98] disabled:opacity-50 cursor-pointer"
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
