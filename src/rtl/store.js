import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/product-slice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});
