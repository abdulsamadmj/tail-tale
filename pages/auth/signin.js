import React from 'react'
import {getProviders,signIn as signIn} from "next-auth/react"

//Browser
function signin({providers}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// Server
export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props:{
            providers
        }
    }
}
export default signin