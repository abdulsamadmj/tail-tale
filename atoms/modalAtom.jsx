import {atom} from 'recoil'

export const modalState = atom({
    key: 'modalState',
    default: false,
})

export const postModalState=(id)=> atom({
    key: 'post'+id,
    default: false,
})

export const tailTaleModalState=(id)=> atom({
    key: 'tailPost'+id,
    default: false,
})