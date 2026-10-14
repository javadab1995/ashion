import { useDispatch, useSelector } from "react-redux";
import {
  cleareCart,
  getCart,
  getTotalCartQuantity,
  getTotalPrice,
} from "./cartSlice";

import { formatCurrency } from "../../utils/helpers";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

import { Link } from "react-router-dom";
import { CiShoppingCart, CiTrash } from "react-icons/ci";
import { toPersianDigits } from "../../helpers/number";

function Cart() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalPrice);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (totalQuantity === 0) {
    return (
      <div className="flex min-h-screen flex-col bg-bg text-text">
        <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
          <EmptyCart />
        </main>
      </div>
    );
  }

  return (
    <div dir="rtl" className="flex min-h-screen flex-col bg-bg text-text">


      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* عنوان صفحه */}
        <div className="mb-8 border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-bg text-primary">
              <CiShoppingCart size={30} />
            </span>

            <div>
              <h1 className="text-xl font-bold text-text-h sm:text-2xl">
                سبد خرید
              </h1>

              <p className="mt-1 text-sm text-text-muted">
                {totalQuantity.toLocaleString("fa-IR")} عدد محصول در سبد خرید
                شما
              </p>
            </div>
          </div>
        </div>

        {/* محصولات و خلاصه سفارش */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.85fr)] lg:gap-8">
          {/* فهرست محصولات */}
          <section className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-semibold text-text-h">محصولات انتخاب‌شده</h2>

              <button
                type="button"
                onClick={() => dispatch(cleareCart())}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-xs text-text-muted transition-colors hover:bg-primary-bg hover:text-primary sm:text-sm"
              >
                <CiTrash size={19} />
                پاک کردن سبد
              </button>
            </div>

            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {cart.map((item) => (
                <li key={item.productId} className="min-w-0">
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
          </section>

          {/* خلاصه سفارش */}
          <aside className="min-w-0 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6">
              <h2 className="text-lg font-semibold text-text-h">خلاصه سفارش</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-text-muted">تعداد محصولات</span>

                  <span className="font-medium text-text-h">
                    {totalQuantity.toLocaleString("fa-IR")} عدد
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-text-muted">مجموع قیمت</span>

                  <span className="font-medium text-text-h">
                    {toPersianDigits(formatCurrency(totalPrice))}
                  </span>
                </div>

                <div className="border-t border-dashed border-border pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold text-text-h">
                      مبلغ قابل پرداخت
                    </span>

                    <span className="text-lg font-bold text-primary">
                      {toPersianDigits(formatCurrency(totalPrice))}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-text-muted">
                    هزینه ارسال و سایر مبالغ احتمالی در مرحله نهایی سفارش مشخص
                    می‌شوند.
                  </p>
                </div>
              </div>

              <Link
                to="/order/new"
                className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                ادامه و تکمیل سفارش
              </Link>

              <Link
                to="/shop"
                className="mt-3 flex min-h-11 w-full items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary hover:bg-primary-bg hover:text-primary"
              >
                ادامه خرید
              </Link>
            </div>
          </aside>
        </div>
      </main>


    </div>
  );
}

export default Cart;
