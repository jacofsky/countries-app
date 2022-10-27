import { extendTheme } from "@chakra-ui/react";

export const lightTheme = extendTheme({
    colors: {
        main: 'hsl(0, 0%, 100%)',
        input: 'hsl(0, 0%, 52%)',
        bg: 'hsl(0, 0%, 98%)',
        text: 'hsl(200, 15%, 8%)',
        
    },
    fonts: {
        body: 'Nunito Sans, sans-serif'
    },
    fontWeights: {
        light: 300,
        semibold: 600,
        extrabold: 800,
    },
    fontSizes: {
        md: '14px',
        lg: '16px'
    }
})
