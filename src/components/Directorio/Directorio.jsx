import React, { Component } from 'react';

import './Directorio.scss'

import MenuItem from '../MenuItem/MenuItem';

import {connect} from 'react-redux'
import {selectDirectorySection} from '../../redux/directorio/directorioSelector'
import {createStructuredSelector} from 'reselect'

class Directorio extends Component {
   
    render() { 
        return (
            <div className="list-menu">
                {this.props.sectionData.map( ({id,...otherProps}) => (
                    <MenuItem
                        key = {id} 
                        {...otherProps}
                    />
                ))}
            </div>
        )
    }
}
 
const mapStateToProps = createStructuredSelector({
    sectionData : selectDirectorySection
})

export default connect(mapStateToProps)(Directorio);