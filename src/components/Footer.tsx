import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Process Systems", href: "/solutions#beverage-process" },
      { label: "Automation", href: "/solutions#automation" },
      { label: "Fabrication", href: "/fabrication" },
      { label: "CIP Systems", href: "/solutions#beverage-process" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Food & Beverage", href: "/industries" },
      { label: "FMCG", href: "/industries" },
      { label: "Pharmaceutical", href: "/industries" },
      { label: "Power Generation", href: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Catalogue", href: "/catalogue" },
      { label: "References", href: "/references" },
      { label: "Technology Partners", href: "/partners" },
      { label: "Products", href: "/products" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-near-black">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:w-56 lg:shrink-0">
            <div>
              <Image
                src="/mbh-logo.png"
                alt="MBH Solutions"
                width={160}
                height={32}
                style={{ height: 32, width: "auto", objectFit: "contain" }}
              />
            </div>
            <p className="text-body mt-3 text-slate-300" style={{ fontSize: 14 }}>
              Industrial Automation &amp; Process Systems<br />
              <a href="mailto:sales@mbhsol.com" className="hover:text-white transition-colors">sales@mbhsol.com</a><br />
              <a href="https://wa.me/923034441878" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+92 303 4441878</a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:flex-1">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-data font-semibold text-slate-200">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-nav-link text-slate-400">
            © {new Date().getFullYear()} MBH Solutions. All rights reserved.
          </p>
          <p className="text-data font-medium text-slate-400">
            SIEMENS INTEGRATOR COMPANY
          </p>
        </div>
      </div>
    </footer>
  );
}
