import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger"; //middleware

import rootReducer from "./root-reducer";

//expecting from redux is array
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
