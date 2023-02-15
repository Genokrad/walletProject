import { createSlice } from '@reduxjs/toolkit';
// import * as financeOperations from './finance-operations';

const initialState = {
  isModalAddTransactionOpen: false,
  isLoading: false,
  isModalLogoutOpen: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder
    //
  },
});

export default globalSlice.reducer;
