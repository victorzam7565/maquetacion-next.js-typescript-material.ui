//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, } from '@nextui-org/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp






