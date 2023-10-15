import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./features/addToCartSlice";
import filterSlice from "./features/filterSlice";
import userSlice from "./features/userSlice";
import govCorporateSlice from "./features/govCorporateSlice";
import productSlice from "./features/productSlice"

export const store = configureStore({
  reducer: {
    addToCart: addToCartSlice,
    filter: filterSlice,
    user: userSlice,
    govCorporate: govCorporateSlice,
    product: productSlice,
  },
});
