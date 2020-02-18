import React from 'react';

import './FormButton.scss'

const FormButton = ({valor, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`form-button ${isGoogleSignIn ? 'google' : ''}`} {...otherProps}>
            {valor}
        </button>
    );
};

export default FormButton;