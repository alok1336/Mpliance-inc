"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Package, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
id: string;
name: string;
slug: string;
description: string;
price: number;
dealerPrice: number;
stock: number;
isFeatured: boolean;
isPopular: boolean;
isVerified: boolean;
images: any;

category: {
name: string;
};
}

interface Props {
product: Product;
}

export default function ProductDetails({
product,
}: Props) {
const { addToCart } = useCart();

function handleAddToCart() {
addToCart({
id: product.id,
name: product.name,
slug: product.slug,
price: product.price,
});


alert(`${product.name} added to cart`);


}

const imageUrl = Array.isArray(product.images)
? product.images?.[0]?.url ||
product.images?.[0]
: product.images?.url ||
product.images;

return ( <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#020817] p-6 lg:p-10">


  {/* Background Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

  {/* Glow Effects */}
  <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[120px]" />
  <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

  <div className="relative grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">

    {/* IMAGE SECTION */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">

        <div className="relative flex h-[500px] sm:h-[650px] items-center justify-center overflow-hidden rounded-[28px] bg-[#010816]">

          {imageUrl ? (
            <div className="relative h-full w-full">

              <Image
                src={imageUrl}
                alt={product.name}
                fill
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-contain scale-[1.25] p-4 transition duration-500 hover:scale-[1.35]"
              />

            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-slate-500">
              No Image Available
            </div>
          )}

        </div>

      </div>
    </motion.div>

    {/* PRODUCT INFO */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-4 text-lg font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {product.category.name}
      </p>

      <h1 className="mb-8 text-5xl font-black leading-tight text-white lg:text-7xl">
        {product.name}
      </h1>

      {/* Badges */}
      <div className="mb-10 flex flex-wrap gap-4">

        {product.isFeatured && (
          <span className="rounded-full bg-blue-600 px-8 py-3 text-white">
            Featured
          </span>
        )}

        {product.isPopular && (
          <span className="rounded-full bg-green-600 px-8 py-3 text-white">
            Popular
          </span>
        )}

        {product.isVerified && (
          <span className="rounded-full bg-purple-600 px-8 py-3 text-white">
            Verified
          </span>
        )}

      </div>

      {/* Prices */}
      <div className="space-y-8">

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Retail Price
          </p>

          <h2 className="text-5xl font-black text-cyan-400">
            ₹{product.price.toLocaleString()}
          </h2>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Dealer Price
          </p>

          <h3 className="text-3xl font-bold text-green-400">
            ₹{product.dealerPrice.toLocaleString()}
          </h3>
        </div>

      </div>

      {/* Stock */}
      <div className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 p-6">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-green-500/20 p-4">
            <Package className="h-8 w-8 text-green-400" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-400">
              {product.stock > 0
                ? "In Stock"
                : "Out Of Stock"}
            </h3>

            <p className="text-slate-300">
              {product.stock} Available
            </p>
          </div>

        </div>

      </div>

      {/* Description */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

        <h3 className="mb-4 text-3xl font-bold text-white">
          Product Description
        </h3>

        <p className="whitespace-pre-wrap leading-8 text-slate-300">
          {product.description}
        </p>

      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 disabled:opacity-50"
        >
          <ShoppingCart size={20} />
          Add To Cart
        </button>

        <a
          href={`https://wa.me/919021169919?text=Hello Mpliance INC, I am interested in ${encodeURIComponent(
            product.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          WhatsApp Quote
        </a>

      </div>

    </motion.div>
  </div>
</section>


);
}
