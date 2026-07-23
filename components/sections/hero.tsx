import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-amber-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-slate-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 pt-28 pb-20 lg:px-8">
        <div className="w-full max-w-3xl">

          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-5 py-2">
              <span className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-700">
                Trusted Legal Recovery Specialists
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-center font-heading text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-left lg:text-7xl">
            Recover What
            <br />
            Is Rightfully Yours.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-slate-600 lg:mx-0 lg:text-left">
            Apex Recovery Services helps individuals, businesses, and members
            of the Nigerian diaspora recover debts, resolve property disputes,
            and protect commercial interests through trusted legal expertise.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
            >
              Start Your Case
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white sm:w-auto"
            >
              Explore Services
            </Link>

          </div>

          {/* Trust Indicators */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <CheckCircle2 className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-slate-700">
                Debt Recovery
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <CheckCircle2 className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-slate-700">
                Property Disputes
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <CheckCircle2 className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-slate-700">
                Commercial Legal Support
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}