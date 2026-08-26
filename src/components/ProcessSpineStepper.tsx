"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "System Audit",
    businessOutcome: "Consultation & Capacity Planning (8–30 m³/h yield)",
    technicalAnchor: "S-Stage Mapping (S1–S8 optimization)",
  },
  {
    title: "Plant Layout",
    businessOutcome: "Custom Tank & Flow Routing",
    technicalAnchor: "CONTIMAXX continuous dissolving & hygienic valve matrices",
  },
  {
    title: "Local Erection",
    businessOutcome: "Local Fabrication & Assembly",
    technicalAnchor: "AISI stainless steel & strict European hygienic standards",
  },
  {
    title: "Automation",
    businessOutcome: "SCADA & Control Panels",
    technicalAnchor: "Siemens S9 Layer (S7-300, S7-1200, S7-1500 PLCs)",
  },
  {
    title: "Commissioning",
    businessOutcome: "Plant Startup & Handover",
    technicalAnchor: "FAT Validation (CIP wash cycles up to 80,000 L/h)",
  }
];

export default function ProcessSpineStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20" style={{ backgroundColor: "#080B0F", fontFamily: "var(--font-ibm-plex-sans)" }} id="beverage-process">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <h2 className="text-3xl font-medium mb-16 text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Methodology & Project Lifecycle
        </h2>
        
        {/* Stepper Rail */}
        <div className="flex flex-col md:flex-row justify-between mb-16 relative">
          {/* Horizontal Line connecting steps (hidden on mobile for stacking) */}
          <div className="hidden md:block absolute top-2 left-0 w-full h-[2px]" style={{ backgroundColor: "#0D1B2E" }} />
          
          {STEPS.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="relative flex-1 py-4 md:py-0 text-left md:text-center transition-all duration-300 group focus:outline-none"
              >
                {/* Node */}
                <div 
                  className="w-4 h-4 mx-auto rounded-full mb-6 hidden md:block transition-colors duration-300 z-10 relative"
                  style={{ backgroundColor: isActive ? "#C87D00" : "#0D1B2E" }}
                />
                
                {/* Title */}
                <span 
                  className="block text-sm uppercase tracking-wider mb-2 font-medium transition-colors duration-300"
                  style={{ 
                    fontFamily: "var(--font-ibm-plex-mono)", 
                    color: isActive ? "#C87D00" : "#6A7A8A" 
                  }}
                >
                  Step 0{index + 1}
                </span>
                <span 
                  className="block text-lg font-medium transition-colors duration-300"
                  style={{ color: isActive ? "#ffffff" : "#9BAAB5" }}
                >
                  {step.title}
                </span>
                
                {/* Mobile indicator line */}
                <div 
                  className="md:hidden w-full h-[2px] mt-4 transition-colors duration-300" 
                  style={{ backgroundColor: isActive ? "#C87D00" : "#0D1B2E" }} 
                />
              </button>
            );
          })}
        </div>

        {/* Split Intent Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-10" style={{ borderColor: "#0D1B2E" }}>
          {/* Business Outcome */}
          <div className="p-8 md:p-10 rounded-lg transition-all duration-500" style={{ backgroundColor: "#0D1B2E" }}>
            <span className="block text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#9BAAB5" }}>
              Business Outcome
            </span>
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
              {STEPS[activeStep].businessOutcome}
            </p>
          </div>
          
          {/* Technical Anchor */}
          <div className="p-8 md:p-10 rounded-lg transition-all duration-500" style={{ backgroundColor: "#0D1B2E" }}>
            <span className="block text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#C87D00" }}>
              Technical Anchor
            </span>
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
              {STEPS[activeStep].technicalAnchor}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
