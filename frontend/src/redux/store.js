// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemsReducer from './Slices/Cart/cartSlice.js';
import favoritesReducer from './Slices/favorites/favorites.js';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const persistedItemsReducer = persistReducer(cartPersistConfig, itemsReducer);
const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    cart: persistedItemsReducer,
    favorites: persistedFavoritesReducer,
  },
});

export const persistor = persistStore(store);
