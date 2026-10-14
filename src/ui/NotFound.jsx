import { Link } from "react-router-dom";
import { SearchX, House, ShoppingBag, ArrowRight } from "lucide-react";

function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-bg px-5 py-12"
    >
      <section className="w-full max-w-lg text-center">
        <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-primary-bg">
          <span className="text-6xl font-black tracking-tight text-primary">
            404
          </span>

          <div className="absolute -left-1 bottom-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-primary shadow-card">
            <SearchX size={23} />
          </div>
        </div>

        <p className="mt-8 text-sm font-semibold text-primary">
          صفحه‌ای که دنبالش هستی پیدا نشد
        </p>

        <h1 className="mt-3 text-3xl font-bold text-text-h sm:text-4xl">
          اینجا چیزی برای دیدن نیست!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-text-muted sm:text-base">
          ممکن است آدرس را اشتباه وارد کرده باشی یا صفحه جابه‌جا شده باشد. نگران
          نباش، محصولات فروشگاه هنوز سر جایشان هستند.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-text-inverse shadow-btn transition hover:bg-primary-hover"
          >
            <House size={18} />
            صفحه اصلی
          </Link>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 font-semibold text-text-h transition hover:bg-surface-alt"
          >
            <ShoppingBag size={18} />
            مشاهده محصولات
          </Link>
        </div>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-1 text-sm text-text-muted transition hover:text-primary"
        >
          <ArrowRight size={15} />
          بازگشت به خانه
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
