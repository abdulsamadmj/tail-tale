import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import Modal from '../components/Modal'
import Header from '../components/Header'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
      <Head>
        <title>Tail-Tale</title>
        <link rel="icon" href="/icon.png" />
      </Head>
        <Header/>
        <Component {...pageProps} />
        <Modal />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
