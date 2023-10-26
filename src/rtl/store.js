import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/product-slice";
import WishSlice from "./slices/Wish-slice";
import CartSlice from "./slices/Cart-slice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    wish: WishSlice,
    cart: CartSlice,
  },
});
