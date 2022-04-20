import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AnnotationIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'
import {
  BookmarkIcon as BookmarkIconFilled,
  CogIcon as CogIconFilled,
  MinusCircleIcon as MinusCircleIconFilled
} from '@heroicons/react/solid'
import { Transition } from '@headlessui/react';
import { db } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import ProfilePosts from '../components/ProfilePosts';

function userPage() {
  const [accSettings, setAccSettings] = useState(false)
  const [following, setFollowing] = useState([])
  const [followers, setFollowers] = useState([])
  const [posts, setPosts] = useState([])
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [router])

  useEffect(() => onSnapshot(collection(db, 'users', session?.user?.uid, 'following'),
    (snapshot) => setFollowing(snapshot.docs)
  ), [db])

  useEffect(() => onSnapshot(collection(db, 'users', session?.user?.uid, 'followers'),
    (snapshot) => setFollowers(snapshot.docs)
  ), [db])
  useEffect(() => onSnapshot(collection(db, 'users', session?.user?.uid, 'posts'),
    (snapshot) => setPosts(snapshot.docs)
  ), [db])

  return (
    <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl`}>
      <section className='col-span-2'>
        <div className='flex items-center justify-between mt-12 text-lg'>
          <img src={session?.user?.image}
            alt="dp"
            className="w-36 rounded-full border p[2px]" />

          <div className='flex-1 mx-12'>
            <h2 className='font-bold'>{session?.user?.name}</h2>
            <h3 className='text-base text-gray-400'>{session?.user?.username}
            </h3>
            <div className='text-base flex justify-between mt-3'>
            {
                posts.length > 0 &&
                (
                  <h1 className='font-bold mb-1 ml-4 pb-2'>{posts.length} Posts
                  </h1>
                )
              }
              {
                followers.length > 0 &&
                (
                  <h1 className='font-bold mb-1 ml-4 pb-2'>{followers.length} Followers
                  </h1>
                )
              }
              {
                following.length > 0 &&
                (
                  <h1 className='font-bold mb-1 ml-4 pb-2'>{following.length} Following</h1>
                )
              }
            </div>
          </div>



          {accSettings ? <CogIconFilled className='navBtn mr-36' onClick={() => { setAccSettings(!accSettings) }} /> : <CogIcon className='navBtn mr-36' onClick={() => { setAccSettings(!accSettings) }} />}
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

                <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={() => { router.push('/userPage/savedPosts') }}>
                  <AnnotationIcon className='w-6 navBtn pr-1' />Activities
                </h1>

                <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={() => { router.push('/userPage/savedPosts') }}>
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
        <ProfilePosts/>

      </section>


    </main>
  )
}

export default userPage