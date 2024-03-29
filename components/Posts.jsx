import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'
import PostModal from './PostModal'
import TailTaleModal from './TailTaleModal'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc'), limit(10)), snapshot => {
            setPosts(snapshot.docs)
        })

    }
        , [db]);
    return (
        <div>
            {posts.map(post => (<>
                <Post key={post.id}
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
            {/* <PostModal/> */}
        </div>
    )
}

export default Posts