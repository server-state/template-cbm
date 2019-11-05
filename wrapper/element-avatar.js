import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary
    }
}));

function generateAvaterSign(name) {
    const firstLetter = name.charAt(0);
    switch (firstLetter) {
        case 'ß':
            return 'ß';
        default:
            return firstLetter.toUpperCase();
    }
}

export default function ElementAvatar(props) {
    const classes = useStyles();

    return (
        <Avatar aria-label="recipe" className={classes.avatar}>
            {generateAvaterSign(props.name)}
        </Avatar>
    );
}