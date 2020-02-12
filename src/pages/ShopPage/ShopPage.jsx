import React, { Component } from 'react';

import ShopData from '../../data/ShopData'
import PreviewCategory from '../../components/PreviewCategory/PreviewCategory';

import './ShopPage.scss'

class ShopPage extends Component {
    state = {  
        categories: []
    }

    componentDidMount() {
        this.setState({
            categories : ShopData
        })
    }

    render() { 

        const {categories} = this.state
        return (  

          <div className="shop">
                {
                    categories.map( ({ id, ...otherProps}) => (
                        <PreviewCategory
                            key = {id}
                            {...otherProps}
                        />
                    )
            )}
          </div>
        )
    }
}
 
export default ShopPage;