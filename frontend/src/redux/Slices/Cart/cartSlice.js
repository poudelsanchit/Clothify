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
      console.log(newItem)
      const existingItem = state.items.find(
        (item) => item._id === newItem._id
      );

      if (existingItem) {
        existingItem.qty += newItem.qty || 1;
        existingItem.defaultSize = newItem.defaultSize || 0;
        existingItem.defaultColor = newItem.defaultColor || 0;

      } else {
        state.items.push(newItem);
      }
    },
    removeItemFromCart: (state, action) => {
      console.log(action.payload)
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item._id !== itemIdToRemove);
    },
    updateCartItemSize: (state, action) => {
      const { _id, size } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item._id === _id
      );
      if (itemToUpdate) {
        itemToUpdate.defaultSize = size;
      }
    },
    updateCartItemQty: (state, action) => {
      const { _id, qty } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item._id === _id
      );
      if (itemToUpdate) {
        itemToUpdate.qty = qty;
      }
    },
    updateCartItemColor: (state, action) => {
      const { _id, color } = action.payload;
      const itemToUpdate = state.items.find((item) => item._id === _id);
      if (itemToUpdate) {
        itemToUpdate.defaultColor = color;
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
  updateCartItemSize,
  updateCartItemColor
} = itemsSlice.actions;

export default itemsSlice.reducer;

export const getTotalPrice = (state) => {
  return state?.cart?.items?.reduce((total, item) => {
    const numericPrice = Number(item.price);
    return total + numericPrice;
  }, 0);
};

export const getProductsCount = (state) => {
  return state.cart.items.length;
};

export const getSumOfProducts = (state) => {
  return state.cart.items.reduce((total, item) => {
    return total + (item.qty || 1) * Number(item.price);
  }, 0);
};
