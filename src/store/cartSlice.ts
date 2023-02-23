import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../api/api';
import { CartItem } from '../types/cartItem';
import compareCartItems from '../utils/compareCartItems';
import { AppState } from './index';

type CartSlice = {
  items: CartItem[];
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
  error: string;
  isOpened: boolean;
};

const defaultState: CartSlice = {
  items: [],
  status: 'idle',
  error: '',
  isOpened: false,
};

const savedState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : null;

const initialState: CartSlice = savedState ?? defaultState;

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
    drawerToggled(state) {
      state.isOpened = !state.isOpened;
    },
    itemAdded(state, action: PayloadAction<CartItem>) {
      const sameItem = state.items.find((item) =>
        compareCartItems(item, action.payload),
      );

      if (sameItem) {
        sameItem.quantity++;
      } else {
        state.items.push(action.payload);
      }
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

export const selectCartCount = (state: AppState) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export const selectIsCartOpened = (state: AppState) => state.cart.isOpened;
