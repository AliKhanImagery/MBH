"use client";

import { Eyebrow } from "@/components/Eyebrow";

const STEPS = [
  {
    title: "System Audit",
    businessOutcome: "Consultation & Capacity Planning (8–30 m³/h yield)",
    technicalAnchor: "S-Stage Mapping (S1–S8 optimization)",
  },
  {
    title: "Plant Layout",
    businessOutcome: "Custom Tank & Flow Routing",
    technicalAnchor: "Continuous dissolving systems & hygienic valve matrices",
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
  return (
    <section className="py-24" style={{ backgroundColor: "#080B0F", fontFamily: "var(--font-ibm-plex-sans)" }} id="beverage-process">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-16 lg:gap-20 items-start">
          
          {/* Left Side: Sticky Context */}
          <div className="flex min-w-0 flex-col lg:sticky lg:top-32 h-fit">
            <div className="mb-4">
              <Eyebrow variant="pillar" number="01" label="Project Execution" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Methodology & Lifecycle
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#9BAAB5" }}>
              Our proven 5-step engineering framework guarantees process integrity from the initial system audit through to final automation and plant handover.
            </p>
          </div>

          {/* Right Side: Vertical Stepper Stack */}
          <div className="relative">
            {/* Vertical Connecting Line (Hidden on Mobile) */}
            <div className="hidden md:block absolute top-12 bottom-12 left-[19px] w-px" style={{ backgroundColor: "#1E3352" }} />
            
            <div className="flex flex-col gap-10 md:gap-12">
              {STEPS.map((step, index) => {
                return (
                  <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                    
                    {/* Step Indicator & Node */}
                    <div className="md:w-[200px] flex-shrink-0 flex items-center md:items-start md:pt-8 relative z-10">
                      {/* Stepper Dot */}
                      <div className="hidden md:block absolute left-[19px] top-11 w-2.5 h-2.5 rounded-full -translate-x-[4px] transition-colors duration-300 group-hover:bg-[#C87D00]" 
                           style={{ backgroundColor: "#1E3352", outline: "6px solid #080B0F" }} />
                      
                      <div className="flex flex-col pl-0 md:pl-12">
                        <span className="text-2xl font-medium transition-colors duration-300 group-hover:text-[#C87D00]" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#6A7A8A" }}>
                          0{index + 1}
                        </span>
                        <span className="text-lg font-medium text-white tracking-wide uppercase mt-1">
                          {step.title}
                        </span>
                      </div>
                    </div>

                    {/* Industrial Cut Tile */}
                    <div 
                      className="flex-1 w-full p-8 md:p-10 rounded-sm hover:bg-[#162540] transition-colors duration-300"
                      style={{ 
                        backgroundColor: "#0D1B2E",
                        clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                        borderLeft: "2px solid #1E3352"
                      }}
                    >
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {/* Business Outcome */}
                        <div>
                          <span className="block text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#9BAAB5" }}>
                            Business Outcome
                          </span>
                          <p className="text-lg font-medium text-white leading-relaxed">
                            {step.businessOutcome}
                          </p>
                        </div>
                        
                        {/* Technical Anchor */}
                        <div>
                          <span className="block text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#C87D00" }}>
                            Technical Anchor
                          </span>
                          <p className="text-lg font-medium text-white leading-relaxed">
                            {step.technicalAnchor}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
