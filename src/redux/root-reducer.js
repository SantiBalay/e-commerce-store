import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' //localstorage

import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'
import directorioReducer from './directorio/directorioReducer'
import shopReducer from './shop/shopReducer'


const persistConfig = {
    key: 'root',
    storage, //storage : lo que tenga storage
    whitelist: ['cart'] //los reducers que quiero persistir
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directorio: directorioReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer) //basicamente una version modificada del reducer con el config de la libreria. Orden superior