import {atom} from 'recoil'

//addpost modal atom
export const modalState = atom({
    key: 'modalState',
    default: false,
})

//showpost modal atom
export const postModalState=(id)=> atom({
    key: 'post'+id,
    default: false,
})

//addtailpost modal atom
export const tailTaleModalState=(id)=> atom({
    key: 'tailPost'+id,
    default: false,
})