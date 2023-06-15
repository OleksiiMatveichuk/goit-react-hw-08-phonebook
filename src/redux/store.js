import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './slice';
import { authReducer } from './authSlise';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: phonebookReducer,
  },
});
