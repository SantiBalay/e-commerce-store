import React from 'react'

import './CartDropdown.scss'
import FormButton from '../FormButton/FormButton'

const CartDropdown = () => {
    return (
        <div className="dropdown">
            <div className="cart-items">

            </div>

            <FormButton valor={'GO TO CHECKOUT'}/>
        </div>
    );
};

export default CartDropdown;