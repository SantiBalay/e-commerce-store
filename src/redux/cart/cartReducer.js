import {CartTypes} from './cartTypes'

const INITIAL_STATE = {
    isHidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE,action) => {

    switch(action.type) {
        case CartTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload ]
            }
        default :
            return state
    }
}

export default cartReducer