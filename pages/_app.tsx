import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { lightTheme, darkTheme } from '../themes';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp