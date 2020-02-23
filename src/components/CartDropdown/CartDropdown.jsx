import React from 'react'

import {connect} from 'react-redux'

import './CartDropdown.scss'
import FormButton from '../FormButton/FormButton'
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="dropdown">
            <div className="cart-items">
                {cartItems.map( cartItem => (
                    <CartItem
                        item = {cartItem}
                    />
                ))}
            </div>

            <FormButton valor={'GO TO CHECKOUT'}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps,null)(CartDropdown);