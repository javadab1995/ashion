import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice";
import cartReducer from "./features/cart/cartSlice";
import favouritReducer from "./features/favourites/FavouritesSlice";
import orderReducer from "./features/order/orderSlice";



function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Load state error:", e);
    return undefined;
  }
}

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify({
      user: state.user,
      cart: state.cart,
      favourit: state.favourit,
      order: state.order,
    });
    localStorage.setItem("appState", serializedState);
  } catch (e) {
    console.warn("Save state error:", e);
  }
}



const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    favourit: favouritReducer,
    order: orderReducer,
  },
  preloadedState,
});


store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
