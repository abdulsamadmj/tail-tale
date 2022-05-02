import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { db } from '../firebase'

function searchPage() {
    const router = useRouter()
    const {
        query: { value }
    } = router

    useEffect(()=>{
        
    },[router,db])
    return (
        <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl`}>
            <section className='col-span-2'>
            </section>
        </main>
    )
}

export default searchPage