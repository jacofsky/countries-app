import { createTheme } from "@nextui-org/react"


export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#FFFFFF',
        input: 'hsl(0, 0%, 52%)',
        background: 'hsl(0, 0%, 98%)',
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
  }
})