import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducer';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  state => state,
  devCompose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
);

store.addReducers({ user: userReducer });

export default store;
