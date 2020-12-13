import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {response} from '../store/MovieListSlice';
import {reset} from '../store/MovieSlice';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './../components/Header';
import SearchBar from './../components/SearchBar';
import MovieList from "./../components/MovieList";
import EmptyList from "./../components/EmptyList";
import NotFound from "./../components/NotFound";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    spacing: {
        marginTop: 50,
    }
}));

export default function Home() {
    const classes = useStyles();
    const responseSuccess = useSelector(response);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
    }, [dispatch])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            <Grid container spacing={3} justify={"center"} className={classes.spacing}>
                <Grid item xs={9}>
                    <SearchBar />
                </Grid>
            </Grid>
            {responseSuccess === null &&
                <EmptyList />
            }
            {responseSuccess === 'False' &&
                <NotFound />
            }
            {responseSuccess === 'True' &&
                <MovieList />
            }
        </div>
    );
}
