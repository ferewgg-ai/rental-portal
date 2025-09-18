import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rental Property Portal",
  description: "State-of-the-art rental management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        {/* ✅ Shared Navbar across all pages */}
        <Navbar />

        {/* ✅ Page-specific content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
