import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Optional background photo. When set, the banner shows the image behind a
   *  left-heavy blue-shifted overlay matching the homepage Hero; when omitted,
   *  it stays a flat dark banner with the same blue tint. */
  image?: string;
  imageAlt?: string;
};

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt = "" }: Props) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#080B0F",
        paddingTop: image ? 112 : 80,
        paddingBottom: image ? 112 : 64,
      }}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ zIndex: 0 }}
          />
          {/* Blue-shifted gradient overlay — matches homepage Hero language */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(to right, rgba(21,38,84,0.80) 0%, rgba(21,38,84,0.65) 40%, rgba(21,38,84,0.35) 65%, rgba(8,11,15,0.50) 100%)",
            }}
          />
        </>
      )}

      {/* Flat dark banner also gets a subtle blue tint when no image */}
      {!image && (
        <div
          className="absolute inset-0"
          style={{
            zIndex: 0,
            background:
              "linear-gradient(135deg, rgba(21,38,84,0.25) 0%, rgba(8,11,15,1) 60%)",
          }}
        />
      )}

      <div className="relative z-[2] mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Amber bar + eyebrow — matching Hero pattern */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ height: 2, width: 24, backgroundColor: "#C87D00", flexShrink: 0 }} />
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
            {eyebrow}
          </span>
        </div>

        <h1 style={{
          fontWeight: 400,
          fontSize: 42,
          letterSpacing: "-1.5px",
          lineHeight: 1.1,
          color: "#ffffff",
          marginBottom: 16,
          textWrap: "balance",
          textShadow: "0 1px 2px rgba(8,11,15,0.45), 0 6px 24px rgba(8,11,15,0.30)",
        } as React.CSSProperties}>
          {title}
        </h1>
        <p style={{
          fontWeight: 300,
          fontSize: 16,
          lineHeight: 1.55,
          color: "rgba(255,255,255,0.75)",
          maxWidth: 640,
          textShadow: "0 1px 2px rgba(8,11,15,0.40), 0 4px 16px rgba(8,11,15,0.25)",
        }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
