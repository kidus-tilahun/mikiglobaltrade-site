import { ArrowRight, ShieldCheck, Globe2, TrendingUp } from "lucide-react";

export default function Hero() {
  const categories = [
    "Oilseeds",
    "Pulses",
    "Electricity",
    "Livestock & Leather",
    "Cut Flowers",
    "Textiles",
    "Construction Steel",
  ];

  return (
    <section className="relative bg-[#134e29] text-white overflow-hidden py-20 lg:py-32">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-8 border-white/20"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full border-4 border-white/20"></div>
        <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] rounded-full border-2 border-white/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1b6b39] border border-[#238a49] text-[#c29b38] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <Globe2 className="w-4 h-4 text-[#c29b38]" />
            <span>Global Trading Partner</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Connecting Africa's <span className="text-[#c29b38]">Harvests & Power</span> to World Markets
          </h1>

          <p className="text-lg sm:text-xl text-[#f7f5ef]/90 leading-relaxed mb-10">
            Miki Import Export moves quality commodities and goods between producers and buyers across borders — exporting premium agricultural products and importing the construction steel that builds tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#c29b38] hover:bg-[#ab8529] text-[#134e29] font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:translate-y-[-2px]"
            >
              <span>Request a Quote (RFQ)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#exports"
              className="inline-flex items-center justify-center gap-2 bg-[#1b6b39] hover:bg-[#238a49] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all border border-[#238a49]"
            >
              <span>Explore Export Portfolio</span>
            </a>
          </div>
        </div>

        {/* Product category pills ticker/grid */}
        <div className="pt-10 border-t border-[#1b6b39]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c29b38] mb-4">
            Our Core Commodities & Goods:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="bg-[#0d381d]/80 hover:bg-[#1b6b39] text-[#f7f5ef] text-xs sm:text-sm font-medium px-4 py-2 rounded-lg border border-[#1b6b39] transition-colors shadow-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#1b6b39]/70">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#0d381d] rounded-lg text-[#c29b38]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base">Rigorous Quality Grading</h3>
              <p className="text-sm text-[#f7f5ef]/80 mt-1">Careful sourcing, grading and inspection before every shipment.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#0d381d] rounded-lg text-[#c29b38]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base">Two-Way Trade Model</h3>
              <p className="text-sm text-[#f7f5ef]/80 mt-1">Exporting agricultural excellence while importing vital infrastructure steel.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#0d381d] rounded-lg text-[#c29b38]">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base">Flexible Order Volumes</h3>
              <p className="text-sm text-[#f7f5ef]/80 mt-1">Scalable fulfillment from trial test loads to full container volumes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
