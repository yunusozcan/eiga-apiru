import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import MoviePagination from './MoviePagination';
import Movie from './Movie';
import {useSelector} from "react-redux";
import {totalResults,movies} from "../store/MovieListSlice";
import config from '../configs/config.json';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    spacing: {
        marginTop: 50,
    },
    card: {
        maxWidth: 345,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 300,
    },
    list: {
        paddingRight: 100,
        paddingLeft: 100,
    },
}));

export default function MovieList() {
    const classes = useStyles();

    const totalResultCount = useSelector(totalResults);
    const movieArray = useSelector(movies);

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center" className={classes.spacing}>
                <Grid item xs={9}>
                    <Grid container spacing={3} justify="flex-end">
                        <Grid item>
                            <Chip size="small" label={totalResultCount + " Movie found."} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {totalResultCount > config.perPage && (
                <Grid container spacing={3} justify={"center"}>
                    <Grid item xs={9}>
                        <MoviePagination total={totalResultCount} />
                    </Grid>
                </Grid>
            )}
            <Grid container spacing={10} justify={"center"} className={classes.list}>
                {movieArray.map((movie, index) =>
                    <Grid key={index} item xs={9} sm={5} md={3}>
                        <Movie movie={movie} />
                    </Grid>
                )}
            </Grid>
            {totalResultCount > config.perPage && (
                <Grid container spacing={3} justify={"center"} className={classes.spacing}>
                    <Grid item xs={9}>
                        <MoviePagination total={totalResultCount} />
                    </Grid>
                </Grid>
            )}
        </div>
    );
}
