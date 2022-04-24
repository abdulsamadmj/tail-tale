import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Post from '../components/Post';
import { db } from '../firebase';

function postPage() {
    router = useRouter();
    const [post, setPost] = useState(null)
    const {
        id
    } = router
    useEffect(() => {
        getDoc(doc('posts', id)).then(obj => {
            setPost(obj)
        })
    }, [db])
    return (
        <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl`}>
            <section className='col-span-2'>
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
            </section>
        </main>
    )
}

export default postPage