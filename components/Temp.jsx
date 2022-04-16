import React from 'react'
import { postModalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'
export function Temp() {
    const [openPost, setOpenPost] = useRecoilState(postModalState)
    
    console.log('called');
  return (
    <div>{setOpenPost(true)}</div>
  )
}

export default Temp