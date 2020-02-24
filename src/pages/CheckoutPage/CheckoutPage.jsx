import React, { Fragment } from 'react';

import { connect } from 'react-redux'

import { selectCartItems, selectCartPrice } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'

import './CheckoutPage.scss'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import Stripe from '../../components/Stripe/Stripe';

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

            {(cartItems.length) ? (
                <Fragment>
                    <div className="total">
                    TOTAL: ${cartPrice}
                    </div>

                    <div className="test">
                    *Porfavor utiliza la siguiente tarjeta de credito para pruebas de pago*
                    <br/>
                    *Please use the following credit card for test payments*
                    <br/>
                    4242 4242 4242 4242 - Expiration: 01/21 - CVV: 123
                    </div>

                    <Stripe
                    price={cartPrice}
                    />
                </Fragment>
            ): 
            ( <div className="cart-empty">
                The cart is empty
              </div> )
        
            }

           

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartPrice : selectCartPrice
})


export default connect(mapStateToProps,null)(CheckoutPage);