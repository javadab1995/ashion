import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiBars3, HiOutlineArrowLeft } from "react-icons/hi2";

import Logo from "./Logo";
import Search from "./Search";


import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { getTotalFavouritsQuantity } from "../features/favourites/FavouritesSlice";
import SwitchTheme from "./SwitchTheme";
import MobileMenu from "./MobileMenu";
import { toPersianDigits } from "../helpers/number";

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { isAuthenticated, username } = useSelector((state) => state.user);

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalFavouriteQuantity = useSelector(getTotalFavouritsQuantity);

  

  return (
    <>
      <div dir="rtl" className="sticky top-0 z-40 bg-bg text-text-h">
        {/* نوار اطلاع‌رسانی */}
        <div className="flex min-h-9 items-center justify-center bg-primary px-4 py-1 text-xs text-text-inverse">
          <p className="flex flex-wrap items-center justify-center gap-x-2">
            مجموعه تازه فصل رسید
            <span className="opacity-50">|</span>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1 underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              کشف محصولات
              <HiOutlineArrowLeft size={13} />
            </Link>
          </p>
        </div>

        {/* هدر اصلی */}
        <header className="border-b border-border bg-surface">
          <div className="mx-auto grid min-h-19 md:px-0 px-4  max-w-7xl grid-cols-[1fr_auto_1fr] items-center">
            {/* منوی دسکتاپ */}
            <nav className="hidden items-center gap-7 lg:flex">
              <LinkButton to="/">خانه</LinkButton>
              <LinkButton to="/shop">فروشگاه</LinkButton>
              <LinkButton to="/aboutus">درباره ما</LinkButton>
              <LinkButton to="/contactus">تماس با ما</LinkButton>
            </nav>

            {/* منوی موبایل */}
            <button
              type="button"
              onClick={() => setIsOpenModal(true)}
              aria-label="باز کردن منو"
              aria-expanded={isOpenModal}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-bg hover:text-primary lg:hidden"
            >
              <HiBars3 size={25} />
            </button>

            {/* لوگو */}
            <div className="flex justify-center">
              <Logo />
            </div>

            {/* ابزارها */}
            <div className="flex items-center justify-end gap-1 sm:gap-3">
              <div className="md:block hidden">
                <Search />
              </div>

              <HeaderIcon
                to={isAuthenticated ? "/account" : "/login"}
                label={isAuthenticated ? "حساب کاربری" : "ورود به حساب"}
              >
                <CiUser size={25} />
              </HeaderIcon>

              <HeaderIcon
                to="/favourites"
                label="علاقه‌مندی‌ها"
                count={totalFavouriteQuantity}
              >
                <CiHeart size={26} />
              </HeaderIcon>

              <HeaderIcon to="/cart" label="سبد خرید" count={totalCartQuantity}>
                <CiShoppingCart size={26} />
              </HeaderIcon>
              <SwitchTheme />
            </div>
          </div>

          {/* نام کاربر در موبایل */}
          {isAuthenticated && username && (
            <div className="border-t border-border px-4 py-2 text-center text-xs text-text-muted lg:hidden">
              خوش آمدی، {username}
            </div>
          )}
        </header>
      </div>

      {isOpenModal && <MobileMenu onClose={() => setIsOpenModal(false)} />}
    </>
  );
}

function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="relative whitespace-nowrap py-2 text-[13px] text-text transition-colors duration-200 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function HeaderIcon({ to, label, count = 0, children }) {
  return (
    <Link
      to={to}
      aria-label={label}
      title={label}
      className="relative md:flex hidden h-10 w-10 shrink-0 items-center justify-center rounded-full text-text-h transition-colors hover:bg-primary-bg hover:text-primary"
    >
      {children}

      {count > 0 && (
        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium leading-none text-text-inverse">
          {count > 99 ? "۹۹+" : toPersianDigits(count)}
        </span>
      )}
    </Link>
  );
}

export default Header;
