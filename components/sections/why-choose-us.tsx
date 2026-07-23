import {
  ShieldCheck,
  Scale,
  Clock3,
  Globe2,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Results-Driven Representation",
    description:
      "Every matter is approached with a clear objective: protecting your rights and achieving the strongest possible outcome.",
  },
  {
    icon: Scale,
    title: "Experienced Legal Network",
    description:
      "Access a trusted network of legal professionals with expertise in debt recovery, property disputes, and commercial law.",
  },
  {
    icon: Clock3,
    title: "Responsive Communication",
    description:
      "Receive timely updates, transparent guidance, and practical advice throughout every stage of your matter.",
  },
  {
    icon: Globe2,
    title: "Support for the Nigerian Diaspora",
    description:
      "Secure reliable legal representation in Nigeria without needing to be physically present.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Left */}
          <div className="text-center lg:text-left">

            <span className="block text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
              Why Clients Trust Apex
            </span>

            <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Professional Legal Support.
              <br />
              Practical Business Solutions.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0">
              Legal challenges demand more than technical expertise—they require
              strategy, clear communication, and decisive action. Apex Recovery
              Services combines legal knowledge with a practical,
              results-focused approach to help clients move forward with
              confidence.
            </p>

          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">

            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-xl sm:text-left"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 sm:mx-0">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}