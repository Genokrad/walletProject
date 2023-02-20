import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getToken } from 'redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';

// Create new transaction for logged in user

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (transaction, { rejectWithValue, getState }) => {
    // const isToken = getState().auth.token;
    // console.log(isToken);

    try {
      const { data } = await axios.post('/api/transactions', transaction);
      // token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Get all transactions for logged in user
export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransaction',
  async (_, { rejectWithValue, getState }) => {
    const isToken = getState().auth.token;
    if (isToken) {
      try {
        const { data } = await axios.get('/api/transactions');

        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Update transaction
export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async (transaction, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.patch(
        `/api/transactions/${transaction.id}`,
        transaction.obj
      );
      console.log('data', data);
      dispatch(getAllTransactions());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Remove transaction
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (element, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/transactions/${element}`);
      return element;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
