import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid w-28 ml-4 cursor-pointer items-center'>
          <Image
            src='/../public/Logo.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
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
          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />
          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 
            bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
          </div>
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/
          2wCEAAkGBxISEhUTERMVFRMVFxUXGBcYGBUWFRUWFxMWGBgSGBgaHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygt
          LisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK
          //AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwIDCAH/xAA+EAACAQIDBQYDBQUIAwAA
          AAAAAQIDEQQFIQYSMUFRByJhcYGRE6GxMkJiwfAjUnLR4QgUFSSSosLxNUNz/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/
          EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAA+N24hSXUD6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfJSSV3ojrxOIjTi5zajFcWzRfazt1Vq1Hh6MnC
          gkm0rJz0um3xtrwA2TnnaRl+GT/a/Fmr92n3tV1l9le5rHaHtdxtV2w+7h48t20p+blJfRI1l8Zs4Oq436gWHF5/jK8t6vi
          a0udnOXFO+iukvQx4ZjUjJSVWakuDUpXWt+K8dSG3m/QU5X8vEC84TtIzCmrRxUpcu8lL2bWhYsn7XsTBWrKNTxkrP3iavhZ
          cHY5tp8ffiB6F2Y7TcLiZKnWao1Hom3+zk+ik+D8y9pnj5Jrg2Xbs/wC0GvgpxhWqSq4W+sH3pRXC8G9VbjbgB6LBj5fjade
          nGrRmp05q8ZLg0ZAAAAAAAAAAAAAAAAAAAAAAAAMXNKsoUas4K8405yiuslFtL3A1Z2ubYqniaOGhacaT+JVi7OLqOP7KMlz
          Ub71uu6+RpzNsbKvVnVl9qcnK3JXd7K/I68di6lWpKpNtzm25Nvm2Y1tQC0OMqTZkKKei1ZN5fstUqWcrxT4AVqV7NddTru0
          bCpbFLnK52T2Uhw3X4Aa7hU68DJpSX64E3muQOnd20XuQm607JWA71M4yqHVFO/icrdQNj9le3LwlX4NeX+WqcbvSlJ/+zwj
          1XryPQEZJpNO6eqa1TXVHj2itfNHprsvquWV4Xed3GG76Rk0vSyQFpAAAAAAAAAAAAAAAAAAAAAD40fQB5Az+mqWIrU4q25U
          qRV9HuqbSb9LGBTpuVkuZYu0//wArjf8A6/8ACB07M003drhwAlNl8ntJSl9C906atoROBXAnMPADshCx2KK5nKlRbZ3f3cC
          GzTAxlHhcpGdbPyScqev1/wCzY9ei0RtWjxuv11A1BJSWtjimnxNhZ7k0aivFJS62KFi8NKnJxmrSXs/EDjTfU9G9jeJ38u
          jf7tSpH0umvqecYSPS3ZLhtzLKOlnLfk/F7zV/ZL2AuIAAAAAAAAAAAAAAAAAAAAAAAPNPbnhnDNpuySqU6U1491wb87wZh5
          RTjCC5dWWz+0bg0q+ErJayp1ISfLuSjKK8+/MpmFw/xHFNvcSu7aAWKGe0KaV3dkjgNqqLkkm/VWKrPDYaP2t1cryfyS/kcHh
          IKT3LS3eKTe9Hzi0muQG08vx8Jaow832jjTvZXfTxKzspUd3Zvd0/7MrOYxUnpqwI7FbbVZO0afzvf5HXT2hrt3dN26HVVmqa
          c5xluxaT3Vwb4JvRR9WdlHMKcruDnHdaT3rbt3ey303Hk7a6gSuHzCNTSzjLoyB2uwClDfX2o/QsFCN1e2vUxNoI/sKj8ANc002
          0lxbS92esdksI6ODoU3o40438G1dr5nlvJMN8TE0oWvvVIK3VbyuvY9dRikklwQH0AAAAAAAAAAAAAAAAAAAAAAAGrv7QeHjLL
          6cn9uFeO75SjJSf0Na5RSvBfwx+iNj9tlGc4wpu3w5ruuyvGcZJtX42aa9ii7O0+5FPkkvVKwHX/g14Si1fecXvfeTjwUXyWvDx
          Mmlg/h03BKV5SU3KTUp7yVlra6009Sy0sPpoYuYUUl1vx8gOOzeX2TfC5kZjg7yv7Mk8gxNKUVa3NeTMXE5rh51nQVSCqfu7y
          v5W6gRVfBudJ0WluS1lF6qTvfevxTudeCyLdg4KKUW95q7ab6u/EsNGkndPinb+pkwoAQn903dEuXIi9pKX+WqeS+qLPXhx8C
          A2gt8CpHrG3uwKdsZhqjxlOpGN405wnJvRRUZKXu921vE9FbN7SU8XvxjpKna6ve6fNacDVeQ0oNOnGyUUrrhdtdeZetgcGoV
          JyStvU4/KQF2AAAAAAAAAAAAAAAAAAAAAAABV+0XBKphN613TlF+je6/qjT+UyUKs48Epv2lZ/mb9zXBqtRqUn9+LXk+T97Gg
          8bQdHFShK+9wlf8Aei7Oz58gLRSraGJj6bqRe67Pl7czFr4jdizoWPutHZdXwAj8sw0qM5KlaF2rwUm43/eV+DZnLK8O5RmoR+Ol9
          t3une9/GXidOFqU1JPvSfXReuvEyJ1acZO6le977yfy/qBZsvpOEdXdvVvqzJjiOJWlm6X2ZLyej9mZeDxe+9AM3ESvcrWeXkox4
          b04r0TuyflJ8yHxck6sU+vJXfTgBO0Iwioyjz42tZJc2+vgXnY7BuNP4stHP7K/Df8AX6ZW9m8hlWnF1G/hU7aNWT14JGxIxSSSV
          ktEui6AfQAAAAAAAAAAAAAAAAAAAAAAADX3aBshCSqYynJ78bScNN18FJ9eGvobBOrE0FOEoS1jJOL8mrAaBnU
          Ti0zFWC3rO705X7r80Z+0GXSwtedKX3Xo+sXwaMfC1LgSeAzWnR+3Si1y7sTNW1NKonGnTSevJdTHoYZTXiZWGyyMdeLv+mBhV8B
          CprOKfPhwfUYdKF7GfidFoyJr1VcDOnW7r1OOxEt7H0pPlL8n/Ui8VilutXJfs/io4mlKWl5r6NIDdIAAAAAAAAAAAAAAAAAAAAAAAA
          AAAACv7W7MU8bT17tWK7s/+L8DQ9bEOjUlF/dbi/Bp2fzPTBoTtIyn4OOrWXdqP4q8pq8v928BE0M8XU7sPtAorWXz8SG/w3e1Ryp
          ZHJ8gJWe0Kd7GPDESk7nPDZFbiSdDL+SAw8PhnN6k/gJOnOMkvsuLXTR3/I7sLglFI+YqO6gLLgO1jCynuVacqTTs7tO0un
          BaeJfcLiY1IqUHeLPNmMyOeJxEY0dJVPtPlGK41H5fyRuvZqvHDqNK7cFGMU3+FWU3+f8AQC2gAAAAAAAAAAAAAAAAAAAAAAAAA
          Aa67WcFF/BqaX70PFrR+y19zYpo/tXzyUsdSgn+zjJw8L2s/wDc/kgIXL3utxfJkzdciMUO8n1JbD0lYDlB3MzDUeZ1wppGTGdg
          O/RLQj8fdqyV5PRJcW3yMidb9fkTmUZXud+a774L91P8wOjIMnVCHes6stZvp+BeCM2rozMcbGJXAncrzmCio1JWa0T1d0TFGvGa
          vGSfk0yh0aabcpXtwXoT+Q5W3arUVlxjHn/E/DwAsIAAAAAAAAAAAAAAAAAAAAAAcakmk2k21yVrvw10A68ZX3Kcp/uxb9lojz52j0
          HKHxPvRkpX9eJtfOc0rSe5OLpx/d5u3VvivIo+0eFVWEotcU/mmBB5fVVWlGS6JkpQqSSKtsnWcO5Lk3H1XIuSgByhNnKVSy1Zyj
          ByaS1fLgvqSEMFCmlKbUpdE9F/MDLyDLXpVqr+GL5fja+hPzKLXxGLg26deVuO7K0l81c50Nocanuugqz5KEZKT8rXv7AXKRh105SU
          YpuUnZJcfF+hI5Jgq9aG9XovD/hcozk117ui9dfAsOFwcKf2Y683zfqBg5VlCgk52bXBcl/NksAAAAAAAAAAAAAAAAAAAAAAAAABw
          q0oyVpJSXRpNfMhsdsphql+7KDfOL/J3ROADWmI7KI/ElOjiXFSaluyp310+8pLp0M9bDVkrfEpv/UvyZfABSMJsZVjK7nT9N5/VGd
          S2Pje86l35XS8ru1/QtIAhKGy+HWslKb/ABPT2jYlsPh4QVoRjFeCSO0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
            alt="dp" className='h-10 rounded-full cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Header