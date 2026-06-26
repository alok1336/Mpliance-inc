"use client";

import { useMemo, useState } from "react";

import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import ProductFilters from "./ProductFilters";

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  categoryId: string;

  isFeatured: boolean;
  isPopular: boolean;
  isVerified: boolean;

  category: {
    name: string;
  };
}

interface Props {
  products: Product[];
  categories: Category[];
}

export default function ProductGrid({
  products,
  categories,
}: Props) {
  const [search, setSearch] = useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        !selectedCategory ||
        product.categoryId ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [
    products,
    search,
    selectedCategory,
  ]);

  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
      {/* Sidebar */}

      <aside className="space-y-6">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <ProductSearch
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="mb-5 text-xl font-semibold text-white">
            Categories
          </h3>

          <ProductFilters
            categories={categories}
            selectedCategory={
              selectedCategory
            }
            onCategoryChange={
              setSelectedCategory
            }
          />
        </div>
      </aside>

      {/* Products */}

      <div>
        {/* Results Count */}

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Products
          </h2>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            {filteredProducts.length} Products
          </span>
        </div>

        {/* Product Grid */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

          {/* Empty State */}

          {filteredProducts.length ===
            0 && (
            <div className="col-span-full rounded-[32px] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10">
                <svg
                  className="h-10 w-10 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-white">
                No Products Found
              </h3>

              <p className="mx-auto mt-4 max-w-md text-slate-400">
                No products match your
                current search or category
                filter. Try changing your
                search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}