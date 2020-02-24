import React,{Fragment} from 'react';

import {connect} from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { selectShopDataPreview } from '../../redux/shop/shopSelector'


import Divider from '../Divider/Divider';
import PreviewCategory from '../PreviewCategory/PreviewCategory'


import './ShopPreview.scss'

const ShopPreview = ({categories}) => {
    return (
        <div className='shop-overview'>
            {
                    categories.map( ({ id, ...otherProps}) => (
                       <Fragment
                       key={id}
                       >
                        <PreviewCategory
                            key = {id}
                            {...otherProps}
                        />

                        { (id===5) ? ('') : (<Divider/>) }
                        
                    </Fragment>
                    )

                    
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    categories: selectShopDataPreview
})

export default connect(mapStateToProps)(ShopPreview);