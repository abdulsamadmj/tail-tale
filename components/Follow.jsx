import { collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function Follow({ id, userImage, username, fullname }) {
    const { data: session } = useSession();

    const [following, setFollowing] = useState([])
    const [follow, setFollow] = useState(false)

    useEffect(() => onSnapshot(collection(db, 'users', session.user.uid, 'following'),
        (snapshot) => setFollowing(snapshot.docs)
    ), [db, id])

    useEffect(() =>
        setFollow(following.findIndex((flw) => flw.id === id) !== -1)
        , [following]
    )

    const followUser = async () => {
        if (follow) {
            await deleteDoc(doc(db, 'users', id, 'followers', session.user.uid))
            await deleteDoc(doc(db, 'users', session.user.uid, 'following', id))
        } else {
            await setDoc(doc(db, 'users', id, 'followers', session.user.uid), {
                username: session.user.username,
                timestamp: serverTimestamp(),
            })
            await setDoc(doc(db, 'users', session.user.uid, 'following', id), {
                timestamp: serverTimestamp()
            })
        }
    }
    return (
        id != session.user.uid &&
        <div key={id} className="flex items-center justify-between mt-3">
            <img
                className='w-10 h-10 rounded-full border p-[2px]'
                src={userImage}
                alt="dp" />
            <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>{username}</h2>
                <h3 className='text-xs truncate text-gray-400'>{fullname}</h3>
            </div>
            <div>
                <button className={`${follow ? 'text-gray-600 font-semibold' : 'text-blue-600'} text-sm`} onClick={followUser}>{follow ? 'Following' : 'Follow'}</button>
            </div>
        </div>

    )
}

export default Follow