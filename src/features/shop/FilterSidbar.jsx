
import { useState } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  RotateCcw,
  Check,
} from "lucide-react";

const categories = [
  {
    name: "زنانه",
    value: "women",
    subcategories: [
      { name: "مانتو و پالتو", value: "coats" },
      { name: "کت و ژاکت", value: "jackets" },
      { name: "پیراهن", value: "dresses" },
      { name: "شومیز", value: "shirts" },
      { name: "تیشرت", value: "t-shirts" },
      { name: "شلوار و جین", value: "jeans" },
    ],
  },
  {
    name: "مردانه",
    value: "men",
    subcategories: [
      { name: "پیراهن مردانه", value: "men-shirts" },
      { name: "تیشرت", value: "men-t-shirts" },
      { name: "شلوار", value: "men-pants" },
      { name: "کت و کاپشن", value: "men-jackets" },
    ],
  },
  {
    name: "بچگانه",
    value: "kids",
    subcategories: [
      { name: "لباس دخترانه", value: "girls" },
      { name: "لباس پسرانه", value: "boys" },
    ],
  },
  {
    name: "اکسسوری",
    value: "accessories",
    subcategories: [
      { name: "کیف", value: "bags" },
      { name: "کفش", value: "shoes" },
      { name: "کمربند", value: "belts" },
    ],
  },
  {
    name: "آرایشی و بهداشتی",
    value: "cosmetics",
    subcategories: [
      { name: "مراقبت پوست", value: "skincare" },
      { name: "مراقبت مو", value: "haircare" },
    ],
  },
];

const sortOptions = [
  { label: "جدیدترین", value: "newest" },
  { label: "ارزان‌ترین", value: "price-asc" },
  { label: "گران‌ترین", value: "price-desc" },
];

function FilterSidbar({
  filters,
  onFilterChange,
  onReset,
}) {
  const [openCategories, setOpenCategories] = useState(["women"]);

  const selectedFilters = filters ?? {
    categories: [],
    minPrice: "",
    maxPrice: "",
    inStock: false,
    sortBy: "newest",
  };

  function updateFilter(key, value) {
    onFilterChange?.({
      ...selectedFilters,
      [key]: value,
    });
  }

  function toggleCategory(value) {
    const current = selectedFilters.categories;
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];

    updateFilter("categories", updated);
  }

  function toggleOpenCategory(value) {
    setOpenCategories((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  }

  function resetFilters() {
    onReset?.();
  }

  return (
    <aside
      dir="rtl"
      className="w-full shrink-0 rounded-2xl border border-border bg-surface p-5 shadow-card lg:w-64"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={19} className="text-primary" />
          <h2 className="text-lg font-bold text-text-h">
            فیلتر محصولات
          </h2>
        </div>

        <button
          type="button"
          onClick={resetFilters}
          className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-primary"
        >
          <RotateCcw size={13} />
          حذف فیلترها
        </button>
      </div>

      {/* Categories */}
      <section className="border-b border-border py-5">
        <h3 className="mb-3 text-sm font-bold text-text-h">
          دسته‌بندی
        </h3>

        <div className="space-y-1">
          {categories.map((category) => {
            const isOpen = openCategories.includes(category.value);

            return (
              <div key={category.value}>
                <button
                  type="button"
                  onClick={() => toggleOpenCategory(category.value)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-sm text-text transition-colors hover:bg-surface-alt hover:text-primary"
                >
                  <span>{category.name}</span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="me-2 mt-1 space-y-1 border-r border-primary-border pe-3">
                    {category.subcategories.map((sub) => {
                      const checked = selectedFilters.categories.includes(
                        sub.value
                      );

                      return (
                        <label
                          key={sub.value}
                          className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-text-muted transition-colors hover:bg-surface-alt hover:text-text-h"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCategory(sub.value)}
                            className="peer sr-only"
                          />

                          <span
                            className={`flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
                              checked
                                ? "border-primary bg-primary text-text-inverse"
                                : "border-input bg-surface"
                            }`}
                          >
                            {checked && <Check size={11} strokeWidth={3} />}
                          </span>

                          <span>{sub.name}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Price */}
      <section className="border-b border-border py-5">
        <h3 className="mb-4 text-sm font-bold text-text-h">
          محدوده قیمت
        </h3>

        <div className="grid grid-cols-2 gap-2">
          <label className="min-w-0">
            <span className="mb-1.5 block text-xs text-text-muted">
              از (تومان)
            </span>
            <input
              type="number"
              min="0"
              value={selectedFilters.minPrice}
              onChange={(event) =>
                updateFilter("minPrice", event.target.value)
              }
              placeholder="۰"
              className="w-full rounded-lg border border-input bg-bg px-2.5 py-2.5 text-sm text-text-h outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </label>

          <label className="min-w-0">
            <span className="mb-1.5 block text-xs text-text-muted">
              تا (تومان)
            </span>
            <input
              type="number"
              min="0"
              value={selectedFilters.maxPrice}
              onChange={(event) =>
                updateFilter("maxPrice", event.target.value)
              }
              placeholder="مثلاً ۵۰۰۰۰۰"
              className="w-full rounded-lg border border-input bg-bg px-2.5 py-2.5 text-sm text-text-h outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </label>
        </div>
      </section>

      {/* Availability */}
      <section className="border-b border-border py-5">
        <label className="flex cursor-pointer items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-text-h">
              فقط کالاهای موجود
            </h3>
            <p className="mt-1 text-xs text-text-muted">
              محصولات قابل خرید
            </p>
          </div>

          <input
            type="checkbox"
            checked={selectedFilters.inStock}
            onChange={(event) =>
              updateFilter("inStock", event.target.checked)
            }
            className="size-4 accent-primary"
          />
        </label>
      </section>

      {/* Sorting */}
      <section className="pt-5">
        <h3 className="mb-3 text-sm font-bold text-text-h">
          مرتب‌سازی
        </h3>

        <div className="space-y-2">
          {sortOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-text transition-colors hover:text-primary"
            >
              <input
                type="radio"
                name="sortBy"
                value={option.value}
                checked={selectedFilters.sortBy === option.value}
                onChange={() => updateFilter("sortBy", option.value)}
                className="size-4 accent-primary"
              />
              {option.label}
            </label>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default FilterSidbar;
