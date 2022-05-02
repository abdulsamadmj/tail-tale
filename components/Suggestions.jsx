import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { collection, deleteDoc, doc, limit, onSnapshot, onSnapshotsInSync, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Follow from './Follow'
import { useRouter } from 'next/router';

function Suggestions() {
  const { data: session } = useSession();
  const [temp, setTemp] = useState([])
  const router= useRouter()

  useEffect(() => {
    onSnapshot(query(collection(db, 'users'), orderBy('lastLogin', 'desc'),limit(8)), snapshot => {
      setTemp(snapshot.docs)
    })
  }, [db])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold' onClick={()=>{
          router.push('/allSuggestionsPage')
        }}>See All</button>
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
  )
}

export default Suggestions