import { useDispatch } from "react-redux"
import { addItem } from "../cart/cartSlice";
import { formatCurrency, formatDate } from "../../utils/helpers";
import Button from "../../ui/Button";
import { toast } from "react-toastify";

import { HiOutlineTrash } from "react-icons/hi";
import { deleteItemFavourit } from "./FavouritesSlice";



function FavouritesItem({ favourites }) {
      const dispatch = useDispatch();
      const { productId, category, price, title, images, discriptions } = favourites;
           
      function handleAddToCart() {
        const newItem = {
          productId,
          title,
          price,
          images,
          category,
          quantity: 1,
          totalPrice: price * 1,
          discriptions: `${title} + ${category.name}`
        };

        dispatch(addItem(newItem));

       toast.success("محصول با موفقیت به سبد خرید اضافه شد!");
    }
    


    return (
      <div className="  space-y-4 p-4 ">
        <div
          className="p-2 w-[200px] h-[250px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <button onClick={() => dispatch(deleteItemFavourit(productId))}>
            <HiOutlineTrash size="25px" color="white" />
          </button>
        </div>
        <div className="  w-full flex flex-col gap-4 ">
          <h2 className="text-indigo-950 border-b-2 ">{title} </h2>
          <span className="w-full text-red-800 font-semibold border-b-2 mt-2">
            {formatCurrency(price)}
          </span>
          <span>{formatDate(category.creationAt)}</span>
          <p>{discriptions}</p>
        </div>
        <div className="mt-0">
          <Button type="small" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </div>
      </div>
    );
}

export default FavouritesItem
