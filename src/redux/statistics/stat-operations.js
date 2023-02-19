import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const statistSummary = createAsyncThunk(
  'statistics',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/transactions-summary', {
        params: {
          month: Number(month),
          year: Number(year),
        },
      });
      // console.log('statistics >>>>', data);
      return data;
    } catch (error) {}
  }
);
