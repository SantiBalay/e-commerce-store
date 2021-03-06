import React, { Component } from 'react';

import { auth } from './firebase/firebase.utils'
import { createUserProfile } from './firebase/firebase.utils'

import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import './App.css';


import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignIn from './pages/SignInPage/SignInPage';

import NavBar from './components/NavBar/NavBar';

import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelector'
import { createStructuredSelector } from 'reselect'

class App extends Component {


  unSubscribeFromAuth = null

  componentDidMount() { // te odio firebase.

    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfile(user)

        userRef.onSnapshot(snapShot => {
          
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          })
        
      } else {
        setCurrentUser(user)
      }
    }) 
  }

  componentWillUnmount() { 
    this.unsubscribeFromAuth()
  }

  //no le pongo exact a shop porque le voy a agregar categorias

  render() {
      return (
          <div>
            <NavBar/>

            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/> 
              <Route exact path='/checkout' component={CheckoutPage}/>
              <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignIn/>)}/>
            </Switch>

          </div>
        );
    }
}

const mapStateToProps = createStructuredSelector ({ // destructuro user del state que es el reducer
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);


