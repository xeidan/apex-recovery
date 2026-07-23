import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Landmark,
  Scale,
} from "lucide-react";

const services = [
  {
    title: "Debt Recovery",
    description:
      "Professional recovery of commercial and personal debts through strategic negotiation and legal enforcement.",
    icon: Landmark,
  },
  {
    title: "Property Disputes",
    description:
      "Resolve land ownership conflicts, title verification issues, tenancy matters, and real estate disputes.",
    icon: Building2,
  },
  {
    title: "Commercial Law",
    description:
      "Protect your business with contract drafting, dispute resolution, regulatory compliance, and legal advisory.",
    icon: Briefcase,
  },
  {
    title: "Diaspora Legal Support",
    description:
      "Trusted legal representation for Nigerians abroad managing assets, investments, inheritance, or litigation.",
    icon: Scale,
  },
];

export default function PracticeAreas() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Our Expertise
          </span>

          <h2 className="mt-5 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
            Legal Solutions Designed Around Your Needs
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you&apos;re recovering unpaid funds, protecting valuable
            property, or resolving complex commercial disputes, Apex provides
            experienced legal support from consultation to resolution.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 font-heading text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center font-semibold text-slate-900 transition group-hover:text-amber-600"
                >
                  Learn More

                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}