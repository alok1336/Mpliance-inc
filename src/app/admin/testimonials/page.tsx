import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteTestimonialButton from "@/components/admin/DeleteTestimonialButton";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Testimonials Management
        </h1>

        <Link
          href="/admin/testimonials/new"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Add Testimonial
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Rating</th>
              <th className="p-4 text-left">Approved</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {testimonials.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.author}</td>
                <td className="p-4">{item.role}</td>
                <td className="p-4">{item.rating}/5</td>
                <td className="p-4">
                  {item.isApproved ? "Yes" : "No"}
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/testimonials/${item.id}/edit`}
                      className="rounded bg-yellow-500 px-3 py-1 text-white"
                    >
                      Edit
                    </Link>

                    <DeleteTestimonialButton
                      id={item.id}
                    />
                  </div>
                </td>
              </tr>
            ))}

            {testimonials.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-gray-500"
                >
                  No testimonials found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}