import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { postModalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'

import { db, storage } from '../firebase'
import { addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { getDownloadURL, uploadString } from 'firebase/storage'
import Post from './Post'

export function PostModal({ id, username, userImage, title, tale, tailStory }) {
    const [openPost, setOpenPost] = useRecoilState(postModalState(id));
    const { data: session } = useSession()

    return (
        <Transition.Root show={openPost} as={Fragment}>
            <Dialog as='div'
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={setOpenPost}>
                <div className="flex items-end justify-center min-h-[800px]
            sm:min-h-screen text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <span
                        className='hidden sm:inline-block sm:align-middle sm:h-screen'
                        aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg
                         text-left overflow-hidden shadow-xl transform transition-all
                        sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <Post key={'postModal' +id}
                                id={id}
                                username={username}
                                userImage={userImage}
                                title={title}
                                tale={tale}
                                tailStory={tailStory} />
                        </div>
                    </Transition.Child>

                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default PostModal