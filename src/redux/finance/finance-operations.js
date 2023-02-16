import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTransaction, createTransaction } from 'redux/transactionsController/operations';
import { login, logout, refreshUser } from 'redux/auth/auth-operations';
const initialstate = {
    totalBalance: 0,
    isHideBalance: false
}

const finance = createAsyncThunk({
    name: 'finance',
    initialstate,
    reducers: {
        showBalance(state) {
            state.isHideBalance = true;
        },
        hideBalance(state) {
            state.isHideBalance = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(refreshUser, (state, { payload }) => {
                state.totalBalance = payload.balance
            })
            .addCase(logout, state => {
                state.totalBalance = 0;
            })
            .addCase(login, (state, { payload }) => {
                state.balance = payload.user.balance;
            })
            .addCase(createTransaction, (state, { payload }) => {
                state.totalBalance = payload.balanceAfter;
            })
            .addCase(deleteTransaction, (state, { payload }) => {
                state.totalBalance = state.totalBalance - payload.amount;
            })
    }
})

export const { showBalance, hideBalance } = finance.actions;
export default finance.reducer;

