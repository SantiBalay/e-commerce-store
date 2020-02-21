import {UserActionTypes} from './userTypes'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_VALUE,
    payload: user
})