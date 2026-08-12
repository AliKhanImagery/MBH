import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProductsTeaser from "@/components/ProductsTeaser";
import TechnologyPartners from "@/components/TechnologyPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Products"
        title="Process Equipment & Spares"
        subtitle="Pumps, valves, instruments, automation components, and lab equipment sourced from leading global manufacturers."
      />
      <ProductsTeaser />
      <TechnologyPartners />
      <Contact />
      <Footer />
    </>
  );
}
