import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const statistSummary = createAsyncThunk (
    'statistics',
    async (credentials, { rejectWithValue }) => {
        try {
            console.log('credentials >>>>>>>', credentials);
            const { data } = await axios.get('/api/transactions-summary', credentials);
            // token.set(data.token);
            console.log('statistics >>>>', data);
            return data;
        } catch (error) {}
    }
)

