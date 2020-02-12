import React, { Component } from 'react';

import './Directorio.scss'
import MenuItem from '../Menu-Item/MenuItem';

class Directorio extends Component {
    
    state = { 
        sections : [
            
            {
              title: 'womens',
              imageUrl: '/img/women.jpg',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: '/img/men.jpg',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            },
            {
                title: 'hats',
                imageUrl: '/img/hats.jpg',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: '/img/jackets.jpg',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'shoes',
                imageUrl: '/img/shoes.jpg',
                id: 3,
                linkUrl: 'shop/shoes'
              },
            {
                title: 'shirts',
                imageUrl: '/img/shirts.jpg',
                id: 6,
                linkUrl: 'shop/shirts'
              }, {
                title: 'pants',
                imageUrl: '/img/pants.jpg',
                id: 7,
                linkUrl: 'shop/pants'
              },
          
         
          ]
          
     }
   
    render() { 
        return (
            <div className="list-menu">
                {this.state.sections.map( ({id,...otherProps}) => (
                    <MenuItem
                        key = {id} 
                        {...otherProps}
                    />
                ))}
            </div>
        )
    }
}
 
export default Directorio;