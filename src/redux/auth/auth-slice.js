import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './auth-operations';
const initialState = {
  user: { name: '', email: '', balance: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  isModalLogoutOpen: false,
  error: null,
  balance: 0,
  size: false,
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
      state.error = null;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
    mobSizeHandler(state) {
      state.size = true;
    },
    sizeHandler(state) {
      state.size = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        console.log(state.token);
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        console.log(state.token);
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: '', email: '' };
        state.balance = 0;
        state.token = null;
        state.isModalLogoutOpen = false;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});
export const {
  openModalLogout,
  closeModalLogout,
  mobSizeHandler,
  sizeHandler,
} = authSlice.actions;
export default authSlice.reducer;
