import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: 0,
  sort: "asc", // asc, desc, alphaAsc, alphaDesc
  field: "name" // name, price
};

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    sortDir: (state, action) => {
      state.sort = action.payload;
    },
    fieldName: (state, action) => {
      state.field = action.payload
    }
  },
});

export const { sortDir, fieldName } = filterSortSlice.actions;
export default filterSortSlice.reducer;
