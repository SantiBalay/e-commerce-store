import React from 'react';

import './FormButton.scss'

const FormButton = ({valor, isGoogleSignIn, isAddToCart, ...otherProps}) => {
    return (
        <button className={`form-button ${isAddToCart ? 'addtocart button' : ''} ${isGoogleSignIn ? 'google' : ''}`} {...otherProps}>
            {valor}
        </button>
    );
};

export default FormButton;