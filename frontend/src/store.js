import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';


const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({})

const store = createStore(initialState, reducers, composeEnhancer(applyMiddleware(thunk)));


export default store;