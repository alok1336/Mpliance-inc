"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  BadgeCheck,
  ArrowRight,
  ShoppingCart,
  PackageOpen,
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

  category?: {
    name: string;
  };
}

interface Props {
  products?: Product[];
}

/* ---------- Safe Image Helper ---------- */

function getImageUrl(images: any): string {
  const fallback = "/placeholder-product.jpg";

  if (!images) return fallback;

  // string
  if (typeof images === "string") {
    return images.startsWith("/") ||
      images.startsWith("http")
      ? images
      : fallback;
  }

  // array
  if (Array.isArray(images)) {
    if (images.length === 0) return fallback;

    const first = images[0];

    // ["/image.jpg"]
    if (typeof first === "string") {
      return first.startsWith("/") ||
        first.startsWith("http")
        ? first
        : fallback;
    }

    // [{ url: "/image.jpg" }]
    if (typeof first === "object" && first !== null) {
      if (
        typeof first.url === "string"
      ) {
        return first.url;
      }

      if (
        typeof first.src === "string"
      ) {
        return first.src;
      }

      if (
        typeof first.secure_url ===
        "string"
      ) {
        return first.secure_url;
      }
    }
  }

  // { url: "/image.jpg" }
  if (
    typeof images === "object" &&
    images !== null
  ) {
    if (typeof images.url === "string") {
      return images.url;
    }

    if (typeof images.src === "string") {
      return images.src;
    }

    if (
      typeof images.secure_url ===
      "string"
    ) {
      return images.secure_url;
    }
  }

  return fallback;
}

export default function FeaturedProducts({
  products = [],
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 lg:py-20 text-white">
      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glows */}

      <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400">
            Featured Products
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Premium Medical Equipment
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Discover our most trusted and
            best-selling healthcare
            solutions.
          </p>
        </motion.div>

        {/* Empty State */}

        {products.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10">
              <PackageOpen className="h-10 w-10 text-cyan-400" />
            </div>

            <h3 className="mt-6 text-3xl font-bold">
              Featured Products Coming
              Soon
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              We are currently updating
              our premium healthcare
              equipment catalog.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold transition hover:scale-105"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map(
              (product, index) => {
                const imageUrl =
                  getImageUrl(
                    product.images
                  );

                return (
                  <motion.div
                    key={product.id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.1,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
                  >
                    {/* Image */}

                    <div className="relative h-72 overflow-hidden bg-slate-900">
                      <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />

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
                        {product.category
                          ?.name || "Medical Equipment"}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold">
                        {product.name}
                      </h3>

                      <div className="mt-4 flex gap-1 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(
                          (star) => (
                            <Star
                              key={star}
                              size={18}
                              fill="currentColor"
                            />
                          )
                        )}
                      </div>

                      <div className="mt-5 text-3xl font-bold text-cyan-400">
                        ₹
                        {product.price.toLocaleString()}
                      </div>

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

                      <Link
                        href={`/products/${product.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-cyan-400"
                      >
                        Learn More

                        <ArrowRight
                          size={18}
                          className="transition group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        )}
      </div>
    </section>
  );
}