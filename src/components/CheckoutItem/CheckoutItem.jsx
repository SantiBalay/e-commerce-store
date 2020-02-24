import React from 'react';

import './CheckoutItem.scss'

const CheckoutItem = ({item}) => { //le paso todo el item porque si queiro usar los actions para agregar/eliminar lo tendria que armar de vuelta y alta paja
    
    const {name,imageUrl,quantity,price} = item
    
    return (
        <div className='item'>
            <div className="imgContainer">
                <div className="aContainer">
                    <img alt='item' src={imageUrl}/>
                </div>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>$ {price}</span>

            <div className="buttonContainer">
                <div className="button"> &#10005; </div>
            </div>

        </div>
    );
};

export default CheckoutItem;