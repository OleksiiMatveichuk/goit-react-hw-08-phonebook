import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registration = createAsyncThunk(
  'auth/registration',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/getAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContacts = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('contacts', contact);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`contacts/${id}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
