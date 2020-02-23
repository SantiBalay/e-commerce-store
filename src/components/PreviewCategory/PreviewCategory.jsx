
import React from 'react';

import './PreviewCategory.scss'
import PreviewItem from '../PreviewItem/PreviewItem';

const PreviewCategory = ({title,items}) => {
    
    const firstItemId = items[0].id
    
    return (

    
        <div className='preview-category'>
            <h1 className='title'> {title.toUpperCase()} </h1>
            <div className='preview'>
                {items.filter( item => item.id < firstItemId + 4).map( (item) => (
                    <PreviewItem
                        key={item.id}
                        item={item}
                    />
                    
                )
                )}
            </div>
        </div>
    );
};

export default PreviewCategory;