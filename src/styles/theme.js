import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as colors from './colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: colors.PRIMARY_COLOR,
            // dark: will be calculated from palette.primary.main,
            contrastText: colors.WHITE_COLOR,
        },
        secondary: {
            // light: will be calculated from palette.primary.main,
            main: colors.SECONDARY_COLOR,
            // dark: will be calculated from palette.primary.main,
            contrastText: colors.WHITE_COLOR,
        },
        light: {
            // light: will be calculated from palette.primary.main,
            main: colors.WHITE_COLOR,
            // dark: will be calculated from palette.primary.main,
            contrastText: colors.WHITE_COLOR,
        }
    },
    typography: {
        // fontFamily: "'Open Sans', sans-serif",
        fontFamily: "'Varela Round', sans-serif",
    }
});

export default function Theme(props) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}