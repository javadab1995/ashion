
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { toPersianDigits } from "../helpers/number";

function Pagination({ totalItems, itemsPerPage = 8 }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const pageParam = Number(searchParams.get("page"));

  const currentPage =
    Number.isInteger(pageParam) && pageParam > 0
      ? Math.min(pageParam, Math.max(pageCount, 1))
      : 1;

  if (pageCount <= 1) return null;

  const firstItem = (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  function goToPage(page) {
    const nextPage = Math.max(1, Math.min(page, pageCount));
    const nextParams = new URLSearchParams(searchParams);

    if (nextPage === 1) {
      nextParams.delete("page");
    } else {
      nextParams.set("page", String(nextPage));
    }

    setSearchParams(nextParams);
  }

  return (
    <nav
      dir="rtl"
      aria-label="صفحه‌بندی محصولات"
      className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 shadow-card sm:flex-row sm:items-center sm:justify-between sm:px-6"
    >
      <p className="text-sm text-text-muted">
        نمایش{" "}
        <span className="font-bold text-primary">{toPersianDigits(firstItem)}</span>
        {" تا "}
        <span className="font-bold text-primary">{toPersianDigits(lastItem)}</span>
        {" از "}
        <span className="font-bold text-text-h">{toPersianDigits(totalItems)}</span>
        {" محصول"}
      </p>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="صفحه قبلی"
          className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-text-h transition-colors hover:border-primary hover:bg-primary-bg hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <HiChevronDoubleRight size={20} />
        </button>

        <span className="min-w-24 text-center text-sm font-semibold text-text-h">
          صفحه {toPersianDigits(currentPage)} از {toPersianDigits(pageCount)}
        </span>

        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === pageCount}
          aria-label="صفحه بعدی"
          className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-text-h transition-colors hover:border-primary hover:bg-primary-bg hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <HiChevronDoubleLeft size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Pagination;
