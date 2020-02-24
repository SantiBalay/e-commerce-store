import React from 'react';

import { connect } from 'react-redux'

import { selectCartItems, selectCartPrice } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'

import './CheckoutPage.scss'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const CheckoutPage = ({cartPrice,cartItems}) => {
    return (
        <div className='checkout'>
            <div className="header">
                <div className="block">
                    <span> Product</span>
                </div>

                <div className="block">
                    <span> Description </span>
                </div>
                
                <div className="block">
                    <span> Quantity </span>
                </div>
                
                <div className="block">
                    <span> Price </span>
                </div>
                
                <div className="block">
                    <span> Remove </span>
                </div>

            </div>

            {   cartItems.map( cartItem => (
                    <CheckoutItem
                        key={cartItem.id}
                        item={cartItem}
                    />
                ))
            }

            <div className="total">
                TOTAL: ${cartPrice}
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartPrice : selectCartPrice
})


export default connect(mapStateToProps,null)(CheckoutPage);