// src/features/homestays/homestaySlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchHomestays, addHomestay, deleteHomestay, updateHomestay } from './homestayThunks';

const homestaySlice = createSlice({
    name: 'homestays',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomestays.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHomestays.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHomestays.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addHomestay.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(deleteHomestay.fulfilled, (state, action) => {
                state.data = state.data.filter(h => h.id !== action.payload);
            })
            .addCase(updateHomestay.fulfilled, (state, action) => {
                const index = state.data.findIndex(h => h.id === action.payload.id);
                if (index !== -1) {
                    state.data[index] = action.payload;
                }
            });
    }
});

export default homestaySlice.reducer;
