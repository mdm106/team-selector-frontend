import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import initial from "./initial";
import reducer from "./reducer";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const store = createStore(
            reducer,
            initial,
            composeEnhancers(applyMiddleware(thunk))
);

export default store;