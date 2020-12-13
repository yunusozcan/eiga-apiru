import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 500,
    },
}));

export default function MovieList(props) {
    const classes = useStyles();
    const {movie} = props;

    return (
        <Link to={"/movies/" + movie['imdbID']}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={movie['Poster'] ? movie['Poster'] : 'https://picsum.photos/500'}
                        title={movie['Title']}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie['Title']}({movie['Year']})
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
);
}
