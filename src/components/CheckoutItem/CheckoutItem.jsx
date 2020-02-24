import React from 'react';

import {connect} from 'react-redux'

import {removeItem, removeSingleItem,addItem} from '../../redux/cart/cartActions'


import './CheckoutItem.scss'

const CheckoutItem = ({item,removeItem,removeSingleItem,addItem}) => { //le paso todo el item porque si queiro usar los actions para agregar/eliminar lo tendria que armar de vuelta y alta paja
    
    const {name,imageUrl,quantity,price} = item
    
    return (
        <div className='item'>
            <div className="imgContainer">
                <div className="aContainer">
                    <img alt='item' src={imageUrl}/>
                </div>
            </div>

            <span className='name'>{name}</span>

            <span className='quantity'>
               
                <div onClick={() => removeSingleItem(item)} className="arrow">
                    &#10094;
                </div>
                    <span className="value">{quantity} </span>
                <div onClick={() => addItem(item)} className="arrow">
                    &#10095;
                </div>
            
            </span>

            <span className='price'>$ {price}</span>
            <div className="buttonContainer">
                <div onClick= {() => removeItem(item)} className="button"> &#10005; </div>
            </div>

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem : (item) => dispatch( removeItem(item)),
    removeSingleItem: (item) => dispatch( removeSingleItem(item)),
    addItem: (item) => dispatch( addItem(item))

})

export default connect(null,mapDispatchToProps)(CheckoutItem);