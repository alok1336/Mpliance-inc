"use client";

import { Filter } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (
    categoryId: string
  ) => void;
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <div>
      {/* Heading */}

      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
          <Filter className="h-5 w-5 text-cyan-400" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Categories
          </h3>

          <p className="text-sm text-slate-400">
            Filter by category
          </p>
        </div>
      </div>

      {/* Select */}

      <select
        value={selectedCategory}
        onChange={(e) =>
          onCategoryChange(
            e.target.value
          )
        }
        className="
          w-full
          rounded-2xl
          border border-white/10
          bg-white/5
          px-5 py-4
          text-white
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
        "
      >
        <option
          value=""
          className="bg-slate-900 text-white"
        >
          All Categories
        </option>

        {categories.map(
          (category) => (
            <option
              key={category.id}
              value={category.id}
              className="bg-slate-900 text-white"
            >
              {category.name}
            </option>
          )
        )}
      </select>

      {/* Category Count */}

      <div className="mt-5 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-4">
        <p className="text-sm text-slate-300">
          Available Categories
        </p>

        <p className="mt-1 text-2xl font-bold text-cyan-400">
          {categories.length}
        </p>
      </div>
    </div>
  );
}