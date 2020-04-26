import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import quiz from "./reducers/quiz";
import question from "./reducers/question";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(combineReducers({ quiz, question }), enhancer);

export default store;
