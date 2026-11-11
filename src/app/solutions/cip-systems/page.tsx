import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ORG_ID, SITE_URL, toJsonLd } from "@/lib/schema";
import { CIP_PAGE as C } from "@/data/cip-systems";

const PAGE_URL = `${SITE_URL}/solutions/cip-systems`;
const HERO_IMAGE = "/images/sections/cip-valves.png";
const HERO_ALT =
  "Sanitary valve matrix with pneumatic process valves on a beverage plant CIP and process installation";

export const metadata: Metadata = {
  title: C.metaTitle,
  description: C.metaDescription,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${C.metaTitle} | MBH Solutions`,
    description: C.metaDescription,
    url: PAGE_URL,
    siteName: "MBH Solutions",
    images: [{ url: HERO_IMAGE, width: 600, height: 800, alt: HERO_ALT }],
    type: "website",
  },
};

const pageGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: C.h1,
      description: C.metaDescription,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${PAGE_URL}#service` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${HERO_IMAGE}` },
      dateModified: C.lastUpdated,
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: C.h1,
      serviceType: "Clean-in-place (CIP) system design, fabrication, automation and retrofit",
      description: C.answerBlock,
      provider: { "@id": ORG_ID },
      areaServed: C.areaServed.map((name) => ({ "@type": "Country", name })),
      url: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: C.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
        { "@type": "ListItem", position: 3, name: "CIP Systems", item: PAGE_URL },
      ],
    },
  ],
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${d} ${months.at(m - 1)} ${y}`;
}

const sectionHeading = "text-h2 text-[#080B0F]";
const bodyText = "text-body text-slate-700";

export default function CipSystemsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(pageGraph) }} />
      <Header />
      <PageHero eyebrow={C.eyebrow} title={C.h1} subtitle={C.heroSubtitle} />

      <main className="bg-white">
        {/* Breadcrumb + answer block */}
        <section className="mx-auto max-w-[1400px] px-6 pt-12 md:px-12">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-wider text-slate-500">
            <Link href="/" className="hover:text-[#C87D00]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-[#C87D00]">Solutions</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800">CIP Systems</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <p className="text-[19px] leading-[1.65] text-[#080B0F]" data-answer-block>
                {C.answerBlock}
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-slate-500">
                Last updated {formatDate(C.lastUpdated)}
              </p>
            </div>
            <figure className="overflow-hidden rounded-lg border border-slate-200">
              <Image
                src={HERO_IMAGE}
                alt={HERO_ALT}
                width={600}
                height={800}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 380px"
                priority
              />
            </figure>
          </div>
        </section>

        {/* Specification summary */}
        <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-12">
          <h2 className={sectionHeading}>{C.specHeading}</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {C.specTable.map((row) => (
                  <tr key={row.parameter} className="border-b border-slate-200 last:border-b-0">
                    <th scope="row" className="w-1/3 bg-slate-50 px-5 py-4 font-mono text-xs font-medium uppercase tracking-wider text-slate-600">
                      {row.parameter}
                    </th>
                    <td className="px-5 py-4 text-slate-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Content sections */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          {C.sections.map((s) => (
            <section key={s.id} id={s.id} className="max-w-[860px] scroll-mt-24 pt-16">
              <h2 className={sectionHeading}>{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className={`mt-4 ${bodyText}`}>{p}</p>
              ))}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className={`flex items-start gap-3 ${bodyText}`}>
                      <span aria-hidden="true" className="mt-[2px] font-bold text-[#C87D00]">―</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.links && s.links.length > 0 && (
                <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {s.links.map((l) => (
                    <Link key={l.href} href={l.href} className="font-medium text-[#1E6DB5] underline-offset-4 hover:underline">
                      {l.text}
                    </Link>
                  ))}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Reference */}
        <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-12">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 md:p-10">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-[#C87D00]">Reference</p>
            <h2 className="mt-2 text-h3 text-[#080B0F]">{C.reference.heading}</h2>
            <p className={`mt-4 max-w-[860px] ${bodyText}`}>{C.reference.body}</p>
            <Link href={C.reference.href} className="mt-5 inline-block text-sm font-medium text-[#1E6DB5] underline-offset-4 hover:underline">
              {C.reference.linkText}
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
          <h2 className={sectionHeading}>{C.faqHeading}</h2>
          <div className="mt-6 max-w-[860px] divide-y divide-slate-200 border-y border-slate-200">
            {C.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-h3 text-[#080B0F]">{f.q}</h3>
                <p className={`mt-3 ${bodyText}`}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </>
  );
}
