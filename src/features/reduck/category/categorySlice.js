import { createSlice } from '@reduxjs/toolkit';

const initialState = { selectedCategories: [] };

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
  },
});

export const { setSelectedCategories } = categorySlice.actions;
export default categorySlice.reducer;
