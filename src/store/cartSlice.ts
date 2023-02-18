import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';
import { AppState } from './index';

type CartSlice = {
  items: unknown[];
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
  error: string;
};

const initialState: CartSlice = {
  items: [],
  status: 'idle',
  error: '',
};

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async (payload) => {
    return await api.createOrder(payload);
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemAdded(state, action) {
      state.items.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [];
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? '';
      });
  },
});

export const { itemAdded } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartStatus = (state: AppState) => state.cart.status;

export const selectCartError = (state: AppState) => state.cart.error;

export const selectCartItems = (state: AppState) => state.cart.items;
