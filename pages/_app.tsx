import type { AppProps } from 'next/app'
import { darkTheme, lightTheme } from '../themes';
import { NextUIProvider, CssBaseline } from '@nextui-org/react';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp