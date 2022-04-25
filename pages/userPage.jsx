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
import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore';
import ProfilePosts from '../components/ProfilePosts';
import Profile from '../components/Profile';

function userPage() {
  const [profile, setProfile] = useState(null)

  const { data: session } = useSession();
  const router = useRouter();
  const {
    query: { uid },
  } = router
  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [router])
  useEffect(() => {
    if (uid)
      getDoc(
        doc(db, 'users', uid)).then((obj) => {
          setProfile(obj)
        })
  }, [db, uid])


  return (
    <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl sm:grid-cols-1`}>
      <section className='col-span-2'>
        {profile && <Profile uid={uid}
          userImage={profile.data().profileImg}
          username={profile.data().username}
          fullname={profile.data().fullname}
        />}

        <ProfilePosts />

      </section>


    </main>
  )
}

export default userPage