import { Button, createTheme } from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#1C1C20'
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: 'small'
            },
            styleOverrides: {
               root: {
               }
            }
        }
    }
})