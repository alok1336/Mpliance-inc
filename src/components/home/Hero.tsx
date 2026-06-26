"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  PhoneCall,
  ChevronDown,
} from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Hospitals Served",
  },
  {
    value: "1500+",
    label: "Products Installed",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "12+",
    label: "Years Experience",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}

          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur"
            >
              ★ QUALITY • TRUST • INNOVATION
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-4xl font-extrabold leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Medical

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Equipment
              </span>

              Solutions
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-2xl font-light italic text-slate-300 sm:text-4xl"
            >
              You Can Trust
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
            >
              Delivering advanced medical equipment,
              expert installation, AMC services,
              AERB licensing and reliable support
              to healthcare providers across India.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-center font-semibold shadow-[0_0_40px_rgba(59,130,246,.35)] transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(34,211,238,.45)]"
              >
                Explore Products →
              </Link>

              <a
                href="https://wa.me/919021169919"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-center font-semibold backdrop-blur transition hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </motion.div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            {/* Main Card */}

            <div className="relative flex h-[650px] items-center justify-center overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,.08)]">
              <Image
                src="/products/hero/hero-machine.png"
                alt="Medical Equipment"
                fill
                priority
                className="object-contain p-8"
              />
            </div>

            {/* Floating Card - Top Left */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-6 top-10 z-20 rounded-3xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl"
            >
              <ShieldCheck className="mb-3 h-8 w-8 text-green-400" />

              <h3 className="font-bold text-lg">
                AERB Approved
              </h3>

              <p className="text-sm text-slate-400">
                Safe & Compliant
              </p>
            </motion.div>

            {/* Floating Card - Bottom Right */}

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-6 bottom-16 z-20 rounded-3xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl"
            >
              <Wrench className="mb-3 h-8 w-8 text-blue-400" />

              <h3 className="font-bold text-lg">
                AMC Support
              </h3>

              <p className="text-sm text-slate-400">
                24/7 Service
              </p>
            </motion.div>

            {/* Floating Card - Bottom Left */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute left-6 bottom-6 z-20 rounded-3xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl"
            >
              <PhoneCall className="mb-3 h-8 w-8 text-cyan-400" />

              <h3 className="font-bold text-lg">
                Expert Support
              </h3>

              <p className="text-sm text-slate-400">
                Always Available
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-12 flex justify-center"
        >
          <ChevronDown className="h-8 w-8 text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}