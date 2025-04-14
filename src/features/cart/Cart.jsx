import { useDispatch, useSelector } from "react-redux"
import { cleareCart, getCart, getTotalCartQuantity, getTotalPrice } from "./cartSlice";

import Header from "../../ui/Header";
import CartItem from "./CartItem";
import Button from "../../ui/Button";

import { formatCurrency } from "../../utils/helpers";
import LinkButton from "../../ui/LinkButton";
import EmptyCart from "./EmptyCart";
import Footer from "../../ui/Footer";

function Cart() {
   
  const totalQuantity = useSelector(getTotalCartQuantity)
  const totalPrice = useSelector(getTotalPrice)
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

    

    if (totalQuantity === 0) return (
     <EmptyCart />
    );
    return (
      <div>
        <Header />
        <div className="flex lg:flex-row flex-col  justify-center  px-10 py-10  gap-5">
          <ul className="lg:divide lg:divide-y-2 flex justify-between  flex-wrap lg:block lg:w-6/12 w-full overflow-scroll scrollbar  h-[700px]  border">
            {cart.map((item) => (
              <CartItem item={item} key={item.productId} />
            ))}
          </ul>
          <div className="flex flex-col  gap-10 border-4 lg:w-4/12 w-full p-5 xl:h-[400px] h-full  ">
           
           
            <p className="text-indigo-600 text-xl  ">
              totalQuantity:{" "}
              <span className="font-bold text-2xl text-indigo-950">
                {totalQuantity}
              </span>
            </p>

            <p className="text-indigo-600 text-xl  ">
              totalPrice:
              <span className="font-bold text-2xl text-indigo-950 ml-2">
                {formatCurrency(totalPrice)}
              </span>
            </p>

            <div className="space-x-5 space-y-6">
              <LinkButton to="/order/new" type="submit">
                COMPELITE ORDER
              </LinkButton>
              <Button o onClick={() => dispatch(cleareCart())} type="primary">
                CLEARCART
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Cart
