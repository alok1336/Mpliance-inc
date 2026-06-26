"use client";

import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function DeleteCategoryButton({
  id,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Delete this category?"
    );

    if (!confirmed) return;

    const response = await fetch(
      `/api/categories/${id}`,
      {
        method: "DELETE",
      }
    );

    const data =
      await response.json();

    if (data.success) {
      router.refresh();
    } else {
      alert(data.error);
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-600 px-3 py-1 text-white"
    >
      Delete
    </button>
  );
}