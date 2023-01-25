import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI, userPrivateAPI } from './operations';

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await userAPI.register(formData);
      console.log(response);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const response = await userAPI.login(formData);
      // console.log(response);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentData = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
     const token = localStorage.getItem('token');

      const response = await userAPI.userCurrentData();
      
      // console.log(response);
      return {user: response, token};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (formData, thunkAPI) => {
    try {
      await userPrivateAPI.post('/users/logout');

      localStorage.removeItem('token');
      // alert('succesfull logged out')
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        console.log(state, action);
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCurrentData.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentData.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        
      })
      .addCase(getCurrentData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.userData = null;
        state.token = null;
        state.error = false;
        state.isLoading = false;
      })
      .addCase(logOutThunk.rejected, state => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
