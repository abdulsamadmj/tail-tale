import { SparklesIcon } from '@heroicons/react/solid'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function GridSavedPosts({ id }) {
    const [likes, setLikes] = useState([])
    const [post, setPost] = useState(null)
    const router = useRouter();
    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'),
        (snapshot) => setLikes(snapshot.docs)
    ), [db, id])

    useEffect(() => {
        getDoc(
            doc(db, 'posts', id)).then((obj) => {
                setPost(obj)
            })
    }, [db])

    return (
        post &&
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 hover:scale-105 transition" onClick={() => {
            router.push({ pathname: '/postPage', query: { id } })
        }} >


            <article className="overflow-hidden rounded-lg shadow-lg hover:bg-gray-100 bg-white">


                <div className="block p-8 h-auto w-full truncate" >{post.data().story}</div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <div className=" text-black truncate">
                            {post.data().title}
                        </div>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        { }
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <div className="flex items-center text-black hover:cursor-pointer" onClick={() => {
                        router.push({ pathname: '/userPage', query: { uid } })
                    }}>
                        <img alt="dp" class="block w-8 rounded-full" src={post.data().profileImg} />
                        <p className="ml-2 text-sm">
                            {post.data().username}
                        </p>
                    </div>
                    <div className='flex'>
                        <SparklesIcon className='w-4' /><p className='text-xs font-bold hover:cursor-pointer'>{likes.length}</p>
                    </div>


                </footer>

            </article>

        </div>
    )
}

export default GridSavedPosts