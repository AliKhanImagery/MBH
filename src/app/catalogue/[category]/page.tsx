import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  PRODUCT_CATEGORIES,
  getProductCategory,
} from "@/data/catalogue-categories";
import { itemsByTag, itemAnchor } from "@/data/catalogue-items";

// Only allow the 6 defined slugs — everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getProductCategory(slug);
  if (!cat) return {};

  return {
    title: `${cat.title} · MBH Solutions Catalogue`,
    description: cat.subtitle,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const cat = getProductCategory(slug);
  if (!cat) notFound();

  const items = itemsByTag(slug);

  return (
    <>
      <Header />

      {/* ── Category Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#080B0F",
          paddingTop: 112,
          paddingBottom: 112,
        }}
      >
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to right, rgba(21,38,84,0.80) 0%, rgba(21,38,84,0.65) 40%, rgba(21,38,84,0.35) 65%, rgba(8,11,15,0.50) 100%)",
          }}
        />

        <div className="relative z-[2] mx-auto max-w-[1400px] px-6 md:px-12">
          {/* Breadcrumb */}
          <nav
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontSize: 11,
              letterSpacing: "0.04em",
              marginBottom: 24,
            }}
          >
            <Link
              href="/catalogue"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              className="hover:!text-white"
            >
              Catalogue
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>
              /
            </span>
            <span style={{ color: "#C87D00" }}>{cat.title}</span>
          </nav>

          {/* Amber bar + eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                height: 2,
                width: 24,
                backgroundColor: "#C87D00",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#C87D00",
              }}
            >
              Product Category
            </span>
          </div>

          <h1
            style={{
              fontWeight: 400,
              fontSize: 42,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: 16,
              textShadow:
                "0 1px 2px rgba(8,11,15,0.45), 0 6px 24px rgba(8,11,15,0.30)",
            }}
          >
            {cat.title}
          </h1>
          <p
            style={{
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 640,
              textShadow:
                "0 1px 2px rgba(8,11,15,0.40), 0 4px 16px rgba(8,11,15,0.25)",
            }}
          >
            {cat.subtitle}
          </p>
        </div>
      </section>

      {/* ── Filtered Catalogue Items ── */}
      <section style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
          {/* Section header */}
          <div className="flex items-baseline justify-between border-b border-near-black py-3">
            <h2
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#080B0F",
              }}
            >
              {cat.title} · Related Catalogue Items
            </h2>
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.04em",
                color: "#6A7A8A",
              }}
            >
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>

          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                id={itemAnchor(item.id)}
                className="grid gap-3 border-b py-6 transition-colors hover:bg-gray-50/60 md:grid-cols-[2.5rem_minmax(0,1fr)_13rem] md:gap-8"
                style={{ borderColor: "#E2E8F0" }}
              >
                {/* Sequence number */}
                <div
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    fontWeight: 400,
                    fontSize: 11,
                    letterSpacing: "0.04em",
                    color: "#6A7A8A",
                    paddingTop: 4,
                  }}
                >
                  {String(item.seq).padStart(2, "0")}
                </div>

                {/* Name + badge + description */}
                <div style={{ minWidth: 0 }}>
                  {item.badge && (
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 400,
                        fontSize: 11,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color:
                          item.badge === "SIGNATURE" ? "#C87D00" : "#6A7A8A",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      lineHeight: 1.35,
                      color: "#080B0F",
                      marginTop: item.badge ? 4 : 0,
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "#4A5568",
                      marginTop: 8,
                      maxWidth: "65ch",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Spec + category */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    textAlign: "right",
                  }}
                  className="md:items-end"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 400,
                      fontSize: 11,
                      letterSpacing: "0.04em",
                      color: "#6A7A8A",
                    }}
                  >
                    ID · {item.id}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      fontWeight: 400,
                      fontSize: 11,
                      letterSpacing: "0.04em",
                      color: "#9BAAB5",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "48px 0", textAlign: "center" }}>
              <p style={{ fontSize: 15, color: "#6A7A8A" }}>
                No catalogue items tagged for this category yet. Browse the{" "}
                <Link
                  href="/catalogue"
                  style={{ color: "#C87D00", textDecoration: "none" }}
                >
                  full catalogue
                </Link>
                .
              </p>
            </div>
          )}

          {/* Back to catalogue */}
          <div style={{ marginTop: 40 }}>
            <Link
              href="/catalogue"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 16,
                fontWeight: 500,
                color: "#C87D00",
                textDecoration: "none",
                transition: "color 200ms",
              }}
            >
              <span style={{ transition: "transform 200ms" }}>←</span>
              Back to Full Catalogue
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
