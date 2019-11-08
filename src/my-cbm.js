import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';

function MyCBM(props) {
    return (
        <div>
            <Typography>
                My CBM module! With changes
            </Typography>
            <Typography>
                Data: {JSON.stringify(props.data, null, 2)}
            </Typography>
            <Button variant="contained">
                Click Me!
            </Button>
        </div>
    );
}

MyCBM.propTypes = {
    data: PropTypes.any.isRequired
};

export default MyCBM;