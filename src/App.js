import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignIn from './pages/SignInPage/SignInPage';

import { auth } from './firebase/firebase.utils'

import {createUserProfile} from './firebase/firebase.utils'

import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() { // te odio firebase.
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfile(user)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState( {currentUser : user})
      }
    }) 
  }

  componentWillUnmount() { 
    this.unsubscribeFromAuth()
  }

  render() {
      return (
          <div>
            <NavBar currentUser={this.state.currentUser}/>

            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route path='/signin' component={SignIn}/>

            </Switch>
          </div>
        );
    }
}

export default App;


