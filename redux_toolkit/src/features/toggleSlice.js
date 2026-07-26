import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: true,
    reducers: {
        setToggle: (state, action) => {
            return action.payload
        },
    },
})

export const { setToggle } = toggleSlice.actions
export default toggleSlice.reducer
