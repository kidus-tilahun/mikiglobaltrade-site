import { Layers, PackageCheck, Scale, RefreshCw } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Diverse Portfolio",
      desc: "Seven product lines spanning oilseeds, pulses, electricity, livestock, leather, cut flowers, textiles, and construction steel under one trusted partner.",
      icon: Layers,
    },
    {
      title: "End-to-End Handling",
      desc: "Complete management from origin sourcing and rigorous quality inspections to compliant international documentation and logistics.",
      icon: PackageCheck,
    },
    {
      title: "Flexible Orders",
      desc: "Scalable volume fulfillment tailored to your business needs, ranging from initial trial loads to full container volumes.",
      icon: Scale,
    },
    {
      title: "Two-Way Trade Expertise",
      desc: "Our dual capability in outbound commodity exports and inbound construction steel imports strengthens every commercial deal.",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#fcfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c29b38] font-bold text-xs uppercase tracking-widest block mb-3">Partnership Advantage</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1917] mb-6">
            Why Partner With Miki
          </h2>
          <p className="text-lg text-[#57534e] leading-relaxed">
            We combine regional market expertise with international trade standards to deliver dependable results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-[#e7e5e4] shadow-sm hover:shadow-lg transition-shadow flex items-start gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[#134e29]/10 text-[#134e29] flex-shrink-0 flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-[#134e29]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1c1917] mb-3">{item.title}</h3>
                  <p className="text-base text-[#57534e] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
