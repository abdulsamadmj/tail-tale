import { SparklesIcon } from '@heroicons/react/solid'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function GridSavedPosts({ id }) {
    const [likes, setLikes] = useState([])
    const [post, setPost] = useState(null)
    const [parentCard, setParentCard] = useState(null)
    const router = useRouter();
    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'),
        (snapshot) => setLikes(snapshot.docs)
    ), [db, id])

    useEffect(() => {
        getDoc(
            doc(db, 'posts', id)).then((obj) => {
                setPost(obj)
                if(post && post.data().parentTale){
                    getDoc(
                        doc(db, 'posts', post.data().parentTale)).then((obj) => {
                            setParentCard(obj)
                        })
                }
            })
    }, [db,id,post])

    return (
        post &&
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 hover:scale-105 transition" onClick={() => {
            router.push({ pathname: '/postPage', query: { id } })
        }} >


            <article className="overflow-hidden rounded-lg shadow-lg hover:bg-gray-100 bg-white">


                <div className="block p-8 pb-4 h-auto w-full truncate" >{post.data().story}</div>

                {!parentCard ? (<header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-md ml-2">
                        <div className=" text-black truncate font-bold">
                            {post.data().title}
                        </div>
                    </h1>
                    <p classname="text-grey-darker text-sm">
                        { }
                    </p>
                </header>) : (
                    <div className='block p-5 bg-white rounded-lg w-full shadow-md shadow-gray-400'>

                        <div className='flex shadow-sm pb-1'><img src={parentCard.data().profileImg} alt="dp" className='rounded-full w-5 commentect-contain' /><p className='flex-1 text-sm font-bold ml-1'>{parentCard.data().username}</p></div>
                        <br />
                        <h1 className='font-bold text-sm'>{parentCard.data().title}</h1>
                        <p className='truncate text-xs'>{parentCard.data().story}</p>
                    </div>
                )}

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