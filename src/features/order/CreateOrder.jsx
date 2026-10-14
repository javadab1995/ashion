
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  MapPin,
  UserRound,
  Phone,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import EmptyCart from "../cart/EmptyCart";
import { getCart } from "../cart/cartSlice";
import { addOrder } from "./orderSlice";
import { formatCurrency } from "../../utils/helpers";




function generateRandomId() {
  return (
    globalThis.crypto?.randomUUID?.() ??
    Math.random().toString(36).slice(2) +
      Date.now().toString(36)
  );
}

function CreateOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
 const { isAuthenticated, user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    customer: "",
    phoneNumber: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // پرکردن فرم با اطلاعات کاربر واردشده
  useEffect(() => {
    if (!user) return;

    setFormData((current) => ({
      ...current,
      customer:
        current.customer || user.fullName || user.name || "",
      phoneNumber:
        current.phoneNumber || user.phoneNumber || user.phone || "",
      address: current.address || user.address || "",
    }));
  }, [user]);

  if (!cart.length) {
    return <EmptyCart />;
  }

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(item.totalPrice ?? Number(item.price) * Number(item.quantity)),
    0,
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const orderId = generateRandomId();

    const order = {
      id: orderId,
      firstName: formData.customer.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      address: formData.address.trim(),
      cart: cart.map((item) => ({ ...item })),
      totalPrice,
    };

    try {
      dispatch(addOrder(order));
      navigate(`/order/${orderId}`);
    } catch (error) {
      console.error("خطا در ثبت سفارش:", error);
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-bg px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10";

  return (
    <main
      dir="rtl"
      className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14"
    >
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-primary">
          نهایی‌کردن خرید
        </p>

        <h1 className="text-2xl font-bold text-text-h md:text-3xl">
          اطلاعات ارسال سفارش
        </h1>

        <p className="mt-3 text-sm leading-7 text-text-muted">
          اطلاعات گیرنده و نشانی تحویل سفارش را وارد کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
        {/* Form */}
        <section className="rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-8">
          <div className="mb-7 flex items-center gap-3 border-b border-border pb-5">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary-bg text-primary">
              <MapPin size={21} />
            </div>

            <div>
              <h2 className="font-bold text-text-h">
                مشخصات گیرنده
              </h2>
              <p className="mt-1 text-xs text-text-muted">
                فیلدهای ستاره‌دار الزامی هستند.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="customer"
                className="mb-2 block text-sm font-semibold text-text-h"
              >
                نام و نام خانوادگی
                <span className="ms-1 text-primary">*</span>
              </label>

              <div className="relative">
                <UserRound
                  size={18}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="customer"
                  name="customer"
                  type="text"
                  autoComplete="name"
                  value={formData.customer}
                  onChange={handleChange}
                  placeholder="نام گیرنده را وارد کنید"
                  required
                  maxLength={100}
                  className={`${inputClass} pr-10`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="mb-2 block text-sm font-semibold text-text-h"
              >
                شماره تلفن همراه
                <span className="ms-1 text-primary">*</span>
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  dir="ltr"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="09123456789"
                  pattern="09[0-9]{9}"
                  title="شماره همراه باید با 09 شروع شود و 11 رقم باشد."
                  required
                  className={`${inputClass} pe-10 text-right`}
                />
              </div>

              <p className="mt-2 text-xs text-text-muted">
                شماره همراه را با ارقام انگلیسی وارد کنید.
              </p>
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-semibold text-text-h"
              >
                نشانی کامل
                <span className="ms-1 text-primary">*</span>
              </label>

              <div className="relative">
                <MapPin
                  size={18}
                  className="pointer-events-none absolute right-3 top-3.5 text-text-muted"
                />

                <textarea
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="استان، شهر، خیابان، کوچه و پلاک"
                  required
                  minLength={10}
                  maxLength={500}
                  rows={4}
                  className={`${inputClass} resize-y pr-10`}
                />
              </div>
            </div>

            <div className="rounded-xl border border-primary-border bg-primary-bg/50 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <p className="text-xs leading-6 text-text">
                  پیش از ثبت نهایی، شماره تماس و نشانی را بررسی کنید
                  تا هماهنگی و تحویل سفارش با مشکل مواجه نشود.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-text-inverse shadow-btn transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              <ShoppingBag size={19} />
              {isSubmitting ? "در حال ثبت سفارش..." : "ثبت و ادامه سفارش"}
            </button>
          </form>
        </section>

        {/* Order summary */}
        <aside className="rounded-2xl border border-border bg-surface p-5 shadow-card lg:sticky lg:top-6">
          <h2 className="border-b border-border pb-4 text-lg font-bold text-text-h">
            خلاصه سفارش
          </h2>

          <div className="my-5 space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.productId ?? item.id ?? index}
                className="flex items-start gap-3"
              >
                {item.images?.[0] ? (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="size-16 shrink-0 rounded-lg border border-border object-cover"
                  />
                ) : (
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-text-muted">
                    <ShoppingBag size={20} />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-medium leading-6 text-text-h">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-text-muted">
                    تعداد: {item.quantity}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-primary">
                    {formatCurrency(
                      Number(
                        item.totalPrice ??
                          Number(item.price) * Number(item.quantity),
                      ),
                    )}{" "}
                    تومان
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-text-muted">
                جمع محصولات
              </span>

              <span className="text-lg font-bold text-text-h">
                {formatCurrency(totalPrice)} تومان
              </span>
            </div>

            <p className="mt-3 text-xs leading-6 text-text-muted">
              هزینه ارسال، در صورت وجود، در این مبلغ محاسبه نشده است.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text-h transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowRight size={17} />
            بازگشت به سبد خرید
          </button>
        </aside>
      </div>
    </main>
  );
}

export default CreateOrder;
