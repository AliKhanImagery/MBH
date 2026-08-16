"use client";

import { useState } from "react";

const LINKS = [
  { label: "Solutions",            href: "/solutions" },
  { label: "Products",             href: "/products" },
  { label: "References",           href: "/references" },
  { label: "About",                href: "/about" },
  { label: "Contact",              href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-near-black">
      {/* Row 1 — logo, WhatsApp, Enquire Now (mobile: logo + menu toggle) */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-12">
        <a href="/" aria-label="MBH Solutions — home" className="text-white" style={{ fontSize: 16, fontWeight: 500 }}>
          MBH <span className="text-amber">SOLUTIONS</span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/92300000000"
            className="text-cta hidden rounded-md border border-white/10 px-[22px] py-3 text-white transition-colors hover:border-white/20 hover:bg-white/5 sm:inline-block"
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="text-cta hidden rounded-md bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light sm:inline-block"
          >
            Enquire Now
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Row 2 — nav links, right-aligned (desktop only) */}
      <div className="hidden border-t border-white/10 lg:block">
        <nav className="mx-auto max-w-[1400px] px-6 md:px-12">
          <ul className="flex items-center justify-end gap-8 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-nav-link text-white/45 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile dropdown — links + WhatsApp + Enquire Now */}
      {open && (
        <div className="border-t border-white/10 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-nav-link block py-3 text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3 sm:hidden">
            <a
              href="https://wa.me/92300000000"
              onClick={() => setOpen(false)}
              className="text-cta rounded-md border border-white/10 px-[22px] py-3 text-center text-white transition-colors hover:border-white/20 hover:bg-white/5"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-cta block rounded-md bg-amber px-[22px] py-3 text-center text-white transition-colors hover:bg-amber-light"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
