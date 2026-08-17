import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Optional background photo. When set, the banner shows the image behind a
   *  left-heavy dark overlay; when omitted, it stays a flat dark banner. */
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
          {/* Left-heavy dark overlay keeps the headline legible */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(to right, rgba(8,11,15,0.88) 0%, rgba(8,11,15,0.70) 45%, rgba(8,11,15,0.40) 100%)",
            }}
          />
        </>
      )}

      <div className="relative z-[2] mx-auto max-w-[1400px] px-6 md:px-12">
        <p style={{
          fontFamily: "var(--font-ibm-plex-mono)",
          fontWeight: 500,
          fontSize: 10,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#C87D00",
          marginBottom: 16,
        }}>
          {eyebrow}
        </p>
        <h1 style={{
          fontWeight: 500,
          fontSize: 42,
          letterSpacing: "-1px",
          lineHeight: 1.2,
          color: "#ffffff",
          marginBottom: 16,
          textWrap: "balance",
          textShadow: image ? "0 1px 3px rgba(0,0,0,0.5)" : undefined,
        } as React.CSSProperties}>
          {title}
        </h1>
        <p style={{
          fontWeight: 300,
          fontSize: 16,
          lineHeight: 1.7,
          color: image ? "#C7D0DA" : "#9BAAB5",
          maxWidth: 640,
          textShadow: image ? "0 1px 2px rgba(0,0,0,0.45)" : undefined,
        }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
