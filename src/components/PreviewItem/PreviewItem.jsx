import React from 'react';

import './PreviewItem.scss'
import FormButton from '../FormButton/FormButton';

import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cartActions'

const PreviewItem = ({item,addItem}) => {
    const { name,price,imageUrl} = item
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

            <FormButton onClick={ () => addItem(item) }
                isAddToCart={true} type="submit" value="Submit" valor="ADD TO CART"
            />

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem : (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps) (PreviewItem);