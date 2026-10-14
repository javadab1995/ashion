
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Tag } from "lucide-react";
import CountdownComponnent from "../../ui/CountdownComponnent";
import { toPersianDate } from "../../helpers/date-formater";

function DiscountBanner() {
  return (
    <section
      dir="rtl"
      className="mx-auto mb-24 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="relative isolate grid overflow-hidden rounded-[28px] border border-primary-border bg-surface shadow-card md:grid-cols-2">
        {/* Image */}
        <div className="group relative min-h-70 overflow-hidden bg-surface-alt sm:min-h-90 md:min-h-110">
          <img
            src="/images/discount.jpg"
            alt="مجموعه ویژه تخفیف فروشگاه"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#271D20]/50 via-transparent to-transparent" />

          {/* Campaign label */}
          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-xl border border-primary bg-surface-alt  px-4 py-2.5 text-sm font-bold text-text-h shadow-sm backdrop-blur-sm">
            <Sparkles size={17} className="text-primary" />
            پیشنهاد ویژه
          </div>

          {/* Image caption */}
          <div className="absolute bottom-6 right-6 left-6 text-white sm:bottom-8 sm:right-8">
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-white/80">
              LIMITED TIME OFFER
            </p>
            <p className="text-xl font-bold sm:text-2xl">
              انتخاب‌های خاص،
              <span className="mr-2 text-[#FFD8CF]">با قیمت متفاوت</span>
            </p>
          </div>

          {/* Geometric corner */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-16 w-16 rounded-tr-[28px] border-r border-t border-white/40 bg-white/10 backdrop-blur-sm"
          />
        </div>

        {/* Discount content */}
        <div className="relative flex min-h-100 flex-col items-center justify-center overflow-hidden px-5 py-12 text-center sm:px-10 md:min-h-110 lg:px-14">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full border-24 border-primary-bg"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rotate-45 border border-secondary/40"
          />

          {/* Discount badge */}
          <div className="relative mb-6 flex h-20 w-20 rotate-[-8deg] flex-col items-center justify-center rounded-[22px] border border-primary-border bg-primary-bg shadow-sm sm:h-24 sm:w-24">
            <Tag size={19} className="mb-1 text-primary" />
            <span className="text-2xl font-black leading-none text-primary sm:text-3xl">
              50%
            </span>
            <span className="mt-1 text-[9px] font-bold text-primary">
              تخفیف
            </span>
          </div>

          <p className="mb-3 text-xs font-extrabold tracking-[0.25em] text-primary sm:text-sm">
            THE SEASONAL SALE
          </p>

          <h2 className="text-3xl font-black tracking-tight text-text-h sm:text-4xl lg:text-5xl">
            فصل تخفیف
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-7 text-text-muted">
            فرصت انتخاب محصولات محبوبت با قیمت‌های ویژه. این پیشنهاد فقط برای
            مدت محدودی در دسترس است.
          </p>

          {/* Divider */}
          <div className="my-7 flex w-full max-w-sm items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs font-bold text-primary">
              زمان باقی‌مانده
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Countdown */}
          <div className="mb-8 w-full max-w-md">
            <CountdownComponnent
              date={new Date("2026-11-10T23:59:59").getTime()}
            />
          </div>

          <Link
            to="/shop"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary px-7 py-3.5 text-sm font-bold text-text-inverse shadow-btn transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            مشاهده محصولات تخفیف‌دار
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>

          <span className="mt-4 text-[11px] text-text-muted">
            فرصت محدود · انتخاب هوشمندانه
          </span>
        </div>
      </div>
    </section>
  );
}

export default DiscountBanner;

