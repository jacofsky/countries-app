import { createTheme } from "@nextui-org/react"


export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: 'hsl(209, 23%, 22%)',
      input: 'hsl(209, 23%, 22%)',
      background: 'hsl(207, 26%, 17%)',
      text: 'hsl(0, 0%, 100%)',
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
  },
})