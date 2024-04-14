import { createSlice } from '@reduxjs/toolkit';

const initialState = { userInfo: null, token: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUserInfo, setToken } = userSlice.actions;
export default userSlice.reducer;
