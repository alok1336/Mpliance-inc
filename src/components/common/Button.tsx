"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "danger";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      type={type}
      onClick={onClick}
      className={clsx(
        "rounded-xl px-5 py-3 font-medium transition",
        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "bg-slate-900 text-white":
            variant === "secondary",

          "bg-transparent border":
            variant === "ghost",

          "bg-red-600 text-white":
            variant === "danger",
        },
        className
      )}
    >
      {children}
    </motion.button>
  );
}