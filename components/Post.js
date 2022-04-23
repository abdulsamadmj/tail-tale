import React, { useEffect, useState } from 'react'
import {
    SparklesIcon,
    PaperAirplaneIcon,
    DotsHorizontalIcon,
    ChatIcon,
    BookmarkIcon,
    ReplyIcon,
    EmojiHappyIcon,
} from '@heroicons/react/outline'
import {
    SparklesIcon as SparklesIconFilled,
    BookmarkIcon as BookmarkIconFilled,
    ExclamationCircleIcon as ExclamationCircleIconFilled
} from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, where } from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'
import { postModalState, tailTaleModalState } from '../atoms/modalAtom'
import { atom, useRecoilState } from 'recoil'
import { Transition } from '@headlessui/react'


function Post({ id, uid, username, parentTale, userImage, title, tale, tailStory }) {
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)
    const [openPost, setOpenPost] = useRecoilState(postModalState(id))
    const [openTailPost, setOpenTailPost] = useRecoilState(postModalState(parentTale))
    const [openTail, setOpenTail] = useRecoilState(tailTaleModalState(id))
    const [parentCard, setParentCard] = useState(null)
    const [hasSaved, setHasSaved] = useState(false)
    const [postMenu, setPostMenu] = useState(false)
    const [hasReported, setHasReported] = useState(false)
    const [follow, setFollow] = useState(false)

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

    useEffect(() => {
        if (parentTale) getDoc(
            doc(db, 'posts', parentTale)).then((obj) => {
                setParentCard(obj)
            })
    }, [db])


    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
            await deleteDoc(doc(db, 'users', session.user.uid, 'likes', id))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                uid: session.user.uid,
                username: session.user.username,
                userImage: session.user.image,
                timestamp: serverTimestamp(),
            })
            await setDoc(doc(db, 'users', session.user.uid, 'likes', id), {
                timestamp: serverTimestamp()
            })
        }

    }

    const savePost = async () => {

        if (hasSaved) {
            await deleteDoc(doc(db, 'users', session.user.uid, 'savedPosts', id))
        } else {
            await setDoc(doc(db, 'users', session.user.uid, 'savedPosts', id), {
                timestamp: serverTimestamp()
            })
        }
        setHasSaved(!hasSaved)
    }

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;
        setComment('');
        const newDoc = await addDoc(collection(db, 'posts', id, 'comments'), {
            uid: session.user.uid,
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
        await setDoc(doc(db, 'users', session.user.uid, 'comments', newDoc.id), {
            post: id,
            comment: commentToSend,
            timestamp: serverTimestamp(),
        })
    }

    function postRedirect() {
        setOpenTailPost(true)
    }

    async function reportPost() {
        if (hasReported) {
            alert('Already reported')
        } else {
            var reason = prompt("Reason for Reprting")
            await setDoc(doc(db, 'admin', 'postReports', id, session.user.uid), {
                uid: session.user.uid,
                reason: reason,
                username: session.user.username,
                timestamp: serverTimestamp(),
            })
        }
        setHasReported(true)
    }

    const followUser = async () => {

        if (follow) {
            await deleteDoc(doc(db, 'users', id, 'followers', session.user.uid))
            await deleteDoc(doc(db, 'users', session.user.uid, 'following', id))
            setFollow(false)
        } else {
            await setDoc(doc(db, 'users', id, 'followers', session.user.uid), {
                username: session.user.username,
                timestamp: serverTimestamp(),
            })
            await setDoc(doc(db, 'users', session.user.uid, 'following', id), {
                timestamp: serverTimestamp()
            })
            setFollow(true)
        }
    }

    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* Header */}
            <div className="flex items-center p-5 shadow-sm">
                <img src={userImage} className="rounded-full h-12 2-12 commentect-contain border p-1 
            mr-3" alt="dp" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5 cursor-pointer' onClick={() => {
                    setPostMenu(true)
                }} />
                <Transition
                    show={postMenu}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">

                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">

                            <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-0"
                                onClick={() => {
                                    reportPost()
                                    setPostMenu(false)
                                }}>
                                Report Post
                            </h1>
                            <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1"
                                onClick={() => {
                                    followUser()
                                    setPostMenu(false)
                                }}>
                                {follow ? 'Unfollow' : 'Follow'}
                            </h1>
                        </div>
                    </div>
                </Transition>
            </div>

            {/* Tale */}
            {parentCard ?
                <div className='block p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 shadow-gray-400' onClick={postRedirect}>
                    <div className='flex'><img src={parentCard.data().profileImg} alt="dp" className='rounded-full h-7 w-7 commentect-contain' /><p className='flex-1 font-bold pl-3'>{parentCard.data().username}</p></div>
                    <br />
                    <div className='top-0'>
                        <h1 className='font-bold text-md'>{parentCard.data().title}</h1>
                        <p className='truncate'>{parentCard.data().story}</p>
                    </div>
                </div>

                : <div className='w-full mt-2 '>
                    <div className='w-full text-center'>
                        <h1 className='font-bold text-xl'>{title}</h1>
                    </div>
                </div>}
            <div className='p-5 shadow-sm break-all break-normal'>
                <p>{tale}</p>
            </div>
            {/* Buttons */}
            {session &&
                (<>
                    <div className='flex justify-between px-4 pt-2 pb-1'>
                        <div className='flex space-x-3'>
                            {hasLiked ? (
                                <SparklesIconFilled onClick={likePost} className='postBtn text-yellow-400' />
                            ) : (
                                <SparklesIcon onClick={likePost} className='postBtn' />
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
                            {hasSaved ? <BookmarkIconFilled className='postBtn' onClick={savePost} /> : <BookmarkIcon className='postBtn' onClick={savePost} />}
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