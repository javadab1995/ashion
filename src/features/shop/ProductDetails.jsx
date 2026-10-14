
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  ArrowRight,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import { getProduct } from "../../services/apiShop";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
import { addItemFavourit } from "../favourites/FavouritesSlice";

export async function productDetailsLoader({ params }) {
  const products = await getProduct();

  return products.find(
    (product) => String(product.id) === String(params.id),
  ) ?? null;
}

function ProductDetails() {
  const product = useLoaderData();
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  if (!product) {
    return (
      <main
        dir="rtl"
        className="mx-auto max-w-7xl px-4 py-24 text-center"
      >
        <h1 className="text-2xl font-bold text-text-h">
          محصول موردنظر پیدا نشد
        </h1>

        <p className="mt-3 text-text-muted">
          ممکن است محصول حذف شده باشد یا آدرس آن اشتباه باشد.
        </p>

        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
        >
          بازگشت به فروشگاه
          <ArrowRight size={17} />
        </Link>
      </main>
    );
  }

  const {
    id,
    title,
    price,
    images = [],
    category,
    description,
    inStock,
  } = product;

  const productImages = images.filter(Boolean);
  const mainImage = productImages[selectedImage] ?? null;
  const categoryName =
    typeof category === "object" ? category?.name : category;

  const isAvailable = inStock !== false;

  function handleAddToCart() {
    if (!isAvailable) return;

    dispatch(
      addItem({
        productId: id,
        title,
        price,
        images: productImages,
        category,
        quantity,
        totalPrice: Number(price) * quantity,
      }),
    );

    setAddedToCart(true);
  }

  function handleAddToFavorites() {
    dispatch(
      addItemFavourit({
        productId: id,
        title,
        price,
        images: productImages,
        category,
        quantity: 1,
        totalPrice: Number(price),
      }),
    );

    setAddedToFavorites(true);
  }

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  return (
    <main
      dir="rtl"
      className="mx-auto w-full max-w-7xl py-8 md:px-0 px-4  md:py-12"
    >
      {/* Breadcrumb */}
      <nav
        aria-label="مسیر صفحه"
        className="mb-8 flex flex-wrap items-center gap-2 text-sm text-text-muted"
      >
        <Link
          to="/"
          className="transition-colors hover:text-primary"
        >
          خانه
        </Link>

        <span>/</span>

        <Link
          to="/shop"
          className="transition-colors hover:text-primary"
        >
          فروشگاه
        </Link>

        <span>/</span>

        <span className="max-w-52 truncate text-text-h">
          {title}
        </span>
      </nav>

      {/* Product */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <section className="min-w-0">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-alt">
            <div className="aspect-4/5">
              {mainImage ? (
                <img
                  src={mainImage}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-text-muted">
                  تصویری برای این محصول ثبت نشده است
                </div>
              )}
            </div>

            <span className="absolute right-4 top-4 rounded-full border border-primary-border bg-surface px-3 py-1.5 text-xs font-semibold text-primary">
              جزئیات محصول
            </span>
          </div>

          {productImages.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
              {productImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`نمایش تصویر ${index + 1}`}
                  aria-pressed={selectedImage === index}
                  className={`overflow-hidden rounded-xl border-2 bg-surface-alt transition-colors ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-border hover:border-primary-border"
                  }`}
                >
                  <div className="aspect-4/5">
                    <img
                      src={image}
                      alt={`${title}، تصویر ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Product information */}
        <section className="flex flex-col">
          <div className="border-b border-border pb-6">
            {categoryName && (
              <p className="mb-3 text-sm font-medium text-primary">
                {categoryName}
              </p>
            )}

            <h1 className="text-2xl font-bold leading-relaxed text-text-h sm:text-3xl">
              {title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
                  isAvailable
                    ? "bg-primary-bg text-primary"
                    : "bg-surface-alt text-text-muted"
                }`}
              >
                {isAvailable && <Check size={14} />}

                {isAvailable ? "موجود و آماده سفارش" : "ناموجود"}
              </span>

              <span className="text-xs text-text-muted">
                کد محصول: {id}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="border-b border-border py-6">
            <p className="mb-2 text-sm text-text-muted">
              قیمت محصول
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                {formatCurrency(price)}
              </span>

              <span className="text-sm text-text-muted">
                تومان
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="border-b border-border py-6">
            <h2 className="mb-3 text-base font-bold text-text-h">
              درباره محصول
            </h2>

            <p className="whitespace-pre-line text-sm leading-8 text-text-muted">
              {description ||
                "توضیحات بیشتری برای این محصول ثبت نشده است."}
            </p>
          </div>

          {/* Quantity */}
          <div className="border-b border-border py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-text-h">
                تعداد
              </span>

              <div
                dir="ltr"
                className="flex h-11 items-center overflow-hidden rounded-xl border border-border"
              >
                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={!isAvailable}
                  aria-label="افزایش تعداد"
                  className="flex h-full w-11 items-center justify-center text-text-h transition-colors hover:bg-primary-bg hover:text-primary disabled:opacity-40"
                >
                  <Plus size={17} />
                </button>

                <span className="flex h-full min-w-12 items-center justify-center border-x border-border text-sm font-semibold text-text-h">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1 || !isAvailable}
                  aria-label="کاهش تعداد"
                  className="flex h-full w-11 items-center justify-center text-text-h transition-colors hover:bg-primary-bg hover:text-primary disabled:opacity-40"
                >
                  <Minus size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[1fr_auto]">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!isAvailable}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-text-inverse shadow-btn transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              {addedToCart ? (
                <>
                  <Check size={19} />
                  افزودن به سبد خرید انجام شد
                </>
              ) : (
                <>
                  <ShoppingCart size={19} />
                  افزودن به سبد خرید
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleAddToFavorites}
              aria-label="افزودن به علاقه‌مندی‌ها"
              className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors ${
                addedToFavorites
                  ? "border-primary bg-primary-bg text-primary"
                  : "border-border bg-surface text-text-h hover:border-primary hover:text-primary"
              }`}
            >
              <Heart
                size={19}
                fill={addedToFavorites ? "currentColor" : "none"}
              />
              <span className="sm:hidden">
                {addedToFavorites ? "افزوده شد" : "علاقه‌مندی"}
              </span>
            </button>
          </div>

          {/* Service features */}
          <div className="mt-1 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface-alt p-5 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <Truck size={21} className="shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-text-h">
                  ارسال سفارش
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  اطلاعات هنگام ثبت سفارش
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck
                size={21}
                className="shrink-0 text-primary"
              />
              <div>
                <p className="text-sm font-semibold text-text-h">
                  خرید مطمئن
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  جزئیات پرداخت در سفارش
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <RotateCcw
                size={21}
                className="shrink-0 text-primary"
              />
              <div>
                <p className="text-sm font-semibold text-text-h">
                  شرایط بازگشت
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  مطابق قوانین فروشگاه
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/shop"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
          >
            <ArrowRight size={17} />
            بازگشت به فروشگاه
          </Link>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;
