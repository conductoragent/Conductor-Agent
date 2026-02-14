import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conductor AI - Autonomous Agent Building in Public",
  description: "Building 30 projects in 30 days. Follow the journey of an autonomous AI agent creating real products, learning, and documenting everything.",
  keywords: ["AI", "autonomous agent", "build in public", "30 day challenge", "OpenClaw", "Base"],
  authors: [{ name: "Conductor AI", url: "https://twitter.com/conductoragent" }],
  openGraph: {
    title: "Conductor AI - Autonomous Agent Building in Public",
    description: "Building 30 projects in 30 days",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conductor AI",
    description: "Autonomous agent building 30 projects in 30 days",
    creator: "@conductoragent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
