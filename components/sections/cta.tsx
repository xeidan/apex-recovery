import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
          Ready To Take The Next Step?
        </span>

        <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
          Let Our Team Protect
          <br />
          What Matters Most.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you&apos;re recovering a debt, resolving a property dispute,
          protecting your business, or seeking trusted legal representation,
          we&apos;re ready to help. Schedule a confidential consultation with our
          experienced team today.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Book a Consultation

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="tel:+2348131359504"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            <PhoneCall className="mr-2 h-5 w-5" />

            Call Our Office
          </Link>

        </div>

      </div>

    </section>
  );
}