import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.productId === newItem.productId
      );

      if (!existingItem) state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);
      if (item.quantity <= 0) return;
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
    cleareCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  cleareCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
 export const getTotalPrice = (state) => state.cart.cart.reduce( (sum , item) => sum + item.totalPrice, 0)

export const getCart = (state) => state.cart.cart