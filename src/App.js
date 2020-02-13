import React from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignIn from './pages/SignInPage/SignInPage';

import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {
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

export default App;


