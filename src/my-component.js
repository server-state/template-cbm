import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


function MyComponent(props) {
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

MyComponent.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default MyComponent;