// src/store/provider.tsx
'use client'; // This directive is essential for making this a Client Component

import { Provider } from 'react-redux';
import { store } from './store'; // Import your Redux store
import React from 'react'; // Import React for JSX

interface ReduxProviderProps {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}