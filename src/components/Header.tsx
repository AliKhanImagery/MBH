"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { label: "Solutions",            href: "/solutions" },
  { label: "Fabrication",          href: "/fabrication" },
  { label: "Catalogue",            href: "/catalogue" },
  { label: "Products",             href: "/products" },
  { label: "References",           href: "/references" },
  { label: "About",                href: "/about" },
  { label: "Contact",              href: "#contact" },
];

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-near-black">
      {/* Row 1 — logo, WhatsApp, Enquire Now (mobile: logo + menu toggle) */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-12">
        <Link href="/" aria-label="MBH Solutions — home" className="text-white flex items-center">
          <Image
            src="/mbh-logo.png"
            alt="MBH Solutions"
            width={160}
            height={32}
            style={{ height: 32, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="mailto:sales@mbhsol.com"
            className="text-cta hidden rounded-md border border-white/10 px-[22px] py-3 text-white transition-colors hover:border-white/20 hover:bg-white/5 sm:inline-block"
          >
            sales@mbhsol.com
          </a>
          <a
            href="https://wa.me/923034441878"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with MBH Solutions on WhatsApp"
            className="text-cta inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3.5 py-2 text-white font-medium shadow-[0_2px_8px_rgba(37,211,102,0.28)] transition-all hover:bg-[#20ba59] hover:shadow-[0_4px_14px_rgba(37,211,102,0.4)] active:scale-[0.98] sm:px-[18px] sm:py-2.5"
          >
            <WhatsAppIcon className="h-4 w-4 fill-white shrink-0" />
            <span>WhatsApp</span>
          </a>
          <a
            href="#contact"
            className="text-cta hidden bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light sm:inline-block"
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
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    className="text-nav-link text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-nav-link text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                )}
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
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-nav-link block py-3 text-slate-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-nav-link block py-3 text-slate-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3 sm:hidden">
            <a
              href="mailto:sales@mbhsol.com"
              onClick={() => setOpen(false)}
              className="text-cta rounded-md border border-white/10 px-[22px] py-3 text-center text-white transition-colors hover:border-white/20 hover:bg-white/5"
            >
              sales@mbhsol.com
            </a>
            <a
              href="https://wa.me/923034441878"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-cta inline-flex items-center justify-center gap-2.5 rounded-md bg-[#25D366] px-[22px] py-3 text-center font-medium text-white shadow-sm transition-all hover:bg-[#20ba59]"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-cta block bg-amber px-[22px] py-3 text-center text-white transition-colors hover:bg-amber-light"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
