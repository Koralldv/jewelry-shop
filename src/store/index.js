import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {CartReducer} from './CartReducer';



const rootReducer = combineReducers( {
    cart: CartReducer
} )

export const store = createStore(rootReducer, applyMiddleware(thunk));