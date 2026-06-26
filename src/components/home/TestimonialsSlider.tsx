"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  hospital: string | null;
  rating: number;
  content: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({
  testimonials,
}: Props) {
  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    if (
      testimonials.length <= 1
    )
      return;

    const timer = setInterval(() => {
      setIndex(
        (prev) =>
          (prev + 1) %
          testimonials.length
      );
    }, 4000);

    return () =>
      clearInterval(timer);
  }, [testimonials.length]);

  if (
    testimonials.length === 0
  ) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow">
        <p className="text-slate-500">
          No testimonials available.
        </p>
      </div>
    );
  }

  const item =
    testimonials[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.id}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -30,
        }}
        transition={{
          duration: 0.5,
        }}
        className="rounded-2xl bg-white p-8 text-center shadow"
      >
        <div className="mb-4 text-2xl text-yellow-500">
          {"★".repeat(
            item.rating
          )}
        </div>

        <p className="mb-6 text-lg italic text-slate-700">
          "{item.content}"
        </p>

        <h3 className="text-xl font-semibold">
          {item.author}
        </h3>

        <p className="mt-1 text-slate-500">
          {item.role}
        </p>

        {item.hospital && (
          <p className="mt-1 text-sm text-slate-400">
            {item.hospital}
          </p>
        )}

        {testimonials.length >
          1 && (
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setIndex(i)
                  }
                  className={`h-3 w-3 rounded-full ${
                    i === index
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                />
              )
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}