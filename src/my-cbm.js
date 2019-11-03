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
                Data: {props.data}
            </Typography>
        </div>
    );
}

MyCBM.propTypes = {
    data: PropTypes.node.isRequired
};

export default MyCBM;