import { configureStore } from '@reduxjs/toolkit';
import MovieListSlice from './MovieListSlice';
import MovieSlice from './MovieSlice';

export default configureStore({
  reducer: {
    movie: MovieSlice,
    movieList: MovieListSlice,
  },
});
