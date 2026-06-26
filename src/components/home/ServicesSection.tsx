"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Settings,
  Package,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Repair & Maintenance",
    description:
      "Professional medical equipment repair and maintenance.",
    icon: Wrench,
  },
  {
    title: "AERB Licensing",
    description:
      "Complete licensing and compliance support.",
    icon: ShieldCheck,
  },
  {
    title: "AMC Package",
    description:
      "Annual maintenance contracts for healthcare equipment.",
    icon: Settings,
  },
  {
    title: "Spare Parts",
    description:
      "Genuine spare parts and replacements.",
    icon: Package,
  },
  {
    title: "Labour Charges",
    description:
      "Affordable on-site service and labour support.",
    icon: Briefcase,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-24 text-white">
      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects */}

      <div className="absolute -left-32 top-0 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Healthcare Support Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Comprehensive service solutions to keep your
            medical equipment operating at peak performance.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,.15)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold transition hover:scale-105"
                >
                  Request Service
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}