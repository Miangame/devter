import { AppProps } from 'next/app'
import React from 'react'
import GlobalStyles from '../components/global/GlobalStyles'
import { Head } from '../components/layout/Head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head />
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
