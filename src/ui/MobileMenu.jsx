
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { HiOutlineXMark } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiArrowLeft } from "react-icons/hi";

const menuItems = [
  {
    label: "خانه",
    to: "/",
    icon: IoHomeOutline,
  },
  {
    label: "فروشگاه",
    to: "/shop",
    icon: BsShop,
  },
  {
    label: "درباره ما",
    to: "/aboutus",
    icon: AiOutlineExclamationCircle,
  },
  {
    label: "تماس با ما",
    to: "/contactus",
    icon: LiaPhoneVolumeSolid,
  },
  {
    label: "حساب کاربری",
    to: "/login",
    icon: MdOutlineManageAccounts,
  },
];

function MobileMenu({ onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-60 flex md:hidden  p-3 sm:p-4"
    >
      {/* پس‌زمینه */}
      <button
        type="button"
        aria-label="بستن منو"
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-[3px] animate-in fade-in duration-200"
      />

      {/* پنل منو */}
      <aside
        aria-label="منوی اصلی"
        className="relative flex h-full max-h-180 w-[min(82vw,340px)] flex-col overflow-hidden rounded-[28px] border border-border bg-surface shadow-2xl animate-in slide-in-from-right-3 fade-in duration-300"
      >
        {/* سربرگ */}
        <div className="flex items-center justify-between border-b border-border px-5 py-5">
          <div>
            <p className="text-lg font-semibold text-text-h">
              منوی اصلی
            </p>
            <p className="mt-1 text-xs text-text-muted">
              به فروشگاه ما خوش آمدی
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-alt text-text transition-colors hover:bg-primary-bg hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <HiOutlineXMark size={23} />
          </button>
        </div>

        {/* لینک‌ها */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-[11px] font-medium text-text-muted">
            دسترسی سریع
          </p>

          <ul className="space-y-1.5">
            {menuItems.map(({ label, to, icon: Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm text-text transition-colors duration-200 hover:bg-primary-bg hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-text-muted transition-colors group-hover:bg-primary group-hover:text-text-inverse">
                    <Icon size={22} />
                  </span>

                  <span className="font-medium">{label}</span>

                  <span className="mr-auto text-text-muted transition-transform group-hover:-translate-x-1 group-hover:text-primary">
                    <HiArrowLeft />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* پایین پنل */}
        <div className="border-t border-border p-5">
          <div className="rounded-2xl bg-primary-bg p-4">
            <p className="text-sm font-semibold text-text-h">
              دنبال محصول خاصی هستی؟
            </p>
            <p className="mt-1 text-xs leading-6 text-text-muted">
              محصولات جدید فروشگاه را ببین و انتخابت را پیدا کن.
            </p>

            <Link
              to="/shop"
              onClick={onClose}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-text-inverse transition-colors hover:bg-primary-hover"
            >
              مشاهده محصولات
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;
