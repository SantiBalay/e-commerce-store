import React, { Component } from 'react';

import './Cart.scss'

import { connect } from 'react-redux'

import { toggleHidden } from '../../redux/cart/cartActions'

import { ReactComponent as CartIcon} from '../../data/shoping-bag.svg'

const Cart = ({toggleHidden})  => {
    return (
        <div className="cart" onClick={toggleHidden}>
        <CartIcon className="icon"/>
        <span className="item-count"> 0 </span>
    </div>
    )
}

const mapDispatchToProps = dispatch =>  ({
    toggleHidden: () => dispatch(toggleHidden())
})

export default connect(null,mapDispatchToProps) (Cart)