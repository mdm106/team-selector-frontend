import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import initial from "./initial";
import reducer from "./reducer";

// set up redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up store
const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;