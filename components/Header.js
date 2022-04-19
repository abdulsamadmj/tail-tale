import Image from 'next/image'
import React, { useState } from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  HomeIcon,
  BellIcon,
  PaperAirplaneIcon,
  MenuIcon,
  NewspaperIcon,
  UserCircleIcon,
  BookmarkIcon,
  LogoutIcon
} from '@heroicons/react/outline'
import {
  HomeIcon as HomeIconFilled,
  NewspaperIcon as NewspaperIconFilled,
} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Transition } from '@headlessui/react'

function Header() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const [accMenu, setAccMenu] = useState(false)

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50 lg:pr-12'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}
        <div onClick={() => router.push('/')}
          className='relative hidden lg:inline-grid w-28 ml-4 cursor-pointer items-center'>
          <Image
            src='/../public/Logo.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div onClick={() => router.push('/')}
          className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src='/../public/icon.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        {/* Center */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input className='bg-slate-50 block w-full pl-10 sm:text-sm 
          border-gray-300 focus:ring-black focus:border-black
          rounded-md'
              type="text" placeholder='Search' />
          </div>
        </div>
        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          {router.pathname == '/' ? <NewspaperIconFilled className='navBtn' onClick={() => router.push('/')} /> : <NewspaperIcon className='navBtn' onClick={() => router.push('/')} />}

          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          {session ? (
            <>
              {router.pathname == '/home' ? <HomeIconFilled className='navBtn' onClick={() => router.push('/home?id=' + session.user.uid)} /> : <HomeIcon className='navBtn' onClick={() => router.push('/home?id=' + session.user.uid)} />}

              <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 
            bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
              </div>
              <PlusCircleIcon onClick={() => { setOpen(true) }}
                className='navBtn' />

              <BellIcon className='navBtn' />


              <div class="relative inline-block text-left">
                <div>

                  <img src={session.user.image}
                    alt="dp" className='h-10 rounded-full cursor-pointer'
                    onClick={() => {
                      setAccMenu(!accMenu)
                    }} />

                </div>
                <Transition
                show={accMenu}
                enter= "transition ease-out duration-100"
                enterFrom= "transform opacity-0 scale-95"
                enterTo= "transform opacity-100 scale-100"
                leave= "transition ease-in duration-75"
                leaveFrom= "transform opacity-100 scale-100"
                leaveTo= "transform opacity-0 scale-95">

                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">

                    <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={() => { router.push('/userPage') }}>
                      <UserCircleIcon className='w-6 navBtn pr-1' />Profile
                    </h1>
                    <h1 className="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={() => { router.push('/userPage/savedPosts') }}>
                      <BookmarkIcon className='w-6 navBtn pr-1' />Saved Posts
                    </h1>

                    <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50 " role="menuitem" tabIndex="-1" id="menu-item-3"
                      onClick={signOut}>
                      <LogoutIcon className='w-6 navBtn pr-1' />Sign out
                    </button>
                  </div>
                </div>
                </Transition>
              </div>

            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}

        </div>
      </div>
    </div>
  )
}

export default Header