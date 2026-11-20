"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tradeType: "Export",
    productCategory: "Oilseeds (Sesame / Niger Seed)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          tradeType: "Export",
          productCategory: "Oilseeds (Sesame / Niger Seed)",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection or contact us directly via WhatsApp.");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f7f5ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#e8653a] font-bold text-xs uppercase tracking-widest block mb-3">Let's Do Business</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1917] mb-6">
            Get in Touch With Our Trade Team
          </h2>
          <p className="text-lg text-[#57534e] leading-relaxed">
            Ready to discuss export commodities, construction steel supply, or partnership opportunities? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#1e3a5f] text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[#e8653a] font-bold text-xs uppercase tracking-widest block mb-2">Direct Contact</span>
              <h3 className="text-3xl font-bold mb-6">Miki Import Export</h3>
              <p className="text-[#f7f5ef]/90 text-sm leading-relaxed mb-8">
                Every consignment is handled with verified quality, compliant paperwork, and transparent communication from origin to destination.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:infomikiimportexport@gmail.com"
                  className="flex items-start gap-4 group hover:text-[#e8653a] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2540] text-[#e8653a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#f7f5ef]/70 block">Email Us</span>
                    <span className="font-semibold text-base">infomikiimportexport@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/251948614061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:text-[#e8653a] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f2540] text-[#e8653a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#f7f5ef]/70 block">Phone / WhatsApp</span>
                    <span className="font-semibold text-base">+251 948 614 061</span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0f2540] text-[#e8653a] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#f7f5ef]/70 block">Office Location</span>
                    <span className="font-semibold text-base">Ethiopia / East Africa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#2c5282] text-xs text-[#f7f5ef]/70">
              Response time: Within 24 business hours. Immediate inquiries via WhatsApp.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#e7e5e4] shadow-md">
            <h3 className="text-2xl font-bold text-[#1c1917] mb-6">Request a Quote / Send Inquiry</h3>

            {status === "success" ? (
              <div className="bg-[#1e3a5f]/10 border border-[#1e3a5f] text-[#1e3a5f] p-6 rounded-xl flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#1e3a5f] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Inquiry Sent Successfully!</h4>
                  <p className="text-sm text-[#57534e]">
                    Thank you for reaching out to Miki Import Export. Our trade team has received your message and will contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-bold uppercase tracking-wider bg-[#1e3a5f] text-white px-4 py-2 rounded-lg hover:bg-[#2c5282] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#57534e] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#e7e5e4] focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none text-sm bg-[#fcfbfa]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#57534e] mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#e7e5e4] focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none text-sm bg-[#fcfbfa]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#57534e] mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[#e7e5e4] focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none text-sm bg-[#fcfbfa]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#57534e] mb-2">
                      Trade Type *
                    </label>
                    <select
                      name="tradeType"
                      value={formData.tradeType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#e7e5e4] focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none text-sm bg-[#fcfbfa]"
                    >
                      <option value="Export">Export (Buy from Miki)</option>
                      <option value="Import">Import / Steel Supply (Source from Miki)</option>
                      <option value="General Partnership">General Partnership Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#57534e] mb-2">
                    Product Category
                  </label>
                  <select
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e7e5e4] focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none text-sm bg-[#fcfbfa]"
                  >
                    <option value="Oilseeds (Sesame / Niger Seed)">Oilseeds (Sesame & Niger Seed)</option>
                    <option value="Pulses (Dried Legumes)">Pulses (Dried Legumes)</option>
                    <option value="Electricity Supply">Cross-Border Electricity</option>
                    <option value="Livestock & Leather">Livestock & Leather Products</option>
                    <option value="Cut Flowers">Cut Flowers (Floriculture)</option>
                    <option value="Textiles">Textiles & Garments</option>
                    <option value="Construction Steel & Building Materials">Construction Steel & Building Materials</option>
                    <option value="Other / Multiple">Other / Multiple Categories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#57534e] mb-2">
                    Inquiry Details & Volume Specifications
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify target quantities, destination port, delivery timeline, or any specific trade questions..."
                    className="w-full px-4 py-3 rounded-xl border border-[#e7e5e4] focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none text-sm bg-[#fcfbfa]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#1e3a5f] hover:bg-[#2c5282] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry / Request Quote</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
