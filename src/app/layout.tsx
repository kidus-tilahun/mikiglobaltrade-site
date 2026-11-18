import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miki Import Export | Global Trade & Two-Way Commodities Partner",
  description: "Connecting Africa's harvests, power and craft with world markets — and importing construction steel and building materials that build tomorrow.",
  keywords: [
    "Miki Import Export",
    "African exports",
    "sesame seeds export",
    "niger seed",
    "pulses exporter",
    "cross border electricity",
    "leather and livestock",
    "cut flowers floriculture",
    "construction steel import",
    "Ethiopia trade partner"
  ],
  openGraph: {
    title: "Miki Import Export | Global Trade & Two-Way Commodities Partner",
    description: "Connecting Africa's harvests, power and craft with world markets — and importing construction steel and building materials that build tomorrow.",
    url: "https://mikiimportexport.com",
    siteName: "Miki Import Export",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcfbfa] text-[#1c1917]">
        {children}
      </body>
    </html>
  );
}
