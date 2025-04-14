import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { clearOrders, getAllOrders } from "./orderSlice";
import { cleareCart, getTotalPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";

function Order() {
  const { id} = useParams();
  const totalPrice = useSelector(getTotalPrice);
  const orders = useSelector(getAllOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const order = orders.find((order) => order.id === id);

  function handleBackToShop() {
  dispatch(cleareCart()); 
  navigate("/shop");      
}


  function handleFinalOrder() {
    toast.success("ثبت شد!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });

    setTimeout(() => {
      navigate("/");
      dispatch(clearOrders());
      dispatch(cleareCart());
    }, 2000);
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("کپی شد!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    });
  }

  if (!order) {
    return (
      <div className="flex flex-col items-center mt-20 gap-4">
        <h2>Order not found 😢</h2>
        <Button type="submit" onClick={() => navigate("/")}>
          Back To Home
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div key={order.id} className="flex flex-col p-2 lg:p-10 mt-10 w-full lg:w-8/12">
        <div className="w-full">
          <div className="md:w-4/12 w-full">
            <span className="flex gap-2 items-center text-indigo-950 text-2xl border-4 p-2">
              Order ID:
              <p className="font-bold">{order.id}</p>
              <button
                onClick={() => copyToClipboard(order.id)}
                className="text-indigo-500 hover:text-indigo-800 transition-colors duration-200"
                title="Copy to clipboard"
              >
                <FiCopy size="18px" />
              </button>
            </span>
          </div>

          <div className="flex lg:flex-row flex-col items-center justify-between w-full mt-16">
            <div className="lg:w-4/12 w-full flex flex-col ">
              <span className="w-4/12 p-1 border-4 text-gray-600 font-bold">
                Name
              </span>
              <h1 className="uppercase bg-red-800  rotate-2 p-1 text-red-50  text-center">
                {order.firstName} ,
              </h1>
            </div>
            <div className="lg:w-4/12 w-full flex flex-col ">
              <span className="w-4/12  p-1 border-4 text-gray-600 font-bold">
                Address
              </span>
              <span className="uppercase bg-indigo-400 rotate-2 p-1 text-indigo-50 text-center">
                <address>{order.address}</address>
              </span>
            </div>
            <div className="lg:w-4/12 w-full flex flex-col">
              <span className="w-4/12  p-1 border-4 text-gray-600 font-bold">
                PhoneNumber
              </span>
              <span className="uppercase bg-yellow-500  rotate-2 p-1 text-yellow-50  text-center ">
                <p>{order.phoneNumber}</p>
              </span>
            </div>
          </div>
        </div>

        {order.cart.map((item) => (
          <OrderItem key={item.productId} item={item} />
        ))}
      </div>

      <div className="p-10 flex  gap-4 lg:w-8/12 w-full">
        <div className="font-bold text-4xl text-indigo-950 bg-slate-100 w-full flex lg:flex-row flex-col">
          <span className="lg:w-8/12 p-4 w-full">
            totalPrice: {formatCurrency(totalPrice)}
          </span>
          <Button onClick={handleFinalOrder} type="submit">
            Confirmation And Payment
          </Button>
        </div>
      </div>

      <div className="w-4/12 flex justify-center items-center">
        <Button onClick={handleBackToShop} type="back">
          Back to shop <IoArrowBackCircleOutline size="22px" />
        </Button>
      </div>
    </div>
  );
}

export default Order;
