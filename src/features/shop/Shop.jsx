
import { useLoaderData, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";

import FilterSidbar from "./FilterSidbar";
import ShopItem from "./ShopItem";
import MobileMenu from "../../ui/MobileMenu";
import Pagination from "../../ui/Pagination";
import { getProduct } from "../../services/apiShop";
import { toPersianDigits } from "../../helpers/number";

const initialFilters = {
  categories: [],
  minPrice: "",
  maxPrice: "",
  inStock: false,
  sortBy: "newest",
};

function Shop() {
  const allProducts = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(initialFilters);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const itemsPerPage = 8;

  // 1. ابتدا همه محصولات را فیلتر و مرتب می‌کنیم
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.category),
      );
    }

    if (filters.minPrice !== "") {
      result = result.filter(
        (product) => Number(product.price) >= Number(filters.minPrice),
      );
    }

    if (filters.maxPrice !== "") {
      result = result.filter(
        (product) => Number(product.price) <= Number(filters.maxPrice),
      );
    }

    if (filters.inStock) {
      result = result.filter((product) => product.inStock === true);
    }

    if (filters.sortBy === "price-asc") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (filters.sortBy === "price-desc") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (filters.sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );
    }

    return result;
  }, [allProducts, filters]);

  // 2. تعداد صفحات را از محصولات فیلترشده می‌گیریم
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pageParam = Number(searchParams.get("page"));

  const currentPage =
    Number.isInteger(pageParam) && pageParam > 0
      ? Math.min(pageParam, Math.max(totalPages, 1))
      : 1;

  // 3. فقط محصولات صفحه فعلی را نمایش می‌دهیم
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfFirstItem + itemsPerPage,
  );

  // با تغییر فیلتر، صفحه را به اول برمی‌گردانیم
  function handleFilterChange(nextFilters) {
    setFilters(nextFilters);

    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("page");
    setSearchParams(nextParams);
  }

  function resetFilters() {
    setFilters(initialFilters);

    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("page");
    setSearchParams(nextParams);
  }

  return (
    <div
      dir="rtl"
      className="mx-auto w-full max-w-7xl   py-10 lg:py-16"
    >
      {isOpenModal && (
        <MobileMenu setIsOpenModal={setIsOpenModal} />
      )}

      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
        <FilterSidbar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
        />

        <section className="min-w-0 flex-1">
          <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
            <h1 className="text-xl font-bold text-text-h">
              فروشگاه
            </h1>

            <span className="text-sm text-text-muted">
              {toPersianDigits(filteredProducts.length)} محصول
            </span>
          </div>

          {currentItems.length > 0 ? (
            <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {currentItems.map((product, index) => (
                <ShopItem
                  key={product.id}
                  product={product}
                  index={indexOfFirstItem + index}
                />
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-border bg-surface p-10 text-center">
              <p className="font-semibold text-text-h">
                محصولی پیدا نشد
              </p>
              <p className="mt-2 text-sm text-text-muted">
                فیلترها را تغییر بده یا همه فیلترها را پاک کن.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
              >
                پاک کردن فیلترها
              </button>
            </div>
          )}

          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
          />
        </section>
      </div>
    </div>
  );
}

export async function loader() {
  return await getProduct();
}

export default Shop;

