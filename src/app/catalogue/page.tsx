import type { Metadata } from "next";
import Header from "@/components/Header";
import CatalogueClient from "@/components/catalogue/CatalogueClient";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Process Equipment & Automation Catalogue",
  description:
    "Explore 31 verified beverage process lines, Siemens automation skids, hygienic pumps, valves, and utilities with permanent IDs and rapid 24-hour quotation.",
  alternates: {
    canonical: "https://www.mbhsol.com/catalogue",
  },
  openGraph: {
    title: "Process Equipment & Automation Catalogue | MBH Solutions",
    description:
      "Explore 31 verified process lines, Siemens automation skids, hygienic pumps, valves, and utilities with rapid 24-hour quotation.",
    url: "https://www.mbhsol.com/catalogue",
    siteName: "MBH Solutions",
    images: [
      {
        url: "/images/catalogue/pumps.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial process pumps and hygienic automation equipment",
      },
    ],
    type: "website",
  },
};

const catalogueSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "MBH Solutions Equipment & Automation Catalogue",
  description:
    "31 engineering line items across Process Systems, Automation, Fabrication, and Utilities.",
  url: "https://www.mbhsol.com/catalogue",
  breadcrumb: {
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
        name: "Catalogue",
        item: "https://www.mbhsol.com/catalogue",
      },
    ],
  },
};

export default function CataloguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogueSchema) }}
      />
      <Header />
      <CatalogueClient />
      <Contact />
      <Footer />
    </>
  );
}
