import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
 import transactionsControllerReducer from './transactionsController/slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactionsControllerReducer:transactionsControllerReducer,
    // auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// isModalAddTransactionOpen ?????????????
// isLoading ?????????????
// isModalLogoutOpen ???????????

export const persistor = persistStore(store);
