import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles, IconButton, Divider,
    Card, CardHeader, CardContent, Slider
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ElementAvatar from './element-avatar';


// functions and constants
const markSpacing = 100; // px

function marks(widths, scale = 1) {
    let marks = [];
    if (widths.maxWidth >= widths.minWidth)
        marks.push({
            value: widths.minWidth * scale,
            label: `${widths.minWidth * scale}px`
        });
    if (widths.maxWidth >= widths.initialWidth)
        marks.push({
            value: widths.initialWidth * scale,
            label: `${widths.initialWidth * scale}px`
        });
    if (widths.maxWidth < widths.minWidth || widths.maxWidth > widths.minWidth + markSpacing &&
        widths.maxWidth < widths.initialWidth || widths.maxWidth > widths.initialWidth + markSpacing)
        marks.push({
            value: widths.maxWidth * scale,
            label: `${widths.maxWidth * scale}px`
        });
    return marks;
};

// material ui styles
const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    sliderContainer: {
        flex: widths => `0 1 ${widths.maxWidth / 2}px`
    },
    contentContainer: {
        flex: widths => `0 1 ${widths.width}px`
    }
});

// component
function ScalableContainer(props) {
    const [width, setWidth] = React.useState(props.initialWidth);
    const widths = {
        minWidth: props.minWidth,
        initialWidth: props.initialWidth,
        maxWidth: props.maxWidth,
        width
    };
    const classes = useStyles(widths);

    const handleSliderChange = (_, value) => {
        setWidth(Math.max(props.minWidth, value));
    };

    const handleSliderChangeInversed = (_, value) => {
        setWidth(Math.max(props.minWidth, -value));
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.sliderContainer}>
                    <Slider
                        track="inverted" marks={marks(widths, -1)}
                        min={-props.maxWidth} max={0} value={-width - 1}
                        onChange={handleSliderChangeInversed}
                    />
                </div>
                <div className={classes.sliderContainer}>
                    <Slider
                        marks={marks(widths)}
                        min={0} max={props.maxWidth} value={width}
                        onChange={handleSliderChange}
                    />
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.contentContainer}>
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
                            subheader={'link-to-data'}
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

ScalableContainer.propTypes = {
    minWidth: PropTypes.number.isRequired,
    initialWidth: PropTypes.number.isRequired,
    maxWidth: PropTypes.number.isRequired,
    info: PropTypes.object,
    children: PropTypes.element
};

export default ScalableContainer;