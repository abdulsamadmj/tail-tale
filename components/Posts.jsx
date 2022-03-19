import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() =>
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        })
        , [db]);
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImage={post.data().profileImg}
                    title={post.data().title}
                    tale={post.data().story}
                    tailStory={post.data().tailStory}
                />
            ))}

        </div>
    )
}

export default Posts