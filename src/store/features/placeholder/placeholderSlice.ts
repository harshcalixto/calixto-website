// src/store/features/placeholder/placeholderSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface PlaceholderState {
  initialized: boolean;
}

const initialState: PlaceholderState = {
  initialized: true, // Just a simple boolean to show it's working
};

const placeholderSlice = createSlice({
  name: 'placeholder',
  initialState,
  reducers: {
    // No actions needed for a placeholder, but this object must exist
  },
});

export default placeholderSlice.reducer;