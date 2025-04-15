import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { addItemFavourit } from "../features/favourites/FavouritesSlice";


function HoverItem({ product }) {
  const dispatch = useDispatch()
  const { id, category, price, title, images,  } = product;

  function handleAddToCart() {
    const newItem = {
      productId: id,
      title,
      price,
      images,
      category,
      quantity: 1,
      totalPrice : price * 1

    }
   
    dispatch(addItem(newItem))
  }

  function handleAddToFavourit() {
    const newItem = {
      productId: id,
      title,
      price,
      images,
      category,
      quantity: 1,
      totalPrice : price * 1

    }
   
    dispatch(addItemFavourit(newItem))
  }
  return (
    <div className="xl:flex justify-between items-end w-full p-5 h-full transition-all duration-200 hidden  ">
      <div
        onClick={handleAddToCart}
        className="p-3 rounded-full bg-lime-700 hover:bg-lime-600 "
      >
        <FiShoppingCart size="25px" color="white" />
      </div>
      <div
        onClick={handleAddToFavourit}
        className="p-3 rounded-full bg-lime-700 hover:bg-lime-600  "
      >
        <GrFavorite size="25px" color="white" />
      </div>
    </div>
  );
}

export default HoverItem
