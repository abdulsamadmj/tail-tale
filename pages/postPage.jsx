import { ReplyIcon } from '@heroicons/react/outline';
import { collection, doc, getDoc, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import GridTailTales from '../components/GridTailTales';
import PostModal from '../components/PostModal';
import TailTaleModal from '../components/TailTaleModal';
import Post from '../components/Post';
import { db } from '../firebase';

function postPage() {
    const router = useRouter();
    const [post, setPost] = useState(null)
    const [tailStories, setTailStories] = useState([])
    const [temp, setTemp] = useState([])
    const {
        query: { id }
    } = router
    useEffect(() => {
        if (id) {
            getDoc(doc(db, 'posts', id)).then(obj => {
                setPost(obj)
            });
            onSnapshot(query(collection(db, 'posts', id, 'tailStories'), orderBy('timestamp', 'desc'), limit(20)), snapshot => {
                setTemp(snapshot.docs)
            });
        }
    }, [db, id])

    return (
        <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl`}>
            <section className='col-span-2'>
                {post && <>
                    <Post
                        id={id}
                        parentTale={post.data().parentTale}
                        tailStory={post.data().tailStory}
                        tale={post.data().story}
                        timestamp={post.data().timestamp}
                        title={post.data().title}
                        uid={post.data().uid}
                        userImage={post.data().profileImg}
                        username={post.data().username}
                    />
                    <PostModal key={'post' + post.id}
                        id={post.id}
                        uid={post.data().uid}
                        username={post.data().username}
                        parentTale={post.data().parentTale}
                        userImage={post.data().profileImg}
                        title={post.data().title}
                        tale={post.data().story}
                        tailStory={post.data().tailStory}
                        timestamp={post.data().tailStory}
                    />
                    <TailTaleModal key={'tailPost' + post.id}
                        id={post.id}
                        uid={post.data().uid}
                        username={post.data().username}
                        userImage={post.data().profileImg}
                        title={post.data().title}
                        tale={post.data().story}
                        tailStory={post.data().tailStory} />
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">

                            <li className="mr-2 hover:cursor-pointer" >
                                <div className="inline-flex p-4  rounded-t-lg border-b-2 border-transparent group text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">
                                    <ReplyIcon className="mr-2 w-5 h-5 rotate-180 text-blue-600 dark:text-blue-500" />Tail-Tales
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="container my-5 mx-auto px-4">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {
                                temp.map(obj => (

                                    <GridTailTales
                                        id={obj.id}
                                        userImage={obj.data().profileImg}
                                        username={obj.data().username}
                                        fullname={obj.data().fullname}
                                    />

                                ))
                            }
                        </div>
                    </div>
                </>
                }
            </section>
        </main>
    )
}

export default postPage