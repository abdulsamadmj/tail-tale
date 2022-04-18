import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { tailTaleModalState,postModalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { DocumentAddIcon, DocumentIcon } from '@heroicons/react/outline'
import { db, storage } from '../firebase'
import { addDoc, collection, doc, onSnapshot, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { getDownloadURL, uploadString } from 'firebase/storage'

function TailTaleModal({ id, username, userImage, title, tale, tailStory }) {
    const [openTail, setOpenTail] = useRecoilState(tailTaleModalState(id))
    const [openPost, setOpenPost] = useRecoilState(postModalState(id))
    const filePickerRef = useRef(null)
    const storyRef = useRef(null)
    const tailStoryRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const { data: session } = useSession()
    const [post, setPost] = useState([])
    useEffect(() => {
        onSnapshot(query(collection(db, 'posts'), where('id','==',id)), (snapshot) => {
            setPost(snapshot.docs)
        })
    }
    , [db]);

        
    const uploadPost = async () => {
        if (loading) return;
        setLoading(true);
        var story=storyRef.current.value
        var tailChecked= tailStoryRef.current.checked
        // 1) Create a post and add to firestore 'posts' collection
        // 2) get the post ID from it

        const docRef = await addDoc(collection(db, 'posts'), {
            username: session.user.username,
            parentTale: id,
            story: storyRef.current.value,
            profileImg: session.user.image,
            tailStory: tailStoryRef.current.checked,
            timestamp: serverTimestamp()
        })

        await setDoc(doc(db, 'users',session.user.uid,'posts',docRef.id), {
            parentTale: id,
            story: story,
            tailStory: tailChecked,
            timestamp: serverTimestamp()
        })

        console.log("New Doc", docRef.id)

        // Image uploading and downloading
        // const imageRef = ref(storage, `posts/${docRef.id}/image`)

        // await uploadString(imageRef, selectedFile, "data_url").then(async snapshot=>{
        //     const downloadURL = await getDownloadURL(imageRef)

        //     await updateDoc(doc(db, 'posts', docRef.id){
        //         image: downloadURL
        //     })
        // })

        setOpenTail(false)
        setLoading(false)
        setSelectedFile(false)
    }

    function postRedirect(){
        setOpenTail(false)
        setOpenPost(true)
    }

    async function addFileToPost(e) {
        const reader = new FileReader();
        if (e.target.files[0]) {
            var data = await e.target.files[0].text()
            setSelectedFile(data)
        }
    }

    return (
        <Transition.Root show={openTail} as={Fragment}>
            <Dialog as='div'
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={setOpenTail}>
                <div className="flex items-end justify-center min-h-[800px]
            sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    {/* used to scenter the modal components */}
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
                        px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all
                        sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as='h3'
                                            className="text-lg leading-6 font-medium text-gray-900 pb-1">
                                            Add Tail-Tale
                                        </Dialog.Title>
                                        {/* parent tale card */}
                                        <div className='block p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 shadow-gray-400' onClick={postRedirect}>

                                            <div className='flex shadow-sm pb-1'><img src={userImage} alt="dp" className='rounded-full h-8 w-8 commentect-contain'/><p className='flex-1 font-bold'>{username}</p></div>
                                            <br/>
                                            <h1 className='font-bold text-md'>{title}</h1>
                                            <p className='truncate'>{tale}</p>
                                        </div>
                                        <div className="mt-2">
                                            <textarea
                                                onChange={(e) => {
                                                    var temp = ''
                                                    temp = temp + e.target.value
                                                    setSelectedFile(temp)
                                                }}
                                                ref={storyRef}
                                                className='border-none shadow-gray-400 shadow-inner focus:ring-0 w-full text-justify rounded-md'
                                                rows="12"
                                                placeholder='Type your story here...'
                                                value={selectedFile ? (selectedFile) : ('')}></textarea>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center flex-col mt-4'>
                                        <h1>OR</h1>
                                        <div
                                            onClick={() => filePickerRef.current.click()}
                                            className="mx-autp flex items-center justify-center h-12 w-12 rounded-full
                                        bg-red-100 cursor-pointer mt-4">
                                            <DocumentAddIcon
                                                className='h-6 w-6 text-red-600'
                                                aria-hidden="true" />
                                        </div>
                                        <Dialog.Title as='h3'
                                            className="text-lg leading-6 font-medium text-gray-900 mt-3">
                                            Upload Text File
                                        </Dialog.Title>
                                        <div>
                                            <input
                                                ref={filePickerRef}
                                                type="file"
                                                accept='.txt'
                                                hidden
                                                onChange={addFileToPost} />
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-6">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top 
                                            bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                                type="checkbox" role="switch"
                                                id="enableTail" ref={tailStoryRef} defaultChecked />
                                            <label className="form-check-label inline-block text-gray-800 ml-2"
                                                htmlFor="enableTail" >Allow Tail-stories</label>
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-5 sm:mt-6'>
                                    <button
                                        type='button'
                                        disabled={!storyRef || !selectedFile}
                                        onClick={uploadPost}
                                        className="inline-flex justify-center w-full rounded-md border border-transparent
                                        shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm
                                      disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                    >
                                        {loading ? "Uploading" : "Upload Post"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>

                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default TailTaleModal