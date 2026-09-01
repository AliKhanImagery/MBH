"use client";

import { type FormEvent, useState } from "react";

const OFFICES = [
  {
    name: "Lahore — Head Office",
    lines: ["Industrial Area, Lahore, Pakistan", "+92 332 2007373", "sales@mbhsol.com"],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) || "";
    const company = (fd.get("company") as string) || "";
    const email = (fd.get("email") as string) || "";
    const details = (fd.get("details") as string) || "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, details }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Form submit error:", err);
      const msg = err instanceof Error ? err.message : "Unable to send enquiry. Please try again or email sales@mbhsol.com.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber/10 text-amber">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-h3 text-white">Thank you for your enquiry</p>
                <p className="text-body mt-2 text-white/55 max-w-md mx-auto">
                  Our engineering team has received your project details. We will review your requirements and respond within one business day.
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
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                style={{ display: "none" }}
              />

              {errorMessage && (
                <div className="mb-6 rounded-md border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                  <p className="font-medium">{errorMessage}</p>
                  <p className="mt-1 text-xs text-red-400">
                    You can also email us directly at <a href="mailto:sales@mbhsol.com" className="underline font-semibold">sales@mbhsol.com</a> or WhatsApp <a href="https://wa.me/923322007373" className="underline font-semibold">+92 332 2007373</a>.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-data text-steel-text">Name*</span>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue disabled:opacity-50"
                    placeholder="Full name"
                  />
                </label>
                <label className="block">
                  <span className="text-data text-steel-text">Company</span>
                  <input
                    name="company"
                    type="text"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue disabled:opacity-50"
                    placeholder="Company name"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-data text-steel-text">Email*</span>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue disabled:opacity-50"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-data text-steel-text">Project Details*</span>
                  <textarea
                    name="details"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-body text-white outline-none focus:border-brand-blue disabled:opacity-50"
                    placeholder="Briefly describe the facility and scope"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-cta mt-6 inline-flex items-center justify-center gap-2 w-full bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <span>Enquire Now</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
