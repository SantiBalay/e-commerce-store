import React from 'react';

import {connect} from 'react-redux'
import {selectCategoryData} from '../../redux/shop/shopSelector'

import './CategoryPage.scss'

import PreviewItem from '../../components/PreviewItem/PreviewItem'

const CategoryPage = ({categoryData}) => {

    const { title, items } = categoryData
    return (
        <div className='category'>
            <h2 className='title'> {title}</h2>
            <div className='items'> 
                {
                    items.map(item => (
                        <PreviewItem
                            key={item.id}
                            item = {item}
                        />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, myProps) => ({
    categoryData: selectCategoryData(myProps.match.params.category)(state) //si te fijas como hiciste el selector, primero pasas el param para sacar cual cat es, y despues haces el selector en si cpn createSelector, por eso este orden raro. 2 horas
})

export default connect(mapStateToProps)(CategoryPage);