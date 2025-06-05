// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';

import placeholderReducer from './features/placeholder/placeholderSlice';

export const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
  },
  // Middleware can be added here if you need custom logic for actions
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myCustomMiddleware),
  // Redux DevTools Extension is enabled by default in development mode
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// RootState is the type of your entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch is the type of your store's dispatch function
export type AppDispatch = typeof store.dispatch;

// These custom hooks will make it easier to use Redux in your components with TypeScript
// We'll put them here for convenience, but you could also put them in a separate file like `hooks.ts`
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;