import { createSlice } from '@reduxjs/toolkit';
import {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
} from './operations';

const initialState = {
  oneTransaction: null,
  items: [],
  isLoading: false,
  error: null,
  isModalAddTransactionOpen: false,
};
const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
const transactionsController = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
      state.error = null;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    addOneTransaction(state, actions) {
      state.oneTransaction = actions.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createTransaction.pending, handlePending)
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, payload];
        state.isModalAddTransactionOpen = false;
      })
      .addCase(createTransaction.rejected, handleRejected)
      .addCase(getAllTransactions.pending, handlePending)
      .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getAllTransactions.rejected, handleRejected)
      .addCase(updateTransaction.pending, handlePending)
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const item = state.items.findIndex(item => item.id === payload.id);
        state.items[item] = payload;
      })
      .addCase(updateTransaction.rejected, handleRejected)
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteTransaction.rejected, handleRejected);
  },
});
export const {
  openModalAddTransaction,
  closeModalAddTransaction,
  addOneTransaction,
} = transactionsController.actions;
export default transactionsController.reducer;
