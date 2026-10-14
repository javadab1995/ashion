
import {
  BsCarFront,
  BsCash,
} from "react-icons/bs";
import {
  MdOutlineSupport,
} from "react-icons/md";
import {
  RiSecurePaymentFill,
} from "react-icons/ri";

const services = [
  {
    id: 1,
    title: "ارسال رایگان",
    description: "برای سفارش‌های بالای ۹۹ دلار",
    Icon: BsCarFront,
  },
  {
    id: 2,
    title: "ضمانت بازگشت وجه",
    description: "در صورت وجود مشکل در محصول",
    Icon: BsCash,
  },
  {
    id: 3,
    title: "پشتیبانی آنلاین",
    description: "همراه شما در تمام ساعات شبانه‌روز",
    Icon: MdOutlineSupport,
  },
  {
    id: 4,
    title: "پرداخت امن",
    description: "تراکنش امن و حفاظت از اطلاعات پرداخت",
    Icon: RiSecurePaymentFill,
  },
];

function ServiceSection() {
  return (
    <section
      dir="rtl"
      aria-label="مزایای خرید از فروشگاه"
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:mt-20 lg:px-8"
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-surface sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ id, title, description, Icon }) => (
          <div
            key={id}
            className={`group relative flex items-center gap-4 p-5 transition-colors duration-200 hover:bg-surface-alt sm:p-6 ${
              id !== 1
                ? "border-t border-border sm:border-t-0 sm:border-r"
                : ""
            } ${
              id === 2
                ? "lg:border-r"
                : ""
            }`}
          >
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary-border bg-primary-bg text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-text-inverse">
              <Icon size={28} aria-hidden="true" />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-6 text-text-h sm:text-base">
                {title}
              </h3>

              <p className="mt-1 text-xs leading-6 text-text-muted sm:text-sm">
                {description}
              </p>
            </div>

            {/* Decorative accent */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-5 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
