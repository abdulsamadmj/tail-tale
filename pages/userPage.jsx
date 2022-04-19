import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Header from '../components/Header';
import { sessionState } from '../atoms/modalAtom';

function userPage() {
  
    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {
     if(!session){
        router.push('/')
     }
    }, [router])
  return (
    <div>
      <Header/>
      userPage
    </div>
  )
}

export default userPage