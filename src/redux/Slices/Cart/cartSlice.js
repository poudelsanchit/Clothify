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
      const existingItem = state.items.find(item => item.productId === newItem.productId);
      
      if (existingItem) {
        // If the product with the same productId already exists, increment the quantity
        existingItem.qty += newItem.qty || 1; // Assuming quantity is present in newItem
      } else {
        // Otherwise, add the new item to the cart
        state.items.push(newItem);
      }
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
export const getTotalPrice = state => {
  console.log(state.cart)
  return state?.cart?.items?.reduce((total, item) => {
    // Extract the numeric value from the price string
    const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ''));

    // Add the numeric price to the total
    return total + numericPrice;
  }, 0);
};
