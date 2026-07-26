import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const existing = state.find((item) => item.id === product.id)
            if (existing) {
                existing.quantity += 1
            } else {
                state.push({ ...product, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const { productId, amount } = action.payload
            const item = state.find((item) => item.id === productId)
            if (item) {
                item.quantity += amount
                if (item.quantity <= 0) {
                    return state.filter((i) => i.id !== productId)
                }
            }
        },
    },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
