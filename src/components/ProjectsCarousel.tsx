"use client";

import { useState, useEffect, useCallback } from "react";

type Project = {
  eyebrow: string;
  title: string;
  desc: string;
  stats: { value: string; label: string }[];
  image?: string;
};

const PROJECTS: Project[] = [
  {
    eyebrow: "Coca-Cola · Iran",
    title: "Syrup Room and CIP System — Tehran Facility",
    desc: "Erection and commissioning of a complete syrup room and CIP system — covering mechanical installation, process piping, automation integration, and system startup.",
    stats: [
      { value: "Iran", label: "Location" },
      { value: "Syrup Room + CIP", label: "Systems" },
      { value: "Turnkey", label: "Scope" },
    ],
  },
  {
    eyebrow: "PepsiCo · Pakistan",
    title: "Syrup Room Modernisation — Lahore Plant",
    desc: "Complete retrofit and automation upgrade of the existing syrup room — new Siemens PLC architecture, SCADA integration, and process instrumentation.",
    stats: [
      { value: "Pakistan", label: "Location" },
      { value: "Syrup Room", label: "Systems" },
      { value: "Retrofit", label: "Scope" },
    ],
  },
  {
    eyebrow: "Fauji Foods · Pakistan",
    title: "Juice Process Line — Sahiwal Factory",
    desc: "Turnkey juice process line from raw material intake through pasteurisation, blending, and CIP — designed, fabricated, and commissioned on site.",
    stats: [
      { value: "Pakistan", label: "Location" },
      { value: "Juice Line", label: "Systems" },
      { value: "Turnkey", label: "Scope" },
    ],
  },
  {
    eyebrow: "Dalda Foods · Pakistan",
    title: "Process Automation and Control Upgrade",
    desc: "Plant-wide Siemens S7 PLC migration, WinCC SCADA deployment, HMI programming, and control panel engineering across multiple production lines.",
    stats: [
      { value: "Pakistan", label: "Location" },
      { value: "PLC + SCADA", label: "Systems" },
      { value: "Automation", label: "Scope" },
    ],
  },
];

const INTERVAL = 5000;

export default function ProjectsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % PROJECTS.length);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const p = PROJECTS[active];

  return (
    <>
      <style>{`
        .mbh-proj-carousel {
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        .mbh-proj-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.12;
          transition: opacity 600ms ease;
        }
        .mbh-proj-nav {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mbh-proj-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #E2E8F0;
          background: transparent;
          color: #6A7A8A;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 200ms ease, color 200ms ease;
          font-size: 16px;
          line-height: 1;
        }
        .mbh-proj-btn:hover {
          border-color: #C87D00;
          color: #C87D00;
        }
        .mbh-proj-dot {
          width: 8px;
          height: 8px;
          border: 1px solid #E2E8F0;
          background: transparent;
          cursor: pointer;
          transition: background 200ms ease, border-color 200ms ease;
        }
        .mbh-proj-dot.active {
          background: #C87D00;
          border-color: #C87D00;
        }
        .mbh-proj-link {
          color: #6A7A8A;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .mbh-proj-link:hover { color: #C87D00; }

        .mbh-proj-fade-enter {
          animation: mbhProjFadeIn 500ms ease forwards;
        }
        @keyframes mbhProjFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="mbh-proj-carousel"
        style={{ paddingTop: 80, paddingBottom: 80 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mbh-proj-bg" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">

          {/* Top bar — eyebrow + nav */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
            <p style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#C87D00",
            }}>
              Projects & References
            </p>

            <div className="mbh-proj-nav">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  className={`mbh-proj-dot${i === active ? " active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Project ${i + 1}`}
                />
              ))}
              <button className="mbh-proj-btn" onClick={prev} aria-label="Previous project">←</button>
              <button className="mbh-proj-btn" onClick={next} aria-label="Next project">→</button>
            </div>
          </div>

          {/* Content — two columns */}
          <div
            key={active}
            className="mbh-proj-fade-enter grid items-center gap-10 lg:grid-cols-[45fr_55fr]"
          >
            {/* Left — image placeholder */}
            <div
              style={{
                background: "#F1F5F9",
                border: "1px solid #E2E8F0",
                minHeight: 340,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: "#CBD5E1",
                  letterSpacing: "0.06em",
                }}
              >
                PROJ.REF · IMG
              </span>
            </div>

            {/* Right — copy */}
            <div>
              <p style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#C87D00",
                marginBottom: 16,
              }}>
                {p.eyebrow}
              </p>

              <h3 style={{
                fontWeight: 500,
                fontSize: 26,
                letterSpacing: "-0.6px",
                lineHeight: 1.3,
                color: "#080B0F",
              }}>
                {p.title}
              </h3>

              <p style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.75,
                color: "#6A7A8A",
                marginTop: 20,
              }}>
                {p.desc}
              </p>

              {/* Stats */}
              <div style={{ display: "flex", alignItems: "center", marginTop: 32, gap: 0 }}>
                {p.stats.map((stat, i) => (
                  <div key={stat.label} style={{ display: "flex", alignItems: "stretch" }}>
                    {i > 0 && (
                      <div style={{ width: 1, height: 36, background: "#E2E8F0", alignSelf: "center", flexShrink: 0, marginLeft: 24, marginRight: 24 }} />
                    )}
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.1, color: "#080B0F" }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-ibm-plex-mono)",
                        fontWeight: 400,
                        fontSize: 10,
                        textTransform: "uppercase",
                        color: "#6A7A8A",
                        letterSpacing: "0.04em",
                        marginTop: 4,
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: 28 }}>
                <a href="/references" className="mbh-proj-link" style={{ fontSize: 14, fontWeight: 400 }}>
                  View all references →
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
