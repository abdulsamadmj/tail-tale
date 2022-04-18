import React, { useEffect } from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, where } from 'firebase/firestore'

function Feed() {
    const { data: session } = useSession();
    if(session){
        addUser()
    }
    async function addUser(){
        await setDoc(doc(db, 'users', session.user.uid), {
            username: session.user.username,
            fullname: session.user.name,
            profileImg: session.user.image,
            lastLogin: serverTimestamp(),
        })
    }
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className='col-span-2'>
                {/* <Stories /> */}
                <Posts />
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
    )
}

export default Feed