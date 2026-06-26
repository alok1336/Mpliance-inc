"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Reliable endoscopy solutions with excellent after-sales support.",
    name: "Dr. Mehta",
    role: "ENT Specialist",
    hospital: "Care Hospital",
  },
  {
    quote:
      "Outstanding AMC services and quick response time.",
    name: "Dr. Sharma",
    role: "General Surgeon",
    hospital: "City Medical Center",
  },
  {
    quote:
      "High-quality equipment and professional installation team.",
    name: "Dr. Patel",
    role: "Urologist",
    hospital: "Apollo Healthcare",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-24 text-white">
      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects */}

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Trusted by hospitals and healthcare
            professionals across India.
          </p>
        </motion.div>

        {/* Testimonials Grid */}

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,.15)]"
            >
              {/* Stars */}

              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}

              <p className="mt-6 text-lg italic leading-8 text-slate-300">
                "{item.quote}"
              </p>

              {/* User */}

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-1 text-cyan-400">
                  {item.role}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {item.hospital}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}