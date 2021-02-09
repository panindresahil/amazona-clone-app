import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from "./reducers/productReducer";


const initialState = {};

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;