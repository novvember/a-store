import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';
import { AppState } from './index';

type CartSlice = {
  items: unknown[];
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
  error: string;
  isOpened: boolean;
};

const initialState: CartSlice = {
  items: [],
  status: 'idle',
  error: '',
  isOpened: false,
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
    drawerToggled(state, action) {
      state.isOpened = !state.isOpened;
    },
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

export const { drawerToggled, itemAdded } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartStatus = (state: AppState) => state.cart.status;

export const selectCartError = (state: AppState) => state.cart.error;

export const selectCartItems = (state: AppState) => state.cart.items;

export const selectCartCount = (state: AppState) => state.cart.items.length;
