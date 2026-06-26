"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  ShoppingCart,
  X,
  PhoneCall,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useCart } from "@/context/CartContext";

const navLinks = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Dealer Login",
    href: "/dealer-login",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  const { itemCount } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          {/* LOGO */}

          <Link
            href="/"
            className="group"
          >
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-extrabold text-transparent">
                Mpliance INC
              </span>

              <span className="text-xs text-slate-400">
                Healthcare Solutions
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT */}

          <div className="hidden items-center gap-5 lg:flex">
            {/* Cart */}

            <Link
              href="/cart"
              className="relative rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10"
            >
              <ShoppingCart size={22} />

              {itemCount > 0 && (
                <motion.span
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            {/* CTA */}

            <a
              href="tel:9021169919"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setOpen(false)
              }
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* DRAWER */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-50 h-screen w-[85%] max-w-sm border-l border-white/10 bg-slate-950 p-6 text-white"
            >
              {/* HEADER */}

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    Mpliance INC
                  </h2>

                  <p className="text-sm text-slate-400">
                    Healthcare Solutions
                  </p>
                </div>

                <button
                  onClick={() =>
                    setOpen(false)
                  }
                  className="rounded-xl border border-white/10 p-2"
                >
                  <X />
                </button>
              </div>

              {/* LINKS */}

              <nav className="mt-12 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-lg transition hover:bg-white/10"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* CART */}

                <Link
                  href="/cart"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingCart />
                    Cart
                  </div>

                  <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm">
                    {itemCount}
                  </span>
                </Link>

                {/* CTA */}

                <a
                  href="tel:9021169919"
                  className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold"
                >
                  <PhoneCall size={18} />
                  Call Now
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}