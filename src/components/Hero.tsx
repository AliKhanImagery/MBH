"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Hero background slideshow — the hero photo plus a few section photos.
const SLIDES = [
  "/images/hero/hero.png",
  "/images/sections/industrial-automation.png",
  "/images/sections/CSD_processing.png",
  "/images/sections/fabrication-welding.jpeg",
  "/images/sections/Juice-processing.png",
];

const HOLD_MS = 6000; // time each slide stays before crossfading

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // hold on the first image when reduced motion is set
    const id = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      HOLD_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden text-white">
      {/* Crossfading background slides, each with a slow Ken Burns zoom */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === active ? 1 : 0,
            transition: "opacity 1500ms ease-in-out",
            zIndex: 0,
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === active ? "mbh-hero-zoom" : ""}`}
          />
        </div>
      ))}

      {/* Directional gradient overlay — heavier on left for legibility, fades
          right. Blue darkened ~10 points from the base tone. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(21,38,84,0.80) 0%, rgba(21,38,84,0.65) 40%, rgba(21,38,84,0.35) 65%, rgba(8,11,15,0.50) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-[2]">
        <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 md:px-12 md:pt-40">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-amber" />
              <span className="text-eyebrow text-amber">
                Siemens Solution Partner
              </span>
            </div>

            <h1
              className="text-h1 text-white"
              style={{ textShadow: "0 1px 2px rgba(8,11,15,0.45), 0 6px 24px rgba(8,11,15,0.30)" }}
            >
              Engineering Beverage Process Systems and Industrial Automation for the World&apos;s Leading Manufacturers
            </h1>

            <p
              className="text-subtitle mt-6 text-white/75"
              style={{ textShadow: "0 1px 2px rgba(8,11,15,0.40), 0 4px 16px rgba(8,11,15,0.25)" }}
            >
              Delivering turnkey syrup rooms, CSD and juice process lines, and
              plant-wide control systems — from new installations to the
              modernisation and retrofit of existing production facilities.
            </p>

            <a
              href="#contact"
              className="text-cta mt-8 inline-block bg-amber px-[22px] py-3 text-white transition-colors hover:bg-amber-light"
            >
              Enquire Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
