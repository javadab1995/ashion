
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

function EmptyFavourite() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-col items-center rounded-3xl border border-border bg-surface px-5 py-10 text-center shadow-card sm:px-10 sm:py-12">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-bg text-primary">
        <CiHeart size={52} strokeWidth={1.2} />
      </div>

      <h2 className="mt-6 text-xl font-bold text-text-h sm:text-2xl">
        هنوز محصولی ذخیره نکردی!
      </h2>

      <p className="mt-3 max-w-xs text-sm leading-7 text-text-muted">
        محصولاتی را که دوست داری به علاقه‌مندی‌ها اضافه کن تا راحت‌تر پیدایشان کنی.
      </p>

      <Link
        to="/shop"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
      >
        گشت‌وگذار در فروشگاه
      </Link>
    </section>
  );
}

export default EmptyFavourite;
