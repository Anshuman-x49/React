import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { axiosInstance } from "../../../../config/axiosInstance";
import type { LoginFormInputs } from "../../hooks/useAuth";

export const loginEmployee = createAsyncThunk(
    "auth/login",
    async (credentials: LoginFormInputs, thunkApi) => {
        try {
            const res = await axiosInstance.post('/auth/login', credentials);
            console.log("Login response:", res.data);
            return res.data;
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                const errorMessage =
                    error.response?.data?.message ||
                    (typeof error.response?.data === 'string' ? error.response.data : null) ||
                    error.message ||
                    "Login failed";
                return thunkApi.rejectWithValue(errorMessage);
            }
            return thunkApi.rejectWithValue("An unexpected error occurred");
        }
    }
);