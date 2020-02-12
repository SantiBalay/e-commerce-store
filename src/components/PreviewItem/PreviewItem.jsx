import React from 'react';

import './PreviewItem.scss'

const PreviewItem = ({id,name,price,imageUrl}) => {
    return (
        <div className="preview-item">
            <div className='img'
            style={{
                backgroundImage : `url(${imageUrl})`
            }}>
            </div>

            <div className="preview-info">
                <span className='name'> {name} </span>
                <span className='price'> ${price} </span>

            </div>
        </div>
    );
};

export default PreviewItem;