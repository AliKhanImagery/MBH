import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/data/catalogue-categories";

/**
 * Photo-heavy category card strip for the catalogue page.
 * Uses Pattern B (SolutionsShowcase) adapted for a white-background context.
 * 3-col desktop, 2-col tablet, 1-col mobile.
 */
export default function CatalogueCategories() {
  return (
    <>
      <style>{`
        .cat-card {
          position: relative;
          display: block;
          overflow: hidden;
          text-decoration: none;
          background-color: #0D1B2E;
        }
        .cat-card:hover .cat-card-img {
          transform: scale(1.03);
        }
        .cat-card:hover .cat-card-dim {
          opacity: 1;
        }
        .cat-card-img {
          transition: transform 400ms ease-in-out;
        }
        .cat-card-dim {
          opacity: 0;
          transition: opacity 400ms ease-in-out;
        }
      `}</style>

      <section style={{ background: "#ffffff", paddingTop: 48, paddingBottom: 64 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          {/* Eyebrow */}
          <p
            className="text-amber"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Explore by Product Type
          </p>

          {/* H2 */}
          <h2
            className="text-near-black"
            style={{
              fontWeight: 500,
              fontSize: 28,
              letterSpacing: "-0.8px",
              lineHeight: 1.25,
              maxWidth: 640,
            }}
          >
            Equipment, Automation &amp; Instrumentation
          </h2>

          {/* Card grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ marginTop: 40, gap: 2 }}
          >
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/catalogue/${cat.slug}`}
                className="cat-card"
                style={{
                  height: 280,
                  clipPath:
                    i % 3 === 2
                      ? "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)"
                      : i % 3 === 0
                        ? "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)"
                        : undefined,
                }}
              >
                {/* Background image */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="cat-card-img object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Base gradient overlay — always visible */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,27,46,0.92) 0%, rgba(13,27,46,0.4) 45%, transparent 100%)",
                  }}
                />

                {/* Hover deepening overlay */}
                <div
                  className="cat-card-dim absolute inset-0"
                  style={{ background: "rgba(13,27,46,0.2)" }}
                />

                {/* Text content — bottom-aligned */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ padding: 24 }}
                >
                  <span
                    className="text-white"
                    style={{ fontWeight: 500, fontSize: 18, display: "block" }}
                  >
                    {cat.title}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "#9BAAB5",
                      marginTop: 6,
                    }}
                  >
                    {cat.subtitle}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
