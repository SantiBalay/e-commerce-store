
import React from 'react';

import './PreviewCategory.scss'
import PreviewItem from '../PreviewItem/PreviewItem';

const PreviewCategory = ({title,items}) => {
    return (
        <div className='preview-category'>
            <h1 className='title'> {title.toUpperCase()} </h1>
            <div className='preview'>
                {items.filter( item => item.id < 5 ).map( ({id,...otherProps}) => (
                    <PreviewItem
                        key={id}
                        {...otherProps}
                    />
                ))}
            </div>
        </div>
    );
};

export default PreviewCategory;