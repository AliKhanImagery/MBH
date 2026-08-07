// Placeholder contact details — replace with MBH Solutions' real office/contact info.
const OFFICES = [
  {
    name: "Lahore — Head Office",
    lines: ["Industrial Area, Lahore, Pakistan", "+92 300 000 0000", "info@mbhsolutions.pk"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ibm-panel">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-eyebrow inline-block rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-amber">
              Get In Touch
            </span>
            <h2 className="text-h2 mt-4 text-white">
              Start a Conversation
            </h2>
            <p className="text-body mt-4 max-w-md text-white/60">
              Providing consultation on process systems, industrial automation,
              and control panel engineering for manufacturing facilities
              worldwide.
            </p>

            <div className="mt-10 space-y-8">
              {OFFICES.map((office) => (
                <div key={office.name}>
                  <h3 className="text-h3 text-white">{office.name}</h3>
                  <ul className="mt-2 space-y-1">
                    {office.lines.map((line) => (
                      <li key={line} className="text-body text-white/55">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-lg border border-white/10 bg-near-black p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-data text-steel-text">Name</span>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                  placeholder="Full name"
                />
              </label>
              <label className="block">
                <span className="text-data text-steel-text">Company</span>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                  placeholder="Company name"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-data text-steel-text">Email</span>
                <input
                  type="email"
                  className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-data text-steel-text">Project Details</span>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                  placeholder="Briefly describe the facility and scope"
                />
              </label>
            </div>

            <button
              type="submit"
              className="text-cta mt-6 w-full rounded-md bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light sm:w-auto"
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
