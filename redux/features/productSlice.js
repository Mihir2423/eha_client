import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prodDetails: {},
};

const productSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.prodDetails = action.payload;
    },
  },
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
