import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './categories-operations';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const categorySlice = createSlice({
  name: 'categ',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategories.rejected, handleRejected);
  },
});

export const categReducer = categorySlice.reducer;
