
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addItem } from "../cart/cartSlice";
import { deleteItemFavourit } from "./FavouritesSlice";

import { formatCurrency, formatDate } from "../../utils/helpers";

import { HiOutlineTrash } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";

function FavouritesItem({ favourites }) {
  const dispatch = useDispatch();

  const {
    productId,
    category,
    price,
    title,
    images,
    discriptions,
  } = favourites;

  function handleAddToCart() {
    const newItem = {
      productId,
      title,
      price,
      images,
      category,
      quantity: 1,
      totalPrice: price,
      discriptions: `${title} + ${category?.name ?? ""}`,
    };

    dispatch(addItem(newItem));

    toast.success("محصول به سبد خرید اضافه شد.");
  }

  function handleRemove() {
    dispatch(deleteItemFavourit(productId));
    toast.success("محصول از علاقه‌مندی‌ها حذف شد.");
  }

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-border hover:shadow-card">
      {/* تصویر محصول */}
      <div className="relative aspect-4/3 overflow-hidden bg-surface-alt">
        <img
          src={images?.[0]}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.04]"
        />

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`حذف ${title} از علاقه‌مندی‌ها`}
          title="حذف از علاقه‌مندی‌ها"
          className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/95 text-text-muted shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-text-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <HiOutlineTrash size={19} />
        </button>

        <span className="absolute right-3 top-3 rounded-full bg-surface/95 px-3 py-1 text-[11px] font-medium text-text-muted">
          علاقه‌مندی
        </span>
      </div>

      {/* اطلاعات محصول */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h2
            title={title}
            className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-text-h"
          >
            {title}
          </h2>

          {category?.name && (
            <p className="mt-1 truncate text-xs text-text-muted">
              {category.name}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
            <span className="text-xs text-text-muted">
              قیمت محصول
            </span>

            <span className="text-base font-bold text-primary">
              {formatCurrency(price)}
            </span>
          </div>

          {category?.creationAt && (
            <p className="mt-2 text-xs text-text-muted">
              تاریخ ثبت: {formatDate(category.creationAt)}
            </p>
          )}

          {discriptions && (
            <p className="mt-3 line-clamp-2 text-xs leading-6 text-text-muted">
              {discriptions}
            </p>
          )}
        </div>

        {/* افزودن به سبد خرید */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <CiShoppingCart size={21} />
          افزودن به سبد خرید
        </button>
      </div>
    </article>
  );
}

export default FavouritesItem;
