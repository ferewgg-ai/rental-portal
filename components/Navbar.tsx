"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <div className="flex-shrink-0 text-xl font-bold">
            Rental Portal
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-pink-400">Home</Link>
            <Link href="/rent" className="hover:text-pink-400">Pay Rent</Link>
            <Link href="/lease" className="hover:text-pink-400">Lease</Link>
            <Link href="/maintenance" className="hover:text-pink-400">Maintenance</Link>
            <Link href="/contact" className="hover:text-pink-400">Contact</Link>
            <Link href="/login" className="hover:text-pink-400">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
