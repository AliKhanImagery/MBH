export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/5 bg-near-black"
          >
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-40">
              <defs>
                <pattern id="grid-case" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="#2E9CC8" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid-case)" />
            </svg>
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
              <rect x="60" y="90" width="120" height="120" fill="none" stroke="#C87D00" strokeWidth="1.5" />
              <rect x="220" y="120" width="120" height="60" fill="none" stroke="#2E9CC8" strokeWidth="1.5" />
              <path d="M180 150h40" stroke="#9BAAB5" strokeWidth="1.5" />
            </svg>
            <div className="text-data absolute bottom-4 left-4 text-steel-signal">
              PROJ.CASE · 002
            </div>
          </div>

          <div>
            <span className="text-eyebrow inline-block rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-amber">
              Featured Project
            </span>

            <h2 className="text-h2 mt-4 text-near-black">
              FMCG Bottling Facility – Line Automation Upgrade
            </h2>

            <p className="text-body mt-4 text-[#4a5568]">
              Replacing legacy relay-based control with a Siemens S7-1500 PLC
              and WinCC SCADA architecture across a multi-line bottling
              facility – reducing unplanned downtime and giving plant
              management real-time OEE visibility across every line.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { label: "Lines Automated", value: "6" },
                { label: "Downtime Reduction", value: "32%" },
                { label: "Commissioning Time", value: "11 Weeks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-h3 text-brand-blue">{stat.value}</div>
                  <div className="text-data mt-1 text-steel-text">
                    {stat.label}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
