import {  legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./RootReducer";

const middleWare = [thunk];

if(process.env.NODE_ENV === 'development') {
    middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;