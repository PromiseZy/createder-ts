import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer2 from '@/components/Footer2'
import Menu from '@/components/Menu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu/>
      <Component {...pageProps} />
      <Footer2/>
    </>
    
  )
}
