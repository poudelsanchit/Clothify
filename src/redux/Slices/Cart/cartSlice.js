// itemsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Initially, the cart is empty
};

const itemsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );

      if (existingItem) {
        // If the product with the same productId already exists, increment the quantity
        existingItem.qty += newItem.qty || 1; // Assuming quantity is present in newItem4
        existingItem.defaultSize = newItem.defaultSize || 0;
      } else {
        // Otherwise, add the new item to the cart
        state.items.push(newItem);
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    updateCartItemSize: (state,action)=>{
      const { productId, size } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item.productId === productId
      );
      if(itemToUpdate)
      {
        itemToUpdate.defaultSize= size
      }
    },
    // Action to update the quantity of an item in the cart
    updateCartItemQty: (state, action) => {
      const { productId, qty } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item.productId === productId
      );
      if(itemToUpdate)
      {
        itemToUpdate.qty= qty
      }

    },
    updateCartItemColor: (state,action)=>{
      const { productId, color } = action.payload;
      const itemToUpdate = state.items.find((item)=> item.productId=== productId)
      if(itemToUpdate)
      {
        itemToUpdate.defaultColor= color
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});


export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateCartItemQty,
  updateCartItemSize
} = itemsSlice.actions;

export default itemsSlice.reducer;
export const getTotalPrice = state => {
  return state?.cart?.items?.reduce((total, item) => {
    // Extract the numeric value from the price string
    const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ''));

    // Add the numeric price to the total
    return total + numericPrice;
  }, 0);
};

export const getProductsCount = state => {
  return state.cart.items.length
};
// New selector to get the sum of all products with quantities
export const getSumOfProducts = state => {
  return state.cart.items.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ''));
    return total + (item.qty || 1) * numericPrice;
  }, 0);
};
