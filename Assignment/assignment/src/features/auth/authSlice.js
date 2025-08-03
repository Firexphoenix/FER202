// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { login } from './authThunks';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('authUser')) || null,
        token: null,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('authUser');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.token = 'fake-token'; // Giả lập token nếu chưa dùng real API
                state.error = null;
                localStorage.setItem('authUser', JSON.stringify(action.payload));
            })
            .addCase(login.rejected, (state, action) => {
                state.user = null;
                state.token = null;
                state.error = action.payload || 'Login failed';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
