"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of cases does Apex Recovery Services handle?",
    answer:
      "We assist with debt recovery, property disputes, commercial litigation, contract matters, and legal support for Nigerians in the diaspora.",
  },
  {
    question: "Can you represent clients outside Nigeria?",
    answer:
      "Yes. We regularly assist Nigerians living abroad by managing legal matters, documentation, and representation within Nigeria.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our enquiry form, phone, or email. We'll schedule an initial consultation to understand your matter and advise you on the next steps.",
  },
  {
    question: "Are consultations confidential?",
    answer:
      "Absolutely. Every discussion is handled with the highest level of confidentiality and professional ethics.",
  },
  {
    question: "How long does the legal process take?",
    answer:
      "The timeline depends on the complexity of the matter. During your consultation, we'll provide a realistic assessment and keep you informed throughout the process.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Answers to some of the most common questions our clients ask before engaging our services.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition duration-300 ${
                      active ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}