const LINKS = [
  { label: "About", href: "#about" },
  { label: "Automation", href: "#automation" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-study" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
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

        <a
          href="#contact"
          className="text-cta rounded-md bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light"
        >
          Enquire Now
        </a>
      </nav>
    </div>
  );
}
