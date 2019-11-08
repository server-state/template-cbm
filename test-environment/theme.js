import { amber, blueGrey, green, blue, grey, deepOrange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey["700"],
            dark: blueGrey['500']
        },
        secondary: {
            main: amber['500']
        },
        error: {
            main: deepOrange["A400"],
            text: deepOrange["800"]
        },
        warning: {
            main: amber["A400"],
            text: amber["800"]
        },
        success: {
            main: green["A700"],
            text: green["700"]
        },
        information: {
            main: blue["500"],
            text: blue["700"]
        },
        disabled: {
            main: grey["400"],
            text: grey["700"]
        }
    }
});

export default theme;
