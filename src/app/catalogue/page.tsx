import type { Metadata } from "next";
import Header from "@/components/Header";
import CatalogueClient from "@/components/catalogue/CatalogueClient";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Catalogue · MBH Solutions",
  description:
    "31 line items across process systems, automation, fabrication, and utilities. Every item quotable within one business day.",
};

export default function CataloguePage() {
  return (
    <>
      <Header />
      <CatalogueClient />
      <Contact />
      <Footer />
    </>
  );
}
