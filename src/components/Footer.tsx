const COLUMNS = [
  {
    title: "Company",
    links: ["About", "Careers", "Contact"],
  },
  {
    title: "Services",
    links: ["Automation", "Live Monitoring", "Panel Design", "Maintenance"],
  },
  {
    title: "Industries",
    links: [
      "Food & Beverage",
      "FMCG",
      "Power Generation",
      "Process Manufacturing",
    ],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-near-black">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:w-56 lg:shrink-0">
            <div className="text-white" style={{ fontSize: 16, fontWeight: 500 }}>
              MBH <span className="text-amber">SOLUTIONS</span>
            </div>
            <p className="text-body mt-3 text-white/40" style={{ fontSize: 13 }}>
              Technology For Innovators
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:flex-1">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-data text-steel-text">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-nav-link text-white/45 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-nav-link text-white/35">
            © {new Date().getFullYear()} MBH Solutions. All rights reserved.
          </p>
          <p className="text-data text-steel-text">
            SIEMENS SOLUTION PARTNER
          </p>
        </div>
      </div>
    </footer>
  );
}
