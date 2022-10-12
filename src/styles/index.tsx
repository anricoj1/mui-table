// mui
import { useMediaQuery } from "@material-ui/core";
import { createTheme, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles'

let drawerWidth = 240;

//** use media query hook at 1181px */
export const useMedia = (theme: Theme): Record<"1025", boolean> => {
    return {
        "1025": useMediaQuery(theme.breakpoints.down(1181))
    }
}

//** style theme layout */
export const useStyles: Styles<Theme, {}, string> = (theme: Theme) => ({
    tableCell: {
        border: '1px solid black',
        boxShadow: '1px 1px 2px grey',
        background: "#f2f2f2"
    },
    tableContainer: {
        margin: '40px auto',
        width: '90%',
        height: '70vh',
        border: '1px solid grey',
        boxShadow: '1px 1px 5px grey',
        ['@media (max-height: 720px)']: {
            height: '60vh'
        }
    },
    sortDown: {
        transform: 'rotate(0deg)',
        transition: 'transform 0.2s ease-in-out',
        height: '1rem',
    },
    sortUp: {
        transform: 'rotate(180deg)',
        transition: 'transform 0.2s ease-in-out',
        height: '1rem',
    },
    moreVertBtn: {
        position: 'absolute',
        padding: 0,
        top: 0,
        right: 0,
    },
    moreVertIcon: {
        height: '1rem'
    }
});

/** app theme */
export const themeWrapper = createTheme({
    typography: {
        fontFamily: 'Boogaloo'
    }
});