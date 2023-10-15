import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: typeof window !== "undefined" ? localStorage.getItem("ele") : null,
};

const govCorporateSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = govCorporateSlice.actions;
export default govCorporateSlice.reducer;
