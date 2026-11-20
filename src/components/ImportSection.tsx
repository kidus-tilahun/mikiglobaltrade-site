import { Building2, CheckCircle2, ShieldCheck, HardHat } from "lucide-react";

export default function ImportSection() {
  const materials = [
    {
      title: "Construction Rebar",
      desc: "High-tensile steel reinforcement bars meeting international structural standards for heavy concrete and commercial construction.",
    },
    {
      title: "Structural Sections",
      desc: "H-beams, I-beams, channels, and angles engineered to provide robust structural framework for industrial and commercial buildings.",
    },
    {
      title: "Steel Plates & Sheets",
      desc: "Durable hot-rolled and cold-rolled plates supplied for fabrication, manufacturing, and heavy civil engineering projects.",
    },
    {
      title: "Industrial Wire & Mesh",
      desc: "Binding wire, galvanized mesh, and fencing wire supplied in bulk to contractors and distributors across growing cities.",
    },
  ];

  return (
    <section id="imports" className="py-20 lg:py-28 bg-[#1e3a5f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full border-8 border-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#f4976b] font-bold text-xs uppercase tracking-widest block mb-3">Import & Partnership</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Construction Steel & Building Materials
            </h2>
            <p className="text-lg text-[#f7f5ef]/90 leading-relaxed mb-8">
              We source reliable construction inputs for the builders of growing cities. Sourced from vetted international manufacturers to meet exact project specifications and timelines.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f4976b] text-[#1e3a5f] flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-sm font-medium">Supplied to contractors, developers & distributors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f4976b] text-[#1e3a5f] flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-sm font-medium">Rigorous quality assurance & mill test certificates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f4976b] text-[#1e3a5f] flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-sm font-medium">Reliable bulk logistics & port-to-site coordination</span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#f4976b] hover:bg-[#f0865a] text-[#1e3a5f] font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg"
            >
              <HardHat className="w-5 h-5" />
              <span>Request Steel Supply Quote</span>
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {materials.map((mat, idx) => (
              <div
                key={idx}
                className="bg-[#0f2540] border border-[#2c5282] p-8 rounded-2xl shadow-xl flex flex-col justify-between hover:border-[#f4976b] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f4976b]/20 text-[#f4976b] flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{mat.title}</h3>
                  <p className="text-sm text-[#f7f5ef]/80 leading-relaxed mb-6">{mat.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#2c5282] flex items-center gap-2 text-xs text-[#f4976b] font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Vetted Manufacturer Sourced
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
