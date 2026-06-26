"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CallNowButton() {
  return (
    <motion.a
      href="tel:9021169919"
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white shadow-xl"
    >
      <Phone size={18} />
      <span>Call Now</span>
    </motion.a>
  );
}