import Image from "next/image";

const teamMembers = [
  {
    name: "Barr. Chioma A. Okafor",
    role: "Managing Partner",
    image: "/chioma.avif",
  },
  {
    name: "Barr. Adaeze Nwosu",
    role: "Senior Legal Counsel",
    image: "/adaeze.avif",
  },
  {
    name: "Barr. David Akatugba",
    role: "Head of Litigation",
    image: "/david.avif",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-50 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Meet Our Team
          </span>

          <h2 className="mt-5 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
            Experienced Professionals
            <br />
            Dedicated To Your Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our team combines legal expertise, strategic thinking and a
            commitment to delivering practical solutions for every client.
          </p>

        </div>

        {/* Team Members */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}

              <div className="relative aspect-[4/5]">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Details */}

              <div className="p-8 text-center">

                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-amber-600">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}