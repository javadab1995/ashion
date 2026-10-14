import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  Heart,
  ShoppingCart,
  ShoppingBag,
  ArrowUpLeft,
  Check,
} from "lucide-react";

import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
import { addItemFavourit } from "../favourites/FavouritesSlice";

function ShopItem({ product, index = 0 }) {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const { id, title, price, images, category } = product;
  console.log(product)

  const image = images?.[0];

  function handleAddToCart() {
    dispatch(
      addItem({
        productId: id,
        title,
        price,
        images,
        category,
        quantity: 1,
        totalPrice: price,
      }),
    );

    setAddedToCart(true);
  }

  function handleAddToFavorite() {
    dispatch(
      addItemFavourit({
        productId: id,
        title,
        price,
        images,
        category,
        quantity: 1,
        totalPrice: price,
      }),
    );

    setIsFavorite((previous) => !previous);
  }

  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border border-t-4 border-t-primary/70 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden border-b border-border bg-surface-alt">
        <Link
          to={`/product/${id}`}
          aria-label={`مشاهده ${title}`}
          className="block aspect-4/5 overflow-hidden"
        >
          {image ? (
            <img
              src={image}
              alt={title}
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
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Favorite */}
        <button
          type="button"
          onClick={handleAddToFavorite}
          aria-label={
            isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
          }
          aria-pressed={isFavorite}
          className={`absolute left-3 top-3 flex size-10 items-center justify-center rounded-xl border shadow-sm transition-all ${
            isFavorite
              ? "border-primary bg-primary text-text-inverse"
              : "border-border bg-surface text-text-h hover:border-primary hover:bg-primary-bg hover:text-primary"
          }`}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Product information */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="min-w-0 truncate rounded-md bg-primary-bg px-2 py-1 text-[10px] font-semibold text-primary sm:text-xs">
            {category?.name ?? "محصول"}
          </span>

          <span className="shrink-0 text-[10px] font-medium text-text-muted">
            انتخاب فروشگاه
          </span>
        </div>

        <Link
          to={`/product/${id}`}
          className="line-clamp-2 min-h-12 text-sm font-bold leading-6 text-text-h transition-colors hover:text-primary sm:text-base"
        >
          {title}
        </Link>

        <div className="my-4 border-t border-dashed border-border" />

        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="text-xs text-text-muted">قیمت</span>

          <span className="text-sm font-extrabold text-primary sm:text-base">
            {formatCurrency(price)}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-3 py-3 text-xs font-bold text-text-inverse transition-all hover:bg-primary-hover sm:text-sm"
          >
            {addedToCart ? <Check size={17} /> : <ShoppingCart size={17} />}

            {addedToCart ? "افزوده شد" : "افزودن به سبد خرید"}
          </button>

          <Link
            to={`/product/${id}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-surface px-3 py-3 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-text-inverse sm:text-sm"
          >
            <ShoppingBag size={16} />
            مشاهده محصول
            <ArrowUpLeft size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ShopItem;
