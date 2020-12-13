import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { apiClient } from '../helpers/client';

function getTen(text, page) {
    return apiClient.get('/', {
        params: {
            s: text,
            page: page
        }
    });
}


export const searchMovie = createAsyncThunk('movies/searchMovie', async ({text, page =1}) => {

    // 10 by 10
    // const response = await apiClient.get('/', {
    //     params: {
    //         s: text,
    //         page: page
    //     }
    // });
    // return response;

    // 20 by 20
    const response = await Promise.all([getTen(text, page), getTen(text, page+1)])
        .then(function (results) {
            if (results[1].data['Search']){
                results[0].data['Search'] = results[0].data['Search'].concat(results[1].data['Search']);
            }
            return results[0].data;
        });
    return response;
})

export const slice = createSlice({
    name: 'MovieList',
    initialState: {
        page: 1,
        apiPage: 2,
        text: '',
        response: null,
        movies: [],
        totalResults: 0,
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setAPIPage: (state, action) => {
            state.apiPage = action.payload;
        },
        reset: (state, action) => {
            state.page = 1;
            state.apiPage = 2;
            state.text = '';
            state.response = null;
            state.movies = [];
            state.totalResults = 0;
        },
    },
    extraReducers: {
        [searchMovie.fulfilled]: (state, action) => {
            state.response = action.payload['Response'];
            state.movies = action.payload['Search'];
            state.totalResults = action.payload.totalResults;
        },
    }
});

export const { setText, setPage, setAPIPage, reset } = slice.actions;

export const movies = state => state.movieList.movies;
export const response = state => state.movieList.response;
export const totalResults = state => state.movieList.totalResults;
export const text = state => state.movieList.text;
export const page = state => state.movieList.page;
export const apiPage = state => state.movieList.apiPage;

export default slice.reducer;
