
"use client";

import { Phone } from "lucide-react";

export default function CallNowButton() {
  return (
    <a
      href="tel:9021169919"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white shadow-lg transition hover:bg-green-700"
    >
      <Phone size={18} />
      Call Now
    </a>
  );
}
