import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// store
const appStore = configureStore({
  // reducers are basically group of small reducers
  // main reducer
  reducer: {
    // sub-reducer
    cart: cartReducer,
  },
});

export default appStore;
