import React from 'react'
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

function Post({ id, username, userImage, title, tale }) {
    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImage} className="rounded-full h-12 2-12 object-contain border p-1 
            mr-3" alt="dp" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            {/* Tale */}
            <div className='w-full'>
                <div className='w-full text-center'>
                    <h1 className='font-bold text-xl'>{title}</h1>
                </div>
                <div className='p-5'>
                    <p>{tale}</p>
                </div>
            </div>
            {/* Buttons */}
            <div className='flex justify-between px-4 pt-2'>
                <div className='flex space-x-3'>
                    <HeartIcon className='postBtn' />
                    <ChatIcon className='postBtn' />
                    <ReplyIcon className='postBtn rotate-180' />
                </div>
                <div className='flex space-x-3'>
                    <PaperAirplaneIcon className='postBtn rotate-45' />
                    <BookmarkIcon className='postBtn' />
                </div>
            </div>
            {/* Comments */}

            {/* Input Box */}
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7'/>
                <input type="text" 
                placeholder='Add a comment...'
                className='border-none flex-1 focus:ring-0 outline-none'/>
                <button className='font-semibold text-blue-600 mr-2'>Post</button>
            </form>
        </div>
    )
}

export default Post