import React, { Component } from 'react';

import './Directorio.scss'

import MenuItem from '../Menu-Item/MenuItem';

import SeccionData from '../../data/SeccionData'

class Directorio extends Component {
    
    state = { 
        sections : SeccionData
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