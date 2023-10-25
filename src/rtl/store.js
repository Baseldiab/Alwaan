import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/product-slice";
import WishSlice from "./slices/Wish-slice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    wish: WishSlice,
  },
});
