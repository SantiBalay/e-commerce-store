import React from 'react';

import './Cart.scss'

import { connect } from 'react-redux'

import { toggleHidden } from '../../redux/cart/cartActions'

import { ReactComponent as CartIcon} from '../../data/shoping-bag.svg'

const Cart = ({toggleHidden,itemCount})  => {
    return (
        <div className="cart" onClick={toggleHidden}>
        <CartIcon className="icon"/>
        <span className="item-count"> {itemCount} </span>
    </div>
    )
}

const mapDispatchToProps = dispatch =>  ({
    toggleHidden: () => dispatch(toggleHidden())
})

const mapStateToProps = ({ cart: {cartItems}}) => ({
    itemCount: cartItems.reduce( ( acumulated , cartItem ) => acumulated += cartItem.quantity , 0)
})


export default connect(mapStateToProps,mapDispatchToProps) (Cart)