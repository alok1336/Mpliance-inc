"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Microscope,
  Activity,
  HeartPulse,
  ShieldCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Patient Monitors",
    slug: "patient-monitors",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Endoscopy Systems",
    slug: "endoscopy-systems",
    icon: Microscope,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "OT Equipment",
    slug: "ot-equipment",
    icon: Activity,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Critical Care",
    slug: "critical-care",
    icon: HeartPulse,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "AERB Solutions",
    slug: "aerb-solutions",
    icon: ShieldCheck,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Service & AMC",
    slug: "service-amc",
    icon: Wrench,
    color: "from-slate-700 to-slate-900",
  },
];

export default function ProductCategories() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-28 text-white">
      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400">
            Product Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Explore Medical Equipment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Discover premium healthcare equipment,
            imaging systems and professional medical
            solutions designed for modern hospitals
            and healthcare providers.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="group relative block overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_60px_rgba(6,182,212,.15)]"
                >
                  {/* Hover Glow */}

                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                  </div>

                  {/* Icon */}

                  <div
                    className={`relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} shadow-xl`}
                  >
                    <Icon className="h-12 w-12 text-white" />
                  </div>

                  {/* Content */}

                  <div className="relative">
                    <h3 className="mt-8 text-3xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-5 text-slate-300">
                      Premium quality medical
                      equipment and healthcare
                      solutions for hospitals,
                      clinics and diagnostic centers.
                    </p>

                    {/* CTA */}

                    <div className="mt-8 flex items-center gap-3 font-semibold text-cyan-400">
                      Explore Category

                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Curved Divider */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block h-[90px] w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#020617"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}