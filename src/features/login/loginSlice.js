import { createSlice } from '@reduxjs/toolkit';

const initialState = { userInfo: null };

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
