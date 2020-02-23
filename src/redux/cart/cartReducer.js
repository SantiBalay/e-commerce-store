import {CartTypes} from './cartTypes'

import {addItemToCart} from './cartUtils'

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
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
        default :
            return state
    }
}

export default cartReducer