import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineUser } from "react-icons/hi2";
import { CiLock, CiMail } from "react-icons/ci";

import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import { login, updateName } from "./userSlice";
import Input from "../../ui/Input";
import { PiPassword } from "react-icons/pi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  function handleModeChange() {
    setIsLogin((current) => !current);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) return;

    // این پروژه فعلاً احراز هویت واقعی ندارد.
    // در ثبت‌نام نام را ذخیره می‌کنیم.
    if (!isLogin) {
      if (!username.trim()) return;
      dispatch(updateName(username.trim()));
    }

    // توجه: این اکشن فعلاً ورود واقعی با ایمیل و رمز عبور نیست.
    dispatch(login(isLogin ? email.trim() : username.trim()));

    navigate("/account", { replace: true });
  }

  return (
    <main
      dir="rtl"
      className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-8 text-text"
    >
      <div className="mb-7 flex justify-center">
        <Logo />
      </div>

      <section className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
        <div className="px-6 pb-2 pt-8 text-center sm:px-9">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-bg text-primary">
            <HiOutlineUser size={28} />
          </div>

          <h1 className="text-2xl font-bold text-text-h">
            {isLogin ? "خوش برگشتی!" : "ساخت حساب کاربری"}
          </h1>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            {isLogin
              ? "برای ورود، اطلاعات حساب خود را وارد کن."
              : "برای شروع خرید، اطلاعاتت را وارد کن."}
          </p>
        </div>

        <div className="px-6 pb-8 pt-6 sm:px-9">
          <div className="mb-7 grid grid-cols-2 rounded-xl bg-surface-alt p-1">
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                !isLogin
                  ? "bg-surface text-primary shadow-sm"
                  : "text-text-muted hover:text-text-h"
              }`}
            >
              ثبت‌نام
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                isLogin
                  ? "bg-surface text-primary shadow-sm"
                  : "text-text-muted hover:text-text-h"
              }`}
            >
              ورود
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <Input
                  label="نام کاربری"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  icon={HiOutlineUser}
                  placeholder="نام خود را وارد کن"
                  inputClassName="h-14 rounded-2xl  focus:ring-4 focus:ring-primary/10"
                />
              </div>
            )}

            <div>
              <Input
                label="ایمیل"
                name="email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                icon={CiMail}
                inputClassName="h-14 rounded-2xl  focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div>
              <Input
                label="نام  رمز عبور"
                name="password"
                value={password}
                type="password"
               
                autoComplete={isLogin ? "current-password" : "new-password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور خود را وارد کن"
                required
                minLength={6}
                icon={CiLock}
                inputClassName="h-14 rounded-2xl  focus:ring-4 focus:ring-primary/10"
              />

             
             
            </div>

            <Button type="submit">
              {isLogin ? "ورود به حساب" : "ساخت حساب"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-muted">
            {isLogin ? "هنوز حساب نداری؟" : "قبلاً ثبت‌نام کرده‌ای؟"}

            <button
              type="button"
              onClick={handleModeChange}
              className="mr-1 font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              {isLogin ? "ثبت‌نام کن" : "وارد شو"}
            </button>
          </p>

          <div className="mt-6 border-t border-border pt-5">
            <Link
              to="/shop"
              className="flex items-center justify-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
            >
              ادامه خرید بدون ورود
              <HiOutlineArrowLeft size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
