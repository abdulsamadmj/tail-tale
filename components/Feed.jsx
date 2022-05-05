import React, { useEffect, useState } from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, where } from 'firebase/firestore'

function Feed() {
    //getting session obj
    const { data: session } = useSession();

    const [following, setFollowing] = useState([])
    useEffect(() => {
        if (session) onSnapshot(collection(db, 'users', session?.user?.uid, 'following'),
            (snapshot) => setFollowing(snapshot.docs)
        ), [db]
    })

    //adding user to db
    useEffect(() => {
        if (session) {
            addUser()
            setHomeFeed()
        }
    },[])
    async function addUser() {
        await setDoc(doc(db, 'users', session.user.uid), {
            username: session.user.username,
            fullname: session.user.name,
            profileImg: session.user.image,
            lastLogin: serverTimestamp(),
        })
    }
    async function setHomeFeed() {
        following.map(obj => (
            onSnapshot(collection(db, 'users', obj.id, 'posts'),
                (snapshot) => {
                    snapshot.docs.map(obj2 => {
                        setDoc(doc(db, 'users', session?.user?.uid, 'homeFeed'), obj2)
                    })
                }
            )
        ))
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
                    <div className='fixed'>
                        <MiniProfile />
                        <Suggestions />
                    </div>
                </section>
            )}

        </main>
    )
}

export default Feed