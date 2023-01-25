import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const privateContactAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const contactInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

privateContactAPI.interceptors.request.use(contactInterceptor);

export const ContactsAPI = {
  async getContacts(signal) {
    const { data } = await privateContactAPI.get(`/contacts`, { signal });
    return await data;
  },
  async addContact(contactData) {
    const { data } = await privateContactAPI.post(`/contacts`, {
      ...contactData,
    });
    return await data;
  },
  async deleteContact(contactId) {
    const { data } = await privateContactAPI.delete(`/contacts/${contactId}`);
    return await data;
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.getContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/fetchContactsDelete',
  async (contactsId, { rejectWithValue, dispatch }) => {
    try {
      await ContactsAPI.deleteContact(contactsId);
      dispatch(fetchContacts(contactsId));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/fetchContactsAdd',
  async (name, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.addContact(name);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
