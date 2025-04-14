import Logo from "./Logo"
import LinkButton from "./LinkButton"
import Search from "./Search"

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { getTotalFavouritsQuantity } from "../features/favourites/FavouritesSlice";
import { useState } from "react";
import Modal from "./Modal";




function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
    const { isAuthenticated, username } = useSelector((state) => state.user);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalFavouritQuantity = useSelector(getTotalFavouritsQuantity)

  if (isOpenModal) return <Modal setIsOpenModal={setIsOpenModal} />;
  
  return (
   
    <div className="flex justify-between sm:px-4 sm:py-3 py-4 px-2 items-center grow bg-white shadow-md shadow-gray-500/50">
      <button
        onClick={() => setIsOpenModal((show) => !show)}
        className="lg:hidden block"
      >
        <HiBars3 size="32px" />
      </button>
       
  
      <ul className="space-x-6  hidden lg:flex ">
        <LinkButton to="/">Home</LinkButton>
        <LinkButton to="/shop">Shop</LinkButton>
        <LinkButton to="/aboutus">AboutUs</LinkButton>
        <LinkButton to="/contactus">ContactUs</LinkButton>
      </ul>
      <div className="lg:block hidden">
        <Logo />
      </div>
      <div className="flex gap-10 ">
        <Search />

        <ul className="md:flex gap-x-3 items-center hidden  ">
          {isAuthenticated ? (
            <div>
              <p> {username
              }</p>
              <Link to="/account"></Link>
            </div>
          ) : (
            <Link to="/login"><CiUser size={25} /></Link>
          )}
          <Link to="/favourites" className="hover:text-red-700 relative ">
            <CiHeart size="25px" />
            <div className="absolute rounded-full w-[15px] h-[15px] bg-red-700 text-center top-[-10px] right-3 text-red-50 text-[8px] ">
              {totalFavouritQuantity}
            </div>
          </Link>
          <Link to="/cart" className="hover:text-red-700 relative">
            <CiShoppingCart size="25px" />
            <div className="absolute rounded-full w-[15px] h-[15px] bg-red-700 text-center top-[-10px] right-3 text-red-50 text-[10px]">
              {totalCartQuantity}{" "}
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header
