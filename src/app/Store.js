import { applyMiddleware, combineReducers, compose } from "redux";
import CounterReducer from "./features/Reducer";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from 'redux';

let rootReducers = combineReducers({
    counter: CounterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;