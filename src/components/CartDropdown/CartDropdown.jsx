import React from 'react'

import {connect} from 'react-redux'

import './CartDropdown.scss'
import FormButton from '../FormButton/FormButton'
import CartItem from '../CartItem/CartItem';

import { toggleHidden } from '../../redux/cart/cartActions'

import { withRouter } from 'react-router-dom' //high-order -> me devuelve el componente con todas las boludeces de router

import { createStructuredSelector } from 'reselect'

import { selectCartItems } from '../../redux/cart/cartSelectors'

const CartDropdown = ({cartItems, history, toggleHidden}) => {
    return (
        <div className="dropdown">
            
           { (cartItems.length) ? ( <div className="cart-items">
                {cartItems.map( cartItem => (
                    <CartItem
                        key={cartItem.id}
                        item = {cartItem}
                    />
                ))}
            </div>) : (<div className='isEmpty'> The cart is empty </div>) }

            <FormButton onClick={() => {
                history.push('/checkout');
                toggleHidden();
            }} valor={'GO TO CHECKOUT'}/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems //evito rendereo tmb
})

const mapDispatchToProps = dispatch =>  ({
    toggleHidden: () => dispatch(toggleHidden())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));