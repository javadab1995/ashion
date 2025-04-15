import Logo from "./Logo";



import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { getTotalFavouritsQuantity } from "../features/favourites/FavouritesSlice";

function MobileHeader() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalFavouritQuantity = useSelector(getTotalFavouritsQuantity)
  return (
    <div className="flex justify-between h-20 w-full opacity-80 items-center grow bg-white shadow-md shadow-gray-500/50 fixed bottom-0 md:hidden z-50 p-3">
      <div className="flex w-full ">
        <ul className="flex w-full items-center  justify-between ">
          <Link to="/favourites" className="hover:text-red-700 relative">
            <CiHeart size="40px" />
          </Link>
          <div className="absolute rounded-full w-[20px] h-[20px] bg-red-700 text-center top-[12.5px] left-1 text-red-50 text-[10px]">
            {totalFavouritQuantity}
          </div>
          <Logo />

          <Link to="/cart" className="hover:text-red-700 relative">
            <CiShoppingCart size="40px" />
            <div className="absolute rounded-full w-[20px] h-[20px] bg-red-700 text-center top-[-12px] right-5 text-red-50 text-[10px]">
              {totalCartQuantity}
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MobileHeader;
