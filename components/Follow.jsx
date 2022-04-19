import { collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function Follow({ id }) {
    const { data: session } = useSession();
    
    const [following, setFollowing] = useState([])
    const [follow, setFollow] = useState(false)

    useEffect(() => onSnapshot(collection(db, 'users', session.user.uid, 'following'),
        (snapshot) => setFollowing(snapshot.docs)
    ), [db,id])

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
        <div>
            <button className={`${follow ? 'text-gray-600 font-semibold':'text-blue-600'} text-sm`} onClick={followUser}>{follow ? 'Following' : 'Follow'}</button>
        </div>
    )
}

export default Follow