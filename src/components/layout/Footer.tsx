"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">
      {/* Top Border */}
      <div className="border-t border-white/10" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-3xl font-bold">
              <span className="text-cyan-400">Mpliance</span>{" "}
              <span className="text-blue-500">INC</span>
            </h3>

            <p className="mt-6 text-slate-400">
              Delivering advanced medical equipment,
              installation, AMC services and healthcare
              solutions across India.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                <p className="text-slate-300">
                  Plot No. 96, Telecom Colony,
                  Pratap Nagar, Nagpur - 440022
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <a
                  href="tel:+919021169919"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  +91 90211 69919
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a
                  href="mailto:info@mplianceinc.com"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  info@mplianceinc.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xl font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-cyan-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="hover:text-cyan-400"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-cyan-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-xl font-semibold">
              Services
            </h4>

            <ul className="space-y-4 text-slate-400">
              <li>AMC Packages</li>
              <li>AERB Licensing</li>
              <li>Equipment Repair</li>
              <li>Spare Parts Supply</li>
              <li>Installation Support</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-6 text-xl font-semibold">
              Connect With Us
            </h4>

            <p className="text-slate-400">
              Follow us on social media for updates,
              products and healthcare innovations.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <a
              href="https://wa.me/919021169919"
              target="_blank"
              className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Mpliance INC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}