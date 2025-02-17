import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productSlice";
import cartReducer from "./redux/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;