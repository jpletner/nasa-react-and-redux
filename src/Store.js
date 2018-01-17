import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';

const Store = createStore(
  rootReducer,
  applyMiddleware(promise) // accepts any middleware
);

export default Store;
