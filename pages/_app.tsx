import type { AppProps } from 'next/app'
import Footer from '../src/components/Footer'
import GlobalStyle from '../src/components/globalstyles'
import Navbar from '../src/components/Navbar'
import ThemeCtxProvider from '../src/contexts/ThemeCtx'
import '../src/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeCtxProvider>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeCtxProvider>
    </>
  )
}
