"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#134e29]/95 backdrop-blur-md text-white border-b border-[#1b6b39]">
      {/* Top utility bar */}
      <div className="bg-[#0d381d] text-xs py-2 px-4 sm:px-8 border-b border-[#1b6b39]/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="mailto:infomikiimportexport@gmail.com" className="flex items-center gap-1.5 hover:text-[#c29b38] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c29b38]" />
              <span>infomikiimportexport@gmail.com</span>
            </a>
            <a href="https://wa.me/251948614061" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#c29b38] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c29b38]" />
              <span>+251 948 614 061 (Phone / WhatsApp)</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-[#c29b38] font-medium">
            <Globe className="w-3.5 h-3.5" />
            <span>Connecting Africa's Harvests & Power to Global Markets</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-[#c29b38] flex items-center justify-center text-[#134e29] font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight block leading-none">MIKI</span>
            <span className="text-[10px] tracking-widest text-[#c29b38] font-semibold uppercase block mt-0.5">Import Export</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#about" className="hover:text-[#c29b38] transition-colors">About Us</a>
          <a href="#trade-model" className="hover:text-[#c29b38] transition-colors">Two-Way Trade</a>
          <a href="#exports" className="hover:text-[#c29b38] transition-colors">Export Portfolio</a>
          <a href="#imports" className="hover:text-[#c29b38] transition-colors">Construction Steel</a>
          <a href="#why-us" className="hover:text-[#c29b38] transition-colors">Why Partner With Us</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-[#c29b38] hover:bg-[#ab8529] text-[#134e29] font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-sm hover:shadow"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-[#1b6b39] rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#134e29] border-t border-[#1b6b39] px-4 py-6 space-y-4 shadow-xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#c29b38] transition-colors"
          >
            About Us
          </a>
          <a
            href="#trade-model"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#c29b38] transition-colors"
          >
            Two-Way Trade
          </a>
          <a
            href="#exports"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#c29b38] transition-colors"
          >
            Export Portfolio
          </a>
          <a
            href="#imports"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#c29b38] transition-colors"
          >
            Construction Steel
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#c29b38] transition-colors"
          >
            Why Partner With Us
          </a>
          <div className="pt-4 border-t border-[#1b6b39]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#c29b38] text-[#134e29] font-semibold py-3 rounded-lg shadow"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
