"use client";

import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function DeleteProductButton({
  id,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Product deleted successfully");
        router.refresh();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
    >
      Delete
    </button>
  );
}