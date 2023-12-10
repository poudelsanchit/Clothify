// itemsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Initially, the cart is empty
};

const itemsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = itemsSlice.actions;

export default itemsSlice.reducer;
