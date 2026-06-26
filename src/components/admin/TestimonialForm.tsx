"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TestimonialForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    author: "",
    role: "",
    hospital: "",
    rating: 5,
    content: "",
    isApproved: false,
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/testimonials",
        {
          method: "POST",
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
          "Testimonial created successfully"
        );

        router.push(
          "/admin/testimonials"
        );

        router.refresh();
      } else {
        alert(
          data.error ||
            "Failed to create testimonial"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Failed to create testimonial"
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
          Author Name
        </label>

        <input
          type="text"
          required
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
          required
          placeholder="Doctor"
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
          placeholder="Apollo Hospital"
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
          Testimonial Content
        </label>

        <textarea
          required
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

      <div>
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

          <span>
            Approve immediately
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : "Save Testimonial"}
      </button>
    </form>
  );
}