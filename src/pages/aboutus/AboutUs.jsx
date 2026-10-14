import { Link } from "react-router-dom";
import { IoHomeOutline, IoArrowBackOutline } from "react-icons/io5";
import { Heart, Sparkles, UsersRound, ShieldCheck } from "lucide-react";

function AboutUs() {
  const values = [
    {
      icon: Sparkles,
      title: "استایل برای خودت",
      description:
        "ما باور داریم لباس فقط چیزی برای پوشیدن نیست؛ راهی برای بیان سلیقه، شخصیت و حس خوب توست.",
    },
    {
      icon: UsersRound,
      title: "انتخاب برای همه",
      description:
        "تلاش می‌کنیم مجموعه‌ای متنوع از پوشاک فراهم کنیم تا هر کسی بتواند انتخابی متناسب با سلیقه و نیازش داشته باشد.",
    },
    {
      icon: ShieldCheck,
      title: "خرید مطمئن",
      description:
        "می‌خواهیم تجربه‌ی خرید آنلاین ساده، شفاف و قابل اعتماد باشد؛ از انتخاب محصول تا دریافت سفارش.",
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-bg px-4 pb-16 pt-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav
          aria-label="مسیر صفحه"
          className="mb-10 flex items-center gap-2 text-sm text-text-muted"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <IoHomeOutline size={18} />
            خانه
          </Link>

          <IoArrowBackOutline size={16} />

          <span className="text-text-h">درباره‌ی ما</span>
        </nav>

        {/* Hero */}
        <section className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-card md:grid-cols-2 md:gap-12 md:p-10 lg:p-14">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-bg px-4 py-2 text-sm font-medium text-primary">
              <Heart size={16} />
              داستان ما
            </span>

            <h1 className="text-3xl font-bold leading-tight text-text-h sm:text-4xl lg:text-5xl">
              استایل تو،
              <span className="mt-2 block text-primary">انتخاب توست.</span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-text sm:text-lg">
              ما این فروشگاه را با یک ایده‌ی ساده شروع کردیم: پیدا کردن
              لباس‌هایی که با سلیقه‌ی تو هماهنگ باشند، خریدشان آسان باشد و
              پوشیدنشان حس خوبی به تو بدهد.
            </p>

            <p className="max-w-xl leading-8 text-text-muted">
              برای ما، مد فقط دنبال کردن ترندها نیست. مهم این است که بتوانی سبک
              خودت را پیدا کنی و با اعتمادبه‌نفس انتخابش کنی.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-text-inverse shadow-btn transition hover:bg-primary-hover"
            >
              دیدن محصولات
              <IoArrowBackOutline size={18} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="/who.jpg"
              alt="مجموعه‌ای از استایل‌های پوشاک"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />

            <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-surface/95 px-4 py-3 shadow-card backdrop-blur">
              <p className="font-semibold text-text-h">استایل، فراتر از مد</p>
              <p className="mt-1 text-sm text-text-muted">
                انتخابی برای بیان خودت
              </p>
            </div>
          </div>
        </section>

        {/* Brand values */}
        <section className="py-16 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-sm font-semibold text-primary">
              آنچه به آن باور داریم
            </span>

            <h2 className="mt-3 text-2xl font-bold text-text-h sm:text-3xl">
              خریدی فراتر از انتخاب لباس
            </h2>

            <p className="mt-4 leading-8 text-text-muted">
              تجربه‌ای که می‌خواهیم برای مشتریانمان بسازیم، بر پایه‌ی انتخاب
              آزادانه، تنوع و اعتماد شکل می‌گیرد.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-bg text-primary">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-bold text-text-h">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Closing section */}
        <section className="overflow-hidden rounded-3xl border border-primary-border bg-primary-bg px-6 py-10 text-center sm:px-10 md:py-14">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary">
            <Heart size={23} />
          </span>

          <h2 className="mt-5 text-2xl font-bold text-text-h sm:text-3xl">
            بخشی از داستان ما باش
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-8 text-text">
            استایل شخصی تو از انتخاب‌های کوچک ساخته می‌شود. ما اینجاییم تا پیدا
            کردن انتخاب بعدی‌ات را ساده‌تر کنیم.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-text-inverse transition hover:bg-primary-hover"
          >
            شروع خرید
            <IoArrowBackOutline size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
