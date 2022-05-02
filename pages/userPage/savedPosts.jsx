import { ViewGridIcon as ViewGridIconFilled } from '@heroicons/react/solid';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import GridSavedPosts from '../../components/GridSavedPosts';
import Header from '../../components/Header'
import { db } from '../../firebase';

function savedPosts() {
  const { data: session } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    if (session)
      onSnapshot(query(collection(db, 'users', session?.user?.uid, 'savedPosts')), snapshot => {
        setPosts(snapshot.docs)
        posts.map((obj)=>{
          console.log(obj);
        })
      })
  }
    , [db, router]);
  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [router])
  return (
    <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl sm:grid-cols-1`}>

      <section className='col-span-2'>
        <div className="border-b border-gray-200 dark:border-gray-700 mt-10">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">

            <li className="mr-2 hover:cursor-pointer" >
              <div className="inline-flex p-4  rounded-t-lg border-b-2 border-transparent group text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">
                <ViewGridIconFilled className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />Saved Posts
              </div>
            </li>

          </ul>
        </div>
        <p className='text-xs m-2 '>Only you can see what you've saved</p>
        <div className="container my-5 mx-auto px-4">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {posts.map((post) => {
              <GridSavedPosts
                id='0mJukZPDkJtkv3MrZ1mR'
              />
            })}


          </div>
        </div>


      </section>


    </main>
  )
}

export default savedPosts