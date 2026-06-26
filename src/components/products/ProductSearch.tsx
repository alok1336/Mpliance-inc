"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      {/* Search Icon */}

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={20}
      />

      {/* Input */}

      <input
        type="text"
        placeholder="Search medical products..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          rounded-2xl
          border border-white/10
          bg-white/5
          py-4 pl-12 pr-5
          text-white
          placeholder:text-slate-500
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />
    </div>
  );
}