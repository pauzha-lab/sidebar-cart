import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cart'

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer
  },
})