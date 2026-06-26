"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function subscribe() {
    const response = await fetch(
      "/api/newsletter",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      setMessage(
        "Subscribed Successfully"
      );
      setEmail("");
    } else {
      setMessage(
        data.error ||
          "Subscription Failed"
      );
    }
  }

  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-4xl font-bold">
          Newsletter
        </h2>

        <p className="mt-4">
          Get product updates and
          offers.
        </p>

        <div className="mt-6 flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter Email"
            className="flex-1 rounded-lg px-4 py-3 text-black"
          />

          <button
            onClick={subscribe}
            className="rounded-lg bg-white px-6 py-3 text-blue-900"
          >
            Subscribe
          </button>
        </div>

        {message && (
          <p className="mt-4">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}