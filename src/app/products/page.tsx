import { prisma } from "@/lib/prisma";
import ProductGrid from "@/components/products/ProductGrid";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects */}
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 pb-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400 backdrop-blur">
            Medical Products
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Premium Medical Equipment
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore our complete range of advanced healthcare
            equipment designed for hospitals, clinics, diagnostic
            centers and healthcare professionals.
          </p>
        </div>

        {/* Products */}
        <ProductGrid
          products={products}
          categories={categories}
        />
      </div>
    </main>
  );
}