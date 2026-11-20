import { CheckCircle2, ShieldCheck, Handshake, HeartHandshake, Leaf } from "lucide-react";

export default function TwoWayTrade() {
  const values = [
    {
      title: "Quality First",
      desc: "Careful sourcing, grading and inspection before every shipment.",
      icon: ShieldCheck,
    },
    {
      title: "Reliability",
      desc: "Dependable delivery schedules and transparent communication.",
      icon: CheckCircle2,
    },
    {
      title: "Integrity",
      desc: "Fair pricing, honest documentation, long-term partnerships.",
      icon: Handshake,
    },
    {
      title: "Sustainability",
      desc: "Supporting farmers, producers and responsible trade practices.",
      icon: Leaf,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fcfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[#e8653a] font-semibold text-xs uppercase tracking-widest mb-3">
            <span>About Miki</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1917] mb-6">
            Who We Are & Our Two-Way Trade Model
          </h2>
          <p className="text-lg text-[#57534e] leading-relaxed">
            Miki Import Export is a trusted trading company that moves quality commodities and goods between producers and buyers across borders. We export a diverse portfolio of agricultural and industrial products and import the construction steel and building materials that fuel infrastructure growth.
          </p>
        </div>

        {/* Two-Way Trade Model Cards */}
        <div id="trade-model" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Export Card */}
          <div className="bg-[#1e3a5f] text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <span className="text-[#e8653a] font-bold text-xs uppercase tracking-widest block mb-2">Export Portfolio</span>
              <h3 className="text-3xl font-bold mb-4">Outbound Trade (Africa to World)</h3>
              <p className="text-[#f7f5ef]/90 text-base leading-relaxed mb-8">
                Oilseeds, pulses, electricity, livestock and leather products, cut flowers and textiles supplied to international buyers, food processors, and retail partners worldwide.
              </p>
            </div>
            <div className="pt-6 border-t border-[#2c5282] flex items-center justify-between text-sm text-[#e8653a] font-semibold">
              <span>7 Core Export Categories</span>
              <a href="#exports" className="hover:underline flex items-center gap-1">View Portfolio &rarr;</a>
            </div>
          </div>

          {/* Import Card */}
          <div className="bg-[#f7f5ef] border border-[#e7e5e4] text-[#1c1917] p-8 sm:p-10 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <span className="text-[#e8653a] font-bold text-xs uppercase tracking-widest block mb-2">Import & Partnership</span>
              <h3 className="text-3xl font-bold mb-4">Inbound Trade (World to Growing Cities)</h3>
              <p className="text-[#57534e] text-base leading-relaxed mb-8">
                Construction steel (rebar, structural sections, plates, wire) and essential building materials supplied to contractors, developers, and distributors building modern infrastructure.
              </p>
            </div>
            <div className="pt-6 border-t border-[#e7e5e4] flex items-center justify-between text-sm text-[#1e3a5f] font-semibold">
              <span>High-Grade Construction Inputs</span>
              <a href="#imports" className="hover:underline flex items-center gap-1">View Materials &rarr;</a>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#e8653a] font-bold text-xs uppercase tracking-widest block mb-2">Our Foundation</span>
            <h3 className="text-3xl font-bold text-[#1c1917]">Mission & Values</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-[#e7e5e4] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#1e3a5f]/10 text-[#1e3a5f] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1c1917] mb-2">{v.title}</h4>
                  <p className="text-sm text-[#57534e] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Promise Banner */}
        <div className="bg-[#1e3a5f] text-white p-8 sm:p-12 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#e8653a] font-semibold text-xs uppercase tracking-widest mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Our Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Our Promise to Every Partner</h3>
            <p className="text-[#f7f5ef]/90 text-base max-w-2xl">
              Every consignment is handled with the same care: verified quality, compliant paperwork, and clear updates from origin to destination.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-[#f4976b] hover:bg-[#f0865a] text-[#1e3a5f] font-bold px-8 py-4 rounded-xl text-base transition-all whitespace-nowrap shadow-md"
          >
            Start a Trade Partnership
          </a>
        </div>
      </div>
    </section>
  );
}
