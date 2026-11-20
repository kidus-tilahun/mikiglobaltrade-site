import { Sprout, Zap, ShieldAlert, Flower2, Shirt, Package, Check } from "lucide-react";

export default function ExportPortfolio() {
  const exports = [
    {
      category: "OilseedS",
      title: "Sesame Seeds",
      tagline: "Natural & Hulled Grades",
      desc: "Prized for high oil content and distinctive flavour. Supplied for food processing, oil extraction, bakery and confectionery. Available in natural and hulled grades.",
      icon: Sprout,
      badge: "High Oil Content",
    },
    {
      category: "Oilseeds",
      title: "Niger Seed",
      tagline: "Edible Oil & Bird Feed Blends",
      desc: "A small, oil-rich seed used for edible oil and in premium bird feed blends. Cleaned and graded to strict international buyer specification.",
      icon: Sprout,
      badge: "Premium Graded",
    },
    {
      category: "Pulses",
      title: "Dried Legumes (Pulses)",
      tagline: "Beans, Peas, Lentils & Chickpeas",
      desc: "Protein-rich staples sourced for retail packers, importers and food manufacturers across regional and global markets.",
      icon: Package,
      badge: "Protein-Rich Staples",
    },
    {
      category: "Energy",
      title: "Cross-Border Electricity",
      tagline: "Reliable Regional Power Supply",
      desc: "Cross-border power supply to neighbouring markets, helping meet growing regional demand with clean, dependable energy solutions.",
      icon: Zap,
      badge: "Clean & Dependable",
    },
    {
      category: "Livestock & Leather",
      title: "Livestock & Leather Products",
      tagline: "Animals, Hides, Skins & Finished Goods",
      desc: "Live animals, hides, skins and finished leather goods supplied to regional and international markets under proper health and export standards.",
      icon: ShieldAlert,
      badge: "Export Standard",
    },
    {
      category: "Floriculture",
      title: "Cut Flowers",
      tagline: "Fresh Export-Grade Roses & Stems",
      desc: "Fresh, export-grade roses and other stems, harvested, cooled and shipped to preserve vase life for wholesalers and florists worldwide.",
      icon: Flower2,
      badge: "Cold Chain Transported",
    },
    {
      category: "Textiles",
      title: "Textiles & Garments",
      tagline: "Fabrics, Garments & Woven Goods",
      desc: "Fabrics, garments and traditional woven products crafted for fashion, retail and institutional buyers seeking exceptional quality.",
      icon: Shirt,
      badge: "Traditional & Modern",
    },
  ];

  return (
    <section id="exports" className="py-20 lg:py-28 bg-[#f7f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#c29b38] font-bold text-xs uppercase tracking-widest block mb-2">Export Portfolio</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1917]">
              What We Export
            </h2>
          </div>
          <p className="text-base text-[#57534e] max-w-md">
            Sourced with care, graded to international standards, and delivered on schedule across global trade routes.
          </p>
        </div>

        {/* Grid of exports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exports.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#e7e5e4] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#134e29]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#134e29] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent className="w-7 h-7 text-[#c29b38]" />
                    </div>
                    <span className="bg-[#134e29]/10 text-[#134e29] font-semibold text-xs px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#c29b38] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1c1917] mb-2">{item.title}</h3>
                  <p className="text-xs font-medium text-[#57534e] mb-4 italic">{item.tagline}</p>
                  <p className="text-sm text-[#57534e] leading-relaxed mb-6">{item.desc}</p>
                </div>

                <div className="pt-6 border-t border-[#e7e5e4] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#134e29] flex items-center gap-1">
                    <Check className="w-4 h-4 text-[#c29b38]" /> Verified Quality
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#134e29] hover:text-[#c29b38] transition-colors"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
