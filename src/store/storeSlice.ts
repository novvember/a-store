import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';
import { Product } from '../types/product';
import { AppState } from './index';

type StoreSlice = {
  items: Product[];
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
  error: string;
};

const initialState: StoreSlice = {
  items: [],
  status: 'idle',
  error: '',
};

export const fetchStoreItems = createAsyncThunk(
  'store/fetchItems',
  async () => {
    return await api.getStoreItems();
  },
);

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStoreItems.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchStoreItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchStoreItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? '';
      });
  },
});

export default storeSlice.reducer;

export const selectStoreStatus = (state: AppState) => state.store.status;

export const selectStoreError = (state: AppState) => state.store.error;

export const selectAllStoreItems = (state: AppState) => state.store.items;
