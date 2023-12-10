import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for the web

import counterReducer from './Slices/counter/counterSlice.js';
import itemsReducer from './Slices/Cart/cartSlice.js';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const persistedItemsReducer = persistReducer(cartPersistConfig, itemsReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: persistedItemsReducer,
  },
});

export const persistor = persistStore(store);
