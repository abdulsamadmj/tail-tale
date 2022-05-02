import { Transition } from '@headlessui/react'
import { AnnotationIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'
import { CogIcon as CogIconFilled, BookmarkIcon as BookmarkIconFilled, MinusCircleIcon as MinusCircleIconFilled } from '@heroicons/react/solid'
import { collection, deleteDoc, doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function Profile({ uid, userImage, username, fullname }) {
    const { data: session } = useSession();
    const router = useRouter()
    const [accSettings, setAccSettings] = useState(false)
    const [following, setFollowing] = useState([])
    const [follow, setFollow] = useState(false)
    const [followers, setFollowers] = useState([])
    const [posts, setPosts] = useState([])


    useEffect(() => onSnapshot(collection(db, 'users', uid, 'following'),
        (snapshot) => setFollowing(snapshot.docs)
    ), [db])

    useEffect(() => onSnapshot(collection(db, 'users', uid, 'followers'),
        (snapshot) => setFollowers(snapshot.docs)
    ), [db])
    useEffect(() => onSnapshot(collection(db, 'users', uid, 'posts'),
        (snapshot) => setPosts(snapshot.docs)
    ), [db])

    useEffect(() => {
        if (session)
            getDoc(doc(db, 'users', session?.user?.uid, 'following', uid)).then((obj) => {
                if (obj.exists()) {
                    setFollow(true)
                }
            }), [db]
    })

    const followUser = async () => {
        if (follow) {
            await deleteDoc(doc(db, 'users', uid, 'followers', session.user.uid))
            await deleteDoc(doc(db, 'users', session.user.uid, 'following', uid))
            setFollow(false)
        } else {
            await setDoc(doc(db, 'users', uid, 'followers', session.user.uid), {
                username: session.user.username,
                timestamp: serverTimestamp(),
            })
            await setDoc(doc(db, 'users', session.user.uid, 'following', uid), {
                timestamp: serverTimestamp()
            })
            setFollow(true)
        }
    }


    return (
        <div className='flex items-center justify-between mt-12 text-lg relative'>
            <img src={userImage}
                alt="dp"
                className="w-36 rounded-full border p[2px]" />

            <div className='flex-1 mx-12'>
                <h2 className='font-bold'>{fullname}</h2>
                <h3 className='text-base text-gray-400'>{username}
                </h3>
                <div className='text-base flex justify-between mt-3 text-center'>

                    <h1 className='font-bold mb-1 ml-4 pb-2'>{posts.length} Posts
                    </h1>

                    <h1 className='font-bold mb-1 ml-4 pb-2'>{followers.length} Followers
                    </h1>

                    <h1 className='font-bold mb-1 ml-4 pb-2'>{following.length} Following</h1>

                </div>
                {uid != session?.user?.uid &&
                    <div><button className={`${follow ? 'text-gray-600 font-semibold' : 'text-blue-600'} text-base`} onClick={followUser}>{follow ? 'Following' : 'Follow'}</button></div>
                }
            </div>


            {uid == session?.user.uid &&
                (accSettings ? <CogIconFilled className='navBtn mr-36' onClick={() => { setAccSettings(!accSettings) }} /> : <CogIcon className='navBtn mr-36' onClick={() => { setAccSettings(!accSettings) }} />)}
            <Transition
                show={accSettings}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">

                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">

                        <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={() => { router.push('/userPage/savedPosts') }}>
                            <BookmarkIconFilled className='w-6 navBtn pr-1' />Saved Posts
                        </h1>

                        <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={() => { router.push('/userPage/Activities') }}>
                            <AnnotationIcon className='w-6 navBtn pr-1' />Activities
                        </h1>

                        <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={() => { router.push('/userPage/deleteAcc') }}>
                            <MinusCircleIconFilled className='w-6 navBtn pr-1 text-red-500' />Delete Account
                        </h1>

                        <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 " role="menuitem" tabIndex="-1" id="menu-item-3"
                            onClick={signOut}>
                            <LogoutIcon className='w-6 navBtn pr-1' />Sign out
                        </button>
                    </div>
                </div>
            </Transition>

        </div>
    )
}

export default Profile