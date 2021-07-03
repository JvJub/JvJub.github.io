// Store:
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

// Root Reducer:
import { rootReducer } from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
