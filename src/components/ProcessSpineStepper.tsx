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
    <section className="py-14 md:py-20" style={{ backgroundColor: "#080B0F", fontFamily: "var(--font-ibm-plex-sans)" }} id="beverage-process">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Sticky Context */}
          <div className="flex min-w-0 flex-col lg:sticky lg:top-32 h-fit">
            <div className="mb-3">
              <Eyebrow variant="pillar" number="01" label="Project Execution" />
            </div>
            <h2 className="text-h2 text-white">
              Methodology & Lifecycle
            </h2>
            <p className="mt-4 text-subtitle text-steel-text">
              Our proven 5-step engineering framework guarantees process integrity from the initial system audit through to final automation and plant handover.
            </p>
          </div>

          {/* Right Side: Vertical Stepper Stack */}
          <div className="relative">
            {/* Vertical Connecting Line (Hidden on Mobile) */}
            <div className="hidden md:block absolute top-6 bottom-6 left-[19px] w-px" style={{ backgroundColor: "#1E3352" }} />
            
            <div className="flex flex-col gap-6 md:gap-8">
              {STEPS.map((step, index) => {
                return (
                  <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                    
                    {/* Step Indicator & Node */}
                    <div className="md:w-[180px] flex-shrink-0 flex items-center md:items-start md:pt-4 relative z-10">
                      {/* Stepper Dot */}
                      <div className="hidden md:block absolute left-[19px] top-6 w-2.5 h-2.5 rounded-full -translate-x-[4px] transition-colors duration-300 group-hover:bg-amber" 
                           style={{ backgroundColor: "#1E3352", outline: "6px solid #080B0F" }} />
                      
                      <div className="flex flex-col pl-0 md:pl-10">
                        <span className="font-mono text-xl font-medium text-[#6A7A8A] transition-colors duration-300 group-hover:text-amber">
                          0{index + 1}
                        </span>
                        <span className="text-h3 text-white mt-0.5">
                          {step.title}
                        </span>
                      </div>
                    </div>

                    {/* Industrial Cut Tile */}
                    <div 
                      className="flex-1 w-full p-5 md:p-6 rounded-sm hover:bg-[#162540] border border-[#1E3352]/70 hover:border-[#1E3352] transition-colors duration-300"
                      style={{ 
                        backgroundColor: "#0D1B2E",
                        clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                        borderLeft: "2px solid #1E3352"
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Business Outcome */}
                        <div>
                          <span className="block text-data text-steel-text mb-1.5">
                            Business Outcome
                          </span>
                          <p className="text-body text-white">
                            {step.businessOutcome}
                          </p>
                        </div>
                        
                        {/* Technical Anchor */}
                        <div>
                          <span className="block text-data text-amber mb-1.5">
                            Technical Anchor
                          </span>
                          <p className="text-body text-white">
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
