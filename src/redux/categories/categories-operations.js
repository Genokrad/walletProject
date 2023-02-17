import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
  'categ/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/transaction-categories');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
