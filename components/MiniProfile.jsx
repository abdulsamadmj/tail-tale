import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React from 'react'

function MiniProfile() {
  const { data: session } = useSession();
  const router = useRouter()
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src={session?.user?.image}
        alt="dp"
        className="w-16 h-16 rounded-full border p[2px] hover:cursor-pointer"
        onClick={() => {
          router.push({
            pathname: '/userPage',
            query: { uid: session.user.uid }
          })
        }} />

      <div className='flex-1 mx-4 hover:cursor-pointer' onClick={() => {
        router.push({
          pathname: '/userPage',
          query: { uid: session.user.uid }
        })
      }}>
        <h2 className='font-bold'>{session?.user?.name}</h2>
        <h3 className='text-sm text-gray-400'>{session?.user?.username}
        </h3>
      </div>

      <button className="text-red-500 text-sm font-semibold"
        onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default MiniProfile