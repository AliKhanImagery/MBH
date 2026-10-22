// Shared structured-data (JSON-LD) building blocks.
//
// Every page references the organisation and the site by the stable @id values
// below, so search and AI engines resolve "MBH Solutions" to one entity.
//
// Only publicly verifiable facts belong here. Fields still waiting on Gate 0
// sign-off (founding year, full street address, company LinkedIn / Google
// Business Profile URLs) are deliberately left out — add them in
// SITE_ENTITY once confirmed.

export const SITE_URL = "https://www.mbhsol.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;

export const SITE_ENTITY = {
  name: "MBH Solutions",
  logo: `${SITE_URL}/mbh-logo.png`,
  email: "sales@mbhsol.com",
  telephone: "+92-332-2007373",
  addressLocality: "Lahore",
  addressCountry: "PK",
  founderName: "Hammad Alvi",
  founderSameAs: ["https://www.linkedin.com/in/hammad-alvi-pub"],
  // TODO(G0-08 / ENT-06): add company LinkedIn and Google Business Profile URLs.
  orgSameAs: [] as string[],
};

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_ENTITY.name,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: SITE_ENTITY.logo,
  },
  description:
    "MBH Solutions is an engineering company delivering beverage process systems, Siemens PLC and SCADA automation, CIP systems, and sanitary stainless fabrication for food and beverage, FMCG, pharmaceutical, and power generation manufacturers.",
  email: SITE_ENTITY.email,
  telephone: SITE_ENTITY.telephone,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_ENTITY.addressLocality,
    addressCountry: SITE_ENTITY.addressCountry,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE_ENTITY.email,
    telephone: SITE_ENTITY.telephone,
    availableLanguage: ["English"],
  },
  founder: { "@id": FOUNDER_ID },
  knowsAbout: [
    "Syrup room systems",
    "Continuous sugar dissolving",
    "CIP systems",
    "Siemens PLC programming",
    "SCADA and HMI development",
    "Sanitary stainless steel fabrication",
    "Beverage process line retrofit",
  ],
  ...(SITE_ENTITY.orgSameAs.length ? { sameAs: SITE_ENTITY.orgSameAs } : {}),
};

const founder = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: SITE_ENTITY.founderName,
  jobTitle: "Founder and CEO",
  worksFor: { "@id": ORG_ID },
  sameAs: SITE_ENTITY.founderSameAs,
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_ENTITY.name,
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organization, founder, website],
};

/** Serialise JSON-LD safely for a <script> tag (escapes "<" per Next.js guidance). */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Fallback social image for pages that have no route-specific photo yet. */
export const DEFAULT_OG_IMAGE = {
  url: "/images/hero/hero.png",
  width: 1200,
  height: 630,
  alt: "MBH Solutions industrial automation and beverage process systems",
};
