import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storeReducer from './storeSlice';
import createReducer from './createSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    store: storeReducer,
    create: createReducer,
    cart: cartReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
