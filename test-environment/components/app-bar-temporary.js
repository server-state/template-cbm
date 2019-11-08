import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles, Typography, IconButton,
    AppBar as MuiAppBar, Toolbar, Drawer, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerContent from './drawer-content';


const drawerWidth = 240; // px
const defaultOpen = false;

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        width: `${drawerWidth}px`
    }
});

function AppBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(defaultOpen);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <MuiAppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        CBM Test Environment
                    </Typography>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                        onClose={handleDrawerClose}
                        open={open}
                        variant="temporary"
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // better mobile performance
                        }}
                    >
                        <DrawerContent
                            info={props.info}
                            data={props.data}
                            selected={props.selected}
                            onSelected={props.onSelected}
                        />
                    </Drawer>
                </Toolbar>
            </MuiAppBar>
        </div>
    );
}

AppBar.propTypes = {
    info: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    selected: PropTypes.any.isRequired,
    onSelected: PropTypes.func.isRequired
};

export default AppBar;