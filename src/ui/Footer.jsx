import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { SlSocialInstagram } from "react-icons/sl";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const footerLinks = [
  {
    title: "فروشگاه",
    links: [
      { label: "محصولات", to: "/shop" },
      { label: "جدیدترین‌ها", to: "/shop?sort=newest" },
      { label: "پرفروش‌ترین‌ها", to: "/shop?sort=bestselling" },
      { label: "تخفیف‌ها", to: "/shop?discount=true" },
    ],
  },
  {
    title: "حساب کاربری",
    links: [
      { label: "حساب کاربری من", to: "/account" },
      { label: "سفارش‌ها", to: "/orders" },
      { label: "علاقه‌مندی‌ها", to: "/favourites" },
      { label: "تسویه حساب", to: "/checkout" },
    ],
  },
];

const socials = [
  { label: "فیسبوک", icon: TiSocialFacebook, link: "#" },
  { label: "توییتر", icon: TiSocialTwitter, link: "#" },
  { label: "اینستاگرام", icon: SlSocialInstagram, link: "#" },
  { label: "یوتیوب", icon: TiSocialYoutube, link: "#" },
  { label: "پینترست", icon: TiSocialPinterest, link: "#" },
];

function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("لطفاً آدرس ایمیل خود را وارد کنید.");
      return;
    }

    // اتصال به سرویس خبرنامه باید اینجا پیاده‌سازی شود.
    toast.info("عضویت در خبرنامه هنوز فعال نشده است.");
  }

  return (
    <footer className="mt-16 border-t border-border bg-surface text-text" dir="rtl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-12 lg:grid-cols-4 lg:gap-y-12 lg:px-8 lg:py-14">
        {/* بخش برند و اطلاعات */}
        <div className="min-w-0 space-y-5">
          <Link
            to="/"
            aria-label="صفحه اصلی مینی شاپ"
            className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src="/logo.png"
              alt="مینی شاپ"
              className="h-auto w-32 object-contain sm:w-36"
            />
          </Link>

          <p className="max-w-sm text-sm leading-7 text-text/70">
            توضیحات کوتاه درباره فروشگاه یا برند شما که می‌توانید در این قسمت قرار دهید.
          </p>

          <div
            className="flex flex-wrap items-center gap-3"
            aria-label="روش‌های پرداخت پذیرفته شده"
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <img
                key={item}
                src={`/payment-${item}.png`}
                alt={`روش پرداخت ${item}`}
                loading="lazy"
                className="h-6 max-w-14 object-contain sm:h-7"
              />
            ))}
          </div>
        </div>

        {/* لینک‌های فوتر */}
        {footerLinks.map((section) => (
          <nav
            key={section.title}
            aria-label={section.title}
            className="min-w-0"
          >
            <h2 className="mb-4 text-base font-semibold text-primary sm:mb-5 sm:text-lg">
              {section.title}
            </h2>

            <ul className="space-y-3 text-sm text-text/80">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-flex max-w-full rounded-sm transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* خبرنامه و شبکه‌های اجتماعی */}
        <div className="min-w-0 space-y-5">
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primary sm:text-lg">
              خبرنامه
            </h2>

            <p className="text-sm leading-6 text-text/80">
              برای اطلاع از جدیدترین محصولات و تخفیف‌ها عضو شوید.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full min-w-0 overflow-hidden rounded-full border border-border bg-surface transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="آدرس ایمیل..."
              aria-label="آدرس ایمیل"
              autoComplete="email"
              required
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-text outline-none placeholder:text-text/50"
            />

            <button
              type="submit"
              className="shrink-0 bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              عضویت
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-2">
            {socials.map(({ label, icon: Icon, link }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-border/40 text-text transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="border-t border-border px-4 py-5 text-center text-xs leading-6 text-text/70 sm:px-6 sm:text-sm">
        تمامی حقوق محفوظ است © {new Date().getFullYear()} مینی‌شاپ.
      </div>
    </footer>
  );
}

export default Footer;
