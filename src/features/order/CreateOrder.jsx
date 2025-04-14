// در کامپوننت CreateOrder.jsx
import  { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";


import EmptyCart from "../cart/EmptyCart";

import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { addOrder } from "../order/orderSlice"; // ایمپورت جدید

// ...

function generateRandomId() {
  return (
    Math.random().toString(36).substring(2) 
   
  );
}

function CreateOrder() {
  
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setOrderId(generateRandomId());
  }, []);

  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;




const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const order = {
    firstName: data.customer,
    phoneNumber: data.phoneNumber,
    address: data.address,
    cart: JSON.parse(data.cart),
    id: orderId,
  };

  dispatch(addOrder(order)); // ارسال به ریداکس

  navigate(`/order/${orderId}`);
};

  
  return (
    <div className="px-10 py-6 space-y-10">
      <h2 className="text-xl font-bold">Ready to order? Lets go!</h2>

      <Form className="lg:w-8/12 w-full space-y-8" onSubmit={handleSubmit}>
        <input type="hidden" name="orderId" value={orderId} />

        <div className="flex gap-2 lg:gap-10 flex-col lg:flex-row ">
          <label className="lg:basis-[150px] basis-0">First Name</label>
          <input
            className="input lg:basis-[900px] basis-0 "
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="flex gap-2 lg:gap-10 flex-col lg:flex-row">
          <label className="lg:basis-[150px] basis-0">Phone Number</label>
          <input
            className="input lg:basis-[900px] basis-0 "
            type="text"
            name="phoneNumber"
            pattern="[0-9]{10,15}"
            required
          />
        </div>

        <div className="flex gap-2 lg:gap-10 flex-col lg:flex-row">
          <label className="lg:basis-[150px] basis-0">Address</label>
          <input
            className="input lg:basis-[900px] basis-0 "
            type="text"
            name="address"
            required
          />
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="px-8 py-2 rounded-xl text-indigo-950 my-auto text-lg font-semibold  border-2 border-indigo-700  hover:border-indigo-400 hover:text-indigo-400">
            Order now
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
