"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images?: any;

  isFeatured: boolean;
  isPopular: boolean;
  isVerified: boolean;

  category: {
    name: string;
  };
}

interface Props {
  product: Product;
}

function getImageUrl(images: any): string {
  const placeholder =
    "/images/placeholder-product.jpg";

  if (!images) return placeholder;

  // Format: [{ url: "/products/file.jpg" }]
  if (
    Array.isArray(images) &&
    images.length > 0 &&
    typeof images[0] === "object" &&
    images[0] !== null &&
    "url" in images[0]
  ) {
    return images[0].url || placeholder;
  }

  // Format: ["/products/file.jpg"]
  if (
    Array.isArray(images) &&
    images.length > 0 &&
    typeof images[0] === "string"
  ) {
    return images[0];
  }

  // Format: "/products/file.jpg"
  if (typeof images === "string") {
    return images;
  }

  return placeholder;
}

export default function ProductCard({
  product,
}: Props) {
  const imageUrl = getImageUrl(
    product.images
  );

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]"
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
      </div>

      {/* Product Image */}

      <div className="relative h-64 overflow-hidden bg-slate-900">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Badges */}

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.isFeatured && (
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          )}

          {product.isPopular && (
            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
              Popular
            </span>
          )}

          {product.isVerified && (
            <span className="flex items-center gap-1 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
              <BadgeCheck size={14} />
              Verified
            </span>
          )}
        </div>
      </div>

      {/* Content */}

      <div className="relative p-7">
        <p className="text-sm font-medium text-cyan-400">
          {product.category.name}
        </p>

        <h3 className="mt-3 line-clamp-2 text-2xl font-bold text-white">
          {product.name}
        </h3>

        <div className="mt-5 text-3xl font-bold text-cyan-400">
          ₹{product.price.toLocaleString()}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          View Details

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}