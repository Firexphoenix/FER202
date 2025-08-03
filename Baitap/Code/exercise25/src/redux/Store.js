import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer, cartReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
