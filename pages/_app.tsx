import type { AppProps } from 'next/app'
import Footer from '../src/components/Footer'
import GlobalStyle from '../src/components/globalstyles'
import Navbar from '../src/components/Navigation/Navbar'
import ThemeCtxProvider from '../src/contexts/ThemeCtx'
import '../src/styles.css'
import NextNProgress from 'nextjs-progressbar';
import SideMenu from '../src/components/Navigation/SideMenu'
import Navigation from '../src/components/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#ca4e9c" />
      <ThemeCtxProvider>
        <GlobalStyle />
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </ThemeCtxProvider>
    </>
  )
}
