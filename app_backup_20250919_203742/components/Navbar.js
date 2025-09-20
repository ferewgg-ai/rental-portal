"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/pay", label: "Pay Rent" },
  { href: "/renew", label: "Lease Renewal" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container flex items-center gap-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Mahlet & Ferew Rentals" width={36} height={36} />
          <span className="font-semibold hidden sm:inline">Mahlet & Ferew Rentals</span>
        </Link>
        <nav className="ml-auto flex items-center gap-1 sm:gap-2 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`rounded-xl px-3 py-2 ${pathname===l.href ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}