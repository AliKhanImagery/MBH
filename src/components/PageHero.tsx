type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section style={{ background: "#080B0F", paddingTop: 80, paddingBottom: 64 }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
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
        } as React.CSSProperties}>
          {title}
        </h1>
        <p style={{
          fontWeight: 300,
          fontSize: 16,
          lineHeight: 1.7,
          color: "#9BAAB5",
          maxWidth: 640,
        }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
