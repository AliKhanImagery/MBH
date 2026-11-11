import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProcessSpineStepper from "@/components/ProcessSpineStepper";
import ProcessSpine from "@/components/ProcessSpine";
import ServiceSplit from "@/components/ServiceSplit";
import FabricationSection from "@/components/FabricationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beverage Process Systems & Turnkey Syrup Rooms",
  description:
    "Turnkey engineering for CSD, juice, and syrup production lines — raw material intake, continuous inline blending, CIP recovery systems, and Siemens PLC automation.",
  alternates: {
    canonical: "https://www.mbhsol.com/solutions",
  },
  openGraph: {
    title: "Beverage Process Systems & Automation | MBH Solutions",
    description:
      "Turnkey engineering for CSD, juice, and syrup production lines — from raw material intake through automation and CIP.",
    url: "https://www.mbhsol.com/solutions",
    siteName: "MBH Solutions",
    images: [
      {
        url: "/images/generated/solutions-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Stainless steel syrup tanks, process piping, and control panels in a beverage plant",
      },
    ],
    type: "website",
  },
};

const solutionsBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.mbhsol.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://www.mbhsol.com/solutions",
    },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsBreadcrumb) }}
      />
      <Header />
      <PageHero
        eyebrow="Solutions"
        title="Beverage Process Systems & Automation"
        subtitle="Turnkey engineering for CSD, juice, and syrup production lines — from raw material intake through automation and CIP."
        image="/images/generated/solutions-banner.jpg"
        imageAlt="Stainless steel syrup tanks, process piping, and control panels in a beverage plant"
      />
      <ProcessSpineStepper />
      {/* Image placeholder sits inside Pillar 01, under its eyebrow.
          Passed as a slot so the homepage's <ProcessSpine /> is unaffected.
          Replaced the SolutionsShowcase tile grid on this page only. */}
      <ProcessSpine
        id="process-modules"
        imageSlot={
          <Image
            src="/images/sections/beverage-process-line.png"
            alt="MBH beverage process line — raw material handling through blending, CIP, and control"
            width={4977}
            height={1920}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1400px"
          />
        }
      />
      <ServiceSplit
        id="automation"
        eyebrow="AUTOMATION & CONTROL"
        title="Engineering Control Systems That Run the Line"
        paragraphs={[
          "Designing and integrating PLC-based control systems for production lines — covering control philosophy, panel design, and end-to-end commissioning under a single scope.",
        ]}
        points={[
          "Siemens S7 PLC programming and TIA Portal integration",
          "Control panel design, fabrication, and factory acceptance testing",
          "WinCC and SCADA dashboard deployment with remote access",
        ]}
        imageSide="right"
        variant="automation"
        ctaText="Enquire About Automation"
        ctaHref="/contact"
        imagePlaceholderTag="CTRL.SYS · IMG"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-[#C87D00]">System Pages</p>
          <h2 className="mt-2 text-h2 text-[#080B0F]">Detailed System Engineering</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link
                href="/solutions/syrup-rooms"
                className="block rounded-lg border border-slate-200 p-6 transition-colors hover:border-[#C87D00]"
              >
                <span className="text-h3 text-[#080B0F]">Syrup Room Systems</span>
                <span className="mt-2 block text-sm text-slate-600">
                  Sugar handling, dissolving, filtration, pasteurisation, blending and control, turnkey or retrofit.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/cip-systems"
                className="block rounded-lg border border-slate-200 p-6 transition-colors hover:border-[#C87D00]"
              >
                <span className="text-h3 text-[#080B0F]">Automated CIP Systems</span>
                <span className="mt-2 block text-sm text-slate-600">
                  Multi-circuit clean-in-place systems for beverage and food plants, standalone or retrofit.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <FabricationSection />
      <Contact />
      <Footer />
    </>
  );
}
