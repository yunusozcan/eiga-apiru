import React from 'react';
import {useDispatch} from 'react-redux';
import debounce from 'lodash.debounce';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";
import {searchMovie, setText, reset} from "../store/MovieListSlice";

export default function SearchBar() {

    const dispatch = useDispatch();

    const handleChange = e => {
        const text = e.target.value.trim();
        if (text) {
            dispatch(reset());
            dispatch(setText(text));
            dispatch(searchMovie({text}));
        } else {
            dispatch(reset());
        }

    }

    return (
        <TextField
            id="outlined-basic"
            label="Search Movie"
            variant="outlined"
            fullWidth
            placeholder="Amélie, Charlie and the Chocolate Factory"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            autoFocus={true}
            onChange={debounce(handleChange, 500)}
        />
    );
}
