import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger] 

export const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middlewares)))

//voy a implementar local storage 
export const persistor = persistStore(store) // es una version persistida digamos

export default {store,persistor};