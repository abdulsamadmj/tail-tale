import React from 'react'
import { getProviders, signIn as signIn } from "next-auth/react"
import Header from '../../components/Header';
import Image from 'next/image';

//Browser
function signin({ providers }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center
      min-h-screen py-2 -mt-10 px-14 text-center">
        <div>
          <Image
            src="/../public/Logo.png"
            alt="tail-tale"
            width='300rem'
            height='150rem'
            objectFit='contain' />
          <p className='font-xs italic'>Share your Tales, Add Tail-Stories. Connect</p>
        </div>
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className='p-3 bg-blue-500 rounded-lg text-white'
                onClick={() => signIn(provider.id,{callbackUrl:'/'})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// Server
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
}
export default signin