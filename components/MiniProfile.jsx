import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src="https://media-exp1.licdn.com/dms/image/D5635AQGnbYYbQGKXlQ/profile-framedphoto-shrink_100_100/0/1637826413077?e=1647633600&v=beta&t=IFU7hnsQmkFrMztmdsKJiK2dMQsEk5ztV0CPlXjVzks" 
        alt="dp" 
        className="w-16 h-16 rounded-full border p[2px]"/>

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>Abdul Samad M J</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Tail-Tale</h3>
        </div>

        <button className="text-red-500 text-sm font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile