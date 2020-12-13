import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontSize: 40,
        color: "white",
        textDecoration: "none",
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <MovieIcon style={{ fontSize: 50 }} />
                    <Link to={'/'} >
                        <Typography variant="h6" className={classes.title}>
                            Eiga Apiru
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
