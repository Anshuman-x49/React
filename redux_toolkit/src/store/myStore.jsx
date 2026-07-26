import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import productReducer from '../features/productSlice'
import toggleReducer from '../features/toggleSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        toggle: toggleReducer,
    },
})