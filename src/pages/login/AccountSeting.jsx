
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { logout, updateName } from "./userSlice";
import LinkButton from "../../ui/LinkButton";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const AccountSetting = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(userInfo?.name ?? "");
  const [phone, setPhone] = useState(userInfo?.phone ?? "");
  const [address, setAddress] = useState(userInfo?.address ?? "");

  useEffect(() => {
    setName(userInfo?.name ?? "");
    setPhone(userInfo?.phone ?? "");
    setAddress(userInfo?.address ?? "");
  }, [userInfo]);

  const handleSave = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("نام را وارد کن.");
      return;
    }

    dispatch(updateName(name.trim()));

    // شماره تماس و آدرس تا زمان تعریف اکشن ذخیره نمی‌شوند.
    toast.success("نام کاربری به‌روزرسانی شد.");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-bg px-4 py-10 text-text sm:px-6"
    >
      <section className="mx-auto w-full max-w-2xl">
        <header className="mb-8">
          <p className="mb-2 text-sm font-medium text-primary">
            حساب کاربری
          </p>

          <h1 className="text-2xl font-bold text-text-h sm:text-3xl">
            تنظیمات حساب
          </h1>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            اطلاعات پروفایل خود را مشاهده و ویرایش کن.
          </p>
        </header>

        <form
          onSubmit={handleSave}
          className="rounded-3xl border border-border bg-surface p-5 shadow-card sm:p-8"
        >
          <div className="mb-7 flex items-center gap-4 border-b border-border pb-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-bg text-primary">
              <HiOutlineUser size={28} />
            </div>

            <div className="min-w-0">
              <h2 className="font-bold text-text-h">
                اطلاعات شخصی
              </h2>

              <p className="mt-1 truncate text-sm text-text-muted">
                {userInfo?.email || "ایمیل ثبت نشده است"}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <Input
              id="name"
              name="name"
              label="نام و نام خانوادگی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خود را وارد کن"
              autoComplete="name"
              required
              icon={HiOutlineUser}
            />

            <Input
              id="phone"
              name="phone"
              type="tel"
              label="شماره تماس"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="شماره تماس خود را وارد کن"
              autoComplete="tel"
              icon={HiOutlinePhone}
            />

            <Input
              id="address"
              name="address"
              label="آدرس"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="آدرس خود را وارد کن"
              autoComplete="street-address"
              icon={HiOutlineMapPin}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              type="submit"
              className="w-full sm:flex-1"
            >
              ذخیره تغییرات
            </Button>

            <Button
              type="secondary"
              htmlType="button"
              onClick={handleLogout}
              className="w-full sm:flex-1"
            >
              <HiOutlineArrowRightOnRectangle size={19} />
              خروج از حساب
            </Button>
          </div>
        </form>
        <LinkButton to="/">
          <BiChevronRight />
          <span>بازگشت به فروشگاه</span>
        </LinkButton>
      </section>
    </main>
  );
};

export default AccountSetting;

