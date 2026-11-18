import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TwoWayTrade from "@/components/TwoWayTrade";
import ExportPortfolio from "@/components/ExportPortfolio";
import ImportSection from "@/components/ImportSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa] text-[#1c1917]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TwoWayTrade />
        <ExportPortfolio />
        <ImportSection />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
