import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        employee: null,
        isLoading: false,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee = action.payload;
            state.isLoading = false;
        },
        removeEmployee: (state) => {
            state.employee = null;
            state.isLoading = false;
        },
    }
})

export const { addEmployee, removeEmployee } = AuthSlice.actions
export default AuthSlice.reducer