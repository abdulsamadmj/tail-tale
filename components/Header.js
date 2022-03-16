import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <h1>I am a Header</h1>

        <div>
            <Image 
            src='E:\tail-tale\public\Logo-1.png'
            layout='fill'
            />
        </div>
    </div>
  )
}

export default Header