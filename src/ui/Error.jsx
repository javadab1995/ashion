import { useNavigate, Link, useRouteError } from "react-router-dom";
import { AlertTriangle, ArrowRight, Home, RefreshCw } from "lucide-react";

function Error() {
  const navigate = useNavigate();
  const routeError = useRouteError();

  const status = routeError?.status;
  const isNotFound = status === 404;

  const title = isNotFound ? "صفحه پیدا نشد!" : "مشکلی پیش آمده است";

  const description = isNotFound
    ? "صفحه‌ای که دنبالش هستی وجود ندارد یا ممکن است آدرس آن تغییر کرده باشد."
    : "هنگام بارگذاری این صفحه خطایی رخ داد. می‌توانی دوباره تلاش کنی یا به صفحه‌ی اصلی برگردی.";

  function handleRetry() {
    window.location.reload();
  }

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-bg px-5 py-12"
    >
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-bg text-primary">
          <AlertTriangle size={38} strokeWidth={1.7} />
        </div>

        <p className="mt-8 text-sm font-semibold tracking-wide text-primary">
          خطایی رخ داده است
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight text-text-h sm:text-4xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-text-muted sm:text-base">
          {description}
        </p>

        {status && (
          <p className="mt-3 text-xs text-text-muted">کد خطا: {status}</p>
        )}

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-text-inverse shadow-btn transition hover:bg-primary-hover"
          >
            <Home size={18} />
            صفحه‌ی اصلی
          </Link>

          {!isNotFound && (
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 font-semibold text-text-h transition hover:bg-surface-alt"
            >
              <RefreshCw size={18} />
              تلاش دوباره
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-text transition hover:bg-surface-alt"
          >
            <ArrowRight size={18} />
            بازگشت
          </button>
        </div>
      </section>
    </main>
  );
}

export default Error;
