import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  successMsg : false
};

const addToCartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    incrementItems: (state, action) => {
      let exist = state.cartItem.includes(action.payload);
      if (!exist) state.cartItem.push(action.payload);
    },
    addedMsg : (state) => {
      state.successMsg = true
    },
    removeMsg : (state) => {
      state.successMsg = false
    }

  },
});

export const { incrementItems, addedMsg, removeMsg } = addToCartSlice.actions;
export default addToCartSlice.reducer;
