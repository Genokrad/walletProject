import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

const token = {
  set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
      axios.defaults.headers.common.Authorization = '';
  }
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/sign-up', credentials);
      return data;
    } catch (error) {}
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/sign-in', credentials);
      return data;
    } catch (error) {}
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete('/api/auth/sign-out');
    } catch (error) {}
  }
);
