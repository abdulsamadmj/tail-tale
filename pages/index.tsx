import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import PostModal from '../components/PostModal'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Tail-Tale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Feed/>

      <Modal />
      {/* <PostModal/> */}
    </div>
  )
}

export default Home
