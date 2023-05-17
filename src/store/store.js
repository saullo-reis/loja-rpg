import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItems: (state, action) => {
            return [...state, action.payload];
        },
        removeItems: (state, action) => {
            return state.filter((item, index) => index !== action.payload);
        }
    }
});

export const { addItems, removeItems } = slice.actions;

export default slice.reducer;