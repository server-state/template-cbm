import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, IconButton, Divider, Card, CardHeader, CardContent, Slider } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ElementAvatar from './element-avatar';


const maxWidth = 1080;
const minWidth = 300;
const initialWidth = 600;

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    sliderChild: {
        flex: '0 1 540px'
    },
    scalable: {
        flex: width => `0 1 ${width}px`
    }
}));

function SimpleDashboard(props) {
    const [width, setWidth] = React.useState(initialWidth);
    const classes = useStyles(width);

    const handleSliderChangeInversed = (event, value) => {
        setWidth(Math.max(-value, minWidth));
    };
    const handleSliderChange = (event, value) => {
        setWidth(Math.max(value, minWidth));
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.sliderChild}>
                    <Slider
                        track="inverted" min={-maxWidth} max={0} value={-width}
                        onChange={handleSliderChangeInversed}
                    />
                </div>
                <div className={classes.sliderChild}>
                    <Slider
                        min={0} max={maxWidth} value={width}
                        onChange={handleSliderChange}
                    />
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.scalable}>
                    <Card style={{ 'height': '100%' }}>
                        <CardHeader
                            avatar={
                                <ElementAvatar name={props.info.name} />
                            }
                            action={
                                <IconButton aria-label="expand">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={props.info.name || 'No module name'}
                            subheader={
                                'link-to-data'
                            }
                        />
                        <Divider light variant="middle" />
                        <CardContent>
                            {props.children}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

SimpleDashboard.propTypes = {
    info: PropTypes.object.isRequired,
    data: PropTypes.any.isRequired
};

export default SimpleDashboard;