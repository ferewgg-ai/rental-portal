"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/rent", label: "Pay Rent" },
  { href: "/lease", label: "Lease" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/contact", label: "Contact" },
  { href: "/profile", label: "Profile" },
  { href: "/login", label: "Login" },
  { href: "/admin", label: "Admin" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-neutral-900 border-b border-neutral-700 text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-400">🏠 Rental Portal</h1>
        <div className="flex gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                pathname === href
                  ? "bg-sky-600 text-white"
                  : "hover:bg-neutral-800 text-neutral-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
