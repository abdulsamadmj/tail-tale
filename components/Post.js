import React, { useEffect, useState } from 'react'
import {
    HeartIcon,
    PaperAirplaneIcon,
    DotsHorizontalIcon,
    ChatIcon,
    BookmarkIcon,
    ReplyIcon,
    EmojiHappyIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'
import { postModalState, tailTaleModalState } from '../atoms/modalAtom'
import { atom, useRecoilState } from 'recoil'


function Post({ id, username, userImage, title, tale, tailStory }) {
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)
    const [openPost, setOpenPost] = useRecoilState(postModalState(id))
    const [openTail, setOpenTail] = useRecoilState(tailTaleModalState(id))

    useEffect(() => onSnapshot(query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')),
        snapshot => setComments(snapshot.docs)
    ), [db, id])

    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'),
        (snapshot) => setLikes(snapshot.docs)
    ), [db, id])

    useEffect(() =>
        setHasLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1)
        , [likes]
    )


    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username,
                timestamp: serverTimestamp(),
            })
        }

    }

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;
        setComment('');
        const newDoc = await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }
    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* Header */}
            <div className="flex items-center p-5 shadow-sm">
                <img src={userImage} className="rounded-full h-12 2-12 commentect-contain border p-1 
            mr-3" alt="dp" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5 cursor-pointer' />
            </div>

            {/* Tale */}
            <div className='w-full mt-2 shadow-sm'>
                <div className='w-full text-center'>
                    <h1 className='font-bold text-xl'>{title}</h1>
                </div>
                <div className='p-5'>
                    <p>{tale}</p>
                </div>
            </div>
            {/* Buttons */}
            {session &&
                (<>
                    <div className='flex justify-between px-4 pt-2 pb-1'>
                        <div className='flex space-x-3'>
                            {hasLiked ? (
                                <HeartIconFilled onClick={likePost} className='postBtn text-red-600' />
                            ) : (
                                <HeartIcon onClick={likePost} className='postBtn' />
                            )}

                            <ChatIcon className='postBtn' onClick={() => {
                                
                                setOpenPost(true)
                                
                            }} />
                            {tailStory && <ReplyIcon className='postBtn rotate-180' onClick={() => {

                                setOpenTail(true)
                            }} />}
                        </div>
                        <div className='flex space-x-3'>
                            <PaperAirplaneIcon className='postBtn rotate-45' />
                            <BookmarkIcon className='postBtn' />
                        </div>
                    </div>
                    {
                        likes.length > 0 &&
                        (
                            <p className='text-[.8rem] font-bold mb-1 ml-4 pb-2'>{likes.length} Likes</p>
                        )
                    }
                    { /* Comments */}
                    {comments && (
                        <div className="ml-7 max-h-20 overflow-y-scroll scrollbar-thumb-black
                        scrollbar-thin">
                            {comments.map((comment) => (
                                <div key={comment.id}
                                    className="flex items-center space-x-2 mb-3" >
                                    <img
                                        className='h-7 rounded-full'
                                        src={comment.data().userImage} alt="dp" />
                                    <p className='text-sm flex-1'>
                                        <span className='font-bold'>{comment.data().username}</span>
                                        {"  " + comment.data().comment}</p>
                                    <Moment fromNow className='pr-5 text-xs'>
                                        {comment.data().timestamp?.toDate()}
                                    </Moment>
                                </div>
                            ))}
                        </div>
                    )}
                    { /* Input Box */}

                    <form className='flex items-center p-4'>
                        <EmojiHappyIcon className='h-7' />
                        <input type="text"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder='Add a comment...'
                            className='border-none flex-1 focus:ring-0 outline-none' />
                        <button
                            onClick={sendComment}
                            disabled={!comment.trim()}
                            type='submit'
                            className='font-semibold text-blue-600 mr-2'>Post</button>
                    </form>
                </>
                )
            }


        </div>
    )
}

export default Post