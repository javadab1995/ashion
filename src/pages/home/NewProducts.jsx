
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowUpLeft, ShoppingBag } from "lucide-react";
import { formatCurrency } from "../../utils/helpers";
import { toPersianDigits } from "../../helpers/number";

function NewProducts({
  shop = [],
  limit = 4,
  minPrice = 40,
  maxPrice = 200,
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const categories = useMemo(() => {
    const uniqueCategories = new Map();

    shop.forEach((product) => {
      const category = product.category;

      if (category?.name) {
        const slug = category.slug ?? category.name;

        if (!uniqueCategories.has(slug)) {
          uniqueCategories.set(slug, {
            slug,
            name: category.name,
          });
        }
      }
    });

    return [...uniqueCategories.values()];
  }, [shop]);

  const filteredProducts = useMemo(() => {
    return shop
      .filter(
        (product) =>
          product.price > minPrice && product.price < maxPrice
      )
      .filter((product) => {
        if (selectedCategory === "all") return true;

        const slug =
          product.category?.slug ?? product.category?.name;

        return slug === selectedCategory;
      })
      .slice(0, limit);
  }, [shop, selectedCategory, limit, minPrice, maxPrice]);

  function toggleFavorite(productId) {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }

  return (
    <section
      dir="rtl"
      className="mx-auto my-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      {/* Section heading */}
      <div className="mb-8 flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              THE NEW EDIT
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-text-h sm:text-3xl">
            تازه‌های این هفته
          </h2>

          <p className="mt-3 text-sm leading-6 text-text-muted">
            انتخاب‌های تازه برای استایل متفاوت تو
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-text-h transition-all hover:border-primary hover:bg-primary-bg hover:text-primary"
        >
          همه محصولات
          <ArrowUpLeft size={17} />
        </Link>
      </div>

      {/* Category filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
            selectedCategory === "all"
              ? "border-primary bg-primary text-text-inverse shadow-btn"
              : "border-border bg-surface text-text hover:border-primary hover:text-primary"
          }`}
        >
          همه
        </button>

        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setSelectedCategory(category.slug)}
            className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
              selectedCategory === category.slug
                ? "border-primary bg-primary text-text-inverse shadow-btn"
                : "border-border bg-surface text-text hover:border-primary hover:text-primary"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {filteredProducts.map((product, index) => {
            const isFavorite = favorites.includes(product.id);
            const image = product.images?.[0];

            return (
              <article
                key={product.id}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border border-t-4 border-t-primary/70 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                {/* Image area */}
                <div className="relative overflow-hidden border-b border-border bg-surface-alt">
                  <Link
                    to={`/product/${product.id}`}
                    aria-label={`مشاهده ${product.title}`}
                    className="block aspect-4/5 overflow-hidden"
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={product.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-text-muted">
                        تصویر محصول موجود نیست
                      </div>
                    )}
                  </Link>

                  {/* New badge */}
                  <span className="absolute right-3 top-3 rounded-lg border border-primary-border bg-surface px-2.5 py-1.5 text-[10px] font-extrabold tracking-wider text-primary shadow-sm">
                    NEW
                  </span>

                  {/* Product number */}
                  <span className="absolute bottom-3 left-3 text-xs font-bold tabular-nums text-text-inverse [text-shadow:0_1px_5px_rgba(0,0,0,0.8)]">
                    {toPersianDigits(String(index + 1).padStart(2, "0"))}
                  </span>

                  {/* Wishlist */}
                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={
                      isFavorite
                        ? "حذف از علاقه‌مندی‌ها"
                        : "افزودن به علاقه‌مندی‌ها"
                    }
                    aria-pressed={isFavorite}
                    className={`absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition-all ${
                      isFavorite
                        ? "border-primary bg-primary text-text-inverse"
                        : "border-border bg-surface text-text-h hover:border-primary hover:bg-primary-bg hover:text-primary"
                    }`}
                  >
                    <Heart
                      size={18}
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </button>
                </div>

                {/* Product information */}
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="min-w-0 truncate rounded-md bg-primary-bg px-2 py-1 text-[10px] font-semibold text-primary sm:text-xs">
                      {product.category?.name ?? "محصول"}
                    </span>

                    <span className="shrink-0 text-[10px] font-medium text-text-muted">
                      انتخاب فروشگاه
                    </span>
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="line-clamp-2 min-h-12 text-sm font-bold leading-6 text-text-h transition-colors hover:text-primary sm:text-base"
                  >
                    {product.title}
                  </Link>

                  <div className="my-4 border-t border-dashed border-border" />

                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="text-xs text-text-muted">
                      قیمت
                    </span>

                    <span className="text-sm font-extrabold text-primary sm:text-base">
                      {toPersianDigits(formatCurrency(product.price))}
                    </span>
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-surface px-3 py-3 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-text-inverse sm:text-sm"
                  >
                    <ShoppingBag size={16} />
                    مشاهده محصول
                    <ArrowUpLeft size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-border bg-primary-bg text-primary">
            <ShoppingBag size={25} />
          </div>

          <h3 className="font-bold text-text-h">
            محصولی پیدا نشد
          </h3>

          <p className="mt-2 text-sm text-text-muted">
            در این دسته محصولی با محدوده قیمت فعلی وجود ندارد.
          </p>

          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className="mt-5 rounded-xl border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-text-inverse"
          >
            نمایش همه محصولات
          </button>
        </div>
      )}
    </section>
  );
}

export default NewProducts;
