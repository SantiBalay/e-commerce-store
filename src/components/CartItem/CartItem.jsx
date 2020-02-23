import React from 'react';

import './CartItem.scss'

const CartItem = ({item: {imageUrl,price,name, quantity}}) => {
    return (
        <div className="cartItem">
            <img src={imageUrl}/>

            <div className="itemDetails">
                <span className="name"> {name} </span>
                <span className="details"> {quantity} x ${price} </span>
            </div>
        </div>
    );
};

export default CartItem;