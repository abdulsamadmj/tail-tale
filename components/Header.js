import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
        <div className='relative h-24 hidden lg:inline-grid w-24'>
          <Image
            src='/../public/Logo.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative w-10 h-10 lg:hidden flex-shrink-0'>
        <Image
            src='/../public/icon.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Header