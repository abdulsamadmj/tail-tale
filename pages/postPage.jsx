import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { db } from '../firebase';

function postPage() {
    const router = useRouter();
    const [post, setPost] = useState(null)
    const {
       query:{ id}
    } = router
    useEffect(() => {
        if (id)
            getDoc(doc(db, 'posts', id)).then(obj => {
                setPost(obj)
            })
    }, [db, id])
    return (
        <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl`}>
            <section className='col-span-2'>
                {post &&
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
                    //tailStories Grid
                }
            </section>
        </main>
    )
}

export default postPage