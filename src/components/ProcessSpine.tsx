const STAGES = [
  { code: "S1", label: "Raw Material Intake" },
  { code: "S2", label: "Water Treatment" },
  { code: "S3", label: "Sugar Dissolving" },
  { code: "S4", label: "Filtration" },
  { code: "S5", label: "Pasteurisation" },
  { code: "S6", label: "Mixing & Blending" },
  { code: "S7", label: "CIP Cleaning" },
  { code: "S8", label: "Syrup Storage" },
  { code: "S9", label: "Automation & Control", highlight: true },
] as const;

export default function ProcessSpine() {
  return (
    <section style={{ background: "#080B0F", paddingTop: 96, paddingBottom: 96 }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "#C87D00",
            marginBottom: 16,
          }}
        >
          The Process
        </p>

        {/* H2 */}
        <h2
          style={{
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: "-0.8px",
            lineHeight: 1.25,
            color: "#ffffff",
            marginBottom: 48,
          }}
        >
          From Raw Material to Finished Beverage — Engineered End to End
        </h2>

        {/* Rail — horizontally scrollable on smaller viewports */}
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 860, position: "relative" }}>

            {/*
              Horizontal spine line.
              Node layout from top: code-label (20px) + gap (8px) + half-circle (6px) = 34px
            */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 34,
                height: 1,
                background: "#1E3352",
              }}
            />

            {/* Nine nodes, evenly spaced */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(9, 1fr)",
              }}
            >
              {STAGES.map((stage) => {
                const hi = "highlight" in stage && stage.highlight;
                return (
                  <div
                    key={stage.code}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* Stage code — fixed 20px container keeps circle on the line */}
                    <div
                      style={{
                        height: 20,
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono)",
                          fontWeight: 400,
                          fontSize: 11,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: hi ? "#C87D00" : "#9BAAB5",
                        }}
                      >
                        {stage.code}
                      </span>
                    </div>

                    {/* 8px gap above circle */}
                    <div style={{ height: 8 }} />

                    {/* Node circle */}
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: hi ? "#C87D00" : "#0D1B2E",
                        border: `1px solid ${hi ? "#C87D00" : "#1E3352"}`,
                        position: "relative",
                        zIndex: 1,
                      }}
                    />

                    {/* 8px gap below circle */}
                    <div style={{ height: 8 }} />

                    {/* Stage name */}
                    <span
                      style={{
                        fontWeight: hi ? 500 : 400,
                        fontSize: 13,
                        lineHeight: 1.4,
                        color: hi ? "#ffffff" : "#9BAAB5",
                        textAlign: "center",
                        maxWidth: 80,
                      }}
                    >
                      {stage.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Body copy */}
        <p
          style={{
            fontWeight: 400,
            fontSize: 15,
            color: "#9BAAB5",
            textAlign: "center",
            marginTop: 32,
            lineHeight: 1.6,
          }}
        >
          Each stage is an individually engineered module — available as a complete
          turnkey system or as a standalone solution integrated into your existing line.
        </p>

      </div>
    </section>
  );
}
