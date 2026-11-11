import { DEFAULT_OG_IMAGE } from "@/lib/schema";
import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import TechnologyPartners from "@/components/TechnologyPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global OEM & Technology Partners",
  description:
    "Partnering with leading global OEMs to integrate certified pumps, valves, flowmeters, and Siemens automation hardware into industrial process lines.",
  alternates: {
    canonical: "https://www.mbhsol.com/partners",
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Technology Ecosystem | MBH Solutions",
    description:
      "Working with the world's leading process and automation manufacturers to deliver certified, integrated solutions.",
    url: "https://www.mbhsol.com/partners",
    siteName: "MBH Solutions",
    type: "website",
  },
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Technology Partners"
        title="Our Technology Ecosystem"
        subtitle="Working with the world's leading process and automation manufacturers to deliver certified, integrated solutions."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-[#C87D00]">Principal</p>
          <h2 className="mt-2 text-h2 text-[#080B0F]">Sole Representative of SSP (Germany) in Pakistan</h2>
          <p className="mt-4 max-w-[860px] text-body text-slate-700">
            MBH Solutions is the sole representative in Pakistan of SSP – Stainless Steel Processing GmbH of Bobingen, Germany,
            a supplier of processing systems for food and drink production: syrup rooms, sugar dissolving, filtration and
            pasteurisation, tanks, dosing and blending, CIP cleaning systems and plant control. MBH Solutions works with SSP as its
            principal, delivering local engineering, fabrication, Siemens automation, installation, commissioning and service for
            SSP-based process systems in Pakistan.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/solutions/cip-systems" className="font-medium text-[#1E6DB5] underline-offset-4 hover:underline">CIP Systems</Link>
            <Link href="/solutions" className="font-medium text-[#1E6DB5] underline-offset-4 hover:underline">Process Solutions</Link>
            <a href="https://www.ssp-gmbh.com" rel="noopener" className="font-medium text-[#1E6DB5] underline-offset-4 hover:underline">ssp-gmbh.com</a>
          </p>
        </div>
      </section>
      <TechnologyPartners />
      <Contact />
      <Footer />
    </>
  );
}
