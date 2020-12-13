import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 100,
        margin: 100,
        textAlign: "center"
    }
}));

export default function EmptyList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={9}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography gutterBottom variant="h3" component="h3">
                            Search movie!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
