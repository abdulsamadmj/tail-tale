import { ChatIcon, ReplyIcon } from '@heroicons/react/outline'
import { SparklesIcon as SparklesIconFilled } from '@heroicons/react/solid'
import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { postModalState } from '../atoms/modalAtom'
import { db } from '../firebase'

function GridPost({ id, uid, username, parentTale, userImage, title, tale, tailStory, timestamp }) {
    const [likes, setLikes] = useState([])
    const router = useRouter();
    const [comments, setComments] = useState([])
    const [tailStories, setTailStories] = useState([])

    const [parentCard, setParentCard] = useState(null)
    useEffect(() => {
        if (parentTale) getDoc(
            doc(db, 'posts', parentTale)).then((obj) => {
                setParentCard(obj)
            })
    }, [db])
    useEffect(() => onSnapshot(query(
        collection(db, 'posts', id, 'tailStories')),
        snapshot => setComments(snapshot.docs)
    ), [db, id])

    useEffect(() => onSnapshot(query(
        collection(db, 'posts', id, 'comments')),
        snapshot => setTailStories(snapshot.docs)
    ), [db, id])
    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'),
        (snapshot) => setLikes(snapshot.docs)
    ), [db, id])

    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 hover:scale-105 transition" onClick={() => {
            router.push({ pathname: '/postPage', query: { id } })
        }} >


            <article className="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-gray-100">


                <div className="block p-8 h-auto w-full truncate" >{tale}</div>

                {!parentCard ? (<header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <div className=" text-black truncate font-bold">
                            {title}
                        </div>
                    </h1>
                    <p classname="text-grey-darker text-sm">
                        { }
                    </p>
                </header>) : (
                    <div className='block p-5 max-w-sm bg-white rounded-lg  shadow-md shadow-gray-400'>

                        <div className='flex shadow-sm pb-1'><img src={parentCard.data().profileImg} alt="dp" className='rounded-full w-5 commentect-contain' /><p className='flex-1 text-sm font-bold ml-1'>{parentCard.data().username}</p></div>
                        <br />
                        <h1 className='font-bold text-sm'>{parentCard.data().title}</h1>
                        <p className='truncate text-xs'>{parentCard.data().story}</p>
                    </div>
                )}

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">

                    <div className='flex'>
                        <SparklesIconFilled className='w-4' /><p className='text-xs font-bold hover:cursor-pointer'>{likes.length}</p>
                    </div>
                    <div className='flex'>
                        <ChatIcon className='w-4' /><p className='text-xs font-bold hover:cursor-pointer'>{comments.length}</p>
                    </div>

                    <div className='flex'>
                        <ReplyIcon className='w-4 rotate-180' /><p className='text-xs font-bold hover:cursor-pointer'>{tailStories.length}</p>
                    </div>

                </footer>

            </article>

        </div>
    )
}

export default GridPost