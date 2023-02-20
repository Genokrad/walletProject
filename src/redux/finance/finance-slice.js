import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, login, logout } from 'redux/auth/auth-operations';
import {
  deleteTransaction,
  createTransaction,
} from 'redux/transactionsController/operations';

const initialState = {
  totalBalance: 0,
  isHideBalance: true,
};

const finance = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    showBalance(state) {
      state.isHideBalance = false;
    },
    hideBalance(state) {
      state.isHideBalance = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.totalBalance = payload.balance;
      })
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        state.totalBalance = payload.balanceAfter;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.totalBalance = payload.user.balance;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.totalBalance = state.totalBalance - payload.amount;
      })
      .addCase(logout.fulfilled, state => {
        state.totalBalance = 0;
      });
  },
});
export const { showBalance, hideBalance } = finance.actions;
export default finance.reducer;
