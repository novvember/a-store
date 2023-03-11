import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types/cartItem';
import compareCartItems from '../utils/compareCartItems';
import { AppState } from './index';

type CartSlice = {
  items: CartItem[];
  isOpened: boolean;
};

const defaultState: CartSlice = {
  items: [],
  isOpened: false,
};

const savedState = localStorage.getItem('cart')
  ? {
      items: JSON.parse(localStorage.getItem('cart')!),
      isOpened: defaultState.isOpened,
    }
  : null;

const initialState: CartSlice = savedState ?? defaultState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    drawerToggled(state) {
      state.isOpened = !state.isOpened;
    },
    drawerClosed(state) {
      state.isOpened = false;
    },
    itemAdded(state, action: PayloadAction<CartItem>) {
      const sameItem = state.items.find((item) =>
        compareCartItems(item, action.payload),
      );

      if (sameItem) {
        sameItem.totalCount++;
        sameItem.totalPrice += sameItem.description.price;
      } else {
        state.items.push(action.payload);
      }
    },
    itemDeleted(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((item) =>
        compareCartItems(item, action.payload),
      );

      if (item) {
        const index = state.items.indexOf(item);
        state.items.splice(index, 1);
      }
    },
    itemPlused(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((item) =>
        compareCartItems(item, action.payload),
      );

      if (item?.totalCount) {
        item.totalCount++;
        item.totalPrice += item.description.price;
      }
    },
    itemMinused(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((item) =>
        compareCartItems(item, action.payload),
      );

      if (item?.totalCount) {
        item.totalCount--;
        item.totalPrice -= item.description.price;
      }
    },
    cartCleared(state) {
      state.items = [];
    },
  },
});

export const {
  drawerToggled,
  drawerClosed,
  itemAdded,
  itemDeleted,
  itemPlused,
  itemMinused,
  cartCleared,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: AppState) => state.cart.items;

export const selectCartCount = (state: AppState) =>
  state.cart.items.reduce((count, item) => count + item.totalCount, 0);

export const selectTotalCartCost = (state: AppState) =>
  state.cart.items.reduce((sum, item) => sum + item.totalPrice, 0);

export const selectIsCartOpened = (state: AppState) => state.cart.isOpened;
