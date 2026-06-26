import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/products/ProductCard";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const category =
    await prisma.category.findUnique({
      where: {
        slug,
      },
    });

  return {
    title: category
      ? `${category.name} | Mpliance INC`
      : "Category",
    description: category
      ? `Browse ${category.name} products`
      : "Medical Product Category",
  };
}

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const category =
    await prisma.category.findUnique({
      where: {
        slug,
      },

      include: {
        products: {
          include: {
            category: true,
          },

          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

  if (!category) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          {category.name}
        </h1>

        <p className="mt-3 text-slate-600">
          {category.products.length} Products
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {category.products.length === 0 && (
        <div className="rounded-xl border bg-white p-10 text-center">
          No products available in this category.
        </div>
      )}
    </main>
  );
}