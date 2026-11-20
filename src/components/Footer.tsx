import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import CopyrightYear from "@/components/CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-[#0f2540] text-white pt-16 pb-12 border-t border-[#2c5282]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 rounded-lg bg-white p-3">
              <img
                src="/brand/miki-primary-logo.png"
                alt="MIKI Import Export"
                className="h-24 md:h-28 w-auto"
              />
            </Link>
            <p className="text-[#f7f5ef]/80 text-sm leading-relaxed mb-6 max-w-md">
              Connecting Africa's harvests, power and craft with the world's markets — and bringing back the materials that build tomorrow.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#f4976b] font-medium">
              <Globe className="w-4 h-4" />
              <span>Global Two-Way Trade Partner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f4976b] mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm text-[#f7f5ef]/80">
              <li><a href="#about" className="hover:text-[#f4976b] transition-colors">About Us</a></li>
              <li><a href="#trade-model" className="hover:text-[#f4976b] transition-colors">Two-Way Trade</a></li>
              <li><a href="#exports" className="hover:text-[#f4976b] transition-colors">Export Portfolio</a></li>
              <li><a href="#imports" className="hover:text-[#f4976b] transition-colors">Construction Steel</a></li>
              <li><a href="#why-us" className="hover:text-[#f4976b] transition-colors">Why Partner With Us</a></li>
              <li><a href="#contact" className="hover:text-[#f4976b] transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Export Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f4976b] mb-4">Export Products</h3>
            <ul className="space-y-3 text-sm text-[#f7f5ef]/80">
              <li><a href="#exports" className="hover:text-[#f4976b] transition-colors">Oilseeds (Sesame & Niger)</a></li>
              <li><a href="#exports" className="hover:text-[#f4976b] transition-colors">Pulses & Dried Legumes</a></li>
              <li><a href="#exports" className="hover:text-[#f4976b] transition-colors">Cross-Border Electricity</a></li>
              <li><a href="#exports" className="hover:text-[#f4976b] transition-colors">Livestock & Leather</a></li>
              <li><a href="#exports" className="hover:text-[#f4976b] transition-colors">Cut Flowers (Floriculture)</a></li>
              <li><a href="#exports" className="hover:text-[#f4976b] transition-colors">Textiles & Garments</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f4976b] mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-[#f7f5ef]/80">
              <li>
                <a href="mailto:infomikiimportexport@gmail.com" className="flex items-center gap-2 hover:text-[#f4976b] transition-colors">
                  <Mail className="w-4 h-4 text-[#f4976b] flex-shrink-0" />
                  <span className="truncate">infomikiimportexport@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/251948614061" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#f4976b] transition-colors">
                  <Phone className="w-4 h-4 text-[#f4976b] flex-shrink-0" />
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
        <div className="pt-8 border-t border-[#2c5282] flex flex-col sm:flex-row items-center justify-between text-xs text-[#f7f5ef]/60 gap-4">
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
