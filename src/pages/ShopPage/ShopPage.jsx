import React, { Component, Fragment } from 'react';

import ShopData from '../../data/ShopData'
import PreviewCategory from '../../components/PreviewCategory/PreviewCategory';

import './ShopPage.scss'
import Divider from '../../components/Divider/Divider';

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
                       <Fragment>
                       
                        <PreviewCategory
                            key = {id}
                            {...otherProps}
                        />

                        <Divider/>


                    </Fragment>
                    )

                    
            )}
          </div>
        )
    }
}
 
export default ShopPage;