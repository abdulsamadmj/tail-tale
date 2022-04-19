import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import Header from '../components/Header'
import Suggestions from '../components/Suggestions'
import MiniProfile from '../components/MiniProfile'
import { useRouter } from 'next/router';

function Home() {
    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {
     if(!session){
        router.push('/')
     }
    }, [router])
    
    return (
        <>
            <Header />
            <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
                <section className='col-span-2'>

                    {/* <Posts /> */}
                </section>
                {session && (
                    <section className='hidden xl:inline-grid md:col-span-1'>
                        <div className='fixed top-20'>
                            <MiniProfile />
                            <Suggestions />
                        </div>
                    </section>
                )}

            </main>
        </>
    )

}

export default Home