import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  userDetails: {
    username: null,
      token: null,
    details: null,
    address: null
  },
};  


const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.userDetails.token = action.payload;
    },
    setDetails: (state, action) => {
      state.userDetails.details = action.payload;
    },
  },
});


export const { setDetails, getToken } = userSlice.actions;
export default userSlice.reducer;
