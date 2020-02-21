import React from 'react';
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import { connect } from 'react-redux'

import { ReactComponent as HomeLogo} from '../../data/home.svg'

import './NavBar.scss'
import Cart from '../Cart/Cart';
import CartDropdown from '../CartDropdown/CartDropdown';

const NavBar = ({currentUser, isHidden}) => {
    return (
        <div className="nav">
            <Link className='home-container' to='/'> 
                <HomeLogo className='home'/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop"> SHOP </Link>
                <Link className="option" to="/contact"> CONTACT </Link>

                { (currentUser) ? 
                    <div className="option" onClick={ () => auth.signOut()}> SIGN OUT </div>
                : 
                <Link className="option" to="/signin"> SIGN IN </Link>
                }

                <Cart/>

            </div>
            {
                !isHidden ? (
                    <CartDropdown/>
                ) : null
            }
           

        </div>
    );
};

const mapStateToProps = ({user: { currentUser }, cart: { isHidden }}) => ({
    currentUser,
    isHidden 
})

export default connect(mapStateToProps) (NavBar);