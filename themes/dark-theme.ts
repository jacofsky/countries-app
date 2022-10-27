import { color, extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
    colors: {
        main: 'hsl(209, 23%, 22%)',
        input: 'hsl(209, 23%, 22%)',
        bg: 'hsl(207, 26%, 17%)',
        text: 'hsl(0, 0%, 100%)'
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
    },
    styles: {
        global: {
          // styles for the `body`
          body: {
            bg: 'hsl(209, 23%, 22%)',
          },
          // styles for the `a`
          a: {
            color: 'teal.500',
            _hover: {
              textDecoration: 'underline',
            },
          },
        },
      },
    
})