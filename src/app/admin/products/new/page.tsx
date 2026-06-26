
import { prisma } from "@/lib/prisma";
import ProductForm from "@/components/admin/ProductForm";

export default async function NewProductPage() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add Product
        </h1>

        <p className="mt-2 text-gray-600">
          Create a new medical equipment product.
        </p>
      </div>

      <ProductForm categories={categories} />
    </div>
  );
}