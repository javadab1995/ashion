
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpLeft } from "lucide-react";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import { toPersianDigits } from "../../helpers/number";

const slides = [
  {
    eyebrow: "THE NEW COLLECTION",
    title: "استایلی متفاوت،",
    highlight: "برای هر روز",
    description:
      "انتخاب‌هایی تازه برای کسانی که سبک شخصی خودشان را می‌سازند.",
    buttonText: "مشاهده محصولات",
    image: "/images/banner-1.jpg",
    accent: "bg-primary",
    number: "01",
  },
  {
    eyebrow: "TIMELESS STYLE",
    title: "سادگی،",
    highlight: "با امضای تو",
    description:
      "ترکیب ظرافت و راحتی در مجموعه‌ای از انتخاب‌های ماندگار.",
    buttonText: "کشف مجموعه",
    image: "/images/banner-2.jpg",
    accent: "bg-secondary",
    number: "02",
  },
  {
    eyebrow: "YOUR NEXT FAVORITE",
    title: "جزئیات کوچک،",
    highlight: "تفاوت بزرگ",
    description:
      "قطعاتی که به استایل روزمره‌ات شخصیت تازه‌ای می‌بخشند.",
    buttonText: "خرید آنلاین",
    image: "/images/banner-3.jpg",
    accent: "bg-primary",
    number: "03",
  },
];

function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section
      dir="rtl"
      aria-label="مجموعه‌های ویژه فروشگاه"
      className="mx-auto mb-20 w-full max-w-[1600px] px-3 sm:px-6 lg:px-8"
    >
      <div className="relative isolate min-h-127.5 overflow-hidden rounded-[28px] border border-primary-border bg-surface-alt sm:min-h-115 lg:min-h-135">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img
            key={currentSlide.image}
            src={currentSlide.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Image overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-l from-bg/95 via-bg/85 to-text/15" />

        {/* Geometric shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-20 -z-10 h-64 w-64 rotate-12 rounded-[42%] border border-primary/30 sm:h-80 sm:w-80"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-10 -z-10 h-52 w-52 rounded-full border-24 border-primary/10 sm:h-64 sm:w-64"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[28%] -z-10 h-24 w-24 rotate-45 border border-secondary/30"
        />

        {/* Main content */}
        <div className="flex min-h-127.5 items-center px-6 py-16 sm:min-h-115 sm:px-12 lg:min-h-135 lg:px-20">
          <div
            key={currentIndex}
            className="w-full max-w-xl animate-[banner-enter_600ms_ease-out_both]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className={`h-1 w-10 rounded-full ${currentSlide.accent}`} />

              <span className="text-xs font-extrabold tracking-[0.2em] text-primary sm:text-sm">
                {currentSlide.eyebrow}
              </span>
            </div>

            <div className="mb-5 flex items-start gap-4">
              <span className="mt-2 hidden text-sm font-bold tabular-nums text-primary/70 sm:block">
                {toPersianDigits(currentSlide.number)}
              </span>

              <div>
                <h1 className="text-3xl font-black leading-normal tracking-tight text-text-h sm:text-4xl lg:text-6xl">
                  {currentSlide.title}
                  <span className="relative mt-1 block w-fit text-primary">
                    {currentSlide.highlight}

                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 right-0 h-1 w-2/3 rounded-full bg-secondary/60"
                    />
                  </span>
                </h1>
              </div>
            </div>

            <p className="mb-8 max-w-md text-sm leading-8 text-text sm:text-base">
              {currentSlide.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <LinkButton
                to="/shop"
                type="submit"
                className="gap-3 px-6 py-3.5 shadow-btn"
              >
                {currentSlide.buttonText}
                <ArrowLeft size={18} />
              </LinkButton>

              <button
                type="button"
                onClick={goToNext}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-text-h transition-colors hover:bg-primary-bg hover:text-primary"
              >
                اسلاید بعدی
                <ArrowUpLeft size={17} />
              </button>
            </div>

            {/* Slide indicators */}
            <div className="mt-10 flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.number}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`رفتن به اسلاید ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-12 bg-primary"
                      : "w-5 bg-primary/25 hover:bg-primary/50"
                  }`}
                />
              ))}

              <span className="mr-2 text-xs font-bold tabular-nums text-text-muted">
                {toPersianDigits(currentSlide.number)} / {toPersianDigits("03")}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-16 w-16 rounded-tr-[28px] border-r border-t border-primary-border bg-surface/70 backdrop-blur-sm sm:h-20 sm:w-20"
        >
          <div className="flex h-full items-center justify-center">
            <span className="text-lg font-black text-primary">✳</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSlider;
