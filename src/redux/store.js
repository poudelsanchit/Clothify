import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './Slices/counter/counterSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer ,
  },
})