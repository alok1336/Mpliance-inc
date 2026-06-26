"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  price: number;
  dealerPrice: number;
  stock: number;
  categoryId: string;
  isFeatured: boolean;
  isPopular: boolean;
  isVerified: boolean;
}

interface Props {
  product: Product;
  categories: Category[];
}

export default function EditProductForm({
  product,
  categories,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: product.name,
    slug: product.slug,
    sku: product.sku,
    description: product.description || "",
    price: String(product.price),
    dealerPrice: String(product.dealerPrice),
    stock: String(product.stock),
    categoryId: product.categoryId,
    isFeatured: product.isFeatured,
    isPopular: product.isPopular,
    isVerified: product.isVerified,
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `/api/products/${product.id}`,
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
        alert("Product updated");

        router.push("/admin/products");
        router.refresh();
      } else {
        alert(
          data.error ||
            "Failed to update product"
        );
      }
    } catch (error) {
      console.error(error);

      alert("Failed to update product");
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
          Product Name
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

      <div>
        <label className="mb-2 block font-medium">
          SKU
        </label>

        <input
          type="text"
          className="w-full rounded-lg border p-3"
          value={form.sku}
          onChange={(e) =>
            setForm({
              ...form,
              sku: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={5}
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
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Price
          </label>

          <input
            type="number"
            className="w-full rounded-lg border p-3"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Dealer Price
          </label>

          <input
            type="number"
            className="w-full rounded-lg border p-3"
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
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Stock
        </label>

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Category
        </label>

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
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

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
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Updating..."
          : "Update Product"}
      </button>
    </form>
  );
}