import React from 'react';

import './Cart.scss'

import {selectCartItemsNumber} from '../../redux/cart/cartSelectors'

import { connect } from 'react-redux'

import { toggleHidden } from '../../redux/cart/cartActions'

import { ReactComponent as CartIcon} from '../../data/shoping-bag.svg'

const Cart = ({toggleHidden,itemCount})  => {
    return (
        <div className="cart" onClick={toggleHidden}>
        <CartIcon className="icon"/>
        <span className="item-count"> {itemCount} </span>
    </div>
    )
}

const mapDispatchToProps = dispatch =>  ({
    toggleHidden: () => dispatch(toggleHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsNumber(state)
} 
)


export default connect(mapStateToProps,mapDispatchToProps) (Cart)