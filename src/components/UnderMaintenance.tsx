export default function UnderMaintenance() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080B0F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 560 }}>

        {/* Logo */}
        <div style={{ fontWeight: 500, fontSize: 24, color: "#ffffff" }}>
          MBH <span style={{ color: "#C87D00" }}>SOLUTIONS</span>
        </div>

        {/* 32px gap */}
        <div style={{ marginTop: 32 }}>
          {/* H1 */}
          <h1 style={{
            fontWeight: 500,
            fontSize: 28,
            color: "#ffffff",
            letterSpacing: "-0.5px",
            lineHeight: 1.25,
          }}>
            This Page Is Under Maintenance
          </h1>

          {/* Subtitle */}
          <p style={{
            fontWeight: 400,
            fontSize: 16,
            color: "#9BAAB5",
            lineHeight: 1.6,
            marginTop: 16,
          }}>
            We&apos;re rebuilding our website to better represent our
            capabilities. This page will be available soon.
          </p>
        </div>

        {/* 48px gap + links */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <a
            href="/"
            style={{ fontWeight: 500, fontSize: 14, color: "#C87D00", textDecoration: "none" }}
          >
            Return to Home
          </a>
          <a
            href="/#contact"
            style={{ fontWeight: 500, fontSize: 14, color: "#9BAAB5", textDecoration: "none" }}
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}
