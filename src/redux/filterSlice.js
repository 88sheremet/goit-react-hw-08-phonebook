import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
