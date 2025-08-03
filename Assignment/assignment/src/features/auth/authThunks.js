import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async ({ username, password }, { rejectWithValue }) => {
    try {
        const res = await axios.get('http://localhost:9999/users');
        const foundUser = res.data.find(
            (u) => u.username === username && u.password === password
        );
        if (foundUser) return foundUser;
        return rejectWithValue('Sai tên đăng nhập hoặc mật khẩu');
    } catch {
        return rejectWithValue('Lỗi server khi đăng nhập');
    }
});