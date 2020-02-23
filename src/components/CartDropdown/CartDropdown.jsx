import React from 'react'

import {connect} from 'react-redux'

import './CartDropdown.scss'
import FormButton from '../FormButton/FormButton'
import CartItem from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cartSelectors'

const CartDropdown = ({cartItems}) => {
    return (
        <div className="dropdown">
            <div className="cart-items">
                {cartItems.map( cartItem => (
                    <CartItem
                        key={cartItem.id}
                        item = {cartItem}
                    />
                ))}
            </div>

            <FormButton valor={'GO TO CHECKOUT'}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state) //evito rendereo tmb
})

export default connect(mapStateToProps,null)(CartDropdown);