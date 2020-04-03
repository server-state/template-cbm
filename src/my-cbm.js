import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function MyCBM(props) {
    return (
        <div>
            <Typography>
                My CBM module!
            </Typography>
            <Typography>
                Data: {JSON.stringify(props.data, null, 2)}
            </Typography>
        </div>
    );
}

MyCBM.propTypes = {
    data: PropTypes.any.isRequired,
    registerMenuItem: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    storage: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
};

export default MyCBM;
