import {CartTypes} from './cartTypes'

export const toggleHidden = () => ({
    type: CartTypes.TOGGLE_HIDDEN
})

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item
})

export const removeSingleItem = item => ({
    type: CartTypes.REMOVE_SINGLE_ITEM,
    payload: item
})