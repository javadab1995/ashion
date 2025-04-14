import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
    clearOrders(state) {
      state.orders = [];
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export const getAllOrders = (state) => state.order.orders;
export const getOrderById = (id) => (state) =>
  state.order.orders.find((order) => order.id === id);

export default orderSlice.reducer;
