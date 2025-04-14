import { useState } from "react";
import { formatCurrency } from "../../utils/helpers"
import HoverItem from "../../ui/HoverItem";
import Button from "../../ui/Button";

import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { addItemFavourit } from "../favourites/FavouritesSlice";

function ShopItem({ product }) {
  const [itemHover, setItemHover] = useState(false);

  function onHover() {
    setItemHover(true)
  }

  const dispatch = useDispatch();
  const { id, category, price, title, images } = product;

  function handleAddToCart() {
    const newItem = {
      productId: id,
      title,
      price,
      images,
      category,
      quantity: 1,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  function handleAddToFavourit() {
    const newItem = {
      productId: id,
      title,
      price,
      images,
      category,
      quantity: 1,
      totalPrice: price * 1,
    };

    dispatch(addItemFavourit(newItem));
  }

    return (
      <li className="mt-10  text-center flex flex-col items-center w-full" key={product.id}>
        <div
          className="w-full h-[300px]"
          onMouseEnter={onHover}
          onMouseLeave={() => setItemHover(false)}
          style={{
            backgroundImage: `url(${product.images[0]} )`,
            backgroundPosition: " center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          alt={product.title}
        >
          {itemHover && <HoverItem product={product} />}
        </div>
        <div className="flex flex-col justify-between border-2   md:h-[200px] lg:w-full w-full h-auto ">
          <h2 className="text-indigo-950 font-semibold text-base px-2 mt-5">
            {product.title}
          </h2>
          <p className="font-light text-sm text-indigo-500">
            {product.category.name}
          </p>
          <span className="text-red-700 font-bold  ">
            {formatCurrency(product.price)}
          </span>
          <div className="flex xl:hidden">
            <Button type="small" onClick={handleAddToCart}>
              <FiShoppingCart size="22px" />
            </Button>
            <Button type="small" onClick={handleAddToFavourit}>
              <GrFavorite size="22px" />
            </Button>
          </div>
        </div>
      </li>
    );
}

export default ShopItem
