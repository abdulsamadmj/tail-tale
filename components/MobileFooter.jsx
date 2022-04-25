import { Transition } from '@headlessui/react';
import { BookmarkIcon, HomeIcon, LogoutIcon, NewspaperIcon, PlusCircleIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline';
import { HomeIcon as HomeIconFilled, NewspaperIcon as NewspaperIconFilled } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function mobileFooter() {
    const { data: session, status } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();
    return (
        <footer className='absolute right-0 left-0 bottom-0 md:hidden'>
            <div className='border-t bg-white z-50 h-[4rem] pt-2'>
                <div className='max-w-sm'>

                    <div className='min-w-sm flex items-center justify-center space-x-10 '><h1 className=''></h1>
                        {router.pathname == '/' ? <NewspaperIconFilled className='h-[3rem]' onClick={() => router.push('/')} /> : <NewspaperIcon className='h-[3rem]' onClick={() => router.push('/')} />}

                        {session && (
                            <>
                                {router.pathname == '/home' ? <HomeIconFilled className='h-[3rem]' onClick={() => router.push('/home?id=' + session.user.uid)} /> : <HomeIcon className='h-[3rem]' onClick={() => router.push('/home?id=' + session.user.uid)} />}

                                {/* <div className='relative navBtn'>
              <PaperAirplaneIcon className='navBtn rotate-45' />
              <div className="absolute -top-1 -right-2 text-xs w-5 h-5 
          bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
            </div> */}
                                <PlusCircleIcon onClick={() => { setOpen(true) }}
                                    className='h-[3rem]' />

                                {/* <BellIcon className='navBtn' /> */}

                            </>
                        )}

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default mobileFooter