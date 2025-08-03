// src/features/homestays/homestayThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHomestays = createAsyncThunk('homestays/fetchAll', async () => {
    const res = await axios.get('http://localhost:9999/homestays');
    return res.data;
});

export const addHomestay = createAsyncThunk('homestays/add', async (homestay) => {
    const res = await axios.post('http://localhost:9999/homestays', homestay);
    return res.data;
});

export const deleteHomestay = createAsyncThunk('homestays/delete', async (id) => {
    await axios.delete(`http://localhost:9999/homestays/${id}`);
    return id;
});

export const updateHomestay = createAsyncThunk('homestays/update', async (homestay) => {
    const res = await axios.put(`http://localhost:9999/homestays/${homestay.id}`, homestay);
    return res.data;
});
