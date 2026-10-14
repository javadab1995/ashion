
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";

import { formatCurrency } from "../../utils/helpers";

import { CiTrash } from "react-icons/ci";
import { toPersianDigits } from "../../helpers/number";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { productId, title, images, totalPrice, quantity, category } = item;

  function handleDecrease() {
    if (quantity <= 1) {
      dispatch(deleteItem(productId));
      return;
    }

    dispatch(decreaseItemQuantity(productId));
  }

  return (
    <article className="flex min-w-0 gap-3 p-3 sm:gap-5 sm:p-5">
      {/* تصویر محصول */}
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-surface-alt sm:h-32 sm:w-32 lg:h-36 lg:w-36">
        <img
          src={images?.[0]}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain p-1 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 py-1">
        <div className="min-w-0">
          <h3 className="line-clamp-2 wrap-break-word text-sm font-semibold leading-6 text-text-h sm:text-base">
            {title}
          </h3>

          <p className="mt-1 truncate text-xs text-text-muted sm:text-sm">
            {category?.slug ?? "محصول"}
          </p>

          <p className="mt-2 text-sm font-bold text-primary sm:text-base">
            {toPersianDigits(formatCurrency(totalPrice))}
          </p>
        </div>

        {/* کنترل تعداد و حذف */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            dir="ltr"
            className="inline-flex h-9 items-center gap-3 rounded-full border border-border bg-surface-alt px-2"
          >
            <button
              type="button"
              onClick={() => dispatch(increaseItemQuantity(productId))}
              aria-label={`افزایش تعداد ${title}`}
              className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-medium text-text-h transition-colors hover:bg-primary hover:text-text-inverse"
            >
              +
            </button>

            <span
              aria-label={`تعداد: ${quantity}`}
              className="min-w-5 text-center text-sm font-semibold tabular-nums text-text-h"
            >
              {quantity.toLocaleString("fa-IR")}
            </span>

            <button
              type="button"
              onClick={handleDecrease}
              aria-label={`کاهش تعداد ${title}`}
              className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-medium text-text-h transition-colors hover:bg-primary hover:text-text-inverse"
            >
              −
            </button>
          </div>

          <button
            type="button"
            onClick={() => dispatch(deleteItem(productId))}
            aria-label={`حذف ${title} از سبد خرید`}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-2 text-xs text-text-muted transition-colors hover:bg-primary-bg hover:text-primary sm:px-3 sm:text-sm"
          >
            <CiTrash size={19} />
            <span>حذف</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
