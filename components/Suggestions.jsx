import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { collection, deleteDoc, doc, onSnapshot, onSnapshotsInSync, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Follow from './Follow'

function Suggestions() {
  const { data: session } = useSession();
  const [temp, setTemp] = useState([])

  useEffect(() => {
    onSnapshot(query(collection(db, 'users'), orderBy('lastLogin', 'desc')), snapshot => {
      setTemp(snapshot.docs)
    })
  }, [db])



  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>
      {
        temp.map(obj => (
          obj.id != session.user.uid &&
          <div key={obj.id} className="flex items-center justify-between mt-3">
            <img
              className='w-10 h-10 rounded-full border p-[2px]'
              src={obj.data().profileImg}
              alt="dp" />
            <div className='flex-1 ml-4'>
              <h2 className='font-semibold text-sm'>{obj.data().username}</h2>
              <h3 className='text-xs truncate text-gray-400'>{obj.data().fullname}</h3>
            </div>
            <Follow id={obj.id} />
          </div>
        ))
      }
    </div>
  )
}

export default Suggestions