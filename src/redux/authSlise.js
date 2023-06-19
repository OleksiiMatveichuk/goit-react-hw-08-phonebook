import { logIn, logOut, refresh, registration } from 'service/phoneboockAPI';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refresh.pending]: state => {
      state.isRefresh = true;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [refresh.rejected]: state => {
      state.isLoggedIn = false;
      state.isRefresh = false;
    },
  },
});

export const authReducer = authSlise.reducer;
