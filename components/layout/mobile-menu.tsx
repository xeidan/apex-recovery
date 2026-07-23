"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({ open, setOpen }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-all duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 flex h-screen w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              Apex
            </h2>

            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Recovery Services
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X className="h-6 w-6 text-slate-700" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-6 py-8">

          <div className="space-y-2">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-auto border-t border-slate-200 pt-8">

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Start Your Case

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <p className="mt-6 text-center text-sm text-slate-500">
              Professional Debt Recovery, Property Protection &
              Commercial Legal Support.
            </p>

          </div>

        </nav>
      </aside>
    </>
  );
}