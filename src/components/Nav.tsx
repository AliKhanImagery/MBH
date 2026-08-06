"use client";

import { useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Automation", href: "#automation" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-study" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-near-black">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="text-white" style={{ fontSize: 16, fontWeight: 500 }}>
          MBH <span className="text-amber">SOLUTIONS</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
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

        <div className="flex items-center gap-3">
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
      </nav>

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
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-cta mt-3 block rounded-md bg-amber px-[22px] py-3 text-center text-white transition-colors hover:bg-amber-light sm:hidden"
          >
            Enquire Now
          </a>
        </div>
      )}
    </div>
  );
}
