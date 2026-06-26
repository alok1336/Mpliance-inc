import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import EditCategoryForm from "@/components/admin/EditCategoryForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditCategoryPage({
  params,
}: Props) {
  const { id } = await params;

  const category =
    await prisma.category.findUnique({
      where: { id },
    });

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Category
      </h1>

      <EditCategoryForm
        category={category}
      />
    </div>
  );
}