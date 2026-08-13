import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Industries from "@/components/Industries";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Industries"
        title="Sectors We Serve"
        subtitle="Engineering solutions for food and beverage, FMCG, pharmaceutical, and process manufacturing industries."
      />
      <Industries />
      {/* <SolutionsShowcase /> */}
      <Contact />
      <Footer />
    </>
  );
}
