// redux/themeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './reducers';
import { useDispatch, useSelector } from 'react-redux';

interface ThemeState {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  // Add other theme-related fields as needed
}

const initialState: ThemeState = {
  primaryColor: 'blue',
  secondaryColor: 'gray',
  fontFamily: 'Arial, sans-serif',
  // Set default values for other fields
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Partial<ThemeState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTheme } = themeSlice.actions;

// Exported function to dispatch setTheme action
export const useSetTheme = () => {
  const dispatch = useDispatch();
  return (theme: Partial<ThemeState>) => dispatch(setTheme(theme));
};

// Exported selector to get the theme from state
export const useTheme = () => {
  return useSelector((state: RootState) => state.theme);
};

export default themeSlice.reducer;
