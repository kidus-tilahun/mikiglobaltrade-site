import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import CopyrightYear from "@/components/CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-[#0d381d] text-white pt-16 pb-12 border-t border-[#1b6b39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-[#c29b38] flex items-center justify-center text-[#134e29] font-bold text-xl shadow">
                M
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block leading-none">MIKI</span>
                <span className="text-[10px] tracking-widest text-[#c29b38] font-semibold uppercase block mt-0.5">Import Export</span>
              </div>
            </Link>
            <p className="text-[#f7f5ef]/80 text-sm leading-relaxed mb-6 max-w-md">
              Connecting Africa's harvests, power and craft with the world's markets — and bringing back the materials that build tomorrow.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#c29b38] font-medium">
              <Globe className="w-4 h-4" />
              <span>Global Two-Way Trade Partner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#c29b38] mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm text-[#f7f5ef]/80">
              <li><a href="#about" className="hover:text-[#c29b38] transition-colors">About Us</a></li>
              <li><a href="#trade-model" className="hover:text-[#c29b38] transition-colors">Two-Way Trade</a></li>
              <li><a href="#exports" className="hover:text-[#c29b38] transition-colors">Export Portfolio</a></li>
              <li><a href="#imports" className="hover:text-[#c29b38] transition-colors">Construction Steel</a></li>
              <li><a href="#why-us" className="hover:text-[#c29b38] transition-colors">Why Partner With Us</a></li>
              <li><a href="#contact" className="hover:text-[#c29b38] transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Export Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#c29b38] mb-4">Export Products</h3>
            <ul className="space-y-3 text-sm text-[#f7f5ef]/80">
              <li><a href="#exports" className="hover:text-[#c29b38] transition-colors">Oilseeds (Sesame & Niger)</a></li>
              <li><a href="#exports" className="hover:text-[#c29b38] transition-colors">Pulses & Dried Legumes</a></li>
              <li><a href="#exports" className="hover:text-[#c29b38] transition-colors">Cross-Border Electricity</a></li>
              <li><a href="#exports" className="hover:text-[#c29b38] transition-colors">Livestock & Leather</a></li>
              <li><a href="#exports" className="hover:text-[#c29b38] transition-colors">Cut Flowers (Floriculture)</a></li>
              <li><a href="#exports" className="hover:text-[#c29b38] transition-colors">Textiles & Garments</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#c29b38] mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-[#f7f5ef]/80">
              <li>
                <a href="mailto:infomikiimportexport@gmail.com" className="flex items-center gap-2 hover:text-[#c29b38] transition-colors">
                  <Mail className="w-4 h-4 text-[#c29b38] flex-shrink-0" />
                  <span className="truncate">infomikiimportexport@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/251948614061" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c29b38] transition-colors">
                  <Phone className="w-4 h-4 text-[#c29b38] flex-shrink-0" />
                  <span>+251 948 614 061</span>
                </a>
              </li>
              <li className="text-xs text-[#f7f5ef]/60 pt-2">
                Ethiopia / East Africa
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#1b6b39] flex flex-col sm:flex-row items-center justify-between text-xs text-[#f7f5ef]/60 gap-4">
          <p>© <CopyrightYear /> Miki Import Export. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Verified Quality</span>
            <span>•</span>
            <span>Transparent Documentation</span>
            <span>•</span>
            <span>Global Logistics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
