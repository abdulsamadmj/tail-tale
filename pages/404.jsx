import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Custom404() {
    const router = useRouter();

    return (
        <div >
                <div className='flex flex-col justify-center items-center h-screen'>
                    <b> 404 - Page Not Found</b>
                    <h2 onClick={() => { router.push('/') }} className="hover:cursor-pointer">Go Back To Root Page</h2>
                </div>
        </div>
    )
}

export default Custom404