import type { AppProps } from 'next/app'
import { darkTheme, lightTheme } from '../themes';
import { NextUIProvider, CssBaseline } from '@nextui-org/react';

import '../styles/globals.css'
import { CountriesProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountriesProvider>
      <NextUIProvider theme={true ? darkTheme : lightTheme}> 
        <CssBaseline/>
        <Component {...pageProps} />
      </NextUIProvider>
    </CountriesProvider>
  )
}

export default MyApp