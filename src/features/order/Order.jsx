
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Copy,
  Check,
  ArrowRight,
  PackageCheck,
  MapPin,
  Phone,
  UserRound,
  ShoppingBag,
  CreditCard,
} from "lucide-react";
import { toast } from "react-toastify";

import OrderItem from "./OrderItem";
import { clearOrders, getAllOrders } from "./orderSlice";
import { cleareCart } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { toPersianDigits } from "../../helpers/number";

function Order() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orders = useSelector(getAllOrders);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const order = orders.find((item) => String(item.id) === String(id));

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("شماره سفارش کپی شد.");
    } catch {
      toast.error("کپی شماره سفارش انجام نشد.");
    }
  }

  function handleFinalOrder() {
    if (isConfirmed) return;

    setIsConfirmed(true);

    toast.success("سفارش شما تأیید شد.");

    // این تأیید فعلاً محلی است و پرداخت واقعی انجام نمی‌دهد.
    dispatch(clearOrders());
    dispatch(cleareCart());

    navigate("/");
  }

  if (!order) {
    return (
      <main
        dir="rtl"
        className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center"
      >
        <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-bg text-primary">
          <ShoppingBag size={30} />
        </div>

        <h1 className="mt-5 text-2xl font-bold text-text-h">
          سفارش پیدا نشد
        </h1>

        <p className="mt-3 text-sm leading-7 text-text-muted">
          ممکن است سفارش وجود نداشته باشد یا اطلاعات آن در دسترس نباشد.
        </p>

        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
        >
          بازگشت به فروشگاه
        </button>
      </main>
    );
  }

  const items = order.cart ?? [];

  const totalPrice = Number(
    order.totalPrice ??
      items.reduce(
        (total, item) =>
          total +
          Number(
            item.totalPrice ??
              Number(item.price) * Number(item.quantity),
          ),
        0,
      ),
  );

  return (
    <main
      dir="rtl"
      className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-primary">
            جزئیات سفارش
          </p>

          <h1 className="text-2xl font-bold text-text-h md:text-3xl">
            مرور سفارش شما
          </h1>

          <p className="mt-2 text-sm leading-7 text-text-muted">
            اطلاعات گیرنده و محصولات را پیش از ادامه بررسی کنید.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text-h transition-colors hover:border-primary hover:text-primary sm:self-auto"
        >
          <ArrowRight size={17} />
          بازگشت به فروشگاه
        </button>
      </div>

      {/* Order number */}
      <section className="mb-6 rounded-2xl border border-primary-border bg-primary-bg/50 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
              <PackageCheck size={24} />
            </div>

            <div>
              <p className="text-sm text-text-muted">
                شماره سفارش
              </p>
              <p className="mt-1 break-all text-base font-bold text-text-h">
                {order.id}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => copyToClipboard(String(order.id))}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-border bg-surface px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-bg"
          >
            <Copy size={16} />
            کپی شماره سفارش
          </button>
        </div>
      </section>

      {/* Customer information */}
      <section className="mb-8 rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-7">
        <h2 className="mb-6 border-b border-border pb-4 text-lg font-bold text-text-h">
          اطلاعات گیرنده
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <UserRound
              size={20}
              className="mt-0.5 shrink-0 text-primary"
            />
            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                نام و نام خانوادگی
              </p>
              <p className="mt-2 wrap-break-word text-sm font-semibold text-text-h">
                {order.firstName}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone
              size={20}
              className="mt-0.5 shrink-0 text-primary"
            />
            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                شماره همراه
              </p>
              <p
                dir="ltr"
                className="mt-2 wrap-break-word text-right text-sm font-semibold text-text-h"
              >
                {toPersianDigits(order.phoneNumber)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="mt-0.5 shrink-0 text-primary"
            />
            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                نشانی تحویل
              </p>
              <p className="mt-2 wrap-break-word text-sm font-semibold leading-7 text-text-h">
                {order.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="mb-8 rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-7">
        <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-lg font-bold text-text-h">
            محصولات سفارش
          </h2>

          <span className="rounded-full bg-surface-alt px-3 py-1.5 text-xs font-semibold text-text-muted">
            {toPersianDigits(items.length)} محصول
          </span>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <OrderItem
              key={item.productId ?? item.id ?? index}
              item={item}
            />
          ))}
        </div>
      </section>

      {/* Total and confirmation */}
      <section className="rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-text-muted">
              مبلغ کل محصولات
            </p>

            <p className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
              {toPersianDigits(formatCurrency(totalPrice))}
              <span className="me-2 text-sm font-medium text-text-muted">
                تومان
              </span>
            </p>

            <p className="mt-2 text-xs leading-6 text-text-muted">
              هزینه ارسال یا سایر هزینه‌ها، در صورت وجود، جداگانه محاسبه می‌شوند.
            </p>
          </div>

          <button
            type="button"
            onClick={handleFinalOrder}
            disabled={isConfirmed}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-text-inverse shadow-btn transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            <CreditCard size={19} />
            تأیید سفارش
          </button>
        </div>
      </section>
    </main>
  );
}

export default Order;

