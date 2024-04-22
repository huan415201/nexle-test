import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/reduck/category/categorySlice';
import userReducer from '../features/reduck/user/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});
