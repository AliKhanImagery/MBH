"use client";

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
  return (
    <section className="py-20" style={{ backgroundColor: "#080B0F", fontFamily: "var(--font-ibm-plex-sans)" }} id="beverage-process">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <h2 className="text-3xl font-medium mb-16 text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Methodology & Project Lifecycle
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8">
          {STEPS.map((step, index) => {
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                
                {/* Step Indicator */}
                <div className="md:w-1/4 flex-shrink-0 md:pt-8">
                  <div className="flex items-center gap-4">
                    <span 
                      className="text-4xl font-medium"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#C87D00" }}
                    >
                      0{index + 1}
                    </span>
                    <span 
                      className="text-xl font-medium text-white tracking-wide uppercase"
                    >
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
                    borderLeft: "4px solid #C87D00"
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Business Outcome */}
                    <div>
                      <span className="block text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#9BAAB5" }}>
                        Business Outcome
                      </span>
                      <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                        {step.businessOutcome}
                      </p>
                    </div>
                    
                    {/* Technical Anchor */}
                    <div>
                      <span className="block text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#C87D00" }}>
                        Technical Anchor
                      </span>
                      <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
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
    </section>
  );
}
