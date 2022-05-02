import React, { useEffect, useState } from 'react'
import { ViewGridIcon as ViewGridIconFilled } from '@heroicons/react/solid';
import GridPost from './GridPost';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { Transition } from '@headlessui/react';
import { ReplyIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

function ProfilePosts({ uid, userImage, username }) {
  const router = useRouter() 
  const [posts, setPosts] = useState([])
  const [taleSelected, setTaleSelected] = useState(true)

  useEffect(() => {
    if (uid)
      onSnapshot(query(collection(db, 'users', uid, 'posts'), orderBy('timestamp', 'desc'), limit(10)), snapshot => {
        setPosts(snapshot.docs)
      })

  }
    , [db,router]);

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700 mt-10">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center">

          <li className="mr-2 hover:cursor-pointer" onClick={() => {
            setTaleSelected(true)
          }} >
            <div className={`inline-flex p-4  rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group 
            ${taleSelected && "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"}`} aria-current="page">
              <ViewGridIconFilled className={`mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 ${taleSelected && "text-blue-600 dark:text-blue-500"}`}
              />Tales
            </div>
          </li>
          <li className="mr-2 hover:cursor-pointer" onClick={() => {
            setTaleSelected(false)
          }}>
            <div className={`inline-flex p-4  rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group 
            ${!taleSelected && "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"}`}>
              <ReplyIcon className={`mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 rotate-180 ${!taleSelected && "text-blue-600 dark:text-blue-500"}`}
              />Tail-Tales
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="container my-5 mx-auto px-4">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">

            {taleSelected && posts.map((post) => (
              !post.data().parentTale &&
              <GridPost
                key={post.id}
                id={post.id}
                uid={uid}
                username={username}
                userImage={userImage}
                title={post.data().title}
                tale={post.data().story}
                tailStory={post.data().tailStory}
                timestamp={post.data().tailStory} />
                
            ))}
            {!taleSelected && posts.map((post) => (
              post.data().parentTale &&
              <GridPost
                key={post.id}
                id={post.id}
                uid={uid}
                username={username}
                userImage={userImage}
                parentTale={post.data().parentTale}
                tale={post.data().story}
                tailStory={post.data().tailStory}
                timestamp={post.data().tailStory} />
            ))}







          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePosts