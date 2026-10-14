
import { ArrowUpLeft } from "lucide-react";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { toPersianDigits } from "../../helpers/number";


const instagramImages = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  src: `/images/insta-${index + 1}.jpg`,
  alt: `تصویر ${index + 1} از گالری اینستاگرام فروشگاه`,
}));

function InstagramLink() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section
      dir="rtl"
      className="mx-auto mt-20 w-full max-w-[1600px] px-4 sm:px-6 lg:px-8"
    >
      {/* Section heading */}
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary" />

            <span className="text-xs font-bold tracking-[0.18em] text-primary">
              FOLLOW OUR STYLE
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-text-h sm:text-3xl">
            گوشه‌ای از دنیای ما
          </h2>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            استایل‌ها و انتخاب‌های روزمره ما را دنبال کن.
          </p>
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-text-h transition-colors hover:border-primary hover:bg-primary-bg hover:text-primary"
        >
          <BsInstagram size={18} />
          صفحه اینستاگرام
          <ArrowUpLeft size={16} />
        </a>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {instagramImages.map((image, index) => {
          const isActive = activeImage === image.id;

          return (
            <button
              key={image.id}
              type="button"
              aria-label={`نمایش جزئیات تصویر ${index + 1}`}
              aria-pressed={isActive}
              onClick={() =>
                setActiveImage(isActive ? null : image.id)
              }
              onMouseEnter={() => setActiveImage(image.id)}
              onMouseLeave={() => setActiveImage(null)}
              onFocus={() => setActiveImage(image.id)}
              onBlur={() => setActiveImage(null)}
              className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-surface-alt text-right outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <span
                className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-primary/80 p-4 text-text-inverse transition-opacity duration-300 ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-text-inverse/40 bg-surface/15">
                  <BsInstagram size={25} />
                </span>

                <span className="text-sm font-bold">
                  استایل ما را ببین
                </span>

                <span className="text-xs text-text-inverse/80">
                  تصویر {toPersianDigits(String(index + 1).padStart(2, "0"))}
                </span>
              </span>

              {/* Index marker */}
              <span className="absolute bottom-3 right-3 rounded-lg border border-border/70 bg-surface/90 px-2 py-1 text-[10px] font-bold text-text-h">
                {toPersianDigits(String(index + 1).padStart(2, "0"))}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default InstagramLink;