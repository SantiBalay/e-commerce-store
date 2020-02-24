import React from 'react';
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import { connect } from 'react-redux'



import { ReactComponent as HomeLogo} from '../../data/home.svg'

import './NavBar.scss'
import Cart from '../Cart/Cart';
import CartDropdown from '../CartDropdown/CartDropdown';


import { createStructuredSelector} from 'reselect'
import { selectCartIsHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelector'


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

// const mapStateToProps = (state) => ({ esto anda perfecto, pero esta createStructuredSelector que es mas elegante aunque hace lo mismo hasta donde entiendo
//     currentUser : selectCurrentUser(state),
//     isHidden : selectCartIsHidden(state) 
// })

const mapStateToProps = createStructuredSelector({ //le pasa el state automaticamente
        currentUser : selectCurrentUser,
        isHidden : selectCartIsHidden
})



export default connect(mapStateToProps) (NavBar);