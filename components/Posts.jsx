import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'abdulsamadmj',
        userImage: 'https://media-exp1.licdn.com/dms/image/D5635AQGnbYYbQGKXlQ/profile-framedphoto-shrink_100_100/0/1637826413077?e=1647633600&v=beta&t=IFU7hnsQmkFrMztmdsKJiK2dMQsEk5ztV0CPlXjVzks',
        title: 'The Tail of Tails',
        tale: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: '124',
        username: 'abdulsamadmj',
        userImage: 'https://media-exp1.licdn.com/dms/image/D5635AQGnbYYbQGKXlQ/profile-framedphoto-shrink_100_100/0/1637826413077?e=1647633600&v=beta&t=IFU7hnsQmkFrMztmdsKJiK2dMQsEk5ztV0CPlXjVzks',
        title: 'The Tail of Tails',
        tale: 'This is some real long explained Tale of the day',
    },
]


function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImage={post.userImage}
                    title={post.title}
                    tale={post.tale}
                />
            ))}

        </div>
    )
}

export default Posts