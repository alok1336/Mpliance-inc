"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CategoryForm() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/categories",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        router.push(
          "/admin/categories"
        );
        router.refresh();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert(
        "Failed to create category"
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
      <input
        placeholder="Category Name"
        className="w-full rounded-lg border p-3"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Slug"
        className="w-full rounded-lg border p-3"
        value={form.slug}
        onChange={(e) =>
          setForm({
            ...form,
            slug: e.target.value,
          })
        }
      />

      <textarea
        rows={4}
        placeholder="Description"
        className="w-full rounded-lg border p-3"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description:
              e.target.value,
          })
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        {loading
          ? "Saving..."
          : "Save Category"}
      </button>
    </form>
  );
}