import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="font-heading text-3xl font-bold text-white">
              Apex
            </h2>

            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-amber-500">
              Recovery Services
            </p>

            <p className="mt-6 leading-7 text-slate-400">
              Providing trusted legal support in debt recovery,
              property disputes, commercial law, and diaspora legal
              services across Nigeria.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-heading text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link href="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-amber-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-amber-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-amber-400 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Practice Areas */}

          <div>

            <h3 className="font-heading text-xl font-semibold text-white">
              Practice Areas
            </h3>

            <ul className="mt-6 space-y-4">

              <li>Debt Recovery</li>
              <li>Property Disputes</li>
              <li>Commercial Law</li>
              <li>Diaspora Legal Services</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-heading text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-amber-500 shrink-0" />

                <div>
                  <p className="font-semibold text-white">
                    Abuja Office
                  </p>

                  <p className="text-slate-400">
                    30 Gana Street, Maitama
                    Abuja, FCT, Nigeria
                  </p>
                </div>

              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-amber-500 shrink-0" />

                <div>
                  <p className="font-semibold text-white">
                    Lagos Office
                  </p>

                  <p className="text-slate-400">
                    20 Adetokunbo Ademola Street,Victoria Island,
                    Lagos, Nigeria
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="h-5 w-5 text-amber-500 shrink-0" />

                <span>+234 813 135 9504</span>

              </div>

              <div className="flex gap-4">

                <Mail className="h-5 w-5 text-amber-500 shrink-0" />

                <span>info@apexrecoveryservices.com</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Apex Recovery Services. All rights
            reserved.
          </p>

          <div className="flex gap-8">

            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}