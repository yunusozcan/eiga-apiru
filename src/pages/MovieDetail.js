import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovie, movie} from "../store/MovieSlice";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Header from "../components/Header";
import Movie from "../components/Movie";

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

export default function MovieDetail() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {id} = useParams();
    const movieData = useSelector(movie);

    useEffect(() => {
        dispatch(getMovie(id));
    }, [dispatch, id])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            {movieData !== {} &&
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.spacing}
                >
                    <Grid item xs={3}>
                        <Movie movie={movieData} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h2" component="h2">
                            {movieData['Title']}({movieData['Year']})
                        </Typography>
                        <List className={classes.root}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Plot"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {movieData['Plot']}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Actors"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {movieData['Actors']}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Director"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {movieData['Director']}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Writer"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {movieData['Writer']}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            }
        </div>
    );
}
