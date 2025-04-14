import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favourit: [],
   
};

const favouritSlice = createSlice({
    name: "favourit",
    initialState,
    reducers: {
        addItemFavourit(state, action) {
            const newItem = action.payload;
            const existingItem = state.favourit.find(
              (item) => item.productId === newItem.productId
            );

            if (!existingItem) state.favourit.push(action.payload);
        },
        deleteItemFavourit(state, action) {
             state.favourit = state.favourit.filter(
               (item) => item.productId !== action.payload
             );
        },
        clearFavourit(state) {
            state.favourit = []
        }

        
    }
})

export const { addItemFavourit, deleteItemFavourit, clearFavourit } = favouritSlice.actions;

export default favouritSlice.reducer;

export const getTotalFavouritsQuantity = (state) =>
    state.favourit.favourit.reduce((sum, item) => sum + item.quantity, 0);

export const getFavourit = state => state.favourit.favourit