
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CiHeart,
  CiShoppingCart,
  CiSearch,
} from "react-icons/ci";

import { HiOutlineXMark } from "react-icons/hi2";

import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { getTotalFavouritsQuantity } from "../features/favourites/FavouritesSlice";
import { toPersianDigits } from "../helpers/number";

function MobileHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalFavouriteQuantity = useSelector(
    getTotalFavouritsQuantity
  );

  function handleSearch(e) {
    e.preventDefault();

    const searchTerm = query.trim();

    if (!searchTerm) return;

    setIsSearchOpen(false);
    setQuery("");

    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
  }

  function closeSearch() {
    setIsSearchOpen(false);
  }

  return (
    <>
      {/* نوار پایین موبایل */}
      <nav
        dir="rtl"
        aria-label="منوی پایین موبایل"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_20px_rgba(75,35,43,0.08)] backdrop-blur-md md:hidden"
      >
        <ul className="mx-auto flex max-w-md items-center justify-between">
          {/* علاقه‌مندی‌ها */}
          <li>
            <NavIcon
              to="/favourites"
              label="علاقه‌مندی‌ها"
              count={totalFavouriteQuantity}
            >
              <CiHeart size={30} />
            </NavIcon>
          </li>

          {/* جست‌وجو */}
          <li>
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="جست‌وجوی محصولات"
              aria-expanded={isSearchOpen}
              className="flex h-12 min-w-20 flex-col items-center justify-center gap-0.5 rounded-2xl px-4 text-primary transition-colors hover:bg-primary-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <CiSearch size={29} />
              <span className="text-[10px] font-medium">
                جست‌وجو
              </span>
            </button>
          </li>

          {/* سبد خرید */}
          <li>
            <NavIcon
              to="/cart"
              label="سبد خرید"
              count={totalCartQuantity}
            >
              <CiShoppingCart size={30} />
            </NavIcon>
          </li>
        </ul>
      </nav>

      {/* پنل جست‌وجو */}
      {isSearchOpen && (
        <div
          dir="rtl"
          className="fixed inset-0 z-60 flex items-end justify-center md:hidden py-8"
        >
          {/* پس‌زمینه تیره */}
          <button
            type="button"
            aria-label="بستن جست‌وجو"
            onClick={closeSearch}
            className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-[2px]"
          />

          {/* پنل پایین صفحه */}
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-search-title"
            className="relative z-10 max-h-[55dvh] min-h-67.5 w-full overflow-y-auto rounded-t-[28px] border-t border-border bg-surface px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 shadow-2xl animate-in slide-in-from-bottom duration-200"
          >
            {/* دستگیره بالای پنل */}
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-border" />

            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  id="mobile-search-title"
                  className="text-lg font-semibold text-text-h"
                >
                  دنبال چی می‌گردی؟
                </h2>

                <p className="mt-1 text-xs text-text-muted">
                  محصول موردنظرت رو جست‌وجو کن
                </p>
              </div>

              <button
                type="button"
                onClick={closeSearch}
                aria-label="بستن پنجره جست‌وجو"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-alt text-text transition-colors hover:bg-primary-bg hover:text-primary"
              >
                <HiOutlineXMark size={23} />
              </button>
            </div>

            <form onSubmit={handleSearch}>
              <div className="flex items-center gap-2 rounded-2xl border border-input bg-surface-alt px-3 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <CiSearch
                  size={23}
                  className="shrink-0 text-text-muted"
                />

                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="نام محصول یا دسته‌بندی..."
                  aria-label="عبارت جست‌وجو"
                  autoFocus
                  className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-text-h outline-none placeholder:text-text-muted"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="پاک کردن عبارت جست‌وجو"
                    className="shrink-0 text-text-muted transition-colors hover:text-primary"
                  >
                    <HiOutlineXMark size={19} />
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={!query.trim()}
                className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-medium text-text-inverse transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                جست‌وجوی محصولات
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

function NavIcon({ to, label, count = 0, children }) {
  return (
    <Link
      to={to}
      aria-label={count > 0 ? `${label}، ${count} مورد` : label}
      className="relative flex h-12 min-w-12 flex-col items-center justify-center rounded-2xl text-text transition-colors hover:bg-primary-bg hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {children}

      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium leading-none text-text-inverse">
          {count > 99 ? "۹۹+" : toPersianDigits(count)}
        </span>
      )}
    </Link>
  );
}

export default MobileHeader;
