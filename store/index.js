import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers';

const AppInitialState = {};

export const initStore = (initialState = AppInitialState) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
