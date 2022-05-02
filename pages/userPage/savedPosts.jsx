import { BookmarkIcon as BookmarkIconFilled, ViewGridIcon as ViewGridIconFilled } from '@heroicons/react/solid';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Follow from '../../components/Follow';
import GridPost from '../../components/GridPost';
import GridSavedPosts from '../../components/GridSavedPosts';
import { db } from '../../firebase';

function savedPosts() {
  const { data: session } = useSession();
  const router = useRouter();
  const [temp, setTemp] = useState([])

  useEffect(() => {
    if (session)
      onSnapshot(query(collection(db, 'users', session?.user?.uid, 'savedPosts'), orderBy('timestamp', 'desc'), limit(25)), snapshot => {
        setTemp(snapshot.docs)
      })
  }, [db, session])


  return (
    session ? (
      <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl sm:grid-cols-1`}>

        <section className='col-span-2'>
          <div className="border-b border-gray-200 dark:border-gray-700 mt-10">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">

              <li className="mr-2 hover:cursor-pointer" >
                <div className="inline-flex p-4  rounded-t-lg border-b-2 border-transparent group text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">
                  <BookmarkIconFilled className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />Saved Posts
                </div>
              </li>

            </ul>
          </div>
          <p className='text-xs m-2 '>Only you can see what you've saved</p>
          <div className="container my-5 mx-auto px-4">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {
                temp.map(obj => (

                  <GridSavedPosts
                    id={obj.id}
                  />

                ))
              }


            </div>
          </div>


        </section>


      </main>) : (
      <div>
        <div className='flex flex-col justify-center items-center h-screen' onClick={signIn} >
          <b className='hover:cursor-pointer'> Sign In First</b>
          
        </div>
      </div>

    )
  )
}

export default savedPosts