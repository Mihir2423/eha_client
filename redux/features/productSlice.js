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
    setProduct:(state,action)=>{
      state.prodDetails={...action.payload};
    }
  },
});

export const { getProduct, setProduct } = productSlice.actions;
export default productSlice.reducer;
