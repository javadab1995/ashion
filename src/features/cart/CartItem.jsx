
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { productId } = item;
;
  
  return (
    <div className="flex xl:flex-row flex-col gap-10 p-4  w-full md:w-1/2 lg:w-full  ">
      <img
        className="w-[300px] h-[300px] rounded-xl"
        src={item.images[0]}
        alt={item.title}
      />
      <div className="md:w-8/12  w-full flex flex-col gap-8 justify-center ">
        <h2 className="font-bold">{item.title}</h2>
        <span className="text-red-700">{formatCurrency(item.totalPrice)}</span>
        <p className="text-thin text-slate-400">{item.category.slug}</p>
        <div className="space-x-4">
          <button
            onClick={() => dispatch(increaseItemQuantity(productId))}
            className="rounded-full bg-indigo-700 text-indigo-50  h-[30px] w-[30px] text-lg font-extrabold"
          >
            +
          </button>
          <span className="font-bold text-indigo-700">{item.quantity}</span>
          <button
            onClick={() => {
              dispatch(decreaseItemQuantity(productId));
              if (item.quantity <= 1) dispatch(deleteItem(productId));
            }}
            className="rounded-full bg-indigo-700 text-indigo-50 h-[30px] w-[30px] text-lg font-extrabold"
          >
            -
          </button>
        </div>
        <button
          onClick={() => dispatch(deleteItem(productId))}
          className="rounded-full bg-indigo-700 text-indigo-50 h-[40px] w-4/12 text-lg font-extrabold"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default CartItem;
