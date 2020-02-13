import React from 'react';

import './FormButton.scss'

const FormButton = ({valor, ...otherProps}) => {
    return (
        <button className='form-button' {...otherProps}>
            {valor}
        </button>
    );
};

export default FormButton;