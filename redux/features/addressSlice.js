import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: [],
    successMsg : false
    };

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        addAddress: (state, action) => {
            let exist = state.address.includes(action.payload);
            if (!exist) state.address.push(action.payload);
        },
        addedMsg : (state) => {
            state.successMsg = true
        },
        removeMsg : (state) => {
            state.successMsg = false
        }

    },
});

export const { addAddress, addedMsg, removeMsg } = addressSlice.actions;
export default addressSlice.reducer;
