import {CartTypes} from './cartTypes'

export const toggleHidden = () => ({
    type: CartTypes.TOGGLE_HIDDEN
})

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})