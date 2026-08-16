"use client";

import { type FormEvent, useState } from "react";

const OFFICES = [
  {
    name: "Lahore — Head Office",
    lines: ["Industrial Area, Lahore, Pakistan", "+92 300 000 0000", "info@mbhsolutions.pk"],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const company = fd.get("company") as string;
    const email = fd.get("email") as string;
    const details = fd.get("details") as string;

    const subject = encodeURIComponent(
      `Enquiry from ${name}${company ? ` — ${company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${details}`
    );
    window.location.href = `mailto:info@mbhsolutions.pk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

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

          {submitted ? (
            <div className="flex items-center justify-center rounded-lg border border-white/10 bg-near-black p-8">
              <div className="text-center">
                <p className="text-h3 text-white">Thank you for your enquiry</p>
                <p className="text-body mt-2 text-white/55">
                  Your email client should have opened with the details pre-filled.
                  We will respond within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-cta mt-6 rounded-md border border-white/10 px-[22px] py-3 text-white transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-near-black p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-data text-steel-text">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                    placeholder="Full name"
                  />
                </label>
                <label className="block">
                  <span className="text-data text-steel-text">Company</span>
                  <input
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                    placeholder="Company name"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-data text-steel-text">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-data text-steel-text">Project Details</span>
                  <textarea
                    name="details"
                    rows={4}
                    required
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue"
                    placeholder="Briefly describe the facility and scope"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="text-cta mt-6 w-full bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light sm:w-auto"
              >
                Enquire Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
