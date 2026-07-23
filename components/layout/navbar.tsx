"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="group">
            <div className="leading-none">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 transition group-hover:text-amber-600">
                Apex
              </h2>

              <p className="font-body mt-1 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Recovery Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-sm font-medium tracking-wide text-slate-700 transition duration-200 hover:text-amber-600"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-6 py-3 font-body text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={28} className="text-slate-900" />
          </button>

        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}