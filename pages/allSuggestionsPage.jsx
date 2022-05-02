import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Follow from '../components/Follow';
import { db } from '../firebase';

function allSuggestionsPage() {
    const { data: session } = useSession();
    const router=useRouter()
    const [temp, setTemp] = useState([])
    useEffect(()=>{
        if(!session){
            router.push('/')
        }
    },[session,router])

    useEffect(() => {
        onSnapshot(query(collection(db, 'users'), orderBy('lastLogin', 'desc'), limit(25)), snapshot => {
            setTemp(snapshot.docs)
        })
    }, [db])
    return (
        <main className={`grid md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto !grid-cols-1 !max-w-3xl sm:grid-cols-1`}>
            <section className='col-span-2 mr-10'>
                <div className='mt-4 ml-10'>
                    <div className='flex justify-between text-sm mb-5'>
                        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                    </div>
                    {
                        temp.map(obj => (

                            <Follow key={obj.id}
                                id={obj.id}
                                userImage={obj.data().profileImg}
                                username={obj.data().username}
                                fullname={obj.data().fullname}
                            />

                        ))
                    }
                </div>
                
            </section>
        </main>
    )
}

export default allSuggestionsPage