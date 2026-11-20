"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1e3a5f]/95 backdrop-blur-md text-white border-b border-[#2c5282]">
      {/* Top utility bar */}
      <div className="bg-[#0f2540] text-xs py-2 px-4 sm:px-8 border-b border-[#2c5282]/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="mailto:infomikiimportexport@gmail.com" className="flex items-center gap-1.5 hover:text-[#f4976b] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#f4976b]" />
              <span>infomikiimportexport@gmail.com</span>
            </a>
            <a href="https://wa.me/251948614061" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#f4976b] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#f4976b]" />
              <span>+251 948 614 061 (Phone / WhatsApp)</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-[#f4976b] font-medium">
            <Globe className="w-3.5 h-3.5" />
            <span>Connecting Africa's Harvests & Power to Global Markets</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="inline-block rounded-lg bg-white p-2 group">
          <img
            src="/brand/miki-favicon.png"
            alt="MIKI Import Export"
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#about" className="hover:text-[#f4976b] transition-colors">About Us</a>
          <a href="#trade-model" className="hover:text-[#f4976b] transition-colors">Two-Way Trade</a>
          <a href="#exports" className="hover:text-[#f4976b] transition-colors">Export Portfolio</a>
          <a href="#imports" className="hover:text-[#f4976b] transition-colors">Construction Steel</a>
          <a href="#why-us" className="hover:text-[#f4976b] transition-colors">Why Partner With Us</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/docs/company-profile.pdf"
            download
            className="border border-[#f4976b] text-[#f4976b] hover:bg-[#f4976b] hover:text-[#1e3a5f] font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
          >
            Download Company Profile
          </a>
          <a
            href="#contact"
            className="bg-[#f4976b] hover:bg-[#f0865a] text-[#1e3a5f] font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-sm hover:shadow"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-[#2c5282] rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e3a5f] border-t border-[#2c5282] px-4 py-6 space-y-4 shadow-xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#f4976b] transition-colors"
          >
            About Us
          </a>
          <a
            href="#trade-model"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#f4976b] transition-colors"
          >
            Two-Way Trade
          </a>
          <a
            href="#exports"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#f4976b] transition-colors"
          >
            Export Portfolio
          </a>
          <a
            href="#imports"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#f4976b] transition-colors"
          >
            Construction Steel
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-[#f4976b] transition-colors"
          >
            Why Partner With Us
          </a>
          <a
            href="/docs/company-profile.pdf"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#f4976b] hover:text-white transition-colors"
          >
            Download Company Profile (PDF)
          </a>
          <div className="pt-4 border-t border-[#2c5282]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#f4976b] text-[#1e3a5f] font-semibold py-3 rounded-lg shadow"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
