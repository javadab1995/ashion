
import { useSelector } from "react-redux";

import { getFavourit } from "./FavouritesSlice";

import Header from "../../ui/Header";
import MobileHeader from "../../ui/MobileHeder";
import Footer from "../../ui/Footer";

import FavouritesItem from "./FavouritesItem";
import EmptyFavourite from "./EmptyFavorite";

import { CiHeart } from "react-icons/ci";

function Favourites() {
  const favourites = useSelector(getFavourit);
  const isEmpty = favourites.length === 0;

  return (
    <div
      dir="rtl"
      className="flex min-h-screen flex-col bg-bg text-text"
    >
      

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-28 pt-8 sm:px-6 sm:pb-10 lg:px-8">
        {isEmpty ? (
          <EmptyFavourite />
        ) : (
          <>
            {/* عنوان صفحه */}
            <div className="mb-8 flex items-center gap-3 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-bg text-primary">
                <CiHeart size={30} />
              </div>

              <div>
                <h1 className="text-xl font-bold text-text-h sm:text-2xl">
                  علاقه‌مندی‌های من
                </h1>

                <p className="mt-1 text-sm text-text-muted">
                  {favourites.length.toLocaleString("fa-IR")} محصول ذخیره‌شده
                </p>
              </div>
            </div>

            {/* شبکه محصولات */}
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {favourites.map((fav) => (
                <li key={fav.productId} className="min-w-0">
                  <FavouritesItem favourites={fav} />
                </li>
              ))}
            </ul>
          </>
        )}
      </main>


    </div>
  );
}

export default Favourites;
;
