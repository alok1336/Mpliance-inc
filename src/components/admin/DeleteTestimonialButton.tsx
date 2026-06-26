"use client";

import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function DeleteTestimonialButton({
  id,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/testimonials/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          "Testimonial deleted successfully"
        );

        router.refresh();
      } else {
        alert(
          data.error ||
            "Failed to delete testimonial"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Failed to delete testimonial"
      );
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