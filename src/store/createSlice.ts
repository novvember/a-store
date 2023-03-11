import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';
import { Group } from '../types/group';
import { AppState } from './index';

type CreateSlice = {
  items: Group[];
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
  error: string;
};

const initialState: CreateSlice = {
  items: [],
  status: 'idle',
  error: '',
};

export const fetchCreateItems = createAsyncThunk(
  'create/fetchItems',
  async () => {
    return await api.getCreateItems();
  },
);

const createdSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCreateItems.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCreateItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCreateItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? '';
      });
  },
});

export default createdSlice.reducer;

export const selectCreateStatus = (state: AppState) => state.create.status;

export const selectCreateError = (state: AppState) => state.create.error;

export const selectAllCreateGroups = (state: AppState) => state.create.items;
