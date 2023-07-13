import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/UserSlice';
import movieReducer from '../features/movie/MovieSlice';
import UserSlice from '../features/user/UserSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: UserSlice
  },
});
