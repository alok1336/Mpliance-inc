import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditTestimonialForm from "@/components/admin/EditTestimonialForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditTestimonialPage({
  params,
}: Props) {
  const { id } = await params;

  const testimonial =
    await prisma.testimonial.findUnique({
      where: {
        id,
      },
    });

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Testimonial
      </h1>

      <EditTestimonialForm
        testimonial={{
          id: testimonial.id,
          author: testimonial.author,
          role: testimonial.role,
          hospital:
            testimonial.hospital,
          rating: testimonial.rating,
          content: testimonial.content,
          isApproved:
            testimonial.isApproved,
        }}
      />
    </div>
  );
}