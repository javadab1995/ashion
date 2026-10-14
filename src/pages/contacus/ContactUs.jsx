import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IoHomeOutline, IoArrowBackOutline } from "react-icons/io5";
import {
  MapPin,
  Phone,
  Headset,
  Mail,
  Send,
  MessageCircle,
} from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.warning("لطفاً نام، ایمیل و متن پیام را وارد کنید.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      toast.warning("لطفاً یک آدرس ایمیل معتبر وارد کنید.");
      return;
    }

    // این فرم هنوز به سرویس ارسال پیام متصل نشده است.
    toast.info("فرم آماده است، اما ارسال پیام هنوز فعال نشده است.");
  }

  const contactItems = [
    {
      icon: Mail,
      title: "ایمیل",
      value: "ایمیل پشتیبانی فروشگاه را وارد کنید",
    },
    {
      icon: Phone,
      title: "تلفن تماس",
      value: "شماره تماس فروشگاه را وارد کنید",
    },
    {
      icon: MapPin,
      title: "نشانی",
      value: "نشانی فروشگاه یا دفتر را وارد کنید",
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-bg px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        {/* مسیر صفحه */}
        <nav
          aria-label="مسیر صفحه"
          className="mb-8 flex items-center gap-2 text-sm text-text-muted"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <IoHomeOutline size={18} />
            خانه
          </Link>

          <IoArrowBackOutline size={16} />

          <span className="text-text-h">تماس با ما</span>
        </nav>

        {/* عنوان */}
        <header className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-bg px-4 py-2 text-sm font-medium text-primary">
            <MessageCircle size={16} />
            ارتباط با ما
          </span>

          <h1 className="mt-5 text-3xl font-bold text-text-h sm:text-4xl">
            چطور می‌توانیم کمکت کنیم؟
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
            اگر درباره‌ی محصولات، سفارش‌ها یا خرید از فروشگاه سؤالی داری، از
            طریق فرم زیر پیام خودت را برای ما بنویس.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* اطلاعات تماس */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
              <h2 className="text-xl font-bold text-text-h">راه‌های ارتباطی</h2>

              <p className="mt-2 text-sm leading-7 text-text-muted">
                اطلاعات تماس واقعی فروشگاه را در این بخش قرار بده.
              </p>

              <div className="mt-7 space-y-6">
                {contactItems.map(({ icon: Icon, title, value }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-bg text-primary">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="font-semibold text-text-h">{title}</h3>

                      <p className="mt-1 wrap-break-word text-sm leading-6 text-text-muted">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary-border bg-primary-bg p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary">
                  <Headset size={21} />
                </div>

                <h3 className="font-bold text-text-h">همراه شما هستیم</h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-text">
                هدف ما این است که تجربه‌ی خریدی ساده و مطمئن داشته باشی.
                پیام‌هایت باید از طریق یک مسیر پشتیبانی واقعی دریافت و پیگیری
                شوند.
              </p>
            </div>
          </aside>

          {/* فرم پیام */}
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-text-h">ارسال پیام</h2>

            <p className="mt-2 text-sm leading-7 text-text-muted">
              فیلدهای ستاره‌دار الزامی هستند.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-text-h"
                >
                  نام و نام خانوادگی
                  <span className="mr-1 text-primary">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام خود را وارد کنید"
                  className="w-full rounded-xl border border-input bg-bg px-4 py-3 text-text-h outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-text-h"
                  >
                    ایمیل
                    <span className="mr-1 text-primary">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    dir="ltr"
                    className="w-full rounded-xl border border-input bg-bg px-4 py-3 text-left text-text-h outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-website"
                    className="mb-2 block text-sm font-medium text-text-h"
                  >
                    وب‌سایت
                    <span className="mr-1 text-text-muted">(اختیاری)</span>
                  </label>

                  <input
                    id="contact-website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    dir="ltr"
                    className="w-full rounded-xl border border-input bg-bg px-4 py-3 text-left text-text-h outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-text-h"
                >
                  متن پیام
                  <span className="mr-1 text-primary">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="پیام خود را اینجا بنویسید..."
                  className="w-full resize-y rounded-xl border border-input bg-bg px-4 py-3 leading-7 text-text-h outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-text-inverse shadow-btn transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
              >
                <Send size={18} />
                ارسال پیام
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}

export default ContactUs;
