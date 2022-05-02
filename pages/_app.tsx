import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import Modal from '../components/Modal'
import Header from '../components/Header'
import MobileFooter from '../components/MobileFooter'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  //console clear
  // console.log = console.warn = console.error = () => { };

  // // Look ma, no error!
  // console.error('Something bad happened.');
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Head>
          <title>Tail-Tale</title>
          <link rel="icon" href="/icon.png" />
        </Head>
        <Header />

        <Component {...pageProps} />
        <Modal/>
        <MobileFooter />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
