import { createSlice } from '@reduxjs/toolkit';
// import * as financeOperations from './finance-operations';

const initialState = {
  data: null,
  transactions: [],
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder
  },
});

export default financeSlice.reducer;
