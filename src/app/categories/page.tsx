import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function CategoriesPage() {
  const categories =
    await prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
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

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400">
            Product Categories
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Browse Equipment Categories
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Explore our complete range of medical
            equipment categories designed for
            hospitals, clinics and healthcare
            professionals.
          </p>
        </div>

        {/* Categories Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_60px_rgba(6,182,212,.15)]"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
              </div>

              {/* Content */}

              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">
                  {category.name.charAt(0)}
                </div>

                <h2 className="text-3xl font-bold text-white">
                  {category.name}
                </h2>

                <p className="mt-4 text-slate-400">
                  Premium healthcare equipment and
                  advanced medical solutions.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                    {category._count.products} Products
                  </span>

                  <span className="text-cyan-400 transition group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}

        {categories.length === 0 && (
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold">
              No Categories Found
            </h3>

            <p className="mt-4 text-slate-400">
              Please add categories from the admin
              panel.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}