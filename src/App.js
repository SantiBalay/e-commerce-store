import React, { Component } from 'react';

import { auth } from './firebase/firebase.utils'
import { createUserProfile } from './firebase/firebase.utils'

import { Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignIn from './pages/SignInPage/SignInPage';
import NavBar from './components/NavBar/NavBar';

import { setCurrentUser } from './redux/user/userActions'


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

  render() {
      return (
          <div>
            <NavBar/>

            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route path='/signin' component={SignIn}/>
            </Switch>

          </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps) (App);


