import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {searchMovie, setPage, text, setAPIPage, page} from "../store/MovieListSlice";
import {useDispatch, useSelector} from "react-redux";
import config from '../configs/config.json';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
    },
    pagination: {
        justifyContent: 'center',
    }
}));

export default function MoviePagination(props) {
    const classes = useStyles();
    const {total} = props;
    const dispatch = useDispatch();
    const searchText = useSelector(text);
    const paginationPage = useSelector(page);

    const handleChange = (e, page) => {

        // Beacuse we getting two pages if we show 10 movie use page.
        const newPage = page*2-1;

        dispatch(setPage(page));
        dispatch(setAPIPage(newPage));
        dispatch(searchMovie({text: searchText, page: newPage}));
    }

    return (
        <div className={classes.root}>
            <Pagination
                classes={{ ul: classes.pagination}}
                count={Math.ceil(total/config.perPage)}
                variant="outlined"
                size="large"
                onChange={handleChange}
                page={paginationPage}
            />
        </div>
    );
}
