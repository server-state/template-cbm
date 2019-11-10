import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, AppBar as MuiAppBar, Toolbar, Typography, IconButton, Hidden, Drawer, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240; // px
const defaultOpen = false;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: drawerWidth
        }
    },
    title: {
        flexGrow: 1
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },

    content: {
        flexGrow: 1
    }
}));

function AppBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(defaultOpen);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            {/* Default AppBar */}
            <MuiAppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        CBM Test Environment
                    </Typography>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </MuiAppBar>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>

            <nav className={classes.drawer} aria-label="component infos">
                {/* Temporary Drawer */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // better mobile performance
                        }}
                    >
                        {props.drawerContent}
                    </Drawer>
                </Hidden>
                {/* Persistent Drawer */}
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        anchor="right"
                        open
                    >
                        <div className={classes.toolbar} />
                        {props.drawerContent}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
};

AppBar.propTypes = {
    children: PropTypes.element,
    drawerContent: PropTypes.element
};

export default AppBar;