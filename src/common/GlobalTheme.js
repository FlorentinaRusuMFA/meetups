import {createMuiTheme} from '@material-ui/core/styles/index';

export const palette = {
    primary: {
        main: "#00829A"
    },
    secondary: {
        main: '#93559D',
    }
};

export const theme = createMuiTheme({
    direction: 'ltr',
    palette,
    typography: {
        fontFamily: 'Open Sans',
        fontSize: '14px',
        lineHeight: '24px',
    }
});
