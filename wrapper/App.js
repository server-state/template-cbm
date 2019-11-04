import React from 'react';
import { Typography } from '@material-ui/core';
import CBM from '../src';

export default function App(props) {
    return(
        <div>
            <Typography>CBM name: {CBM.info.name}</Typography>
            <CBM.component data={'Hello! World'} />
        </div>
    );
}