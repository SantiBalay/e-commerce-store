import React from 'react';

import { Route } from 'react-router-dom'

import './ShopPage.scss'

import ShopPreview from '../../components/ShopPreview/ShopPreview';
import CategoryPage from '../CategoryPage/CategoryPage';

const ShopPage = ({match}) => {
//tengo acceso a match porque este componente lo renderiza un route en app.js, asique lo uso directamente desde props. Osea /shop es el preview y los routes lo nesteo abajo
        return (
          <div className="shop"> 
                <Route exact path={`${match.path}`} component={ShopPreview}/> 
                <Route path={`${match.path}/:category`} component={CategoryPage}/>
          </div>
        )
    }

export default ShopPage;