import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditProductForm from "@/components/admin/EditProductForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    notFound();
  }

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="max-w-4xl">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Product
      </h1>

      <EditProductForm
        product={{
          id: product.id,
          name: product.name,
          slug: product.slug,
          sku: product.sku,
          description: product.description ?? "",
          price: Number(product.price),
          dealerPrice: Number(product.dealerPrice),
          stock: product.stock,
          categoryId: product.categoryId,
          isFeatured: product.isFeatured,
          isPopular: product.isPopular,
          isVerified: product.isVerified,
        }}
        categories={categories}
      />
    </div>
  );
}