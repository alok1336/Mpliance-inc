"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  category: {
    id: string;
    name: string;
    slug: string;
  };
}

export default function EditCategoryForm({
  category,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: category.name,
    slug: category.slug,
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `/api/categories/${category.id}`,
        {
          method: "PUT",
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
        "Failed to update category"
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
          Category Name
        </label>

        <input
          type="text"
          className="w-full rounded-lg border p-3"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Slug
        </label>

        <input
          type="text"
          className="w-full rounded-lg border p-3"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Updating..."
          : "Update Category"}
      </button>
    </form>
  );
}