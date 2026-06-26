
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
}

export default function ProductForm({
  categories,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    sku: "",
    description: "",
    price: "",
    dealerPrice: "",
    stock: "",
    categoryId: "",
    isFeatured: false,
    isPopular: false,
    isVerified: false,
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/products",
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
        router.push("/admin/products");
        router.refresh();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save product");
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
        placeholder="Product Name"
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

      <input
        placeholder="SKU"
        className="w-full rounded-lg border p-3"
        value={form.sku}
        onChange={(e) =>
          setForm({
            ...form,
            sku: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        rows={5}
        className="w-full rounded-lg border p-3"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="number"
          placeholder="Price"
          className="rounded-lg border p-3"
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Dealer Price"
          className="rounded-lg border p-3"
          value={form.dealerPrice}
          onChange={(e) =>
            setForm({
              ...form,
              dealerPrice:
                e.target.value,
            })
          }
        />
      </div>

      <input
        type="number"
        placeholder="Stock"
        className="w-full rounded-lg border p-3"
        value={form.stock}
        onChange={(e) =>
          setForm({
            ...form,
            stock: e.target.value,
          })
        }
      />

      <select
        className="w-full rounded-lg border p-3"
        value={form.categoryId}
        onChange={(e) =>
          setForm({
            ...form,
            categoryId:
              e.target.value,
          })
        }
      >
        <option value="">
          Select Category
        </option>

        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>

      <div className="flex gap-6">
        <label>
          <input
            type="checkbox"
            checked={form.isFeatured}
            onChange={(e) =>
              setForm({
                ...form,
                isFeatured:
                  e.target.checked,
              })
            }
          />
          <span className="ml-2">
            Featured
          </span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={form.isPopular}
            onChange={(e) =>
              setForm({
                ...form,
                isPopular:
                  e.target.checked,
              })
            }
          />
          <span className="ml-2">
            Popular
          </span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={form.isVerified}
            onChange={(e) =>
              setForm({
                ...form,
                isVerified:
                  e.target.checked,
              })
            }
          />
          <span className="ml-2">
            Verified
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        {loading
          ? "Saving..."
          : "Save Product"}
      </button>
    </form>
  );
}