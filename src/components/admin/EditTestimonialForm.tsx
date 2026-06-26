"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  hospital: string | null;
  rating: number;
  content: string;
  isApproved: boolean;
}

interface Props {
  testimonial: Testimonial;
}

export default function EditTestimonialForm({
  testimonial,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    author: testimonial.author,
    role: testimonial.role,
    hospital: testimonial.hospital || "",
    rating: testimonial.rating,
    content: testimonial.content,
    isApproved: testimonial.isApproved,
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `/api/testimonials/${testimonial.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          "Testimonial updated successfully"
        );

        router.push(
          "/admin/testimonials"
        );

        router.refresh();
      } else {
        alert(
          data.error ||
            "Failed to update testimonial"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update testimonial"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-8 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">
          Author
        </label>

        <input
          type="text"
          className="w-full rounded-lg border p-3"
          value={form.author}
          onChange={(e) =>
            setForm({
              ...form,
              author: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Role
        </label>

        <input
          type="text"
          className="w-full rounded-lg border p-3"
          value={form.role}
          onChange={(e) =>
            setForm({
              ...form,
              role: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Hospital
        </label>

        <input
          type="text"
          className="w-full rounded-lg border p-3"
          value={form.hospital}
          onChange={(e) =>
            setForm({
              ...form,
              hospital: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Rating
        </label>

        <select
          className="w-full rounded-lg border p-3"
          value={form.rating}
          onChange={(e) =>
            setForm({
              ...form,
              rating: Number(
                e.target.value
              ),
            })
          }
        >
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Content
        </label>

        <textarea
          rows={6}
          className="w-full rounded-lg border p-3"
          value={form.content}
          onChange={(e) =>
            setForm({
              ...form,
              content: e.target.value,
            })
          }
        />
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={form.isApproved}
          onChange={(e) =>
            setForm({
              ...form,
              isApproved:
                e.target.checked,
            })
          }
        />

        <span>Approved</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        {loading
          ? "Updating..."
          : "Update Testimonial"}
      </button>
    </form>
  );
}