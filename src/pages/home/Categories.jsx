
import LinkButton from "../../ui/LinkButton";
import categoriesData from "../../data/categories";
import { BiArrowBack } from "react-icons/bi";

function Categories() {
  const categories = categoriesData
    .filter((category) => category.enabled)
    .sort((a, b) => a.position - b.position);

  const featuredCategory = categories.find(
    (category) => category.featured
  );

  const otherCategories = categories.filter(
    (category) => category.id !== featuredCategory?.id
  );

  function CategoryCard({ category, featured = false }) {
    return (
      <article
        className={`group relative isolate flex min-h-70 overflow-hidden rounded-3xl bg-surface-alt ${
          featured ? "min-h-105 lg:min-h-150" : ""
        }`}
      >
        <img
          src={category.image}
          alt={category.title}
          loading={featured ? "eager" : "lazy"}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 -z-10 bg-black/35 transition-colors duration-300 group-hover:bg-black/45" />

        <div
          className={`flex w-full flex-col items-start justify-end ${
            featured ? "p-6 sm:p-10 lg:p-12" : "p-6 sm:p-7"
          }`}
        >
          <span className="mb-3 rounded-full border border-white/30 bg-black/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            مجموعه فروشگاه
          </span>

          <h2
            className={`font-bold  ${
              featured
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-2xl"
            }`}
          >
            {category.title}
          </h2>

          {category.description && (
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/85 sm:text-base">
              {category.description}
            </p>
          )}

          <LinkButton
            to={`/shop?category=${encodeURIComponent(category.slug)}`}
            type="submit"
            className="mt-6  hover:border-primary hover:bg-primary bg-bg text-primary"
          >
            مشاهده محصولات
          </LinkButton>
        </div>
      </article>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <section
      dir="rtl"
      aria-label="دسته‌بندی محصولات"
      className="mt-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-h sm:text-3xl">
              دسته‌بندی محصولات
            </h2>
          </div>

          <LinkButton
            to="/shop"
            type="primary"
            className="group text-sm sm:text-base border-none text-text hover:text-primary-hover "
          >
            <span> همه محصولات</span>
            <BiArrowBack className="group-hover:-translate-x-1 transition-transform ease-in-out duration-300" />
          </LinkButton>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {featuredCategory && (
            <CategoryCard
              key={featuredCategory.id}
              category={featuredCategory}
              featured
            />
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {otherCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
