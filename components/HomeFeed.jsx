import React, { useEffect, useState } from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDoc, limit, onSnapshot, orderBy, query, serverTimestamp, setDoc, where } from 'firebase/firestore'
import Post from './Post'
import PostModal from './PostModal'
import TailTaleModal from './TailTaleModal'

function HomeFeed() {
    const { data: session } = useSession();
    const [homeFeed, setHomeFeed] = useState([])
    useEffect(() => {
        onSnapshot(query(collection(db, 'users', session?.user?.uid, 'homeFeed'), orderBy('timestamp', 'desc'), limit(10)), snapshot => {
            setHomeFeed(snapshot.docs)
        })

    }
        , [db]);
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className='col-span-3'>
                {/* <Stories /> */}
                {homeFeed.map(post => (<>
                    <Post key={'homeFeed' + post.id}
                        id={post.id}
                        uid={post.data().uid}
                        username={post.data().username}
                        parentTale={post.data().parentTale}
                        userImage={post.data().profileImg}
                        title={post.data().title}
                        tale={post.data().story}
                        tailStory={post.data().tailStory}
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
                </>
                ))}
            </section>

        </main>
    )
}
export default HomeFeed