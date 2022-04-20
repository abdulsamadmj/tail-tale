import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Header from '../../components/Header'

function savedPosts() {
    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {
     if(!session){
        router.push('/')
     }
    }, [router])
  return (
    <div>
        savedPosts
    </div>
  )
}

export default savedPosts