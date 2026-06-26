"use client";

import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function DeleteSubscriberButton({
  id,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Delete subscriber?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/newsletter/${id}`,
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
    } catch (error) {
      console.error(error);

      alert(
        "Failed to delete subscriber"
      );
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