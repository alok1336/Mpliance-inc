"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  BadgeCheck,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: any;
  isFeatured: boolean;
  isPopular: boolean;
  isVerified: boolean;
  category: {
    name: string;
  };
}

interface Props {
  products?: Product[];
}

export default function FeaturedProductsSlider({
  products = [],
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-28 text-white">
      {/* Background Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400">
            Featured Products
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Premium Medical Equipment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Discover our most trusted and
            best-selling healthcare solutions.
          </p>
        </motion.div>

        {/* Empty State */}

        {products.length === 0 ? (
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold">
              No Featured Products Found
            </h3>

            <p className="mt-4 text-slate-400">
              Please add featured products
              from the admin panel.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => {
              const imageUrl =
                Array.isArray(product.images)
                  ? String(
                      product.images[0] ??
                        "/placeholder-product.jpg"
                    )
                  : typeof product.images ===
                    "string"
                  ? product.images
                  : "/placeholder-product.jpg";

              return (
                <motion.div
                  key={product.id}
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
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_80px_rgba(6,182,212,.15)]"
                >
                  {/* Hover Glow */}

                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                  </div>

                  {/* Image */}

                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Badges */}

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {product.isFeatured && (
                        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">
                          Featured
                        </span>
                      )}

                      {product.isPopular && (
                        <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold">
                          Popular
                        </span>
                      )}

                      {product.isVerified && (
                        <span className="flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold">
                          <BadgeCheck size={14} />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-8">
                    <p className="text-sm text-cyan-400">
                      {product.category.name}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {product.name}
                    </h3>

                    {/* Rating */}

                    <div className="mt-4 flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    {/* Price */}

                    <div className="mt-5 text-3xl font-bold text-cyan-400">
                      ₹
                      {product.price.toLocaleString()}
                    </div>

                    {/* Buttons */}

                    <div className="mt-8 flex gap-3">
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center font-semibold transition hover:scale-[1.02]"
                      >
                        View Details
                      </Link>

                      <button className="rounded-2xl border border-white/10 bg-white/5 px-4 transition hover:bg-white/10">
                        <ShoppingCart />
                      </button>
                    </div>

                    {/* Learn More */}

                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-cyan-400"
                    >
                      Learn More

                      <ArrowRight className="transition group-hover:translate-x-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}