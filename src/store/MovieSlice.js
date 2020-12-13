import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { apiClient } from '../helpers/client';

export const getMovie = createAsyncThunk('movies/getMovie', async (imdbID) => {
    const response = await apiClient.get('/', {
        params: {
            i: imdbID,
        }
    });

    return response.data;
})

export const slice = createSlice({
    name: 'Movie',
    initialState: {
        movie: {},
    },
    reducers: {
        reset: (state, action) => {
            state.movie = {};
        },
    },
    extraReducers: {
        [getMovie.fulfilled]: (state, action) => {
            state.movie = action.payload;
        },
    }
});

export const { reset } = slice.actions;

export const movie = state => state.movie.movie;

export default slice.reducer;
