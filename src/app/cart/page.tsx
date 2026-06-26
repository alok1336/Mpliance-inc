"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = items.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Shopping Cart
        </h1>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Clear Cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center">
          <h2 className="text-2xl font-semibold">
            Your cart is empty
          </h2>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border bg-white p-5"
              >
                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Qty:
                    {item.quantity}
                  </p>

                  <p className="font-medium">
                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                  className="text-red-600"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border bg-white p-6">
            <h2 className="text-2xl font-bold">
              Total:
              ₹
              {total.toLocaleString()}
            </h2>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
            >
              Request Quote
            </Link>
          </div>
        </>
      )}
    </main>
  );
}