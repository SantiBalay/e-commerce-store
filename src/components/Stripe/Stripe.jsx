import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

import logo from '../../data/forStripe.png'

// price lo necestio en centavos de dolar por stripe
const Stripe = ({price}) => {
    const priceInCents = price*100
    const key = 'pk_test_NpEFJqvfzsTFL5iWQYmo7OB70040nYWLzc'

    const onToken = token => { //lo loggeo en consola porque no voy a procesar pagos de verdad, pero con este token iria al backend y armaria el charge real ahi
        console.log(token)
    }

    return (
        <StripeCheckout
            name='NORD E-Commerce'
            label='Pay now'
            billingAddress
            shippingAddress
            image={logo}
            panelLabel='Pay Now'
            stripeKey={key}
            description={`Your total is $${price}`}
            amount={priceInCents}
            token={onToken}
        />
    );
};

export default Stripe;
