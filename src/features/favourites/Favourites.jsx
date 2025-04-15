
import { useSelector } from "react-redux"
import { getFavourit } from "./FavouritesSlice"
import FavouritesItem from "./FavouritesItem";
import Header from "../../ui/Header";
import MobileHeader from "../../ui/MobileHeder";
import Footer from "../../ui/Footer";
import EmptyFavourite from "./EmptyFavorite";


function Favourites() {
    const favourites = useSelector(getFavourit)
    if(favourites.length === 0) return <EmptyFavourite />
    return (
        <main >
            <Header />
            <MobileHeader />
        <ul className="w-full grid grid-cols-1 grid-rows-auto md:grid-cols-2 lg:grid-cols-3  p-0 md:justify-start justify-center items-center lg:px-28 xl:gap-48 gap-8 divide-y-4 md:divide-y-0 ">
          {favourites.map((fav) => (
            <FavouritesItem key={fav.productId} favourites={fav} />
          ))}
            </ul>
            <Footer />
      </main>
    );
}

export default Favourites
