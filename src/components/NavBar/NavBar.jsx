import React from 'react';
import {Link} from 'react-router-dom'

import { ReactComponent as HomeLogo} from '../../data/home.svg'

import './NavBar.scss'

const NavBar = () => {
    return (
        <div className="nav">
            <Link className='home-container' to='/'> 
                <HomeLogo className='home'/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop"> SHOP </Link>
                <Link className="option" to="/contact"> CONTACT </Link>
            </div>
        </div>
    );
};

export default NavBar;